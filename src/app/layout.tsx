import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mudaparaguai.com"),
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
    url: "https://mudaparaguai.com",
    title: "Muda Paraguai | Liberte sua empresa da burocracia e impostos",
    description: "Estruturamos sua operação no Paraguai (1% a 10% de imposto) mantendo seu negócio 100% legal e rentável. Foque em crescer.",
    siteName: "Muda Paraguai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muda Paraguai | Expansão Sem Limites para Negócios",
    description: "Estruturamos sua operação no Paraguai with carga tributária mínima (1-10%). Crescimento com segurança jurídica.",
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

import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { CookieConsent } from "@/components/ui/cookie-consent";
import Script from "next/script";

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
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        {/* Google Tag Manager - Script Original */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P7W5GSWX');
            `,
          }}
        />
        {/* Google Analytics - Script Original */}
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18306339409"
        />
        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18306339409');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${lora.variable} ${inter.variable} font-sans antialiased text-foreground bg-background min-h-screen flex flex-col overflow-x-hidden`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P7W5GSWX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
