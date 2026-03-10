"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Building2, ArrowRight } from "lucide-react";

const pillars = [
    {
        icon: FileText,
        label: "Diagnóstico & Estratégia",
        color: "muda-green",
    },
    {
        icon: Building2,
        label: "Execução & Registros",
        color: "muda-yellow",
    },
    {
        icon: ShieldCheck,
        label: "Compliance Contínuo",
        color: "muda-blue",
    },
];

export function BridgeSection(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden isolate">


            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl lg:text-5xl font-sora font-semibold text-white tracking-tighter mb-6 leading-tight"
                    >
                        A ponte não é emoção. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-green via-muda-yellow to-muda-blue">É engenharia jurídica + execução.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto tracking-tight"
                    >
                        Quando o ambiente fica imprevisível, o caminho não é improviso. É estratégia, governança e documentação. A <strong className="font-semibold text-white">MUDA PARAGUAI</strong> conduz uma jornada assistida para estruturar, executar e operar com padrão auditável.
                    </motion.p>
                </div>

                {/* Bridge Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Backdrop glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-muda-green/20 via-muda-yellow/10 to-muda-blue/20 blur-3xl opacity-40 pointer-events-none rounded-[3rem]" />

                    <div className="relative bg-[#040C18]/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/5">
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-muda-green/5 via-transparent to-muda-blue/5 pointer-events-none" />

                        {/* Top: Brasil → Paraguai */}
                        <div className="relative flex items-center justify-between mb-10 sm:mb-14">
                            {/* Brasil Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muda-green/10 border border-muda-green/30 flex items-center justify-center shadow-lg shadow-muda-green/10">
                                    <span className="text-2xl">🇧🇷</span>
                                </div>
                                <div className="text-center">
                                    <p className="font-sora font-bold text-white text-base sm:text-lg">Brasil</p>
                                    <p className="text-xs text-muda-red/80 font-medium mt-0.5">27–34% de carga</p>
                                </div>
                            </motion.div>

                            {/* Bridge Center */}
                            <div className="flex-1 mx-4 sm:mx-8 relative">
                                {/* Static track */}
                                <div className="w-full h-0.5 bg-white/10 rounded-full absolute top-1/2 -translate-y-1/2" />

                                {/* Animated flow */}
                                <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 left-0 h-0.5 bg-gradient-to-r from-muda-green via-muda-yellow to-muda-blue rounded-full"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.7, ease: "easeInOut" }}
                                />

                                {/* Arrow */}
                                <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 right-0"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 2.2 }}
                                >
                                    <ArrowRight className="w-4 h-4 text-muda-blue" />
                                </motion.div>

                                {/* Center Label */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-5">
                                    <motion.span
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5 }}
                                        className="text-[10px] sm:text-xs font-bold text-foreground/40 uppercase tracking-[0.15em] whitespace-nowrap mt-3 block text-center"
                                    >
                                        Transição Auditável
                                    </motion.span>
                                </div>
                            </div>

                            {/* Paraguai Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col items-center gap-3"
                            >
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-muda-blue/10 border border-muda-blue/30 flex items-center justify-center shadow-lg shadow-muda-blue/10">
                                    <span className="text-2xl">🇵🇾</span>
                                </div>
                                <div className="text-center">
                                    <p className="font-sora font-bold text-white text-base sm:text-lg">Paraguai</p>
                                    <p className="text-xs text-muda-green/80 font-medium mt-0.5">1–10% de carga</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: 3 Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-8 border-t border-white/10">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={pillar.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + i * 0.15 }}
                                    className={`flex items-center gap-3 p-4 rounded-xl bg-${pillar.color}/5 border border-${pillar.color}/15 group hover:bg-${pillar.color}/10 transition-colors duration-300`}
                                >
                                    <div className={`w-9 h-9 rounded-lg bg-${pillar.color}/10 flex items-center justify-center flex-shrink-0`}>
                                        <pillar.icon className={`w-4 h-4 text-${pillar.color}`} />
                                    </div>
                                    <p className="text-sm font-semibold text-white/80">{pillar.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
