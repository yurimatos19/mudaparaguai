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
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden text-muda-offwhite">
            {/* Top border gradient: green → red */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-muda-green via-muda-green/30 to-muda-red pointer-events-none" />

            {/* Background Decor */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-muda-blue/20 rounded-full blur-3xl mix-blend-screen" />
                <div className="absolute bottom-40 left-10 w-64 h-64 bg-muda-red/10 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    {/* ShieldAlert with glowing ring */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center mx-auto mb-8 w-fit"
                    >
                        {/* Outer glow ring */}
                        <div className="absolute w-32 h-32 rounded-full bg-white/5 blur-xl animate-pulse" />
                        <div className="absolute w-28 h-28 rounded-full border border-white/10" />
                        <div className="absolute w-24 h-24 rounded-full border border-white/5" />
                        {/* Icon container */}
                        <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.08)] relative z-10">
                            <ShieldAlert className="w-10 h-10 text-white" />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-sora font-semibold text-white tracking-tight mb-6"
                    >
                        Compliance não é seção.{" "}
                        <br />
                        <span className="bg-gradient-to-r from-muda-green via-white/80 to-muda-blue bg-clip-text text-transparent">
                            É política.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        Se a intenção for sonegação, fraude, ocultação ou qualquer atalho ilícito, nós <strong className="text-muda-red font-semibold">não seguimos</strong>. A MUDA PARAGUAI existe para estruturar legado — não risco penal.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Nós Fazemos — green left border */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="p-8 h-full bg-white/5 border-white/10 backdrop-blur-md border-l-4 border-l-muda-green rounded-2xl">
                            <h3 className="text-xl font-sora font-semibold text-white mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-muda-green" />
                                Nós Fazemos
                            </h3>
                            <ul className="space-y-4">
                                {doList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-muda-green mt-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>

                    {/* Não Fazemos — red left border */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card className="p-8 h-full bg-white/5 border-white/10 backdrop-blur-md border-l-4 border-l-muda-red rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-muda-red/10 rounded-full blur-[50px] mix-blend-screen pointer-events-none" />
                            <h3 className="text-xl font-sora font-semibold text-muda-red mb-6 flex items-center gap-3">
                                <XCircle className="w-6 h-6 text-muda-red" />
                                Não Fazemos
                            </h3>
                            <ul className="space-y-4">
                                {dontList.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-white/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-muda-red mt-2 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                </div>

                {/* FATCA/OCDE final statement */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10 text-center px-4"
                >
                    <p className="text-sm text-white/40 max-w-2xl mx-auto leading-relaxed tracking-wide">
                        <span className="text-white/60 font-semibold">MUDA PARAGUAI</span> adota o padrão FATCA/OCDE de transparência. Todas as operações são declaradas às autoridades competentes de ambos os países.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
