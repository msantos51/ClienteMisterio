/*
 * DESCRIÇÃO DO FICHEIRO: Campo de formulário reutilizável (Fase 0, ponto
 * 6): label ligado por `htmlFor`/`id`, sem repetir essa amarração em
 * cada página. As classes visuais continuam a vir de fora (cada
 * formulário mantém o seu próprio CSS Module) — este componente só fixa
 * a estrutura e a acessibilidade.
 */

import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  /** Mensagem de erro (validação em tempo real, no blur). Quando presente,
   * liga `aria-invalid`/`aria-describedby` ao campo — Fase 5, ponto 46. */
  error?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  controlClassName?: string;
  errorClassName?: string;
};

type InputProps = BaseProps &
  Pick<InputHTMLAttributes<HTMLInputElement>, "type" | "placeholder" | "required" | "autoComplete" | "inputMode"> & {
    as?: "input";
  };

type TextareaProps = BaseProps &
  Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder" | "required"> & {
    as: "textarea";
  };

export default function Field(props: InputProps | TextareaProps) {
  const { id, name, label, value, onChange, onBlur, error, wrapperClassName, labelClassName, controlClassName, errorClassName } = props;
  const errorId = `${id}-error`;

  return (
    <div className={wrapperClassName}>
      <label className={labelClassName} htmlFor={id}>
        {label}
      </label>
      {props.as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          className={controlClassName}
          placeholder={props.placeholder}
          required={props.required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={props.type ?? "text"}
          inputMode={props.inputMode}
          autoComplete={props.autoComplete}
          className={controlClassName}
          placeholder={props.placeholder}
          required={props.required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
        />
      )}
      {error && (
        <p id={errorId} className={errorClassName} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
