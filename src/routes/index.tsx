import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Plans } from "@/components/site/Plans";
import { Services } from "@/components/site/Services";
import { Coverage } from "@/components/site/Coverage";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portal Itaipu — Internet Fibra Óptica de qualidade no Oeste do PR" },
      {
        name: "description",
        content:
          "Internet fibra óptica 550MB com Wi-Fi 6, suporte 24h e cobertura em 9 cidades do Oeste do Paraná. 20 anos de experiência. Planos a partir de R$ 109,90.",
      },
      { property: "og:title", content: "Portal Itaipu — Internet Fibra Óptica" },
      {
        property: "og:description",
        content:
          "Fibra óptica de verdade, Wi-Fi 6 incluso e suporte 24h. 20 anos no Oeste do PR.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Plans />
      <Services />
      <Coverage />
      <About />
      <CTA />
    </>
  );
}
