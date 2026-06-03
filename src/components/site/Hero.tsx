import { ArrowRight, Zap } from "lucide-react";
import heroImg from "@/assets/hero-fiber.jpg";
import logoAsset from "@/assets/portal-itaipu-logo.png.asset.json";
import { AmbientBackground } from "./AmbientBackground";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <AmbientBackground />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center rounded-2xl bg-white shadow-card px-4 py-3 mb-6">
              <img
                src={logoAsset.url}
                alt="Portal Itaipu — Internet Fibra"
                className="h-10 md:h-12 w-auto select-none"
                draggable={false}
              />
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/70 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Fibra 100% óptica · 20 anos no Oeste do Paraná
            </div>

            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
              Internet que <br />
              <span className="text-gradient-brand">não trava</span> nunca.
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Velocidade de fibra de verdade, Wi-Fi 6 incluso e suporte humano 24h.
              Cobrimos 9 cidades — incluindo área rural — com a melhor conexão da região.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#planos"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand text-primary-foreground px-7 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform"
              >
                Ver planos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/554535591665"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-7 py-3.5 text-sm font-semibold hover:bg-muted transition"
              >
                Falar no WhatsApp
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "20+", l: "anos de mercado" },
                { v: "9", l: "cidades atendidas" },
                { v: "24h", l: "suporte humano" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-gradient-brand">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-glow">
              <img
                src={heroImg}
                alt="Fibra óptica de alta velocidade"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* floating cards */}
            <div className="absolute -left-4 lg:-left-10 top-12 animate-float">
              <div className="rounded-2xl bg-surface-elevated/90 backdrop-blur-xl border border-border shadow-card p-4 w-56">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Velocidade</div>
                    <div className="font-display font-bold text-lg">550 Mbps</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 lg:-right-6 bottom-12 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="rounded-2xl bg-surface-elevated/90 backdrop-blur-xl border border-border shadow-card p-4 w-60">
                <div className="text-xs text-muted-foreground">Latência média</div>
                <div className="font-display font-bold text-2xl mt-1">
                  4 <span className="text-base font-semibold text-muted-foreground">ms</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full w-[12%] bg-gradient-brand rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
