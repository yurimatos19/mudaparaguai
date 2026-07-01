"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PROCESS_STEPS as steps } from "@/config/constants";

export function ProcessTimeline(): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden" id="como-funciona">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10" ref={containerRef}>
                
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-muda-green/20 bg-muda-green/10 text-muda-green text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
                    >
                        Método Validado
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-foreground tracking-tight mb-6"
                    >
                        A Jornada de Estruturação
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Do diagnóstico inicial à operação mensal, conduzidos com critério e segurança jurídica em um fluxo 100% transparente.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Left vertical static track */}
                    <div className="absolute left-6 lg:left-12 top-2 bottom-2 w-1.5 rounded-full bg-border/50" />

                    {/* Left vertical animated progress line (Vibrant Gradient) */}
                    <motion.div
                        className="absolute left-6 lg:left-12 top-2 bottom-2 w-1.5 rounded-full bg-gradient-to-b from-muda-green via-muda-yellow to-muda-red origin-top z-10 shadow-[0_0_10px_rgba(0,130,56,0.5)]"
                        style={{ scaleY }}
                    />

                    <div className="space-y-12 pl-16 lg:pl-28">
                        {steps.map((step, index) => {
                            // Determine step color
                            const colors = ["text-muda-green border-muda-green", "text-muda-yellow border-muda-yellow", "text-muda-blue border-muda-blue", "text-muda-red border-muda-red"];
                            const colorTheme = colors[index % colors.length];

                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                                    className="relative group"
                                >
                                    {/* Timeline Circle Indicator */}
                                    <div className="absolute -left-[54px] lg:-left-[76px] top-8 w-6 h-6 rounded-full border-4 border-background bg-border group-hover:bg-primary group-hover:scale-125 transition-all duration-300 z-20 flex items-center justify-center shadow-md">
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    </div>

                                    {/* Content Card (Glass & Hover FX) */}
                                    <div className="relative bg-white/70 backdrop-blur-md border border-white rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                                        
                                        {/* Subtle colored glow inside card on hover */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-white shadow-sm ${colorTheme}`}>
                                                    PASSO 0{index + 1}
                                                </span>
                                                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground tracking-tight">{step.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 relative z-10 max-w-2xl">{step.description}</p>

                                        {/* Deliverables details block */}
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border/80 text-xs sm:text-sm relative z-10">
                                            <div className="space-y-1.5 p-3 rounded-xl bg-secondary/50 border border-border/50">
                                                <span className="font-bold text-primary block uppercase tracking-widest text-[9px]">Você recebe:</span>
                                                <span className="text-foreground/90 font-medium leading-relaxed block">{step.receives}</span>
                                            </div>
                                            <div className="space-y-1.5 p-3 rounded-xl bg-secondary/50 border border-border/50">
                                                <span className="font-bold text-primary block uppercase tracking-widest text-[9px]">Duração média:</span>
                                                <span className="text-foreground/90 font-medium leading-relaxed block">{step.duration}</span>
                                            </div>
                                            <div className="space-y-1.5 p-3 rounded-xl bg-muda-red/5 border border-muda-red/10">
                                                <span className="font-bold text-muda-red block uppercase tracking-widest text-[9px]">Mitigação de risco:</span>
                                                <span className="text-foreground/90 font-medium leading-relaxed block">{step.risks}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
