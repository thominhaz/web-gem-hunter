import { MessageCircle } from "lucide-react";

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/554535591665?text=Ol%C3%A1!%20Acessei%20o%20site%20da%20Portal%20Itaipu%20e%20tenho%20interesse%20nos%20planos."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
