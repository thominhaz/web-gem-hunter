import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "For Family",
    tag: "Para a família toda",
    price: "109,90",
    speed: "550 MB",
    features: [
      "Wi-Fi 6 incluso",
      "Roteador de última geração",
      "Suporte 24h",
      "Instalação grátis",
    ],
    highlight: false,
  },
  {
    name: "Cinema",
    tag: "Streaming sem buffer",
    price: "119,90",
    speed: "550 MB",
    features: [
      "Tudo do For Family",
      "Otimizado para 4K",
      "Multi-dispositivos",
      "Conta com benefícios",
    ],
    highlight: true,
  },
  {
    name: "Turbo",
    tag: "Performance máxima",
    price: "129,90",
    speed: "550 MB",
    features: [
      "Tudo do Cinema",
      "Prioridade na rede",
      "IP fixo opcional",
      "Streaming + Gaming",
    ],
    highlight: false,
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Planos residenciais
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
            Escolha o seu plano <br />
            <span className="text-gradient-brand">e fique online</span> em 24h.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Todos os planos incluem Wi-Fi 6, instalação e suporte humano. Sem fidelidade abusiva.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <article
              key={p.name}
              className={`relative rounded-3xl p-8 border transition-all hover:-translate-y-1 ${
                p.highlight
                  ? "bg-foreground text-background border-foreground shadow-glow"
                  : "bg-surface-elevated border-border shadow-card hover:shadow-card-hover"
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand text-primary-foreground text-xs font-semibold px-4 py-1.5 shadow-glow">
                  Mais escolhido
                </div>
              )}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <span className={`text-xs font-semibold rounded-full px-3 py-1 ${
                  p.highlight ? "bg-background/15" : "bg-muted text-muted-foreground"
                }`}>
                  {p.speed}
                </span>
              </div>
              <p className={`mt-1 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                {p.tag}
              </p>

              <div className="mt-8 flex items-end gap-1">
                <span className={`text-sm font-medium ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  R$
                </span>
                <span className="font-display text-6xl font-bold leading-none tracking-tight">
                  {p.price.split(",")[0]}
                </span>
                <span className="font-display text-2xl font-bold">,{p.price.split(",")[1]}</span>
                <span className={`ml-1 text-sm ${p.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  /mês
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${
                      p.highlight ? "bg-background/15" : "bg-primary/10 text-primary"
                    }`}>
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/554535591665"
                target="_blank"
                rel="noreferrer"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-background text-foreground hover:opacity-90"
                    : "bg-gradient-brand text-primary-foreground shadow-glow hover:scale-[1.02]"
                }`}
              >
                Assinar {p.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Quer ver todos os planos residenciais? <a href="/para-sua-casa" className="text-foreground font-medium underline underline-offset-4">Conheça a linha completa →</a>
          {" · "}
          <a href="/para-sua-empresa" className="text-foreground font-medium underline underline-offset-4">Soluções para empresas →</a>
        </p>
      </div>
    </section>
  );
}
