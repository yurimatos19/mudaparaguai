"use client";

import { motion } from "framer-motion";
import { fadeUpItem, scaleInItem } from "@/lib/animations";
import { AlertTriangle, TrendingUp, ShieldCheck, Scale, Globe2 } from "lucide-react";

const features = [
    {
        icon: TrendingUp,
        iconColor: "text-muda-green",
        iconBg: "bg-muda-green/10",
        borderColor: "border-muda-green/20",
        title: "Carga Previsível",
        description: "Sistema 10/10/10 bem definido. Sem surpresas tributárias, sem variações arbitrárias — você sabe exatamente o que paga.",
    },
    {
        icon: ShieldCheck,
        iconColor: "text-muda-blue",
        iconBg: "bg-muda-blue/10",
        borderColor: "border-muda-blue/20",
        title: "Operação Blindada",
        description: "Quando há substância econômica real, a estrutura resiste a qualquer questionamento fiscal nos dois países.",
    },
    {
        icon: Scale,
        iconColor: "text-muda-yellow",
        iconBg: "bg-muda-yellow/10",
        borderColor: "border-muda-yellow/20",
        title: "Regulação Clara",
        description: "Lei de Maquila e incentivos reais respaldados por legislação estável. Nenhum \"jeitinho\" — apenas direito aplicado.",
    },
    {
        icon: Globe2,
        iconColor: "text-muda-blue",
        iconBg: "bg-muda-blue/10",
        borderColor: "border-muda-blue/20",
        title: "Crescimento Real",
        description: "PIB crescendo 4%+ ao ano. Mercado em expansão para receber investimento produtivo.",
    },
];

export function WhyParaguay(): React.ReactElement {
    return (
        <section className="py-24 lg:py-40 bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-muda-green/5 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <motion.div
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-sora font-semibold text-white tracking-tight mb-6">
                            Pare de perder para os impostos.{" "}
                            <br />
                            <span className="bg-gradient-to-r from-muda-green via-muda-green/90 to-muda-green/60 bg-clip-text text-transparent">
                                Mas faça isso com inteligência.
                            </span>
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed mb-10">
                            A estrutura paraguaia é moldada para atrair capital produtivo através de simplicidade tributária (o famoso sistema 10/10/10). No entanto, não há "mágica" para salvar empresas do caos brasileiro: a sua nova eficiência fiscal depende inteiramente da construção de uma operação com base legal forte, faturamento real e governança transparente.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className={`flex flex-col gap-3 p-5 rounded-2xl bg-white/3 border ${feature.borderColor} backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300`}
                                >
                                    <div className={`w-10 h-10 rounded-xl ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                                        <feature.icon className={`w-5 h-5 ${feature.iconColor}`} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-sora font-semibold text-foreground text-base mb-1">{feature.title}</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Disclaimer Box */}
                    <motion.div
                        variants={scaleInItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="pt-8 lg:pt-0"
                    >
                        <div className="bg-card/40 backdrop-blur-xl border border-muda-red/30 rounded-[2rem] p-10 shadow-2xl shadow-muda-red/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-muda-red/5 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-muda-yellow/5 rounded-full blur-3xl" />

                            <div className="flex flex-col items-center text-center gap-6 relative z-10">
                                {/* Prominent AlertTriangle with outer ring */}
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute w-24 h-24 rounded-full bg-muda-red/10 animate-pulse" />
                                    <div className="absolute w-20 h-20 rounded-full border border-muda-red/20" />
                                    <div className="w-16 h-16 rounded-2xl bg-muda-red/15 flex items-center justify-center text-muda-red relative z-10 border border-muda-red/25">
                                        <AlertTriangle className="w-9 h-9" aria-hidden="true" />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muda-red/80 mb-2">Aviso Importante</p>
                                    <h3 className="text-2xl font-sora font-semibold text-foreground">
                                        Aviso de Compliance
                                    </h3>
                                </div>

                                <p className="text-base text-foreground/75 leading-relaxed font-medium">
                                    Não prometemos economia garantida. A análise é caso a caso e depende de enquadramento jurídico, operação real e conformidade fiscal.
                                </p>

                                <div className="w-full h-px bg-border/50 my-2" />

                                <p className="text-xs text-foreground/50 uppercase tracking-widest font-semibold">
                                    Tudo começa com o diagnóstico
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
