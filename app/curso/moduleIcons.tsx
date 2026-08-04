/*
 * DESCRIÇÃO DO FICHEIRO: Ícones ilustrativos por módulo, usados no cabeçalho do leitor
 * para dar contexto visual imediato ao tema de cada módulo.
 */

import React from "react";

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const moduleIcons: Record<number, React.ReactNode> = {
  1: (
    <svg {...iconProps}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  2: (
    <svg {...iconProps}>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  3: (
    <svg {...iconProps}>
      <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  4: (
    <svg {...iconProps}>
      <path d="M12 3v18" />
      <path d="M7 7h10" />
      <path d="M4 7 2 12a2 2 0 0 0 4 0Z" />
      <path d="M20 7l-2 5a2 2 0 0 0 4 0Z" />
    </svg>
  ),
  5: (
    <svg {...iconProps}>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3h6a1 1 0 0 1 1 1v1H8V4a1 1 0 0 1 1-1Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  6: (
    <svg {...iconProps}>
      <path d="M15 5.5a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z" />
      <path d="m9 21 2-6-2-2 1-5 4 3 3 1" />
      <path d="m5 21 2-4 3-2" />
    </svg>
  ),
  7: (
    <svg {...iconProps}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.2" />
    </svg>
  ),
  8: (
    <svg {...iconProps}>
      <path d="M7 3h8l4 4v14H7Z" />
      <path d="M15 3v4h4" />
      <path d="M9.5 12.5h5" />
      <path d="M9.5 16h5" />
    </svg>
  ),
  9: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9 8.5c0-1 1-1.5 3-1.5s3 .8 3 1.8-1 1.4-3 1.7-3 .8-3 1.9 1 1.6 3 1.6 3-.5 3-1.5" />
    </svg>
  ),
  10: (
    <svg {...iconProps}>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="m8 14 2.5 2.5L16 12" />
    </svg>
  ),
  11: (
    <svg {...iconProps}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </svg>
  ),
};

export function getModuleIcon(moduleId: number): React.ReactNode {
  return moduleIcons[moduleId] ?? moduleIcons[1];
}
