/*
 * DESCRIÇÃO DO FICHEIRO: Este ficheiro implementa a lógica de `app/contact/page.tsx` no projeto, incluindo as responsabilidades principais desta unidade.
 */

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
        credentials: "include",
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
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-3 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-teal-500"></span>
            <span className="text-label">Contacto</span>
          </div>

          <div>
            <h1 className="h1">Fala connosco</h1>
            <p className="mt-3 text-body-sm">
              Tens dúvidas sobre o curso, o certificado ou o processo de pagamento? Estamos aqui para ajudar.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="h5">Entre em contacto</h2>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold">Email</p>
                  <a href="mailto:email@clientemisterio.pt" className="text-body-sm text-gray-600 hover:text-teal-600">
                    email@clientemisterio.pt
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.418 1.265 1.215 2.807 2.453 4.045 1.238 1.238 2.78 2.035 4.045 2.453l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-6.607 0-12-5.393-12-12V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold">Telefone</p>
                  <a href="tel:+351912345678" className="text-body-sm text-gray-600 hover:text-teal-600">
                    +351 91 234 5678
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100">
                  <svg className="h-4 w-4 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-body-sm font-semibold">Morada</p>
                  <p className="text-body-sm text-gray-600">
                    Rua da Inovação, 10<br />
                    1900-001 Lisboa, Portugal
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="flex items-center gap-2 rounded-full bg-teal-50 px-4 py-3">
              <div className="h-2 w-2 rounded-full bg-teal-500"></div>
              <p className="text-label">Respondemos em até 2 dias úteis</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-sm">
            <h2 className="mb-6 h5">Envia-nos uma mensagem</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="input-group">
                  <input
                    name="name"
                    onChange={(event) => handleFieldChange("name", event.target.value)}
                    placeholder="O seu nome"
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
                    placeholder="nome@exemplo.com"
                    required
                    type="email"
                    value={formData.email}
                  />
                  <span className="label">E-mail</span>
                </div>
              </div>

              {/* Subject */}
              <div className="input-group">
                <input
                  name="subject"
                  onChange={(event) => handleFieldChange("subject", event.target.value)}
                  placeholder="Seleciona um assunto"
                  required
                  type="text"
                  value={formData.subject}
                />
                <span className="label">Assunto</span>
              </div>

              {/* Message */}
              <div className="input-group">
                <textarea
                  name="message"
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  placeholder="Descreve a tua questão com o máximo de detalhe possível."
                  required
                  value={formData.message}
                />
                <span className="label">Mensagem</span>
              </div>

              {/* Status Message */}
              {statusMessage ? (
                <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
                  <p className="text-body-sm text-teal-900">{statusMessage}</p>
                  {statusReference ? (
                    <p className="mt-2 text-body-xs text-teal-700">
                      Referência: <span className="font-semibold">{statusReference}</span>
                    </p>
                  ) : null}
                </div>
              ) : null}

              {/* Submit Button */}
              <button
                className="submit w-full"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "A enviar..." : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
