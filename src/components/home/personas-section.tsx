"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpItem } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import {
    Laptop,
    Factory,
    Globe2,
    TrendingUp,
    Zap,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import Link from "next/link";

import { PERSONAS as personas } from "@/config/constants";

// Impact stat per persona
const IMPACT_STATS: Record<string, { label: string; value: string }> = {
    digital: { value: "Até 70%", label: "de economia tributária" },
    industrial: { value: "1%", label: "de imposto via Maquila" },
    global: { value: "Tributação", label: "Territorial" },
};

// Color maps for Tailwind (dynamic classes need to be fully written)
const COLOR_MAP: Record<string, {
    border: string;
    borderActive: string;
    glow: string;
    ring: string;
    iconBg: string;
    iconText: string;
    checkColor: string;
    statBg: string;
    statBorder: string;
    statValue: string;
}> = {
    "muda-green": {
        border: "border-l-muda-green",
        borderActive: "border-muda-green/50",
        glow: "shadow-[0_0_30px_-5px_rgba(20,122,49,0.5)]",
        ring: "ring-muda-green/20",
        iconBg: "bg-muda-green",
        iconText: "text-white",
        checkColor: "text-muda-green",
        statBg: "bg-muda-green/10",
        statBorder: "border-muda-green/25",
        statValue: "text-muda-green",
    },
    "muda-yellow": {
        border: "border-l-muda-yellow",
        borderActive: "border-muda-yellow/50",
        glow: "shadow-[0_0_30px_-5px_rgba(229,178,0,0.5)]",
        ring: "ring-muda-yellow/20",
        iconBg: "bg-muda-yellow",
        iconText: "text-black",
        checkColor: "text-muda-yellow",
        statBg: "bg-muda-yellow/10",
        statBorder: "border-muda-yellow/25",
        statValue: "text-muda-yellow",
    },
    "muda-blue": {
        border: "border-l-muda-blue",
        borderActive: "border-muda-blue/50",
        glow: "shadow-[0_0_30px_-5px_rgba(21,69,147,0.5)]",
        ring: "ring-muda-blue/20",
        iconBg: "bg-muda-blue",
        iconText: "text-white",
        checkColor: "text-muda-blue",
        statBg: "bg-muda-blue/10",
        statBorder: "border-muda-blue/25",
        statValue: "text-muda-blue",
    },
};

export function PersonasSection(): React.ReactElement {
    const [activeTab, setActiveTab] = useState(personas[0].id);

    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden isolate" id="para-quem">
            {/* Glowing Orbs behind the section matching the active tab */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] blur-[120px] rounded-full opacity-20 -z-10 transition-colors duration-1000 ${activeTab === "digital" ? "bg-muda-green" :
                activeTab === "industrial" ? "bg-muda-yellow" :
                    "bg-muda-blue"
                }`} />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-16 lg:mb-20">
                    <motion.h2
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-sora font-semibold text-white tracking-tighter mb-6"
                    >
                        Para quem construímos <br className="hidden sm:block" /> a <span className="text-glow-sm">Muda Paraguai</span>?
                    </motion.h2>
                    <motion.p
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto tracking-tight leading-relaxed"
                    >
                        Três cenários distintos de expansão. Mesma base de excelência e conformidade. Escolha o seu perfil:
                    </motion.p>
                </div>

                {/* Persona Tabs Mobile Scroller / Desktop Grid */}
                <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-4 lg:gap-6 mb-12 sm:pb-0 pb-4 snap-x sm:snap-none hide-scrollbar">
                    {personas.map((persona) => {
                        const colors = COLOR_MAP[persona.color];
                        const isActive = activeTab === persona.id;
                        return (
                            <button
                                key={persona.id}
                                onClick={() => setActiveTab(persona.id)}
                                className={`flex-shrink-0 w-72 sm:w-auto text-left p-6 lg:p-8 rounded-2xl sm:rounded-[2rem] border-l-4 border border-white/5 transition-all duration-300 relative snap-center ${colors.border} ${isActive
                                    ? `bg-[#040C18]/80 backdrop-blur-md ${colors.borderActive} ${colors.glow} -translate-y-1 ring-1 ${colors.ring}`
                                    : 'bg-card/30 hover:bg-card/50 hover:border-white/10'
                                    }`}
                            >
                                {/* Inner active glow */}
                                {isActive && (
                                    <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b from-${persona.color}/10 to-transparent pointer-events-none opacity-50`} />
                                )}

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${isActive ? `${colors.iconBg} ${colors.iconText} shadow-md` : 'bg-white/5 text-white/50'
                                        }`}>
                                        <persona.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className={`font-sora font-bold text-xl lg:text-2xl tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'
                                        }`}>
                                        {persona.title}
                                    </h3>
                                    {isActive && (
                                        <motion.p
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`mt-2 text-xs font-semibold uppercase tracking-widest ${colors.statValue}`}
                                        >
                                            {IMPACT_STATS[persona.id].value} {IMPACT_STATS[persona.id].label}
                                        </motion.p>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Animated Content Area */}
                <div className="relative w-full">
                    <AnimatePresence mode="wait">
                        {personas.map((persona) => {
                            const colors = COLOR_MAP[persona.color];
                            const stat = IMPACT_STATS[persona.id];
                            return activeTab === persona.id && (
                                <motion.div
                                    key={persona.id}
                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="flex flex-col lg:flex-row gap-8 lg:gap-12"
                                >
                                    <div className="w-full lg:w-1/2">
                                        <SpotlightCard glowColor={persona.spotlightGlow} className={`p-8 lg:p-12 bg-card/60 backdrop-blur-xl border-white/5 ${persona.glow} rounded-[2rem] flex flex-col`}>
                                            <div className="mb-6">
                                                <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full bg-${persona.color} animate-pulse`} />
                                                    Cenário Base
                                                </h4>
                                                <p className="text-foreground/80 text-lg leading-relaxed font-medium">
                                                    {persona.description}
                                                </p>
                                            </div>

                                            {/* Impact Stat Highlight Box */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.3, delay: 0.15 }}
                                                className={`mb-6 rounded-2xl p-5 flex items-center gap-5 ${colors.statBg} border ${colors.statBorder}`}
                                            >
                                                <div className={`text-4xl font-sora font-black tracking-tight ${colors.statValue}`}>
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm text-white/70 font-medium leading-snug">
                                                    {stat.label}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.2 }}
                                                className="mt-auto bg-destructive/5 border border-destructive/10 rounded-xl p-5 mb-4 relative z-10 hover:-translate-y-1 transition duration-300"
                                            >
                                                <p className="text-xs font-bold text-destructive uppercase tracking-widest mb-1.5 flex items-center gap-2">
                                                    DOR PRINCIPAL
                                                </p>
                                                <p className="text-white/80 text-sm">{persona.pain}</p>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: 0.28 }}
                                                className={`bg-${persona.color}/10 border border-${persona.color}/20 rounded-xl p-5 relative z-10 hover:-translate-y-1 transition duration-300`}
                                            >
                                                <p className={`text-xs font-bold text-${persona.color} uppercase tracking-widest mb-1.5 flex items-center gap-2`}>
                                                    ROTA DA MUDA PARAGUAI
                                                </p>
                                                <p className="text-white/90 font-medium text-sm leading-relaxed">{persona.solution}</p>
                                            </motion.div>
                                        </SpotlightCard>
                                    </div>

                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="pl-0 lg:pl-4">
                                            <h4 className="font-sora text-3xl lg:text-4xl font-semibold mb-8 tracking-tight">Vantagens Diretas</h4>

                                            <div className="space-y-6 mb-12">
                                                {persona.benefits.map((benefit, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -12 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.3, delay: 0.1 + idx * 0.08 }}
                                                        className="flex items-start gap-4"
                                                    >
                                                        <div className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-full ${persona.bgLight} border ${persona.border} flex items-center justify-center`}>
                                                            <CheckCircle2 className={`w-4 h-4 ${colors.checkColor}`} />
                                                        </div>
                                                        <p className="text-xl text-foreground/80 font-medium">{benefit}</p>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            <Button size="lg" className={`w-full sm:w-auto h-16 px-10 rounded-2xl font-bold bg-${persona.color} hover:opacity-90 transition-opacity text-white shadow-lg`} asChild>
                                                <Link href="/diagnostico">
                                                    Fazer o Diagnóstico de Fit
                                                    <ArrowRight className="ml-3 w-5 h-5" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
