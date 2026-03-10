"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        badge: "Diagnóstico",
        target: "Para quem precisa de clareza antes de qualquer movimento.",
        includes: [
            "Diagnóstico guiado e automatizado",
            "Call de alinhamento estratégico",
            "Desenho de roadmap inicial",
        ],
        deliverables: "Relatório executivo + Checklist + Recomendação de trilha.",
        limits: "Não inclui execução documental nem registros societários.",
        cta: "Fazer diagnóstico agora",
        link: "/diagnostico",
        isExternal: false,
        highlight: false,
        color: "muda-green",
        borderGlow: "hover:border-muda-green/40 hover:shadow-muda-green/10",
        badgeBg: "bg-muda-green/10 text-muda-green border-muda-green/20",
    },
    {
        name: "Business",
        badge: "Abertura",
        target: "Para quem já validou o fit e quer estruturar a empresa legalmente.",
        includes: [
            "Estrutura societária e tributária",
            "Registros e elaboração de documentos",
            "Emissão de RUC",
            "Setup operacional inicial",
        ],
        deliverables: "Kit societário + Trilha de decisões + Cronograma de execução.",
        limits: "Não inclui a rotina contábil/fiscal mensal (veja o plano Scale).",
        cta: "Falar no WhatsApp",
        link: "https://wa.me/5581992992676?text=Olá,%20tenho%20interesse%20no%20plano%20Business%20da%20Muda%20Paraguai.",
        isExternal: true,
        highlight: true,
        color: "muda-blue",
        borderGlow: "hover:border-muda-blue/50 hover:shadow-muda-blue/10",
        badgeBg: "bg-muda-blue/10 text-muda-blue border-muda-blue/20",
    },
    {
        name: "Scale",
        badge: "Operação/Compliance",
        target: "Para quem quer rodar 'limpo', estruturado e 100% auditável.",
        includes: [
            "Rotina contábil e fiscal completa",
            "Gestão de compliance diário",
            "Suporte consultivo contínuo",
            "Relatórios periódicos",
        ],
        deliverables: "Relatórios mensais de performance + Acesso ao Portal do Cliente.",
        limits: "Depende do volume de transações mensais (faixas personalizadas).",
        cta: "Avaliar elegibilidade",
        link: "/diagnostico",
        isExternal: false,
        highlight: false,
        color: "muda-yellow",
        borderGlow: "hover:border-muda-yellow/40 hover:shadow-muda-yellow/10",
        badgeBg: "bg-muda-yellow/10 text-muda-yellow border-muda-yellow/20",
    },
    {
        name: "Export / Industrial",
        badge: "Regime Maquila",
        target: "Operações industriais/exportação com apetite forte por governança.",
        includes: [
            "Avaliação completa de elegibilidade",
            "Desenho estratégico da trilha industrial",
            "Execução assistida junto aos órgãos",
            "Acompanhamento da operação",
        ],
        deliverables: "Plano de implantação integrado + Matriz de requisitos + Cronograma rígido.",
        limits: "Estudo caso a caso. Não fazemos promessas automáticas de aprovação.",
        cta: "Fazer diagnóstico Maquila",
        link: "/diagnostico",
        isExternal: false,
        highlight: false,
        color: "muda-red",
        borderGlow: "hover:border-muda-red/40 hover:shadow-muda-red/10",
        badgeBg: "bg-muda-red/10 text-muda-red border-muda-red/20",
    },
];

export default function ServicosPage(): React.ReactElement {
    return (
        <div className="bg-background pt-32 pb-24 min-h-screen relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-muda-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-muda-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 text-sm font-medium mb-6 backdrop-blur-sm">
                        <Star className="w-3.5 h-3.5 text-muda-yellow" />
                        Jornada estruturada em etapas
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-semibold text-white tracking-tighter mb-6 leading-tight">
                        Jornada sob medida,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-green to-muda-blue">
                            sem pacotes engessados.
                        </span>
                    </h1>
                    <p className="text-lg text-foreground/60 leading-relaxed">
                        Seja para validar um cenário, abrir a estrutura societária ou manter a operação 100% em compliance contínuo, a MUDA PARAGUAI oferece etapas lógicas e assistidas.
                    </p>
                </motion.div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative flex flex-col rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden
                                ${plan.highlight
                                    ? 'border-muda-blue/40 shadow-xl shadow-muda-blue/10 bg-[#0B1F3A]'
                                    : `border-white/10 bg-card/60 ${plan.borderGlow}`
                                }`}
                        >
                            {/* Highlight accent top bar */}
                            {plan.highlight && (
                                <>
                                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-muda-green via-muda-blue to-muda-yellow" />
                                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-muda-blue/20 border border-muda-blue/30 text-muda-blue text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                                        <Star className="w-2.5 h-2.5" /> Popular
                                    </div>
                                </>
                            )}

                            {/* Background Glow for highlight */}
                            {plan.highlight && (
                                <div className="absolute -top-20 -right-20 w-48 h-48 bg-muda-blue/10 rounded-full blur-3xl pointer-events-none" />
                            )}

                            <div className="p-8 flex flex-col flex-grow relative z-10">
                                {/* Badge */}
                                <div className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5 border ${plan.badgeBg}`}>
                                    {plan.badge}
                                </div>

                                <h3 className="text-2xl font-sora font-bold text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed mb-8 min-h-[48px]">
                                    {plan.target}
                                </p>

                                {/* Includes */}
                                <div className="flex-grow space-y-5">
                                    <div>
                                        <p className="text-xs font-semibold text-foreground/40 uppercase tracking-widest mb-3">Inclui:</p>
                                        <ul className="space-y-2.5">
                                            {plan.includes.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm text-foreground/75">
                                                    <div className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center bg-${plan.color}/15`}>
                                                        <Check className={`w-2.5 h-2.5 text-${plan.color}`} />
                                                    </div>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Deliverables & Limits */}
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3 text-sm">
                                        <div>
                                            <span className="font-semibold text-white/80 mr-1">Você recebe:</span>
                                            <span className="text-foreground/60">{plan.deliverables}</span>
                                        </div>
                                        <div className="pt-2 border-t border-white/10">
                                            <span className="font-semibold text-white/80 mr-1">Limites:</span>
                                            <span className="text-foreground/50">{plan.limits}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <Button
                                        asChild
                                        className={`w-full h-12 font-semibold rounded-xl transition-all duration-200
                                            ${plan.highlight
                                                ? 'bg-gradient-to-r from-muda-green to-muda-blue text-white hover:opacity-90 shadow-lg shadow-muda-blue/20'
                                                : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                                            }`}
                                    >
                                        <Link href={plan.link} target={plan.isExternal ? "_blank" : undefined} rel={plan.isExternal ? "noopener noreferrer" : undefined}>
                                            {plan.isExternal && <MessageCircle className="mr-2 w-4 h-4" />}
                                            {plan.cta}
                                            {plan.highlight && <ArrowRight className="ml-2 w-4 h-4" />}
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center mt-16 p-8 rounded-2xl border border-white/10 bg-white/5 max-w-2xl mx-auto"
                >
                    <p className="text-foreground/60 text-sm mb-4">
                        Não sabe por onde começar? O diagnóstico é o primeiro passo — gratuito e leva menos de 3 minutos.
                    </p>
                    <Button
                        size="lg"
                        asChild
                        className="bg-gradient-to-r from-muda-green to-muda-blue text-white h-14 px-8 rounded-xl font-semibold hover:opacity-90 shadow-lg shadow-muda-green/20"
                    >
                        <Link href="/diagnostico">
                            Começar pelo diagnóstico gratuito
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
