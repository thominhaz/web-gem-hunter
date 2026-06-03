import { MapPin, Search } from "lucide-react";

const cities = [
  "Diamante D'Oeste",
  "Itaipulândia",
  "Missal",
  "Santa Helena",
  "Medianeira",
  "São Miguel do Iguaçu",
  "Serranópolis do Iguaçu",
  "Matelândia",
  "Ramilândia",
];

export function Coverage() {
  return (
    <section id="cobertura" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              <MapPin className="inline h-3.5 w-3.5 mr-1" /> Cobertura
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              9 cidades. <br />
              <span className="text-gradient-brand">Um padrão</span> de qualidade.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-lg">
              Estamos no Oeste do Paraná há mais de duas décadas, expandindo nossa rede
              de fibra para áreas urbanas e rurais com a mesma estabilidade.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://wa.me/554535591665", "_blank");
              }}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Digite seu CEP ou cidade"
                  className="w-full rounded-full bg-surface-elevated border border-border pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-gradient-brand text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                Verificar
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" data-reveal-group>
            {cities.map((c) => (
              <div
                key={c}
                data-reveal
                className="rounded-2xl border border-border bg-surface-elevated px-4 py-5 text-sm font-medium hover:border-primary/40 hover:shadow-card-hover transition"
              >
                <MapPin className="h-4 w-4 text-primary mb-2" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
