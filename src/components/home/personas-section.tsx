"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { PERSONAS } from "@/config/constants";

export function PersonasSection(): React.ReactElement {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden" id="para-quem">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-muda-yellow/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-foreground tracking-tight mb-6"
                    >
                        Para quem é a estrutura no Paraguai?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Soluções desenhadas especificamente para diferentes perfis de negócios que buscam segurança jurídica e escala.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Navigation Tabs */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3">
                        {PERSONAS.map((persona, index) => {
                            const Icon = persona.icon;
                            const isActive = activeTab === index;
                            return (
                                <button
                                    key={persona.title}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative text-left p-5 rounded-2xl transition-all duration-300 border overflow-hidden group ${
                                        isActive 
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]" 
                                        : "bg-white border-border text-foreground hover:bg-secondary hover:border-muda-blue/30"
                                    }`}
                                >
                                    {/* Subtle pulse background when active */}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activePersonaBg"
                                            className="absolute inset-0 bg-gradient-to-r from-muda-blue/20 to-transparent"
                                        />
                                    )}

                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                                            isActive ? "bg-white/20 text-white" : "bg-secondary text-primary group-hover:bg-muda-blue/10"
                                        }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg mb-1 ${isActive ? "text-white" : ""}`}>{persona.title}</h3>
                                            <p className={`text-xs ${isActive ? "text-white/80" : "text-muted-foreground"}`}>{persona.subtitle}</p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content Area */}
                    <div className="w-full lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                                transition={{ duration: 0.4 }}
                                className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
                            >
                                {/* Decorative gradient corner */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-muda-blue/10 rounded-full blur-3xl pointer-events-none" />

                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-4">
                                    {PERSONAS[activeTab].title}
                                </h3>
                                <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
                                    {PERSONAS[activeTab].description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                                    {PERSONAS[activeTab].benefits.map((benefit) => (
                                        <div key={benefit} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-muda-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3.5 h-3.5 text-muda-green" />
                                            </div>
                                            <span className="text-sm text-foreground/80 font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Financial Highlight Card */}
                                <div className="bg-muda-navy rounded-2xl p-6 border border-muda-blue/20 text-white relative overflow-hidden group hover:border-muda-yellow/50 transition-colors">
                                    <div className="absolute inset-0 bg-gradient-to-r from-muda-blue/10 via-transparent to-transparent opacity-50" />
                                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div>
                                            <span className="text-xs font-bold text-muda-yellow uppercase tracking-widest block mb-1">Impacto Financeiro</span>
                                            <span className="text-lg font-serif font-bold text-white">{PERSONAS[activeTab].taxSaving}</span>
                                        </div>
                                        <a href="#contato" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-primary text-sm font-bold hover:bg-muda-offwhite transition-colors">
                                            Analisar meu caso
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
