"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote: "Estruturamos nossa operação logística no Paraguai em tempo recorde. A segurança jurídica e o suporte na obtenção do RUC foram impecáveis.",
        author: "Diretor de Operações",
        company: "Indústria Têxtil, Santa Catarina",
        color: "text-muda-green",
        bgHover: "hover:border-muda-green/40",
    },
    {
        quote: "A migração de nossos ativos digitais exigia cuidado extremo com compliance. O time entregou uma engenharia tributária que blindou nosso negócio.",
        author: "Sócio Fundador",
        company: "Holding de Tecnologia, São Paulo",
        color: "text-muda-yellow",
        bgHover: "hover:border-muda-yellow/40",
    },
    {
        quote: "O que mais me surpreendeu foi a transparência. Diferente de despachantes comuns, tivemos suporte jurídico real em ambos os países.",
        author: "CEO",
        company: "E-commerce Global, Paraná",
        color: "text-muda-blue",
        bgHover: "hover:border-muda-blue/40",
    },
];

export function TestimonialsSection(): React.ReactElement {
    return (
        <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <div className="text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-muda-blue/20 bg-muda-blue/5 text-muda-blue text-xs font-bold uppercase tracking-widest mb-6"
                    >
                        Resultados Comprovados
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-foreground tracking-tight mb-6"
                    >
                        O que dizem os <span className="font-bold">empresários</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        Manter o sigilo e a privacidade dos nossos clientes é regra, mas o impacto estrutural que causamos em suas operações é incontestável.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className={`relative bg-white/70 backdrop-blur-xl border border-border p-8 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${t.bgHover}`}
                        >
                            {/* Decorative background quote mark */}
                            <Quote className="absolute top-6 right-6 w-16 h-16 text-secondary/50 -rotate-6 transition-transform group-hover:rotate-0 duration-300" />
                            
                            <div className="flex gap-1 mb-6 relative z-10">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className={`w-4 h-4 fill-current ${t.color}`} />
                                ))}
                            </div>
                            
                            <p className="text-foreground/80 leading-relaxed font-medium mb-8 relative z-10 min-h-[100px]">
                                "{t.quote}"
                            </p>
                            
                            <div className="pt-6 border-t border-border relative z-10">
                                <p className="font-bold text-foreground mb-1">{t.author}</p>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
