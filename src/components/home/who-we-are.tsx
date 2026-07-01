"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Scale, Linkedin, ShieldCheck, Globe2 } from "lucide-react";
import { ParaguayFlag, BrazilFlag } from "@/components/ui/svg-flags";

export function WhoWeAre(): React.ReactElement {
    return (
        <section className="py-20 lg:py-28 bg-background border-t border-border relative overflow-hidden" id="quem-somos">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary text-muted-foreground text-xs font-semibold mb-5"
                    >
                        <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                        Fundador
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="text-3xl sm:text-4xl lg:text-4xl font-serif font-normal text-foreground tracking-tight mb-4"
                    >
                        Quem está por trás da Muda Paraguai
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm text-muted-foreground max-w-md mx-auto"
                    >
                        Inteligência jurídica binacional para estruturar sua empresa com conformidade absoluta.
                    </motion.p>
                </div>

                {/* Single founder card - centered */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] transition-all duration-300 border-l-4 border-l-muda-red">
                        <div className="p-7 sm:p-9 relative z-10">
                            {/* Photo + name row */}
                            <div className="flex items-start gap-5 mb-6">
                                {/* Real Photo */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-border flex-shrink-0 shadow-md relative">
                                    <Image
                                        src="/osvaldo-neto.jpg"
                                        alt="Osvaldo Neto - Fundador da Muda Paraguai"
                                        fill
                                        className="object-cover object-top"
                                        sizes="(max-width: 640px) 80px, 96px"
                                    />
                                    {/* Flag badge floating on photo */}
                                    <div className="absolute -bottom-1 -right-1 rounded border border-border bg-white p-0.5 shadow-sm flex gap-0.5">
                                        <BrazilFlag width={12} height={8} />
                                        <ParaguayFlag width={12} height={8} />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-0.5 leading-tight">Osvaldo Neto</h3>
                                            <p className="text-xs sm:text-sm font-semibold text-primary">Advogado Especialista (Societário & Transacional)</p>
                                        </div>
                                        <a
                                            href="https://www.linkedin.com/in/osvaldo-matos-de-melo-neto-81b6a1139/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className="p-1.5 rounded-lg bg-secondary border border-border text-muted-foreground hover:text-blue-600 hover:bg-blue-50 transition-all duration-150 flex-shrink-0"
                                        >
                                            <Linkedin className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                Especialista em direito internacional, estruturação societária e governança tributária. Lidera as operações legais no Paraguai, assegurando conformidade jurídica e patrimonial. Atua na ponte entre os sistemas jurídicos brasileiro e paraguaio para garantir que cada operação tenha substância econômica real e respalde legal sólido.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/40 text-xs font-semibold text-muted-foreground">
                                    <Scale className="w-3.5 h-3.5 text-primary" />
                                    Estruturas no Paraguai
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/40 text-xs font-semibold text-muted-foreground">
                                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                                    Regularidade OCDE
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-secondary/40 text-xs font-semibold text-muted-foreground">
                                    <Globe2 className="w-3.5 h-3.5 text-primary" />
                                    Direito Binacional
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
