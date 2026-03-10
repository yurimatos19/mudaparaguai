"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { TrendingUp, Building2, Users, Clock } from "lucide-react";

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
        description: "Operando legalmente no Paraguai",
        color: "muda-green",
        delay: 0,
    },
    {
        icon: TrendingUp,
        value: 10,
        suffix: "%",
        prefix: "até ",
        label: "Carga tributária final",
        description: "Contra 30–50% em estruturas brasileiras",
        color: "muda-yellow",
        delay: 0.1,
    },
    {
        icon: Users,
        value: 3,
        suffix: " perfis",
        label: "Trilhas especializadas",
        description: "Digital, Industrial e Investidor Global",
        color: "muda-blue",
        delay: 0.2,
    },
    {
        icon: Clock,
        value: 60,
        suffix: " dias",
        label: "Prazo médio de abertura",
        description: "Do diagnóstico ao RUC emitido",
        color: "muda-red",
        delay: 0.3,
    },
];

export function StatsSection(): React.ReactElement {
    return (
        <section className="py-20 lg:py-28 bg-background border-y border-white/5 relative overflow-hidden">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl font-sora font-semibold text-white tracking-tighter mb-3">
                        Números que importam
                    </h2>
                    <p className="text-foreground/50 text-base">
                        Resultados reais. Metodologia auditável.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: stat.delay }}
                            className="group relative rounded-2xl border border-white/10 bg-card/60 backdrop-blur-sm p-6 lg:p-8 flex flex-col items-center text-center hover:border-white/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Hover glow */}
                            <div className={`absolute inset-0 bg-${stat.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                            <div className={`w-12 h-12 rounded-xl bg-${stat.color}/10 border border-${stat.color}/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                <stat.icon className={`w-5 h-5 text-${stat.color}`} />
                            </div>

                            <div className={`text-3xl lg:text-4xl font-sora font-black text-${stat.color} mb-2 tracking-tight`}>
                                <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                            </div>

                            <p className="text-sm font-semibold text-white mb-1">{stat.label}</p>
                            <p className="text-xs text-foreground/50 leading-relaxed">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
