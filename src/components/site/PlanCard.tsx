import { Check } from "lucide-react";

export type Plan = {
  name: string;
  tag?: string;
  price: string; // "109,90"
  speed?: string;
  features: string[];
  highlight?: boolean;
  ctaText?: string;
  whatsappMsg?: string;
};

function whatsappLink(plan: Plan) {
  const msg =
    plan.whatsappMsg ||
    `Olá! Quero contratar o plano ${plan.name}${plan.price ? ` (R$ ${plan.price})` : ""} da Portal Itaipu.`;
  return `https://wa.me/554535591665?text=${encodeURIComponent(msg)}`;
}

export function PlanCard({ plan }: { plan: Plan }) {
  const [reais, cents] = plan.price.split(",");
  return (
    <article
      className={`relative rounded-3xl p-8 border transition-all hover:-translate-y-1 ${
        plan.highlight
          ? "bg-foreground text-background border-foreground shadow-glow"
          : "bg-surface-elevated border-border shadow-card hover:shadow-card-hover"
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand text-primary-foreground text-xs font-semibold px-4 py-1.5 shadow-glow whitespace-nowrap">
          Mais escolhido
        </div>
      )}

      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-bold leading-tight">{plan.name}</h3>
        {plan.speed && (
          <span
            className={`text-xs font-semibold rounded-full px-3 py-1 whitespace-nowrap ${
              plan.highlight ? "bg-background/15" : "bg-muted text-muted-foreground"
            }`}
          >
            {plan.speed}
          </span>
        )}
      </div>
      {plan.tag && (
        <p className={`mt-1 text-sm ${plan.highlight ? "text-background/70" : "text-muted-foreground"}`}>
          {plan.tag}
        </p>
      )}

      <div className="mt-8 flex items-end gap-1">
        <span className={`text-sm font-medium ${plan.highlight ? "text-background/70" : "text-muted-foreground"}`}>
          R$
        </span>
        <span className="font-display text-5xl font-bold leading-none tracking-tight">{reais}</span>
        {cents && <span className="font-display text-2xl font-bold">,{cents}</span>}
        <span className={`ml-1 text-sm ${plan.highlight ? "text-background/70" : "text-muted-foreground"}`}>
          /mês
        </span>
      </div>

      <ul className="mt-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                plan.highlight ? "bg-background/15" : "bg-primary/10 text-primary"
              }`}
            >
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href={whatsappLink(plan)}
        target="_blank"
        rel="noreferrer"
        className={`mt-8 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition ${
          plan.highlight
            ? "bg-background text-foreground hover:opacity-90"
            : "bg-gradient-brand text-primary-foreground shadow-glow hover:scale-[1.02]"
        }`}
      >
        {plan.ctaText || "Quero contratar"}
      </a>
    </article>
  );
}
