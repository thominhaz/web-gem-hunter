import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PlanCard, type Plan } from "@/components/site/PlanCard";
import { CTA } from "@/components/site/CTA";
import { Camera, Shield, Smartphone, Zap } from "lucide-react";

export const Route = createFileRoute("/camera")({
  head: () => ({
    meta: [
      { title: "Câmeras de monitoramento — Portal Itaipu" },
      {
        name: "description",
        content:
          "Combos de câmera + internet 600MB para monitorar sua casa ou obra. Câmera em comodato, cartão de memória e Wi-Fi 6 inclusos.",
      },
      { property: "og:title", content: "Câmeras de monitoramento — Portal Itaipu" },
      {
        property: "og:description",
        content: "Visualize sua casa ou obra, de forma prática e rápida.",
      },
    ],
  }),
  component: Page,
});

const plans: Plan[] = [
  {
    name: "Casa Segura",
    tag: "Sua casa conectada e protegida",
    price: "149,90",
    speed: "600 MB",
    features: [
      "Câmera em comodato",
      "Cartão de memória",
      "Roteador Wi-Fi 6",
      "Assistência Premium",
      "Equipamento incluso",
    ],
    highlight: true,
  },
  {
    name: "Obra Segura",
    tag: "Conexão ideal para sua obra",
    price: "169,90",
    speed: "600 MB",
    features: [
      "Nobreak incluso",
      "Câmera em comodato",
      "Cartão de memória",
      "Roteador Wi-Fi 6",
      "Assistência Premium",
    ],
  },
];

const perks = [
  { icon: Camera, t: "Câmera em comodato", d: "Equipamento incluso no plano, sem custo de aquisição." },
  { icon: Smartphone, t: "Acesso pelo celular", d: "Monitore em tempo real, de onde estiver, pelo seu app." },
  { icon: Zap, t: "Conexão estável", d: "600MB de fibra para imagens nítidas e gravação contínua." },
  { icon: Shield, t: "Segurança reforçada", d: "Casa ou obra monitorada 24h com gravação em cartão." },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Câmeras de monitoramento"
        title="Visualize sua casa ou sua obra"
        highlight="de forma prática e rápida."
        description="Combos completos de fibra 600MB + câmera + Wi-Fi 6, prontos para você monitorar em tempo real, com toda a estabilidade da Portal Itaipu."
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

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Combos <span className="text-gradient-brand">câmera + fibra</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Tudo incluso. Você só se preocupa em assistir.
          </p>
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
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
