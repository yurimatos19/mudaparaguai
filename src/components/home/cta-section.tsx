"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection(): React.ReactElement {
    return (
        <section className="py-20 lg:py-32 relative overflow-hidden bg-muda-navy text-muda-offwhite border-t border-white/10">
            <div className="absolute inset-0 z-0">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-muda-green/10 via-muda-yellow/10 to-muda-blue/10 rounded-full blur-[100px] opacity-60 mix-blend-screen pointer-events-none" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sora font-semibold text-white tracking-tight mb-6">
                        Comece pelo diagnóstico.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-green to-muda-blue opacity-90">Sem ruído.</span>
                    </h2>

                    <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
                        2–3 minutos. Você descobre na hora o seu score de fit e recebe um roadmap claro dos próximos passos. Não prometemos milagres, garantimos estratégia.
                    </p>

                    <MagneticButton>
                        <Button size="lg" className="group relative overflow-hidden bg-white text-muda-navy h-16 px-12 text-lg font-semibold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all hover:scale-105 duration-300 rounded-2xl" asChild>
                            <Link href="/diagnostico">
                                <span className="relative z-10 flex items-center">
                                    Começar diagnóstico
                                    <ArrowRight className="ml-2 w-5 h-5 text-muda-navy/70 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-muda-green/10 to-transparent group-hover:animate-[shimmer_2s_infinite_ease-in-out]" />
                            </Link>
                        </Button>
                    </MagneticButton>

                </motion.div>
            </div>
        </section>
    );
}
