import { useState, useEffect } from "react";
import { Menu, X, Wifi } from "lucide-react";

const links = [
  { href: "#planos", label: "Planos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
            <Wifi className="h-4 w-4" />
          </span>
          <span>Portal <span className="text-gradient-brand">Itaipu</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/554535591665"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
          >
            Assinar agora
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/554535591665"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold"
            >
              Assinar agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
