"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Building2, ArrowRight } from "lucide-react";
import { BrazilFlag, ParaguayFlag } from "@/components/ui/svg-flags";

const pillars = [
    { icon: FileText, label: "1. Diagnóstico Estratégico" },
    { icon: Building2, label: "2. Execução & Registros" },
    { icon: ShieldCheck, label: "3. Compliance Contínuo" },
];

export function BridgeSection(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden isolate">
            {/* Background Orbs to bring it to life */}
            <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-muda-green/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-muda-red/10 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-foreground tracking-tight mb-6 leading-tight"
                    >
                        A transição não é improviso. <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-blue to-muda-red font-bold">É engenharia jurídica e governança entre nações.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                    >
                        Diante de um cenário fiscal dinâmico, a conformidade binacional é a chave. A Muda Paraguai conduz uma jornada estruturada para planejar, executar e manter sua nova operação em total regularidade.
                    </motion.p>
                </div>

                {/* Bridge Visualization Container (Glassmorphic) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-4xl mx-auto relative group"
                >
                    {/* Pulsing glow behind the card */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-muda-green via-muda-yellow to-muda-red rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                    
                    <div className="relative bg-white/80 backdrop-blur-2xl border border-white rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden">
                        {/* Subtle decorative background in the card */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

                        {/* Top: Brasil → Paraguai flow */}
                        <div className="relative flex items-center justify-between mb-12 sm:mb-16 z-10">
                            {/* Brasil Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", bounce: 0.4, delay: 0.3 }}
                                className="flex flex-col items-center gap-3 z-10"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-border flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-muda-green/30 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-br from-muda-green/10 to-transparent" />
                                    <BrazilFlag width={44} height={31} />
                                </div>
                                <div className="text-center">
                                    <p className="font-serif font-bold text-foreground text-lg">Brasil</p>
                                    <p className="text-[10px] sm:text-xs text-muda-red font-bold uppercase tracking-widest mt-1">27% a 34% de carga</p>
                                </div>
                            </motion.div>

                            {/* Bridge Flow Line */}
                            <div className="flex-1 mx-6 sm:mx-12 relative">
                                {/* Static track */}
                                <div className="w-full h-1 bg-secondary rounded-full absolute top-1/2 -translate-y-1/2 overflow-hidden shadow-inner" />

                                {/* Animated flow (transitions colors) */}
                                <motion.div
                                    className="absolute top-1/2 -translate-y-1/2 left-0 h-1 rounded-full bg-gradient-to-r from-muda-green via-muda-yellow to-muda-red"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
                                />

                                {/* Arrow markers running */}
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-4 overflow-hidden pointer-events-none flex items-center justify-between px-4">
                                    <motion.div 
                                        className="text-muda-blue/30"
                                        animate={{ x: [0, 20, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </div>

                                {/* Center Label */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-7">
                                    <motion.span
                                        initial={{ opacity: 0, y: 5 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.2 }}
                                        className="text-[10px] sm:text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-border"
                                    >
                                        Transição Binacional
                                    </motion.span>
                                </div>
                            </div>

                            {/* Paraguai Side */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", bounce: 0.4, delay: 0.6 }}
                                className="flex flex-col items-center gap-3 z-10"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-border flex items-center justify-center shadow-lg relative overflow-hidden group-hover:border-muda-blue/30 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-br from-muda-red/10 to-transparent" />
                                    <ParaguayFlag width={44} height={31} />
                                </div>
                                <div className="text-center">
                                    <p className="font-serif font-bold text-foreground text-lg">Paraguai</p>
                                    <p className="text-[10px] sm:text-xs text-muda-green font-bold uppercase tracking-widest mt-1">1% a 10% de carga</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: 3 Pillars with vibrant hover effects */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border z-10 relative">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={pillar.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group/pillar"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-secondary border border-border flex items-center justify-center flex-shrink-0 group-hover/pillar:bg-muda-blue group-hover/pillar:border-muda-blue transition-colors duration-300">
                                        <pillar.icon className="w-5 h-5 text-primary group-hover/pillar:text-white transition-colors duration-300" />
                                    </div>
                                    <p className="text-xs sm:text-sm font-bold text-foreground/80">{pillar.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
