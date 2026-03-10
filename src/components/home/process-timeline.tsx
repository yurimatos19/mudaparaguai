"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { PROCESS_STEPS as steps } from "@/config/constants";
import { SpotlightCard } from "@/components/ui/spotlight-card";

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
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden" id="como-funciona">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10" ref={containerRef}>
                <div className="text-center mb-20 lg:mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-sora font-semibold text-white tracking-tighter mb-6"
                    >
                        Jornada Assistida
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg lg:text-xl text-foreground/60 max-w-2xl mx-auto tracking-tight leading-relaxed"
                    >
                        Do diagnóstico à operação contínua. Sem mágica, apenas método auditável.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Background static line */}
                    <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 -ml-[0.5px] bg-black/5 dark:bg-white/5 rounded-full hidden md:block" />

                    {/* Animated vertical progress bar */}
                    <motion.div
                        className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-1 -ml-[0.5px] bg-gradient-to-b from-muda-green via-muda-yellow to-muda-blue rounded-full origin-top hidden md:block shadow-[0_0_15px_rgba(26,79,163,0.6)] z-10"
                        style={{ scaleY }}
                    />

                    <div className="space-y-12 lg:space-y-32">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={step.title} className={`relative flex flex-col lg:flex-row items-start ${isEven ? 'lg:flex-row-reverse' : ''} gap-8 lg:gap-16`}>

                                    {/* Center Node (Hidden on Mobile) */}
                                    <div className="hidden md:flex absolute left-8 lg:left-1/2 top-0 lg:top-8 -translate-x-1/2 items-center justify-center w-14 h-14 rounded-full border-4 border-background bg-background z-20 shadow-md">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.bgColor} ${step.color} ring-1 ${step.borderColor} shadow-inner`}>
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                    </div>

                                    {/* Empty space for alternating layout */}
                                    <div className="hidden lg:block lg:w-1/2" />

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
                                        className="w-full lg:w-1/2 relative z-30 pl-20 md:pl-28 lg:pl-0"
                                    >
                                        {/* Mobile Node */}
                                        <div className={`md:hidden absolute left-2 top-2 w-12 h-12 rounded-full flex items-center justify-center ${step.bgColor} ${step.color} ring-1 ${step.borderColor} shadow-lg z-20`}>
                                            <step.icon className="w-5 h-5" />
                                        </div>

                                        <SpotlightCard className={`group relative bg-card/60 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 shadow-2xl hover:border-white/20 hover:shadow-muda-green/10 transition-all duration-500 overflow-hidden`}>
                                            {/* Decorative side accent line */}
                                            <div className={`absolute -top-8 -bottom-8 -left-8 w-1.5 ${step.bgColor.replace('/10', '')} opacity-80 group-hover:w-2 transition-all duration-300`} />

                                            {/* Backlight glow on hover */}
                                            <div className={`absolute top-0 right-0 w-48 h-48 ${step.glow} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                            <div className="relative z-10 w-full flex flex-col justify-start text-left">
                                                <div className="flex items-center gap-4 mb-5">
                                                    <span className={`text-sm font-black ${step.color} bg-card px-3 py-1 rounded-full shadow-md ring-1 ${step.borderColor} font-sora`}>0{index + 1}</span>
                                                    <h3 className="text-2xl font-sora font-semibold text-white tracking-tight">{step.title}</h3>
                                                </div>
                                                <p className="text-foreground/70 mb-8 text-base leading-relaxed">{step.description}</p>

                                                <div className="space-y-4 bg-[#0B1F3A]/60 rounded-2xl p-6 border border-white/5 text-sm w-full">
                                                    <div>
                                                        <p className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-muda-green shadow-[0_0_5px_rgba(30,142,62,0.5)]" />
                                                            Você recebe:
                                                        </p>
                                                        <p className="text-foreground/70 ml-4 font-medium">{step.receives}</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-muda-yellow shadow-[0_0_5px_rgba(244,195,0,0.5)]" />
                                                            Duração típica:
                                                        </p>
                                                        <p className="text-foreground/70 ml-4 font-medium">{step.duration}</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground mb-1.5 flex items-center gap-2">
                                                            <div className="w-2 h-2 rounded-full bg-muda-red shadow-[0_0_5px_rgba(211,47,47,0.5)]" />
                                                            Riscos mitigados:
                                                        </p>
                                                        <p className="text-foreground/70 ml-4 font-medium">{step.risks}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
