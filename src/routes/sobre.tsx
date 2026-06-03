import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTA } from "@/components/site/CTA";
import { Building2, Users, Tractor, Wifi, Phone, Network, ShieldCheck, Camera, Radio } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Portal Itaipu" },
      {
        name: "description",
        content:
          "Desde 2003 em Itaipulândia, a Portal Itaipu conecta cidades, campo e empresas no Oeste do Paraná. +8.000 clientes e cobertura em 9 cidades.",
      },
      { property: "og:title", content: "Sobre a Portal Itaipu" },
      {
        property: "og:description",
        content: "Conectando a cidade, o campo e o seu negócio desde 2003.",
      },
    ],
  }),
  component: Page,
});

const stats = [
  { v: "2003", l: "ano de fundação" },
  { v: "20+", l: "anos no mercado" },
  { v: "8.000+", l: "clientes ativos" },
  { v: "9", l: "cidades atendidas" },
];

const solutions = [
  { icon: Wifi, t: "Fibra Óptica", d: "Alta velocidade, conexão estável e atendimento personalizado." },
  { icon: Network, t: "Link Corporativo", d: "Conexão dedicada, alta capacidade e escalabilidade real." },
  { icon: ShieldCheck, t: "VPN", d: "Segurança aprimorada, acesso remoto e conexão entre filiais." },
  { icon: Phone, t: "Telefonia Fixa", d: "Planos flexíveis com atendimento e tarifas competitivas." },
  { icon: Radio, t: "Via Rádio", d: "Acesso em áreas remotas com tecnologia confiável." },
  { icon: Camera, t: "Monitoramento", d: "Câmeras com acompanhamento em tempo real e suporte 24/7." },
];

const values = [
  { t: "Atendimento personalizado", d: "Você nunca fala com um robô. Time local que te conhece pelo nome." },
  { t: "Soluções completas", d: "Internet, telefonia, segurança e redes — tudo com um único parceiro." },
  { t: "Evolução constante", d: "Investimos em tecnologia de ponta para entregar conexão sempre melhor." },
  { t: "Maior cobertura regional", d: "Onde muitos não chegam, a Portal Itaipu já está há anos." },
];

function Page() {
  return (
    <>
      <PageHero variant="sunset"
        eyebrow="Sobre nós"
        title="Conectando a cidade, o campo"
        highlight="e o seu negócio."
        description="Para nós, isso é mais do que um slogan: é a nossa missão. Há mais de 20 anos levamos conexão de alta performance onde muitos não chegam — fortalecendo o agronegócio, conectando famílias e impulsionando empresas no Oeste do Paraná."
      />

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.l} className="rounded-3xl bg-surface-elevated border border-border p-6 text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-brand">
                  {s.v}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Nossa história
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Desde 2003 em <span className="text-gradient-brand">Itaipulândia.</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Portal Itaipu nasceu em 2003 com uma missão clara: levar internet
                de verdade para uma região do Brasil onde a conexão era escassa,
                instável e cara.
              </p>
              <p>
                Mais de duas décadas depois, somos referência no Oeste do Paraná
                — atendendo mais de <strong className="text-foreground">8.000 clientes</strong>{" "}
                em <strong className="text-foreground">9 cidades</strong>, incluindo
                áreas urbanas e rurais.
              </p>
              <p>
                Quebramos barreiras geográficas para fortalecer o agronegócio,
                conectar famílias no campo e oferecer soluções completas para
                empresas que não podem parar.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {[
              { icon: Users, t: "Famílias", d: "Internet para curtir, estudar e trabalhar de casa." },
              { icon: Tractor, t: "Campo", d: "Cobertura especializada para áreas rurais." },
              { icon: Building2, t: "Empresas", d: "Soluções corporativas com SLA e prioridade." },
              { icon: Wifi, t: "Comunidades", d: "Inclusão digital onde a internet ainda não chegou." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-surface-elevated border border-border p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display font-bold">{t}</div>
                <p className="text-sm text-muted-foreground mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Soluções completas para <span className="text-gradient-brand">conectar tudo.</span>
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solutions.map(({ icon: Icon, t, d }) => (
              <div
                key={t}
                className="rounded-3xl bg-surface-elevated border border-border p-7 hover:border-primary/40 hover:-translate-y-1 transition-all shadow-card hover:shadow-card-hover"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            O que nos move
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <div key={v.t} className="rounded-3xl border border-border p-7">
                <div className="font-display text-5xl font-bold text-gradient-brand">
                  0{i + 1}
                </div>
                <div className="mt-4 font-display text-xl font-bold">{v.t}</div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
