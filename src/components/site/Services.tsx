import { Building2, Phone, Tv, ShieldCheck, Network, Tractor } from "lucide-react";

const items = [
  { icon: Building2, title: "Link Corporativo", desc: "Banda dedicada e SLA para empresas que não podem parar." },
  { icon: Network, title: "Redes Empresariais", desc: "Projeto, instalação e gestão de redes locais de alta performance." },
  { icon: ShieldCheck, title: "Configuração de VPN", desc: "Conexão segura entre filiais e home office, criptografada ponta a ponta." },
  { icon: Phone, title: "Telefonia Fixa", desc: "Linhas e PABX em nuvem com tarifas competitivas." },
  { icon: Tv, title: "Streaming", desc: "Combos com plataformas de vídeo otimizadas para sua rede." },
  { icon: Tractor, title: "Internet Rural", desc: "Cobertura especializada para o campo, com qualidade urbana." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">
              Para casa, campo e negócios
            </div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Mais que internet. <br />
              Uma <span className="text-gradient-brand">infraestrutura completa.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Soluções pensadas para conectar pessoas, fazendas e empresas com o mesmo padrão de qualidade.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative rounded-3xl p-7 bg-surface-elevated border border-border hover:border-primary/40 hover:-translate-y-1 transition-all shadow-card hover:shadow-card-hover"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
