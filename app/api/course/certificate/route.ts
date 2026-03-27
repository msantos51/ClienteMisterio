/*
 * DESCRIÇÃO DO FICHEIRO: API para gerar o Certificado de Conclusão em PDF com o nome do utilizador autenticado.
 */

import { NextResponse } from "next/server";

import { query } from "@/lib/database";
import { hasUserCourseAccess } from "@/lib/courseAccess";
import { getSession } from "@/lib/session";

type UserRow = {
  full_name: string;
};

type CompletionRow = {
  completed_count: string;
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Escapa caracteres especiais para evitar quebra de sintaxe dentro de objetos de texto PDF.
 */
const escapePdfText = (value: string): string => {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\r?\n/g, " ");
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Normaliza texto para ASCII básico para garantir compatibilidade com fonte standard do PDF.
 */
const normalizeAscii = (value: string): string => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Constrói um PDF simples (1 página) com identidade visual da plataforma.
 */
const buildCertificatePdf = (studentName: string, issueDate: string): Uint8Array => {
  const safeName = escapePdfText(normalizeAscii(studentName) || "Participante");
  const safeDate = escapePdfText(issueDate);

  const contentStream = [
    "q",
    "1 1 1 rg",
    "0 0 842 595 re f",
    "Q",
    "q",
    "0.9647 0.4078 0.3373 rg",
    "36 540 770 24 re f",
    "Q",
    "q",
    "0.8314 0.7098 0.6275 rg",
    "36 28 770 16 re f",
    "Q",
    "BT",
    "/F2 20 Tf",
    "0.9647 0.4078 0.3373 rg",
    "210 500 Td",
    "(CERTIFICADO DE CONCLUSAO) Tj",
    "ET",
    "BT",
    "/F1 15 Tf",
    "0.1647 0.1647 0.1647 rg",
    "120 455 Td",
    "(Certificamos que) Tj",
    "ET",
    "BT",
    "/F2 34 Tf",
    "0.1647 0.1647 0.1647 rg",
    "120 405 Td",
    `(${safeName}) Tj`,
    "ET",
    "BT",
    "/F1 15 Tf",
    "0.1647 0.1647 0.1647 rg",
    "120 360 Td",
    "(concluiu com sucesso o Curso de Cliente Misterio.) Tj",
    "ET",
    "BT",
    "/F1 12 Tf",
    "0.4 0.4 0.4 rg",
    "120 320 Td",
    `(Data de emissao: ${safeDate}) Tj`,
    "ET",
    "BT",
    "/F1 12 Tf",
    "0.4 0.4 0.4 rg",
    "120 110 Td",
    "(Cliente Misterio  Plataforma Oficial) Tj",
    "ET",
  ].join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
    `6 0 obj\n<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
  ];

  let pdf = "%PDF-1.4\n";
  const xrefPositions: number[] = [0];

  for (const object of objects) {
    xrefPositions.push(Buffer.byteLength(pdf, "utf8"));
    pdf += object;
  }

  const xrefStart = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let index = 1; index < xrefPositions.length; index += 1) {
    pdf += `${xrefPositions[index].toString().padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Uint8Array(Buffer.from(pdf, "utf8"));
};

export const GET = async () => {
  // Valida sessão ativa para garantir emissão do certificado apenas ao utilizador autenticado.
  const session = await getSession();

  if (!session?.userId) {
    return NextResponse.json({ message: "É necessário iniciar sessão." }, { status: 401 });
  }

  // Reforça regra de negócio: apenas alunos com acesso ao curso podem gerar certificado.
  const hasCourse = await hasUserCourseAccess(session.userId);

  if (!hasCourse) {
    return NextResponse.json(
      { message: "É necessário concluir o pagamento para aceder ao certificado." },
      { status: 403 }
    );
  }

  // Garante que os módulos de formação (1 a 10) foram concluídos antes da emissão final.
  const completionResult = await query<CompletionRow>(
    "select count(*) as completed_count from course_progress where user_id = $1 and completed = true and module_id between 1 and 10",
    [session.userId]
  );

  const completedModules = parseInt(completionResult.rows[0]?.completed_count ?? "0", 10);

  if (completedModules < 10) {
    return NextResponse.json(
      { message: "Conclua os módulos 1 a 10 para desbloquear o certificado." },
      { status: 403 }
    );
  }

  // Carrega o nome completo do aluno para personalizar o PDF.
  const userResult = await query<UserRow>("select full_name from users where id = $1", [session.userId]);
  const userName = userResult.rows[0]?.full_name?.trim() || "Participante";

  const issueDate = new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  const pdf = buildCertificatePdf(userName, issueDate);
  const fileSafeName = normalizeAscii(userName).replace(/\s+/g, "_") || "participante";

  // Cria uma cópia explícita em ArrayBuffer para cumprir o tipo BodyInit esperado pelo Next.js 16.
  const pdfBinary = new Uint8Array(pdf.byteLength);
  pdfBinary.set(pdf);

  // Converte para Blob para enviar o ficheiro PDF com Content-Type correto.
  const pdfBlob = new Blob([pdfBinary], { type: "application/pdf" });

  return new NextResponse(pdfBlob, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename=certificado_${fileSafeName}.pdf`,
      "Cache-Control": "no-store",
    },
  });
};
