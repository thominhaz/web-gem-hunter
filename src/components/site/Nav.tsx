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
          ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_oklch(0.58_0.24_340_/_0.25)] border-b border-[oklch(0.7_0.22_340_/_0.18)]"
          : "bg-gradient-to-b from-background/40 to-transparent backdrop-blur-sm"
      }`}
    >
      {/* pink gradient hairline accent */}
      <div
        aria-hidden
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" aria-label="Portal Itaipu — Internet Fibra" className="flex items-center group">
          <img
            src={logoAsset.url}
            alt="Portal Itaipu"
            draggable={false}
            className="h-8 md:h-9 w-auto select-none transition-transform duration-300 group-hover:scale-[1.03]"
            style={{
              filter:
                "drop-shadow(0 1px 0 rgba(255,255,255,0.6)) drop-shadow(0 6px 14px oklch(0.58 0.24 340 / 0.35))",
            }}
          />
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
