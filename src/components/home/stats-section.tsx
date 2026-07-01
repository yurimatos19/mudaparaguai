"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendingUp, Building2, Users, Clock } from "lucide-react";
import { fadeUpItem } from "@/lib/animations";

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const spring = useSpring(motionValue, { stiffness: 80, damping: 20 });
    const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}${suffix}`);

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    return (
        <motion.span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
            {display}
        </motion.span>
    );
}

const stats = [
    {
        icon: Building2,
        value: 120,
        suffix: "+",
        label: "Empresas estruturadas",
        description: "Operando legalmente no Paraguai.",
        borderClass: "border-t-muda-green",
        bgClass: "bg-white/5",
        colorClass: "text-muda-green",
        glow: "shadow-[0_0_30px_rgba(0,130,56,0.15)]",
    },
    {
        icon: TrendingUp,
        value: 10,
        suffix: "%",
        prefix: "até ",
        label: "Carga tributária final",
        description: "Contra 30–50% em estruturas brasileiras.",
        borderClass: "border-t-muda-yellow",
        bgClass: "bg-white/5",
        colorClass: "text-muda-yellow",
        glow: "shadow-[0_0_30px_rgba(255,199,44,0.15)]",
    },
    {
        icon: Users,
        value: 3,
        suffix: " perfis",
        label: "Trilhas especializadas",
        description: "Serviços Digitais, Indústria e Investidor Global.",
        borderClass: "border-t-muda-blue",
        bgClass: "bg-white/5",
        colorClass: "text-muda-blue",
        glow: "shadow-[0_0_30px_rgba(0,56,168,0.15)]",
    },
    {
        icon: Clock,
        value: 60,
        suffix: " dias",
        label: "Prazo médio",
        description: "Do diagnóstico ao RUC emitido.",
        borderClass: "border-t-muda-red",
        bgClass: "bg-white/5",
        colorClass: "text-muda-red",
        glow: "shadow-[0_0_30px_rgba(213,43,30,0.15)]",
    },
];

export function StatsSection(): React.ReactElement {
    return (
        <section className="py-20 lg:py-28 bg-muda-navy relative overflow-hidden text-white border-t border-white/5">
            {/* Immersive Glowing Orbs */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 bg-muda-green pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-muda-blue pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight mb-4 text-white">
                        Números que <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-green via-muda-yellow to-muda-red font-bold">Importam</span>
                    </h2>
                    <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto">
                        Resultados reais estruturados sob rígido critério de conformidade legal binacional.
                    </p>
                </motion.div>

                {/* Grid layout with Dark Glassmorphism cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`flex flex-col items-center text-center p-8 rounded-3xl border border-white/10 ${stat.bgClass} backdrop-blur-xl border-t-4 ${stat.borderClass} hover:-translate-y-2 transition-all duration-300 hover:${stat.glow} group`}
                        >
                            {/* Glowing Icon */}
                            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                <stat.icon className={`w-6 h-6 ${stat.colorClass}`} />
                            </div>

                            {/* Large stat number with specific national color */}
                            <div className={`text-4xl lg:text-5xl font-serif font-bold mb-3 tracking-tight ${stat.colorClass} drop-shadow-md`}>
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                            </div>

                            <p className="text-base font-bold text-white mb-2">{stat.label}</p>
                            <p className="text-xs text-white/60 leading-relaxed max-w-[200px]">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
