import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          data-reveal-scale
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-brand p-10 md:p-16 text-primary-foreground shadow-glow"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Pronto para uma internet que <em className="not-italic underline decoration-white/40 underline-offset-8">funciona de verdade</em>?
            </h2>
            <p className="mt-5 text-primary-foreground/85 text-lg">
              Fale agora com nossa equipe pelo WhatsApp e descubra o plano ideal para você.
              Instalação rápida, sem dor de cabeça.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/554535591665?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20os%20planos%20da%20Portal%20Itaipu."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition"
              >
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+554535591665"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold hover:bg-white/20 transition"
              >
                (45) 3559-1665
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
