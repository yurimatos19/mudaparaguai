import Image from "next/image";
import Link from "next/link";
import { BrazilFlag, ParaguayFlag } from "@/components/ui/svg-flags";

export const metadata = {
  title: "Muda Paraguai | Expansão de Negócios",
  description: "Estruturação estratégica no Paraguai para empresas e profissionais de alta renda.",
};

export default function LPRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <div className="flex flex-col min-h-screen z-50 relative bg-background">
      {/* Simplified Header without navigation links */}
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-background/95 backdrop-blur-md border-b border-border/80 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-10">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Muda Paraguai Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
            <div className="hidden lg:flex items-center gap-1 bg-secondary/80 border border-border px-2 py-0.5 rounded-md shadow-sm">
              <BrazilFlag width={16} height={11} />
              <span className="text-[9px] font-bold text-muted-foreground">➔</span>
              <ParaguayFlag width={16} height={11} />
            </div>
          </div>
        </div>
      </header>

      {/* The main content */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      
      {/* Simplified Footer */}
      <footer className="bg-foreground text-background py-8 border-t border-border mt-auto">
        <div className="container mx-auto px-4 text-center">
            <Image
                src="/logo.png"
                alt="Muda Paraguai Logo"
                width={150}
                height={40}
                className="object-contain mx-auto mb-4 invert brightness-0"
            />
            <p className="text-sm text-muted-foreground mb-2">
                © {new Date().getFullYear()} Muda Paraguai. Todos os direitos reservados.
            </p>
        </div>
      </footer>
    </div>
  );
}
