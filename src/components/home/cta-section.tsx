"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-muda-navy">
            {/* Immersive glowing background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-muda-green/30 via-muda-blue/20 to-muda-red/30 rounded-full blur-[150px] mix-blend-screen opacity-50" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-10 sm:p-16 lg:p-20 shadow-2xl relative overflow-hidden"
                >
                    {/* Inner highlight */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                    
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-6">
                        Pronto para expandir suas fronteiras?
                    </h2>
                    <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Fale com um especialista agora e descubra a viabilidade fiscal e estrutural para o seu negócio operar no Paraguai.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="https://wa.me/5581992992676" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-muda-navy bg-white rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                            <span className="relative flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-muda-green" />
                                Falar com Especialista
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
