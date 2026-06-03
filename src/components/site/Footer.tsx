import { Wifi, Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="#top" className="inline-flex items-center gap-2 font-display font-bold text-lg">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Wifi className="h-4 w-4" />
              </span>
              Portal <span className="text-gradient-brand">Itaipu</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Referência em internet fibra óptica no Oeste do Paraná há 20 anos.
              Conectando pessoas, empresas e comunidades.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/portalitaipu1/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/portalitaipu/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold text-sm mb-4">Planos</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/para-sua-casa" className="hover:text-foreground">Para você</Link></li>
              <li><Link to="/para-sua-empresa" className="hover:text-foreground">Para sua empresa</Link></li>
              <li><Link to="/movel" className="hover:text-foreground">Móvel</Link></li>
              <li><Link to="/camera" className="hover:text-foreground">Câmera</Link></li>
              <li><Link to="/amizade-turbinada" className="hover:text-foreground">Amizade Turbinada</Link></li>
              <li><Link to="/sobre" className="hover:text-foreground">Sobre nós</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-sm mb-4">Contato</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a href="tel:+554535591665" className="hover:text-foreground">(45) 3559-1665</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                Oeste do Paraná, BR
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-4 justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Portal Itaipu. Todos os direitos reservados.</div>
          <div>Internet fibra óptica · CNPJ disponível mediante solicitação</div>
        </div>
      </div>
    </footer>
  );
}
