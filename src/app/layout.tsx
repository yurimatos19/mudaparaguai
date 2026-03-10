import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mudaparaguai.com.br"),
  title: {
    default: "Muda Paraguai | Expansão de Negócios e Redução Tributária",
    template: "%s | Muda Paraguai",
  },
  description: "Estruturação estratégica no Paraguai para empresas e profissionais de alta renda. Reduza sua carga tributária com segurança jurídica, 100% dentro da lei.",
  keywords: ["Muda Paraguai", "abrir empresa no Paraguai", "Maquila", "impostos reduzidos", "expansão internacional", "otimização tributária"],
  authors: [{ name: "Instituto Muda" }],
  creator: "Instituto Muda",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mudaparaguai.com.br",
    title: "Muda Paraguai | Liberte sua empresa da burocracia e impostos",
    description: "Estruturamos sua operação no Paraguai (1% a 10% de imposto) mantendo seu negócio 100% legal e rentável. Foque em crescer.",
    siteName: "Muda Paraguai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo Muda Paraguai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muda Paraguai | Expansão Sem Limites para Negócios",
    description: "Estruturamos sua operação no Paraguai com carga tributária mínima (1-10%). Crescimento com segurança jurídica.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Muda Paraguai",
    "url": "https://mudaparaguai.com.br",
    "logo": "https://mudaparaguai.com.br/logo.png",
    "description": "Consultoria especializada em estruturação de negócios, redução tributária e cumprimento legal (compliance) no Paraguai para empresas brasileiras.",
    "sameAs": [
      "https://instagram.com/mudaparaguai",
      "https://linkedin.com/company/mudaparaguai",
      "https://wa.me/5581992992676"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Portuguese"],
      "email": "contato@mudaparaguai.com"
    }
  };

  return (
    <html lang="pt-BR" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${sora.variable} ${inter.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
