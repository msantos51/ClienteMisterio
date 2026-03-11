"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactApiResponse = {
  message?: string;
  reference?: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusReference, setStatusReference] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: keyof FormData, value: string) => {
    // Atualiza apenas o campo alterado, mantendo o restante estado intacto.
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusReference("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ContactApiResponse;
      setStatusReference(data.reference || "");
      setStatusMessage(data.message || "Não foi possível enviar a sua mensagem.");

      if (response.ok) {
        setFormData(initialFormData);
      }
    } catch {
      setStatusMessage("Erro de ligação. Tente novamente dentro de alguns instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="space-y-8">
      <div className="mx-auto flex w-full max-w-5xl justify-center">
        <article className="login-form max-w-[620px]">
          <h1 className="form-heading">Contacto</h1>
          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="name"
                onChange={(event) => handleFieldChange("name", event.target.value)}
                placeholder="Digite o seu nome"
                required
                type="text"
                value={formData.name}
              />
              <span className="label">Nome</span>
            </div>

            <div className="input-group">
              <input
                name="email"
                onChange={(event) => handleFieldChange("email", event.target.value)}
                placeholder="voce@email.com"
                required
                type="email"
                value={formData.email}
              />
              <span className="label">E-mail</span>
            </div>

            <div className="input-group md:col-span-2">
              <input
                name="subject"
                onChange={(event) => handleFieldChange("subject", event.target.value)}
                placeholder="Ex.: parceria, suporte, imprensa"
                required
                type="text"
                value={formData.subject}
              />
              <span className="label">Assunto</span>
            </div>

            <div className="input-group md:col-span-2">
              <textarea
                name="message"
                onChange={(event) => handleFieldChange("message", event.target.value)}
                placeholder="Escreva a sua mensagem"
                required
                value={formData.message}
              />
              <span className="label">Mensagem</span>
            </div>

            {statusMessage ? (
              <div className="form-feedback md:col-span-2">
                <p>{statusMessage}</p>
                {statusReference ? (
                  <p className="mt-1 text-xs">
                    Referência da mensagem: <span className="font-semibold">{statusReference}</span>
                  </p>
                ) : null}
              </div>
            ) : null}

            <div className="md:col-span-2 mt-2 space-y-3">
              <button className="submit" disabled={isSubmitting} type="submit">
                {isSubmitting ? "A enviar..." : "Enviar mensagem"}
              </button>
              <p className="text-center text-xs">Responderemos em até 2 dias úteis.</p>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
}
