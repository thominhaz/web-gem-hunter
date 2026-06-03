import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Gift, UserPlus, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/amizade-turbinada")({
  head: () => ({
    meta: [
      { title: "Amizade Turbinada — Indique e ganhe uma mensalidade grátis" },
      {
        name: "description",
        content:
          "Indique seus amigos para a Portal Itaipu e ganhe uma mensalidade grátis. Programa de recompensas exclusivo para clientes.",
      },
      { property: "og:title", content: "Amizade Turbinada — Portal Itaipu" },
      {
        property: "og:description",
        content: "Ele assina, você ganha. Indique amigos e ganhe mensalidade grátis.",
      },
    ],
  }),
  component: Page,
});

const steps = [
  { icon: UserPlus, t: "Você indica", d: "Preencha o formulário com seus dados e os do seu amigo." },
  { icon: Sparkles, t: "Ele assina", d: "Entramos em contato com a indicação para fechar o plano." },
  { icon: Gift, t: "Você ganha", d: "Sua próxima mensalidade vai por nossa conta!" },
];

function Page() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = `Olá! Quero participar do Amizade Turbinada.%0A%0A*Meus dados*%0ANome: ${fd.get("nome")}%0ATelefone: ${fd.get("telefone")}%0ACPF: ${fd.get("cpf")}%0ACidade: ${fd.get("cidade")}%0A%0A*Indicação*%0ANome: ${fd.get("amigoNome")}%0ATelefone: ${fd.get("amigoTelefone")}%0ACPF: ${fd.get("amigoCpf")}%0ACidade: ${fd.get("amigoCidade")}`;
    window.open(`https://wa.me/554535591665?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageHero variant="magenta"
        eyebrow="Programa de indicação"
        title="Indique seus amigos e ganhe"
        highlight="uma mensalidade grátis."
        description="Já é cliente Portal Itaipu? Indique também para seus amigos e amigas — quando eles assinarem, sua próxima mensalidade vai por nossa conta."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, t, d }, i) => (
            <div key={t} className="relative rounded-3xl bg-surface-elevated border border-border p-7">
              <div className="absolute top-5 right-5 font-display text-5xl font-bold text-muted/40">
                0{i + 1}
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-5 font-display text-xl font-bold">{t}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="rounded-3xl border border-border bg-surface-elevated p-8 md:p-12 shadow-card">
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Enviar indicação
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha os campos e enviamos sua indicação direto pelo WhatsApp.
            </p>

            {sent && (
              <div className="mt-6 rounded-2xl bg-primary/10 border border-primary/20 p-4 flex items-start gap-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-semibold">Indicação enviada!</div>
                  <div className="text-muted-foreground">
                    Conclua o envio na janela do WhatsApp que abrimos.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-8">
              <fieldset className="space-y-3">
                <legend className="font-display font-bold mb-2">Seus dados</legend>
                <Field name="nome" label="Seu nome completo" required />
                <Field name="telefone" label="Telefone" type="tel" required />
                <Field name="cpf" label="CPF" required />
                <Field name="cidade" label="Cidade" required />
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="font-display font-bold mb-2">Dados do amigo(a)</legend>
                <Field name="amigoNome" label="Nome completo" required />
                <Field name="amigoTelefone" label="Telefone" type="tel" required />
                <Field name="amigoCpf" label="CPF" required />
                <Field name="amigoCidade" label="Cidade" required />
              </fieldset>

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:items-center justify-between pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground max-w-md">
                  Ao enviar, você concorda com o regulamento do programa.
                  Sua indicação é validada após a assinatura do amigo.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
                >
                  Enviar indicação
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Leia o regulamento:</span>{" "}
            o programa é válido apenas para clientes ativos da Portal Itaipu. A mensalidade
            gratuita é creditada após a confirmação da nova assinatura do amigo indicado.
            Sujeito a condições e prazos.
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-background border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </label>
  );
}
