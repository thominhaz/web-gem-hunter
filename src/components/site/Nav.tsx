import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/portal-itaipu-logo.png.asset.json";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/para-sua-casa", label: "Para você" },
  { to: "/para-sua-empresa", label: "Empresa" },
  { to: "/movel", label: "Móvel" },
  { to: "/camera", label: "Câmera" },
  { to: "/amizade-turbinada", label: "Indique" },
  { to: "/sobre", label: "Sobre" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" aria-label="Portal Itaipu — Internet Fibra" className="flex items-center">
          <span
            className={`inline-flex items-center rounded-xl transition-all ${
              scrolled ? "bg-transparent px-0 py-0" : "bg-white/95 shadow-card px-3 py-1.5"
            }`}
          >
            <img
              src={logoAsset.url}
              alt="Portal Itaipu"
              className="h-7 md:h-8 w-auto select-none"
              draggable={false}
            />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
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
          className="lg:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-base font-medium"
              >
                {l.label}
              </Link>
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
