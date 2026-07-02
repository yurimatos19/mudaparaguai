"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, MessageCircle, Star } from "lucide-react";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        badge: "Diagnóstico",
        target: "Para quem precisa de total clareza regulatória antes de dar qualquer passo societário.",
        includes: [
            "Diagnóstico de elegibilidade assistido",
            "Call de alinhamento estratégico com advogado",
            "Desenho de roadmap de estruturação jurídica",
        ],
        deliverables: "Relatório executivo + Checklist documental personalizado.",
        limits: "Não inclui elaboração de contratos sociais nem registros nos órgãos locais.",
        cta: "Fazer diagnóstico gratuito",
        link: "/diagnostico",
        isExternal: false,
        highlight: false,
        color: "text-muda-green",
        bg: "from-muda-green/20 to-transparent",
        border: "border-muda-green/30 hover:border-muda-green/60",
    },
    {
        name: "Business",
        badge: "Abertura",
        target: "Para quem já validou a aderência e quer constituir a estrutura societária e RUC.",
        includes: [
            "Estruturação de contrato social e estatutos",
            "Elaboração de atas societárias e registros locais",
            "Emissão e homologação do RUC societário",
            "Setup operacional e representação legal",
        ],
        deliverables: "Kit societário completo + RUC + Chaves de acesso.",
        limits: "Não inclui a rotina contábil e fiscal recorrente (veja o plano Scale).",
        cta: "Falar no WhatsApp",
        link: "https://wa.me/5581992992676?text=Olá,%20tenho%20interesse%20no%20plano%20Business%20da%20Muda%20Paraguai.",
        isExternal: true,
        highlight: true,
        color: "text-muda-yellow",
        bg: "from-muda-yellow/20 to-transparent",
        border: "border-muda-yellow shadow-[0_0_30px_rgba(255,199,44,0.15)]",
    },
    {
        name: "Scale",
        badge: "Operação/Compliance",
        target: "Para quem quer operar com substância econômica contínua e 100% livre de riscos.",
        includes: [
            "Rotina contábil mensal e obrigações paraguaias",
            "Relatórios periódicos de compliance OCDE",
            "Monitoramento contínuo de substância",
            "Suporte societário e tributário contínuo",
        ],
        deliverables: "Status mensal de regularidade + Acesso completo ao Portal.",
        limits: "O valor recorrente varia de acordo com o volume de transações mensais.",
        cta: "Fazer diagnóstico de compliance",
        link: "/diagnostico",
        isExternal: false,
        highlight: false,
        color: "text-muda-blue",
        bg: "from-muda-blue/20 to-transparent",
        border: "border-muda-blue/30 hover:border-muda-blue/60",
    },
    {
        name: "Export / Industrial",
        badge: "Regime Maquila",
        target: "Operações industriais, agro ou exportações de alta escala focadas em benefícios fiscais.",
        includes: [
            "Análise profunda de elegibilidade no regime Maquila",
            "Desenho operacional e de cadeia logística",
            "Aprovação de projeto junto aos Ministérios locais",
            "Habilitação tributária sob imposto único (1%)",
        ],
        deliverables: "Plano de implantação integrado + Matriz de requisitos + Projeto ministerial.",
        limits: "Sujeito à análise prévia. Não realizamos promessas de aprovação automática.",
        cta: "Avaliar elegibilidade Maquila",
        link: "/diagnostico",
        isExternal: false,
        highlight: false,
        color: "text-muda-red",
        bg: "from-muda-red/20 to-transparent",
        border: "border-muda-red/30 hover:border-muda-red/60",
    },
];

export default function ServicosPage(): React.ReactElement {
    return (
        <div className="bg-muda-navy pt-28 pb-24 min-h-screen relative overflow-hidden text-white">
            {/* Elegant patriotic glowing ambient blobs */}
            <div className="hidden lg:block absolute top-0 right-0 w-[800px] h-[800px] bg-muda-blue/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="hidden lg:block absolute bottom-0 left-0 w-[600px] h-[600px] bg-muda-green/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            {/* Grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                        <Star className="w-3.5 h-3.5 text-muda-yellow" />
                        Jornada Sob Medida
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight mb-6">
                        Etapas Estruturadas, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-blue via-muda-green to-muda-yellow font-bold">
                            sem pacotes genéricos.
                        </span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                        Seja para validar seu enquadramento legal, registrar sua empresa ou terceirizar a rotina de compliance no Paraguai, oferecemos módulos claros e auditáveis para cada fase do seu negócio.
                    </p>
                </motion.div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan, i) => {
                        const isPrimaryCard = plan.highlight;
                        return (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`relative flex flex-col rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 overflow-hidden group ${
                                    isPrimaryCard
                                        ? `bg-white/10 backdrop-blur-xl ${plan.border}`
                                        : `bg-white/5 backdrop-blur-lg ${plan.border}`
                                }`}
                            >
                                {/* Top colored gradient fade inside card */}
                                <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${plan.bg} opacity-50`} />

                                {/* Popular badge */}
                                {isPrimaryCard && (
                                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-muda-yellow text-muda-navy text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg z-20">
                                        <Star className="w-3 h-3 fill-muda-navy" /> Recomendado
                                    </div>
                                )}

                                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                                    {/* Badge */}
                                    <div className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border ${
                                        isPrimaryCard
                                            ? "bg-white/10 text-white border-white/20"
                                            : "bg-white/5 text-white/60 border-white/10 group-hover:border-white/20"
                                    }`}>
                                        {plan.badge}
                                    </div>

                                    <h3 className={`text-2xl font-serif font-bold mb-2 text-white`}>
                                        {plan.name}
                                    </h3>
                                    
                                    <p className={`text-sm leading-relaxed mb-8 min-h-[60px] ${
                                        isPrimaryCard ? "text-white/90" : "text-white/60"
                                    }`}>
                                        {plan.target}
                                    </p>

                                    {/* Includes List */}
                                    <div className="flex-grow space-y-8">
                                        <div>
                                            <p className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${plan.color}`}>
                                                Estrutura do plano:
                                            </p>
                                            <ul className="space-y-4 text-sm">
                                                {plan.includes.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-3">
                                                        <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border border-white/10 bg-white/5`}>
                                                            <Check className={`w-3 h-3 ${plan.color}`} />
                                                        </div>
                                                        <span className="text-white/80 leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Deliverables details block */}
                                        <div className={`border p-5 rounded-2xl space-y-3 text-xs bg-black/20 border-white/10`}>
                                            <div>
                                                <span className={`font-bold mr-1 ${plan.color}`}>Você recebe:</span>
                                                <span className="text-white/70 block mt-1 leading-relaxed">{plan.deliverables}</span>
                                            </div>
                                            <div className={`pt-3 border-t border-white/10`}>
                                                <span className={`font-bold mr-1 ${plan.color}`}>Limites operacionais:</span>
                                                <span className="text-white/50 block mt-1 leading-relaxed">{plan.limits}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action button */}
                                    <div className="mt-8 pt-6 border-t border-white/10">
                                        <Button
                                            asChild
                                            className={`w-full h-12 text-sm font-bold rounded-xl transition-all duration-300 ${
                                                isPrimaryCard
                                                    ? "bg-muda-yellow text-muda-navy hover:bg-white shadow-[0_0_20px_rgba(255,199,44,0.3)] hover:scale-[1.02]"
                                                    : "bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-white/30"
                                            }`}
                                        >
                                            <Link href={plan.link} target={plan.isExternal ? "_blank" : undefined} rel={plan.isExternal ? "noopener noreferrer" : undefined}>
                                                {plan.isExternal && <MessageCircle className="mr-2 w-4 h-4" />}
                                                {plan.cta}
                                                {!plan.isExternal && <ArrowRight className="ml-2 w-4 h-4" />}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA block */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-20 p-8 sm:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md max-w-2xl mx-auto shadow-xl text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-muda-green/10 via-transparent to-muda-blue/10 pointer-events-none" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-serif font-bold text-white mb-3">Dúvidas sobre a rota ideal?</h3>
                        <p className="text-white/60 text-sm sm:text-base mb-8 max-w-lg mx-auto">
                            O diagnóstico é rápido, gratuito e oferece direcionamento imediato sobre a viabilidade legal do seu negócio no Paraguai.
                        </p>
                        <Button
                            size="lg"
                            asChild
                            className="bg-white hover:bg-white/90 text-muda-navy h-14 px-8 rounded-xl font-bold shadow-lg transition-transform hover:scale-105"
                        >
                            <Link href="/diagnostico">
                                Fazer diagnóstico gratuito
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
