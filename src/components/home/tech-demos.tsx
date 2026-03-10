"use client";

import { motion } from "framer-motion";
import { fadeUpItem } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { LayoutDashboard, FileText, CheckSquare, Search, DownloadCloud, Activity } from "lucide-react";

export function TechDemos(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden" id="tecnologia">


            {/* Glowing background anchors */}
            <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-muda-green/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-muda-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-20 lg:mb-28">
                    <motion.h2
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-sora font-semibold text-white tracking-tighter mb-6"
                    >
                        Tecnologia que acelera
                    </motion.h2>
                    <motion.p
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto tracking-tight"
                    >
                        Portal online, diagnósticos automatizados e relatórios em tempo real. Tudo para você acompanhar sua operação sem ruído.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Demo 1: Diagnóstico com Score */}
                    <motion.div
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group h-full"
                    >
                        <SpotlightCard className="p-8 pb-0 bg-card/60 backdrop-blur-md border border-white/5 hover:border-muda-green/50 flex flex-col" glowColor="rgba(30,142,62,0.15)">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-muda-green/10 rounded-full blur-[60px] group-hover:bg-muda-green/20 transition-colors pointer-events-none" />

                            <div className="relative z-10 w-full">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muda-green/20 to-muda-green/5 ring-1 ring-muda-green/20 flex items-center justify-center mb-8 shadow-inner shadow-muda-green/10">
                                    <Search className="w-6 h-6 text-muda-green" />
                                </div>
                                <h3 className="text-2xl font-sora font-semibold text-foreground mb-4 tracking-tight">Diagnóstico c/ Score</h3>
                                <p className="text-foreground/60 text-base mb-10 leading-relaxed">
                                    Quiz interativo que gera uma pontuação de fit (0–100) baseada em 10 critérios, indicando a rota ideal em 3 minutos.
                                </p>
                            </div>

                            <div className="mt-auto w-full bg-card rounded-t-2xl p-6 border-x border-t border-black/5 dark:border-white/10 relative z-10 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center justify-between mb-4 text-sm">
                                    <span className="font-semibold text-foreground">Score Final</span>
                                    <span className="font-bold text-muda-green flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-muda-green animate-pulse" />
                                        Alto Fit
                                    </span>
                                </div>
                                <div className="w-full h-3 bg-muted rounded-full overflow-hidden shadow-inner">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-muda-green/80 to-muda-green"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Demo 2: Portal do Cliente */}
                    <motion.div
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group h-full"
                    >
                        <SpotlightCard className="p-8 pb-0 bg-card/60 backdrop-blur-md border border-white/5 hover:border-muda-blue/50 flex flex-col" glowColor="rgba(26,79,163,0.15)">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-muda-blue/10 rounded-full blur-[60px] group-hover:bg-muda-blue/20 transition-colors pointer-events-none" />

                            <div className="relative z-10 w-full">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muda-blue/20 to-muda-blue/5 ring-1 ring-muda-blue/20 flex items-center justify-center mb-8 shadow-inner shadow-muda-blue/10">
                                    <LayoutDashboard className="w-6 h-6 text-muda-blue" />
                                </div>
                                <h3 className="text-2xl font-sora font-semibold text-foreground mb-4 tracking-tight">Portal do Cliente</h3>
                                <p className="text-foreground/60 text-base mb-10 leading-relaxed">
                                    Ambiente seguro para upload de documentos, checklist dinâmico e cronograma de execução em tempo real.
                                </p>
                            </div>

                            <div className="mt-auto w-full bg-card rounded-t-2xl p-6 border-x border-t border-black/5 dark:border-white/10 space-y-4 relative z-10 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-4 text-sm p-3 rounded-xl bg-muda-green/5 border border-muda-green/10">
                                    <CheckSquare className="w-5 h-5 text-muda-green" />
                                    <span className="text-foreground font-semibold">Contrato Social</span>
                                    <span className="ml-auto text-xs font-bold text-muda-green">Aprovado</span>
                                </div>
                                <div className="flex items-center gap-4 text-sm p-3 rounded-xl bg-muda-yellow/5 border border-muda-yellow/10">
                                    <Activity className="w-5 h-5 text-muda-yellow" />
                                    <span className="text-foreground font-semibold">Emissão RUC</span>
                                    <span className="ml-auto text-xs font-bold text-muda-yellow">Em análise</span>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                    {/* Demo 3: Relatório Executivo */}
                    <motion.div
                        variants={fadeUpItem}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="group h-full"
                    >
                        <SpotlightCard className="p-8 pb-0 bg-card/60 backdrop-blur-md border border-white/5 hover:border-muda-yellow/50 flex flex-col" glowColor="rgba(244,195,0,0.1)">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-muda-yellow/5 rounded-full blur-[60px] group-hover:bg-muda-yellow/15 transition-colors pointer-events-none" />

                            <div className="relative z-10 w-full">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muda-yellow/10 to-muda-yellow/5 ring-1 ring-muda-yellow/10 flex items-center justify-center mb-8 shadow-inner shadow-muda-yellow/5">
                                    <FileText className="w-6 h-6 text-muda-yellow" />
                                </div>
                                <h3 className="text-2xl font-sora font-semibold text-foreground mb-4 tracking-tight">Relatórios Executivos</h3>
                                <p className="text-foreground/60 text-base mb-10 leading-relaxed">
                                    Dossiê e balanços periódicos gerados. Com sumário executivo, riscos mitigados e próximos passos.
                                </p>
                            </div>

                            <div className="mt-auto w-full bg-muda-navy text-white rounded-t-2xl p-6 border-x border-t border-muda-yellow/20 flex flex-col justify-center gap-4 relative z-10 shadow-[0_-10px_20px_-10px_rgba(244,195,0,0.15)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shadow-inner">
                                            <FileText className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold tracking-wide">Report_Q1_26.pdf</h4>
                                            <p className="text-xs text-white/50 font-medium">842 KB • Hoje, 14h</p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-muda-green/20 flex items-center justify-center text-muda-green cursor-pointer hover:bg-muda-green/30 hover:scale-110 transition-all">
                                        <DownloadCloud className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>

                </div>
            </div >
        </section >
    );
}
