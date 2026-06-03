import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { PlanCard, type Plan } from "@/components/site/PlanCard";
import { CTA } from "@/components/site/CTA";
import { Briefcase, Shield, Server, HeadphonesIcon } from "lucide-react";

export const Route = createFileRoute("/para-sua-empresa")({
  head: () => ({
    meta: [
      { title: "Internet para empresas — Portal Itaipu" },
      {
        name: "description",
        content:
          "Internet empresarial com atendimento prioritário, IP fixo opcional e estabilidade premium. Planos 500MB, 550MB e 600MB para o seu negócio.",
      },
      { property: "og:title", content: "Internet para empresas — Portal Itaipu" },
      {
        property: "og:description",
        content:
          "Atendimento prioritário e conectividade em serviços inteligentes para o seu negócio.",
      },
    ],
  }),
  component: Page,
});

const plans: Plan[] = [
  {
    name: "Empresa 500",
    tag: "Pequenos times e escritórios",
    price: "109,90",
    speed: "500 MB",
    features: ["Assistência Premium", "Roteador Wi-Fi 6", "Equipamento incluso", "Suporte empresarial"],
  },
  {
    name: "Empresa 550",
    tag: "Crescimento estável",
    price: "139,90",
    speed: "550 MB",
    features: [
      "Atendimento prioritário",
      "Assistência Premium",
      "Roteador Wi-Fi 6",
      "Equipamento incluso",
    ],
    highlight: true,
  },
  {
    name: "Empresa 600",
    tag: "Máxima performance",
    price: "199,90",
    speed: "600 MB",
    features: [
      "IP Fixo incluso",
      "Atendimento prioritário",
      "Assistência Premium",
      "Roteador Wi-Fi 6",
    ],
  },
];

const features = [
  {
    icon: Briefcase,
    t: "Pensado para o trabalho",
    d: "Estabilidade premium para vídeo-chamadas, ERPs e operações que não podem cair.",
  },
  {
    icon: HeadphonesIcon,
    t: "Atendimento prioritário",
    d: "Fila dedicada para clientes empresariais com SLA de resposta rápida.",
  },
  {
    icon: Shield,
    t: "IP fixo opcional",
    d: "Acesso remoto seguro, câmeras, servidores e configurações de VPN próprias.",
  },
  {
    icon: Server,
    t: "Soluções complementares",
    d: "Link dedicado, telefonia fixa, VPN entre filiais e redes corporativas gerenciadas.",
  },
];

function Page() {
  return (
    <>
      <PageHero variant="blue"
        eyebrow="Para sua empresa"
        title="Atendimento prioritário e"
        highlight="conectividade inteligente."
        description="Para quem precisa acompanhar o negócio de qualquer lugar, com estabilidade premium e suporte que entende o que está em jogo."
      />

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl bg-surface-elevated border border-border p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-display font-bold">{t}</div>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Planos empresariais <span className="text-gradient-brand">sob medida</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Rápida, segura e prioritária. Seu negócio sempre online.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-surface border border-border p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-2xl font-bold">Precisa de algo customizado?</h3>
              <p className="mt-2 text-muted-foreground">
                Link dedicado, redes corporativas, telefonia em nuvem e VPN entre filiais.
                Montamos uma proposta sob medida para sua operação.
              </p>
            </div>
            <a
              href="https://wa.me/554535591665?text=Ol%C3%A1!%20Quero%20uma%20proposta%20empresarial%20customizada."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
            >
              Falar com consultor
            </a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
