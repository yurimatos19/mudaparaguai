"use client";

import { motion } from "framer-motion";
import { fadeUpItem, scaleInItem } from "@/lib/animations";
import { AlertTriangle, TrendingUp, ShieldCheck, Scale, Globe2 } from "lucide-react";
import { ParaguayFlag } from "@/components/ui/svg-flags";

const features = [
    {
        icon: TrendingUp,
        title: "Carga Previsível",
        description: "Sistema 10/10/10 bem definido. Sem surpresas tributárias, sem variações arbitrárias — você sabe exatamente o que paga.",
    },
    {
        icon: ShieldCheck,
        title: "Operação Blindada",
        description: "Quando há substância econômica real, a estrutura resiste a qualquer questionamento fiscal nos dois países.",
    },
    {
        icon: Scale,
        title: "Regulação Clara",
        description: "Lei de Maquila e incentivos reais respaldados por legislação estável. Nenhum \"jeitinho\" — apenas direito aplicado.",
    },
    {
        icon: Globe2,
        title: "Crescimento Real",
        description: "PIB crescendo 4%+ ao ano. Mercado em expansão para receber investimento produtivo.",
    },
];

export function WhyParaguay(): React.ReactElement {
    return (
        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    <motion.div
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-normal text-foreground tracking-tight mb-6">
                            Pare de perder para os impostos.{" "}
                            <br />
                            <span className="text-primary italic font-semibold">
                                Mas faça isso com inteligência.
                            </span>
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed mb-8">
                            A estrutura paraguaia é moldada para atrair capital produtivo através de simplicidade tributária (o famoso sistema 10/10/10). No entanto, não há "mágica" para salvar empresas do caos brasileiro: a sua nova eficiência fiscal depende inteiramente da construção de uma operação com base legal forte, faturamento real e governança transparente.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="flex flex-col gap-2.5 p-5 rounded-2xl bg-card border border-border/80 hover:shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-shadow duration-200"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                                        <feature.icon className="w-4 h-4 text-primary" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-bold text-foreground text-sm mb-1">{feature.title}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Institutional Legal Disclaimer Box */}
                    <motion.div
                        variants={scaleInItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="pt-8 lg:pt-0"
                    >
                        <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.02)]">
                            {/* Paraguay Flag Tricolor Top Stripe */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                                <div className="flex-1 bg-[#D52B1E]" />
                                <div className="flex-1 bg-[#FFFFFF]" />
                                <div className="flex-1 bg-[#0038A8]" />
                            </div>
                            
                            <div className="flex flex-col items-center text-center gap-5 relative z-10 pt-2">
                                <div className="w-10 h-10 rounded-full bg-muda-red/10 flex items-center justify-center text-muda-red border border-muda-red/15">
                                    <AlertTriangle className="w-5 h-5" aria-hidden="true" />
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-muda-red mb-1 flex items-center justify-center gap-1.5">
                                        <ParaguayFlag width={14} height={9} />
                                        Aviso de Compliance
                                    </p>
                                    <h3 className="text-xl font-serif font-normal text-foreground">
                                        Critério de Elegibilidade
                                    </h3>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Não oferecemos promessas automáticas de economia. A viabilidade da migração tributária depende estritamente do enquadramento societário, de atividades reais e do cumprimento rigoroso das obrigações fiscais bilaterais.
                                </p>

                                <div className="w-full h-px bg-border/80 my-1" />

                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold">
                                    Diagnóstico Prévio Obrigatório
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
