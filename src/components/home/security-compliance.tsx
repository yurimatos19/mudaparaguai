"use client";

import { motion } from "framer-motion";
import { ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const doList = [
    "Estruturação baseada e fundamentada em Lei.",
    "Estratégia corporativa legítima.",
    "Transferência real de operação/substância econômica.",
    "Transparência com autoridades fiscais de ambos os países."
];

const dontList = [
    "Ocultação patrimonial ilícita ou fraude a credores.",
    "Uso de 'laranjas' ou testas de ferro.",
    "Sonegação fiscal criminosa.",
    "Lavagem de dinheiro ou esquemas sem lastro contábil."
];

export function SecurityCompliance(): React.ReactElement {
    return (
        <section className="py-20 lg:py-28 bg-background border-t border-border relative overflow-hidden">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    {/* ShieldAlert with subtle background */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center mx-auto mb-6 w-fit"
                    >
                        <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border shadow-sm">
                            <ShieldAlert className="w-6 h-6 text-primary" />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-3xl sm:text-4xl lg:text-4xl font-serif font-normal text-foreground tracking-tight mb-4"
                    >
                        Compliance não é uma seção. <br />
                        <span className="text-primary italic font-semibold">
                            É política institucional.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-muted-foreground max-w-xl mx-auto"
                    >
                        Se a intenção for atalho fiscal, sonegação ou fraude, nós <strong className="text-muda-red font-semibold">não atendemos</strong>. A Muda Paraguai existe para estruturar conformidade e legado.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nós Fazemos */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        <Card className="p-6 sm:p-8 h-full bg-card border border-border border-l-4 border-l-muda-green rounded-2xl shadow-sm">
                            <h3 className="text-lg font-serif font-bold text-foreground mb-5 flex items-center gap-2.5">
                                <CheckCircle2 className="w-5 h-5 text-muda-green" />
                                Nós Fazemos
                            </h3>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                {doList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-muda-green mt-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>

                    {/* Não Fazemos */}
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        <Card className="p-6 sm:p-8 h-full bg-card border border-border border-l-4 border-l-muda-red rounded-2xl shadow-sm">
                            <h3 className="text-lg font-serif font-bold text-muda-red mb-5 flex items-center gap-2.5">
                                <XCircle className="w-5 h-5 text-muda-red" />
                                Não Fazemos
                            </h3>
                            <ul className="space-y-4 text-sm text-muted-foreground">
                                {dontList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-muda-red mt-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                </div>

                {/* FATCA/OCDE Statement */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-10 text-center px-4"
                >
                    <p className="text-xs text-muted-foreground/80 max-w-xl mx-auto leading-relaxed">
                        A <span className="text-foreground/90 font-semibold">Muda Paraguai</span> atua sob os padrões FATCA/OCDE de transparência. Toda transferência e reorganização de ativos é executada em estrita conformidade contábil e declaratória.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
