import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PlanCard, type Plan } from "@/components/site/PlanCard";
import { CTA } from "@/components/site/CTA";
import { Smartphone, MessageCircle, Phone, Globe } from "lucide-react";

export const Route = createFileRoute("/movel")({
  head: () => ({
    meta: [
      { title: "Portal Itaipu Móvel — Internet móvel com a melhor cobertura" },
      {
        name: "description",
        content:
          "Planos móveis com WhatsApp ilimitado, cobertura nacional e ligações ilimitadas. A partir de R$ 49,90 — assinantes Portal Itaipu ganham desconto.",
      },
      { property: "og:title", content: "Portal Itaipu Móvel" },
      {
        property: "og:description",
        content: "A internet móvel com a melhor cobertura do país.",
      },
    ],
  }),
  component: Page,
});

const novos: Plan[] = [
  {
    name: "8 GB",
    price: "49,90",
    speed: "8 GB",
    features: ["WhatsApp ilimitado", "Cobertura nacional", "60 SMS", "60 min de ligações"],
  },
  {
    name: "12 GB",
    price: "55,90",
    speed: "12 GB",
    features: ["WhatsApp ilimitado", "Cobertura nacional", "60 SMS", "Ligações ilimitadas"],
    highlight: true,
  },
  {
    name: "19 GB",
    price: "59,90",
    speed: "19 GB",
    features: ["WhatsApp ilimitado", "Cobertura nacional", "100 SMS", "Ligações ilimitadas"],
  },
];

const assinantes: Plan[] = [
  {
    name: "8 GB — Assinante",
    price: "29,90",
    speed: "8 GB",
    features: ["WhatsApp ilimitado", "Cobertura nacional", "60 SMS", "60 min de ligações"],
  },
  {
    name: "12 GB — Assinante",
    price: "39,90",
    speed: "12 GB",
    features: ["WhatsApp ilimitado", "Cobertura nacional", "60 SMS", "Ligações ilimitadas"],
    highlight: true,
  },
  {
    name: "19 GB — Assinante",
    price: "49,90",
    speed: "19 GB",
    features: ["WhatsApp ilimitado", "Cobertura nacional", "100 SMS", "Ligações ilimitadas"],
  },
];

const perks = [
  { icon: Globe, t: "Cobertura nacional", d: "Use seu chip em todo o Brasil sem se preocupar." },
  { icon: MessageCircle, t: "WhatsApp ilimitado", d: "Mensagens, áudios e ligações pelo Zap sem gastar do pacote." },
  { icon: Phone, t: "Ligações ilimitadas", d: "Disponível nos planos 12 GB e 19 GB." },
  { icon: Smartphone, t: "Desconto p/ assinantes", d: "Já é cliente Portal Itaipu? Pague metade do preço." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portal Itaipu Móvel"
        title="A internet móvel com a"
        highlight="melhor cobertura do país."
        description="Planos completos com WhatsApp ilimitado e cobertura nacional. Já é assinante da Portal Itaipu? Garante desconto exclusivo no seu chip."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-surface-elevated border border-border p-5">
              <Icon className="h-5 w-5 text-primary" />
              <div className="mt-3 font-display font-bold">{t}</div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Planos <span className="text-gradient-brand">para todos</span>
            </h2>
            <span className="text-sm text-muted-foreground">Preço cheio</span>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {novos.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Exclusivo
              </div>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold tracking-tight">
                Já é assinante? <span className="text-gradient-brand">Ganha desconto.</span>
              </h2>
            </div>
            <span className="text-sm text-muted-foreground">Preço com desconto</span>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {assinantes.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground max-w-2xl">
            *Oferta promocional limitada a 1 chip por contrato de Fibra. Chips adicionais
            serão cobrados no valor padrão.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
