import { ReactNode } from "react";
import { AmbientBackground, type AmbientVariant } from "./AmbientBackground";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
  variant = "magenta",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  children?: ReactNode;
  variant?: AmbientVariant;
}) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      <AmbientBackground variant={variant} />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            {title}{" "}
            {highlight && <span className="text-gradient-brand">{highlight}</span>}
          </h1>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </div>
      </div>
    </section>
  );
}
