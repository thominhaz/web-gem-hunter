import { Award, HeartHandshake, Headphones, Wifi } from "lucide-react";

const pillars = [
  { icon: Award, t: "20 anos", d: "de experiência em telecom no Oeste do PR" },
  { icon: Wifi, t: "Wi-Fi 6", d: "roteador de última geração já incluso" },
  { icon: Headphones, t: "Suporte 24h", d: "atendimento humano por WhatsApp e telefone" },
  { icon: HeartHandshake, t: "Indique e ganhe", d: "programa de recompensas para clientes" },
];

const reviews = [
  {
    n: "Neusa Fabiane",
    r: "Agradeço muito pela agilidade. Também trabalho com público e sei que quando nos procuram precisa ser atendido com agilidade e precisão.",
  },
  {
    n: "Josiane",
    r: "Gostei muito do atendimento dos atendentes — foram ágeis, educados e resolveram meu problema rapidamente.",
  },
  {
    n: "Cliente Portal Itaipu",
    r: "A internet é estável até em horário de pico. Trabalho de casa sem nenhum tipo de queda. Recomendo.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary-glow">
              Sobre nós
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Há duas décadas conectando o Oeste do Paraná.
            </h2>
            <p className="mt-5 text-background/70 text-lg leading-relaxed">
              A Portal Itaipu nasceu com uma missão simples: levar uma internet
              de verdade — rápida, estável e bem suportada — para a casa,
              o campo e o trabalho. Hoje somos referência regional em fibra óptica.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-2xl bg-background/5 border border-background/10 p-5">
                  <Icon className="h-5 w-5 text-primary-glow" />
                  <div className="mt-3 font-display font-bold text-lg">{t}</div>
                  <div className="text-sm text-background/60 mt-1">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {reviews.map((r) => (
              <figure
                key={r.n}
                className="rounded-3xl bg-background/5 border border-background/10 p-6 backdrop-blur"
              >
                <blockquote className="text-background/90 leading-relaxed">
                  “{r.r}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground font-semibold text-sm">
                    {r.n.charAt(0)}
                  </div>
                  <div className="text-sm font-medium">{r.n}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
