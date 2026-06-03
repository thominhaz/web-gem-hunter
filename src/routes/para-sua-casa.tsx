import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PlanCard, type Plan } from "@/components/site/PlanCard";
import { CTA } from "@/components/site/CTA";
import { Tv, Gamepad2, Users, Home } from "lucide-react";

export const Route = createFileRoute("/para-sua-casa")({
  head: () => ({
    meta: [
      { title: "Planos para sua casa — Portal Itaipu" },
      {
        name: "description",
        content:
          "Planos residenciais de fibra óptica 550MB e 600MB com Wi-Fi 6. Cinema, Globo Play, Premiere, Turbo e For Family a partir de R$ 109,90/mês.",
      },
      { property: "og:title", content: "Planos residenciais — Portal Itaipu" },
      {
        property: "og:description",
        content: "Internet boa, com conexão na casa toda. Wi-Fi 6 e equipamento incluso.",
      },
    ],
  }),
  component: Page,
});

const plans: Plan[] = [
  {
    name: "For Family",
    tag: "Internet para toda a família",
    price: "109,90",
    speed: "550 MB",
    features: ["Assistência Premium", "Roteador Wi-Fi 6", "Equipamento incluso", "Suporte 24h"],
  },
  {
    name: "Cinema",
    tag: "Streaming sem buffer",
    price: "119,90",
    speed: "550 MB",
    features: ["Assistência Premium", "Roteador Wi-Fi 6", "Otimizado para 4K", "Multi-dispositivos"],
  },
  {
    name: "Turbo",
    tag: "Mais velocidade no dia a dia",
    price: "129,90",
    speed: "550 MB",
    features: ["Assistência Premium", "Roteador Wi-Fi 6", "Equipamento incluso", "Prioridade na rede"],
    highlight: true,
  },
  {
    name: "Globo Play",
    tag: "Com Globo Play incluso",
    price: "139,90",
    speed: "600 MB",
    features: ["Globo Play incluso", "Assistência Premium", "Roteador Wi-Fi 6", "Equipamento incluso"],
  },
  {
    name: "Watch + Premiere",
    tag: "26 canais Watch + Premiere",
    price: "139,90",
    speed: "600 MB",
    features: ["26 canais Watch", "Canais Premiere", "Roteador Wi-Fi 6", "Assistência Premium"],
  },
  {
    name: "Duo Mash",
    tag: "Cobertura em toda a casa",
    price: "169,90",
    speed: "600 MB",
    features: ["Dois roteadores", "Wi-Fi mesh", "Assistência Premium", "Equipamento incluso"],
  },
];

const perks = [
  { icon: Home, t: "Casa toda conectada", d: "Wi-Fi 6 que cobre cada cômodo sem zona morta." },
  { icon: Tv, t: "Streaming sem travar", d: "Otimizado para Netflix, Globo Play, YouTube em 4K." },
  { icon: Gamepad2, t: "Pronto para gaming", d: "Latência baixa e estável para você jogar online." },
  { icon: Users, t: "Multi-dispositivos", d: "Toda a família conectada ao mesmo tempo, sem perda." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Planos residenciais"
        title="Mais velocidade, mais estabilidade,"
        highlight="mais internet do seu jeito."
        description="Planos pensados para você e sua família, com Wi-Fi 6, suporte humano 24h e instalação rápida."
      />

      <section className="pb-12 lg:pb-16">
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

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Escolha o plano <span className="text-gradient-brand">ideal para você</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Todos com instalação rápida, sem fidelidade abusiva e atendimento humano.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
