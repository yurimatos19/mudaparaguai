"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, TrendingDown, Shield, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { BrazilFlag, ParaguayFlag } from "@/components/ui/svg-flags";

// ─── Animation Variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 70, damping: 15 },
    },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, x: 40, rotateY: 15 },
    show: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.4 },
    },
};

// ─── Badge data ────────────────────────────────────────────────────────────────

const badges = [
    { label: "Carga de 1% a 10%", icon: TrendingDown },
    { label: "Segurança Jurídica", icon: Shield },
];

const WHATSAPP_URL =
    "https://wa.me/5581992992676?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Muda%20Paraguai";

// ─── Comparison Card (FinTech Glassmorphic Widget) ─────────────────────────────

function ComparisonCard() {
    return (
        <motion.div
            variants={cardVariants}
            style={{ perspective: 1000 }}
            className="relative w-full max-w-[420px] mx-auto lg:mx-0 z-10"
        >
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 to-muda-green/30 blur-2xl -z-10 transform scale-[0.95]" />
            
            {/* Glassmorphism Shell */}
            <div className="relative rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,39,118,0.15)] overflow-hidden">
                
                {/* Header */}
                <div className="bg-white/50 backdrop-blur-md border-b border-white/40 p-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-muda-blue flex items-center justify-center shadow-inner">
                            <TrendingDown className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                                Comparativo Oficial
                            </span>
                            <span className="block text-sm font-bold text-foreground">
                                Carga Tributária
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/60 px-2.5 py-1.5 rounded-full border border-white shadow-sm">
                        <BrazilFlag width={18} height={12} />
                        <span className="text-[10px] font-black text-muted-foreground">vs</span>
                        <ParaguayFlag width={18} height={12} />
                    </div>
                </div>

                <div className="p-6 space-y-5">
                    {/* Brazil Segment */}
                    <div className="relative rounded-2xl bg-white/80 border border-white shadow-sm p-5 overflow-hidden group hover:shadow-md transition-all">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-muda-yellow" />
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <span className="text-xs font-bold text-foreground/70 uppercase tracking-wider block mb-1">Cenário Brasil</span>
                                <span className="text-2xl font-black text-foreground tracking-tight">27<span className="text-xl text-muted-foreground">%</span> <span className="text-lg text-muted-foreground font-medium">a</span> 34<span className="text-xl text-muted-foreground">%</span></span>
                            </div>
                            <span className="text-[9px] font-black text-destructive uppercase tracking-widest bg-destructive/10 text-destructive border border-destructive/20 px-2.5 py-1 rounded-full">
                                Custo Elevado
                            </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-medium leading-relaxed">
                            IRPJ, CSLL, PIS, COFINS, ISS, INSS sobre folha. Um sistema complexo que sufoca o fluxo de caixa.
                        </p>
                    </div>

                    {/* Paraguay Segment */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-primary to-muda-blue border border-primary/20 shadow-xl p-5 overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                        {/* Decorative background rays */}
                        <div className="absolute top-[-50%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-32 h-32 bg-muda-green/20 rounded-full blur-xl" />
                        
                        <div className="relative z-10 flex items-start justify-between mb-2">
                            <div>
                                <span className="text-xs font-bold text-white/80 uppercase tracking-wider block mb-1">Cenário Paraguai</span>
                                <span className="text-3xl font-black text-white tracking-tight drop-shadow-md">1<span className="text-2xl text-white/80">%</span> <span className="text-xl text-white/70 font-medium">a</span> 10<span className="text-2xl text-white/80">%</span></span>
                            </div>
                            <span className="text-[9px] font-black uppercase tracking-widest bg-white text-primary shadow-sm px-2.5 py-1 rounded-full flex items-center gap-1">
                                <Zap className="w-3 h-3 text-muda-yellow" /> Ideal
                            </span>
                        </div>
                        <p className="relative z-10 text-[11px] text-white/90 font-medium leading-relaxed">
                            Imposto territorial, IVA simplificado e Lei Maquila (apenas 1%). Estrutura limpa e lucrativa.
                        </p>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export function Hero(): React.ReactElement {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 min-h-[92svh] flex flex-col justify-center overflow-hidden w-full bg-secondary/30"
        >
            {/* Cinematic Background Elements */}
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0" />
            
            {/* Glowing Orbs */}
            <div className="hidden lg:block absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-muda-green/15 blur-[100px] pointer-events-none z-0 mix-blend-multiply" />
            <div className="hidden lg:block absolute top-[30%] right-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-primary/15 blur-[100px] pointer-events-none z-0 mix-blend-multiply" />
            <div className="hidden lg:block absolute bottom-[-10%] left-[20%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] rounded-full bg-muda-yellow/15 blur-[100px] pointer-events-none z-0 mix-blend-multiply" />

            {/* ── Content ────────────────────────────────────────────────── */}
            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
            >
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8">

                        {/* ── Left column (text) ──────────────────────────── */}
                        <motion.div
                            className="flex-1 lg:max-w-[58%]"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            {/* Badges row */}
                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-8">
                                {badges.map(({ label, icon: Icon }) => (
                                    <div
                                        key={label}
                                        className="relative flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/60 bg-white/50 backdrop-blur-md text-xs font-bold text-foreground/80 tracking-wide shadow-sm"
                                    >
                                        <Icon className="w-3.5 h-3.5 text-primary" />
                                        {label}
                                    </div>
                                ))}
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className="font-sans text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-black tracking-tight leading-[1.1] mb-6 text-foreground"
                            >
                                Liberte sua empresa do{" "}
                                <span className="inline-block relative">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-muda-green to-[#005B26]">Custo Brasil</span>
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-muda-yellow/40 -rotate-1 rounded-sm -z-0"></span>
                                </span>
                                .
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                variants={itemVariants}
                                className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium"
                            >
                                Expanda de forma estratégica com a <strong className="text-foreground font-black">Muda Paraguai</strong>. Assessoria completa para migração societária, garantindo segurança jurídica e <span className="text-primary font-bold">impostos consolidados de 1% a 10%</span>.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
                            >
                                {/* Primary CTA */}
                                <Button
                                    size="lg"
                                    className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base font-bold h-14 px-8 rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,39,118,0.5)] transition-all duration-300 hover:shadow-[0_15px_40px_-10px_rgba(0,39,118,0.6)] hover:-translate-y-0.5"
                                    asChild
                                >
                                    <Link href="/diagnostico">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out" />
                                        <span className="relative flex items-center gap-2">
                                            Fazer Diagnóstico Gratuito
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </Button>

                                {/* Secondary CTA — WhatsApp */}
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="group text-sm md:text-base font-bold h-14 px-8 rounded-2xl border-2 border-white bg-white/50 backdrop-blur-sm text-foreground hover:bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:text-primary"
                                    asChild
                                >
                                    <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                        <MessageCircle className="mr-2 w-5 h-5 text-muda-green group-hover:scale-110 transition-transform" />
                                        Falar no WhatsApp
                                    </Link>
                                </Button>
                            </motion.div>

                            {/* Trust signals */}
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-4 pt-6 border-t border-border/60"
                            >
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center shadow-sm z-[${10-i}]`}>
                                            <CheckCircle2 className="w-4 h-4 text-primary/40" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm font-semibold text-foreground/80">
                                    Mais de <span className="text-primary font-black">+100</span> empresas já realizaram o diagnóstico.
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ── Right column (comparison card) ──── */}
                        <div className="flex-1 w-full flex items-center justify-center lg:justify-end">
                            <ComparisonCard />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
