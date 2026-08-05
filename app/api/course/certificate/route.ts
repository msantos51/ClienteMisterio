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
 * DESCRIÇÃO DA FUNÇÃO: Normaliza texto para ASCII básico para uso em nomes de ficheiro (headers HTTP).
 */
const normalizeAsciiFileName = (value: string): string => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\x20-\x7E]/g, "")
    .trim();
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Converte texto Unicode para bytes Latin-1 compatíveis com fontes Type1 standard no PDF.
 */
const encodePdfLatin1Text = (value: string): string => {
  const latin1Value = value.normalize("NFC").replace(/[^\u0000-\u00FF]/g, "");

  return latin1Value
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Traça um círculo (via 4 curvas de Bézier) para uso em selos/badges do certificado.
 */
const circlePath = (cx: number, cy: number, r: number): string => {
  const k = r * 0.5523;

  return [
    `${cx + r} ${cy} m`,
    `${cx + r} ${cy + k} ${cx + k} ${cy + r} ${cx} ${cy + r} c`,
    `${cx - k} ${cy + r} ${cx - r} ${cy + k} ${cx - r} ${cy} c`,
    `${cx - r} ${cy - k} ${cx - k} ${cy - r} ${cx} ${cy - r} c`,
    `${cx + k} ${cy - r} ${cx + r} ${cy - k} ${cx + r} ${cy} c`,
    "h",
  ].join("\n");
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Constrói um PDF simples (1 página) com a identidade visual do site
 * (roxo --surface-brand, acento --color-red e preto --color-black de app/globals.css).
 */
const buildCertificatePdf = (studentName: string, issueDate: string): Uint8Array => {
  const pageWidth = 842;
  const pageHeight = 595;
  const centerX = pageWidth / 2;
  const margin = 28;
  const safeName = encodePdfLatin1Text(studentName.trim() || "Participante");
  const safeDate = encodePdfLatin1Text(issueDate);
  const measureCenteredX = (text: string, fontSize: number, widthFactor = 0.5): number => {
    return centerX - (text.length * fontSize * widthFactor) / 2;
  };

  // Paleta oficial (app/globals.css): --surface-brand, --surface-brand-alt, --color-red (acento),
  // --color-black, --on-brand-2/3 (texto claro sobre roxo) e --on-invert-2/3 (texto sobre branco).
  const brand = "0.353 0.239 0.780"; // #5a3dc7
  const accent = "0.416 0.290 0.871"; // #6a4ade
  const ink = "0.063 0.063 0.071"; // #101012
  const inkSecondary = "0.302 0.302 0.333"; // #4d4d55
  const inkMuted = "0.455 0.455 0.494"; // #74747e
  const onBrandSoft = "0.871 0.851 0.969"; // #ded9f7
  const onBrandFaint = "0.937 0.922 0.992"; // #efebfd
  const lineStrong = "0.812 0.812 0.835"; // #cfcfd5
  const white = "1 1 1";

  const titleText = "CERTIFICADO DE CONCLUSÃO";
  const subtitleText = "CLIENTE MISTERIO - FORMACAO PROFISSIONAL";
  const introText = "Certificamos que";
  const completionText = "concluiu com sucesso o Curso de Cliente Mistério.";
  const noteLineOne = "Este certificado serve exclusivamente como comprovativo de que o formando adquiriu";
  const noteLineTwo = "os conhecimentos necessários para iniciar a atividade enquanto Cliente Mistério.";
  const issueDateText = `Data de emissão: ${safeDate}`;
  const websiteText = "www.clientemisterio.com";
  const sealText = "CM";

  const topBarY = pageHeight - margin - 70; // 497
  const accentLineY = topBarY - 4; // 493
  const footerBarHeight = 26;
  const sealCx = pageWidth - margin - 92;
  const sealCy = 170;

  const contentStream = [
    // Fundo branco (painel ".on-light" do site).
    "q",
    `${white} rg`,
    `0 0 ${pageWidth} ${pageHeight} re f`,
    "Q",

    // Barra de topo — --surface-brand.
    "q",
    `${brand} rg`,
    `${margin} ${topBarY} ${pageWidth - margin * 2} 70 re f`,
    "Q",

    // Linha de acento — --color-red (#6a4ade) sob a barra de topo.
    "q",
    `${accent} rg`,
    `${margin} ${accentLineY} ${pageWidth - margin * 2} 4 re f`,
    "Q",

    // Barra de rodapé — --color-black, igual ao rodapé do site.
    "q",
    `${ink} rg`,
    `${margin} ${margin} ${pageWidth - margin * 2} ${footerBarHeight} re f`,
    "Q",

    // Selo circular — anel em --surface-brand, miolo em --color-red.
    "q",
    `${brand} RG`,
    "2 w",
    circlePath(sealCx, sealCy, 40),
    "S",
    "Q",
    "q",
    `${accent} rg`,
    circlePath(sealCx, sealCy, 34),
    "f",
    "Q",

    // Moldura fina em torno de todo o certificado.
    "q",
    `${lineStrong} RG`,
    "1.2 w",
    `${margin} ${margin} ${pageWidth - margin * 2} ${pageHeight - margin * 2} re`,
    "S",
    "Q",

    // Título, na barra de topo.
    "BT",
    "/F2 21 Tf",
    `${white} rg`,
    `${measureCenteredX(titleText, 21, 0.56)} ${topBarY + 40} Td`,
    `(${encodePdfLatin1Text(titleText)}) Tj`,
    "ET",
    "BT",
    "/F1 9 Tf",
    `${onBrandFaint} rg`,
    `${measureCenteredX(subtitleText, 9, 0.52)} ${topBarY + 20} Td`,
    `(${encodePdfLatin1Text(subtitleText)}) Tj`,
    "ET",

    // Corpo — introdução, nome e texto de conclusão.
    "BT",
    "/F1 14 Tf",
    `${inkSecondary} rg`,
    `${measureCenteredX(introText, 14, 0.5)} 440 Td`,
    `(${encodePdfLatin1Text(introText)}) Tj`,
    "ET",
    "BT",
    "/F2 34 Tf",
    `${ink} rg`,
    `${measureCenteredX(safeName, 34, 0.56)} 385 Td`,
    `(${safeName}) Tj`,
    "ET",

    // Sublinhado de acento sob o nome.
    "q",
    `${accent} rg`,
    `${centerX - 130} 372 260 3 re f`,
    "Q",

    "BT",
    "/F1 14 Tf",
    `${inkSecondary} rg`,
    `${measureCenteredX(completionText, 14, 0.5)} 335 Td`,
    `(${encodePdfLatin1Text(completionText)}) Tj`,
    "ET",
    "BT",
    "/F1 10.5 Tf",
    `${inkMuted} rg`,
    `${measureCenteredX(noteLineOne, 10.5, 0.5)} 290 Td`,
    `(${encodePdfLatin1Text(noteLineOne)}) Tj`,
    "ET",
    "BT",
    "/F1 10.5 Tf",
    `${inkMuted} rg`,
    `${measureCenteredX(noteLineTwo, 10.5, 0.5)} 274 Td`,
    `(${encodePdfLatin1Text(noteLineTwo)}) Tj`,
    "ET",

    // Selo — texto pequeno "OK" ao centro do círculo.
    "BT",
    "/F2 13 Tf",
    `${white} rg`,
    `${sealCx - 11} ${sealCy - 5} Td`,
    `(${sealText}) Tj`,
    "ET",
    "BT",
    "/F1 8 Tf",
    `${inkMuted} rg`,
    `${sealCx - 20} ${sealCy - 54} Td`,
    "(Verificado) Tj",
    "ET",

    // Rodapé — data de emissão e site, sobre a barra preta.
    "BT",
    "/F1 10 Tf",
    `${onBrandSoft} rg`,
    `${margin + 16} ${margin + 9} Td`,
    `(${issueDateText}) Tj`,
    "ET",
    "BT",
    "/F1 10 Tf",
    `${white} rg`,
    `${pageWidth - margin - 16 - websiteText.length * 10 * 0.5} ${margin + 9} Td`,
    `(${encodePdfLatin1Text(websiteText)}) Tj`,
    "ET",
  ].join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n",
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n",
    `6 0 obj\n<< /Length ${Buffer.byteLength(contentStream, "latin1")} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
  ];

  let pdf = "%PDF-1.4\n";
  const xrefPositions: number[] = [0];

  for (const object of objects) {
    xrefPositions.push(Buffer.byteLength(pdf, "latin1"));
    pdf += object;
  }

  const xrefStart = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let index = 1; index < xrefPositions.length; index += 1) {
    pdf += `${xrefPositions[index].toString().padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return new Uint8Array(Buffer.from(pdf, "latin1"));
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
  const fileSafeName = normalizeAsciiFileName(userName).replace(/\s+/g, "_") || "participante";

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
