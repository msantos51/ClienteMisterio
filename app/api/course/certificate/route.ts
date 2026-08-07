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

const round2 = (value: number): number => Math.round(value * 100) / 100;

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
 * DESCRIÇÃO DA FUNÇÃO: Traça um retângulo de cantos arredondados, para o emblema da marca e o selo.
 */
const roundedRectPath = (x: number, y: number, w: number, h: number, r: number): string => {
  const k = r * 0.5523;

  return [
    `${x + r} ${y} m`,
    `${x + w - r} ${y} l`,
    `${x + w - r + k} ${y} ${x + w} ${y + r - k} ${x + w} ${y + r} c`,
    `${x + w} ${y + h - r} l`,
    `${x + w} ${y + h - r + k} ${x + w - r + k} ${y + h} ${x + w - r} ${y + h} c`,
    `${x + r} ${y + h} l`,
    `${x + r - k} ${y + h} ${x} ${y + h - r + k} ${x} ${y + h - r} c`,
    `${x} ${y + r} l`,
    `${x} ${y + r - k} ${x + r - k} ${y} ${x + r} ${y} c`,
    "h",
  ].join("\n");
};

// Geometria da marca (public/logo-mark.svg / .logo do cabeçalho do site), num
// quadrado viewBox 0 0 512 512 — mapeada para coordenadas de página (eixo Y
// invertido face ao SVG) a partir de um centro, mantendo as proporções.
const EYE_MARK_BOX = 512;

const svgMarkToPage = (cx: number, cy: number, size: number, svgX: number, svgY: number): [number, number] => {
  const scale = size / EYE_MARK_BOX;
  return [round2(cx - size / 2 + svgX * scale), round2(cy + size / 2 - svgY * scale)];
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Traça o contorno em amêndoa do olho da marca (mesmas curvas do logo-mark.svg).
 */
const eyeMarkPath = (cx: number, cy: number, size: number): string => {
  const curves: Array<[number, number, number, number, number, number]> = [
    [48, 256, 160, 146, 256, 146],
    [352, 146, 464, 256, 464, 256],
    [464, 256, 352, 366, 256, 366],
    [160, 366, 48, 256, 48, 256],
  ];
  const [startX, startY] = svgMarkToPage(cx, cy, size, 48, 256);
  const lines = [`${startX} ${startY} m`];

  for (const [c1x, c1y, c2x, c2y, ex, ey] of curves) {
    const [px1, py1] = svgMarkToPage(cx, cy, size, c1x, c1y);
    const [px2, py2] = svgMarkToPage(cx, cy, size, c2x, c2y);
    const [pex, pey] = svgMarkToPage(cx, cy, size, ex, ey);
    lines.push(`${px1} ${py1} ${px2} ${py2} ${pex} ${pey} c`);
  }

  lines.push("h");
  return lines.join("\n");
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Desenha o emblema completo da marca (quadrado arredondado + olho + pupila),
 * igual ao logótipo do cabeçalho do site — usado no cabeçalho do certificado.
 */
const eyeBadgeOps = (cx: number, cy: number, size: number, badgeColor: string, eyeColor: string, pupilColor: string): string => {
  const scale = size / EYE_MARK_BOX;
  const badgeX = round2(cx - size / 2);
  const badgeY = round2(cy - size / 2);
  const badgeRadius = round2(120 * scale);
  const [irisCx, irisCy] = svgMarkToPage(cx, cy, size, 256, 230);
  const irisRadius = round2(64 * scale);
  const pupilRectX = round2(cx - size / 2 + 222 * scale);
  const pupilRectY = round2(cy - size / 2 + (512 - 270 - 66) * scale);
  const pupilRectSize = round2(68 * scale);
  const pupilRectHeight = round2(66 * scale);
  const pupilRectRadius = round2(20 * scale);

  return [
    "q", `${badgeColor} rg`, roundedRectPath(badgeX, badgeY, size, size, badgeRadius), "f", "Q",
    "q", `${eyeColor} rg`, eyeMarkPath(cx, cy, size), "f", "Q",
    "q", `${pupilColor} rg`, circlePath(irisCx, irisCy, irisRadius), "f", "Q",
    "q", `${pupilColor} rg`, roundedRectPath(pupilRectX, pupilRectY, pupilRectSize, pupilRectHeight, pupilRectRadius), "f", "Q",
  ].join("\n");
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Variante do emblema para caber dentro do selo circular do rodapé — sem
 * quadrado de fundo próprio, porque aí quem faz de fundo é o círculo do selo.
 */
const eyeBadgeInsetOps = (cx: number, cy: number, size: number, eyeColor: string, pupilColor: string): string => {
  const scale = size / EYE_MARK_BOX;
  const [irisCx, irisCy] = svgMarkToPage(cx, cy, size, 256, 230);
  const irisRadius = round2(64 * scale);
  const pupilRectX = round2(cx - size / 2 + 222 * scale);
  const pupilRectY = round2(cy - size / 2 + (512 - 270 - 66) * scale);
  const pupilRectSize = round2(68 * scale);
  const pupilRectHeight = round2(66 * scale);
  const pupilRectRadius = round2(20 * scale);

  return [
    "q", `${eyeColor} rg`, eyeMarkPath(cx, cy, size), "f", "Q",
    "q", `${pupilColor} rg`, circlePath(irisCx, irisCy, irisRadius), "f", "Q",
    "q", `${pupilColor} rg`, roundedRectPath(pupilRectX, pupilRectY, pupilRectSize, pupilRectHeight, pupilRectRadius), "f", "Q",
  ].join("\n");
};

/*
 * DESCRIÇÃO DA FUNÇÃO: Constrói um PDF (1 página, paisagem) com a identidade visual clara do site
 * (painel branco, texto --on-invert, acento --color-red — mesma escala usada em formulários e
 * dashboard), com o emblema real da marca no cabeçalho e num selo de verificação no rodapé.
 */
const buildCertificatePdf = (studentName: string, issueDate: string, certificateCode: string): Uint8Array => {
  const pageWidth = 842;
  const pageHeight = 595;
  const centerX = pageWidth / 2;
  const safeName = encodePdfLatin1Text(studentName.trim() || "Participante");
  const safeDate = encodePdfLatin1Text(issueDate);
  const safeCode = encodePdfLatin1Text(certificateCode);

  const measureCenteredX = (text: string, fontSize: number, widthFactor = 0.5): number => {
    return round2(centerX - (text.length * fontSize * widthFactor) / 2);
  };
  const measureRightX = (rightEdge: number, text: string, fontSize: number, widthFactor = 0.5): number => {
    return round2(rightEdge - text.length * fontSize * widthFactor);
  };

  // Paleta oficial (app/globals.css, escala "on-light" usada em formulários e dashboard):
  // --on-invert, --on-invert-2/3 (texto sobre painéis brancos), --color-red (acento roxo),
  // --surface-brand (roxo profundo do emblema) e --hairline-invert/--line-strong (linhas).
  const ink = "0.078 0.078 0.086"; // --on-invert #141416
  const inkSecondary = "0.302 0.302 0.333"; // --on-invert-2 #4d4d55
  const inkMuted = "0.455 0.455 0.494"; // --on-invert-3 #74747e
  const accent = "0.416 0.290 0.871"; // --color-red #6a4ade
  const brandDeep = "0.353 0.239 0.780"; // --surface-brand #5a3dc7
  const lineStrong = "0.812 0.812 0.835"; // --line-strong #cfcfd5
  const lineLight = "0.906 0.906 0.918"; // --hairline-invert #e7e7ea
  const white = "1 1 1";

  const margin = 40;
  const frameWidth = pageWidth - margin * 2;
  const frameHeight = pageHeight - margin * 2;
  const contentLeft = margin + 24; // 64
  const contentRight = pageWidth - margin - 24; // 778

  const eyebrowText = "CERTIFICADO DE CONCLUSÃO";
  const introText = "Certificamos que";
  const completionText = "concluiu com sucesso o Curso de Cliente Mistério.";
  const noteLineOne = "Este certificado serve exclusivamente como comprovativo de que o formando adquiriu";
  const noteLineTwo = "os conhecimentos necessários para iniciar a atividade enquanto Cliente Mistério.";
  const wordmarkText = "Cliente Mistério";
  const taglineText = "FORMAÇÃO PROFISSIONAL";
  const certLabelText = "CERTIFICADO Nº";
  const dateLabelText = "DATA DE EMISSÃO";
  const signatureNameText = "Direção - Cliente Mistério";
  const verifiedText = "VERIFICADO";
  const finePrintText = "Cliente Mistério  ·  www.clientemisterio.com  ·  certificado emitido eletronicamente";

  // O nome reduz de tamanho quando é comprido — nomes portugueses com vários
  // apelidos são comuns e um tamanho fixo podia ultrapassar a moldura.
  const nameWidthFactor = 0.56;
  const baseNameFontSize = 34;
  const minNameFontSize = 18;
  const maxNameWidth = contentRight - contentLeft - 60;
  const estimatedNameWidth = safeName.length * baseNameFontSize * nameWidthFactor;
  const nameFontSize =
    estimatedNameWidth > maxNameWidth
      ? Math.max(minNameFontSize, round2(maxNameWidth / (safeName.length * nameWidthFactor)))
      : baseNameFontSize;
  const nameUnderlineWidth = Math.min(
    220,
    Math.max(70, safeName.length * nameFontSize * nameWidthFactor * 0.42)
  );

  const wordmarkFontSize = 16;
  const wordmarkWidth = round2(wordmarkText.length * wordmarkFontSize * 0.44);

  // Cantos em "L" (acento de marca) sobrepostos à moldura fina — um toque
  // mais moderno do que uma moldura clássica contínua.
  const cornerLength = 20;
  const cornerBracket = (x: number, y: number, directionX: 1 | -1, directionY: 1 | -1): string =>
    [
      "q", `${brandDeep} RG`, "2.4 w", "1 J",
      `${x} ${y} m ${x + directionX * cornerLength} ${y} l`, "S",
      `${x} ${y} m ${x} ${y + directionY * cornerLength} l`, "S",
      "Q",
    ].join("\n");

  const contentStream = [
    // Fundo branco (painel ".on-light" do site).
    "q", `${white} rg`, `0 0 ${pageWidth} ${pageHeight} re f`, "Q",

    // Marca de água central — silhueta do olho da marca, muito subtil.
    "q", "/GS1 gs", "q", `${brandDeep} rg`, eyeMarkPath(centerX, 205, 380), "f", "Q", "Q",

    // Moldura fina em torno de todo o certificado.
    "q", `${lineStrong} RG`, "1 w", `${margin} ${margin} ${frameWidth} ${frameHeight} re`, "S", "Q",

    // Cantos em destaque (acento de marca).
    cornerBracket(margin, margin + frameHeight, 1, -1),
    cornerBracket(margin + frameWidth, margin + frameHeight, -1, -1),
    cornerBracket(margin, margin, 1, 1),
    cornerBracket(margin + frameWidth, margin, -1, 1),

    // Divisores sob o cabeçalho e sobre o rodapé.
    `q ${lineLight} RG 1 w ${contentLeft} 480 m ${contentRight} 480 l S Q`,
    `q ${lineLight} RG 1 w ${contentLeft} 140 m ${contentRight} 140 l S Q`,

    // Emblema + wordmark (cabeçalho, esquerda) — mesma composição do
    // cabeçalho do site (logo-mark.svg + "Cliente Mistério" + "." em acento).
    eyeBadgeOps(contentLeft + 18, 513, 36, brandDeep, white, brandDeep),
    "BT", `/F2 ${wordmarkFontSize} Tf`, `${ink} rg`, `${contentLeft + 46} 518 Td`, `(${encodePdfLatin1Text(wordmarkText)}) Tj`, "ET",
    "BT", `/F2 ${wordmarkFontSize} Tf`, `${accent} rg`, `${contentLeft + 46 + wordmarkWidth} 518 Td`, "(.) Tj", "ET",
    "q", "BT", "/F1 8 Tf", `${inkMuted} rg`, "1.6 Tc", `${contentLeft + 46} 503 Td`, `(${encodePdfLatin1Text(taglineText)}) Tj`, "ET", "Q",

    // Número do certificado (cabeçalho, direita).
    "q", "BT", "/F1 7.5 Tf", `${inkMuted} rg`, "1.2 Tc",
    `${measureRightX(contentRight, certLabelText, 7.5, 0.58)} 521 Td`, `(${encodePdfLatin1Text(certLabelText)}) Tj`, "ET", "Q",
    "BT", "/F2 11 Tf", `${ink} rg`, `${measureRightX(contentRight, safeCode, 11, 0.56)} 505 Td`, `(${safeCode}) Tj`, "ET",

    // Eyebrow tracejado, no estilo do site (ver .eyebrow em app/page.module.css).
    "q", "BT", "/F2 12 Tf", `${accent} rg`, "2.4 Tc",
    `${measureCenteredX(eyebrowText, 12, 0.62)} 452 Td`, `(${encodePdfLatin1Text(eyebrowText)}) Tj`, "ET", "Q",

    // Introdução, nome (com sublinhado de acento) e frase de conclusão.
    "BT", "/F1 13 Tf", `${inkSecondary} rg`, `${measureCenteredX(introText, 13, 0.5)} 420 Td`, `(${encodePdfLatin1Text(introText)}) Tj`, "ET",
    "BT", `/F2 ${nameFontSize} Tf`, `${ink} rg`, `${measureCenteredX(safeName, nameFontSize, 0.56)} 362 Td`, `(${safeName}) Tj`, "ET",
    `q ${accent} rg ${round2(centerX - nameUnderlineWidth / 2)} 350 ${round2(nameUnderlineWidth)} 2.6 re f Q`,
    "BT", "/F1 13.5 Tf", `${inkSecondary} rg`, `${measureCenteredX(completionText, 13.5, 0.5)} 318 Td`, `(${encodePdfLatin1Text(completionText)}) Tj`, "ET",

    // Notas de enquadramento do certificado.
    "BT", "/F1 10 Tf", `${inkMuted} rg`, `${measureCenteredX(noteLineOne, 10, 0.5)} 286 Td`, `(${encodePdfLatin1Text(noteLineOne)}) Tj`, "ET",
    "BT", "/F1 10 Tf", `${inkMuted} rg`, `${measureCenteredX(noteLineTwo, 10, 0.5)} 270 Td`, `(${encodePdfLatin1Text(noteLineTwo)}) Tj`, "ET",

    // Rodapé — data de emissão (esquerda).
    "q", "BT", "/F1 7.5 Tf", `${inkMuted} rg`, "1.2 Tc", `${contentLeft} 118 Td`, `(${encodePdfLatin1Text(dateLabelText)}) Tj`, "ET", "Q",
    "BT", "/F2 11.5 Tf", `${ink} rg`, `${contentLeft} 103 Td`, `(${safeDate}) Tj`, "ET",

    // Rodapé — bloco de assinatura (direita).
    `q ${lineStrong} RG 1 w ${contentRight - 150} 116 m ${contentRight} 116 l S Q`,
    "BT", "/F2 10.5 Tf", `${ink} rg`, `${measureRightX(contentRight, signatureNameText, 10.5, 0.5)} 100 Td`, `(${encodePdfLatin1Text(signatureNameText)}) Tj`, "ET",

    // Selo de verificação, centrado sobre o divisor do rodapé.
    "q", `${accent} RG`, "1.4 w", circlePath(centerX, 140, 27), "S", "Q",
    "q", `${brandDeep} rg`, circlePath(centerX, 140, 24), "f", "Q",
    eyeBadgeInsetOps(centerX, 140, 40, white, brandDeep),
    "q", "BT", "/F2 7 Tf", `${inkMuted} rg`, "1.2 Tc",
    `${measureCenteredX(verifiedText, 7, 0.62)} 98 Td`, `(${encodePdfLatin1Text(verifiedText)}) Tj`, "ET", "Q",

    // Rodapé final — nota pequena centrada.
    "q", "BT", "/F1 8 Tf", `${inkMuted} rg`, "0.4 Tc",
    `${measureCenteredX(finePrintText, 8, 0.5)} 70 Td`, `(${encodePdfLatin1Text(finePrintText)}) Tj`, "ET", "Q",
  ].join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Count 1 /Kids [3 0 R] >>\nendobj\n",
    `3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> /ExtGState << /GS1 7 0 R >> >> /Contents 6 0 R >>\nendobj\n`,
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>\nendobj\n",
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>\nendobj\n",
    `6 0 obj\n<< /Length ${Buffer.byteLength(contentStream, "latin1")} >>\nstream\n${contentStream}\nendstream\nendobj\n`,
    // Estado gráfico com opacidade reduzida, usado só na marca de água.
    "7 0 obj\n<< /Type /ExtGState /ca 0.045 /CA 0.045 >>\nendobj\n",
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

  const now = new Date();
  const issueDate = new Intl.DateTimeFormat("pt-PT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(now);

  // Número de certificado curto e determinístico (data + excerto do id do
  // utilizador) — só para referência visual, não é uma chave de verificação.
  const compactIssueDate = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate()
  ).padStart(2, "0")}`;
  const userIdFragment = session.userId.replace(/-/g, "").slice(0, 6).toUpperCase();
  const certificateCode = `CM-${compactIssueDate}-${userIdFragment}`;

  const pdf = buildCertificatePdf(userName, issueDate, certificateCode);
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
