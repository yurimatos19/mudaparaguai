import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Serviços e Planos",
    description: "Conheça nossos pacotes de estruturação corporativa: Diagnóstico, Abertura, Operação mensal e Maquila.",
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
