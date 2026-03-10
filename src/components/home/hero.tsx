"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, MessageCircle, TrendingDown, Shield, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// ─── Animation Variants ────────────────────────────────────────────────────────

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 280, damping: 22 },
    },
};

const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.75, y: 10 },
    show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 420, damping: 14 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, x: 60, scale: 0.92 },
    show: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 220, damping: 26, delay: 0.55 },
    },
};

// ─── Badge data ────────────────────────────────────────────────────────────────

const badges = [
    { label: "Imposto 1–10%", icon: TrendingDown },
    { label: "Compliance-first", icon: Shield },
    { label: "100% Legal", icon: CheckCircle2 },
    { label: "Segurança Jurídica", icon: Shield },
];

// ─── Trust signals ─────────────────────────────────────────────────────────────

const trustSignals = [
    "100% Legal",
    "Compliance-first",
    "Processo auditável",
    "Suporte dedicado",
];

// ─── WhatsApp link ─────────────────────────────────────────────────────────────

const WHATSAPP_URL =
    "https://wa.me/5581992992676?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Muda%20Paraguai";

// ─── Comparison Card ──────────────────────────────────────────────────────────

function ComparisonCard() {
    return (
        <motion.div
            variants={cardVariants}
            animate={{
                y: [0, -8, 0],
                rotate: [-0.8, 0.8, -0.8],
            }}
            transition={{
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative w-full max-w-[360px] mx-auto lg:mx-0"
        >
            {/* Glow behind card */}
            <div className="absolute -inset-6 bg-gradient-to-br from-muda-green/20 via-muda-blue/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Card shell */}
            <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_32px_64px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-hidden">

                {/* Card header */}
                <div className="px-5 py-4 border-b border-white/8 flex items-center gap-2.5">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-muda-red/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-muda-yellow/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-muda-green/80" />
                    </div>
                    <span className="text-xs font-medium text-white/50 font-mono tracking-wide ml-1">
                        comparativo-tributario.calc
                    </span>
                </div>

                <div className="px-5 py-5 space-y-4">
                    {/* Title row */}
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-muda-green animate-pulse" />
                        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest font-mono">
                            Comparativo Tributário
                        </span>
                    </div>

                    {/* Two-column comparison */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* Brazil */}
                        <div className="rounded-xl bg-muda-red/10 border border-muda-red/20 p-3.5 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <span className="text-lg leading-none">🇧🇷</span>
                                <span className="text-xs font-bold text-white/80 font-mono">Brasil</span>
                            </div>
                            <div className="text-2xl font-bold text-muda-red font-mono leading-none">
                                27–34%
                            </div>
                            <div className="space-y-0.5">
                                <div className="text-[10px] text-white/40 font-mono leading-snug">IR + CSLL</div>
                                <div className="text-[10px] text-white/40 font-mono leading-snug">PIS + COFINS</div>
                                <div className="text-[10px] text-white/40 font-mono leading-snug">ISS + INSS</div>
                            </div>
                        </div>

                        {/* Paraguay */}
                        <div className="rounded-xl bg-muda-green/10 border border-muda-green/25 p-3.5 space-y-2">
                            <div className="flex items-center gap-1.5">
                                <span className="text-lg leading-none">🇵🇾</span>
                                <span className="text-xs font-bold text-white/80 font-mono">Paraguai</span>
                            </div>
                            <div className="text-2xl font-bold text-muda-green font-mono leading-none">
                                1–10%
                            </div>
                            <div className="space-y-0.5">
                                <div className="text-[10px] text-white/40 font-mono leading-snug">IVA Reduzido</div>
                                <div className="text-[10px] text-white/40 font-mono leading-snug">Sistema</div>
                                <div className="text-[10px] text-white/40 font-mono leading-snug">10/10/10</div>
                            </div>
                        </div>
                    </div>

                    {/* Savings bar */}
                    <div className="rounded-xl bg-gradient-to-r from-muda-green/20 to-muda-blue/15 border border-muda-green/30 px-4 py-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-[10px] text-white/50 font-mono uppercase tracking-widest mb-0.5">
                                    Economia potencial
                                </div>
                                <div className="text-xl font-bold text-muda-green font-mono">
                                    até 70%
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                {/* Mini bar chart */}
                                <div className="flex items-end gap-0.5 h-7">
                                    {[30, 55, 40, 70, 60, 85, 70].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 rounded-sm bg-muda-green"
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 0.9 + i * 0.08, duration: 0.5, ease: "backOut" }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal badge */}
                    <div className="flex items-center gap-2 pt-0.5">
                        <div className="flex items-center gap-1.5 text-[10px] text-white/40 font-mono">
                            <CheckCircle2 className="w-3 h-3 text-muda-green" />
                            Estruturação 100% legal e auditável
                        </div>
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

    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const opacityBg = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

    return (
        <section
            ref={containerRef}
            className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 min-h-[100svh] flex flex-col justify-center overflow-hidden w-full"
        >
            {/* ── Background ─────────────────────────────────────────────── */}
            <motion.div
                style={{ opacity: opacityBg }}
                className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden"
            >
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:40px_40px] z-10" />

                {/* Radial depth overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(20,122,49,0.08)_0%,transparent_70%)] z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_100%,rgba(21,69,147,0.12)_0%,transparent_60%)] z-10" />

                {/* Aurora orb — green */}
                <motion.div
                    style={{ y: yBg1 }}
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.55, 0.85, 0.55],
                        x: [0, 70, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-15%] left-[-12%] w-[60%] h-[60%] bg-muda-green/50 blur-[150px] rounded-full mix-blend-screen"
                />
                {/* Aurora orb — blue */}
                <motion.div
                    style={{ y: yBg2 }}
                    animate={{
                        scale: [1, 1.28, 1],
                        opacity: [0.5, 0.75, 0.5],
                        x: [0, -60, 0],
                    }}
                    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-[-15%] right-[-12%] w-[70%] h-[70%] bg-muda-blue/45 blur-[140px] rounded-full mix-blend-screen"
                />
                {/* Aurora orb — yellow accent */}
                <motion.div
                    style={{ y: yBg1 }}
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.3, 0.55, 0.3],
                        x: [0, 40, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[25%] left-[40%] w-[45%] h-[45%] bg-muda-yellow/25 blur-[120px] rounded-full mix-blend-screen"
                />
            </motion.div>

            {/* ── Content ────────────────────────────────────────────────── */}
            <motion.div
                style={{ y: yText }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
            >
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">

                        {/* ── Left column (text) ──────────────────────────── */}
                        <motion.div
                            className="flex-1 lg:max-w-[58%]"
                            variants={containerVariants}
                            initial="hidden"
                            animate="show"
                        >
                            {/* Badge row */}
                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 mb-8">
                                {badges.map(({ label }) => (
                                    <motion.div
                                        key={label}
                                        variants={badgeVariants}
                                        className="relative group"
                                    >
                                        {/* Animated border glow */}
                                        <div className="absolute -inset-px rounded-full bg-gradient-to-r from-muda-green/60 via-muda-blue/40 to-muda-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
                                        <div className="relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-semibold text-white/70 font-mono tracking-wide hover:text-white/90 transition-colors duration-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-muda-green animate-pulse" />
                                            {label}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-[4.25rem] font-bold tracking-tighter leading-[1.06] mb-6 text-white"
                            >
                                A carga tributária{" "}
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-muda-red to-orange-400">
                                        sufoca
                                    </span>
                                </span>{" "}
                                sua empresa.{" "}
                                <br className="hidden sm:block" />
                                <span className="relative inline">
                                    {/* Glow under the gradient text */}
                                    <span className="absolute -inset-1 bg-gradient-to-r from-muda-green to-muda-blue opacity-15 blur-xl rounded-xl" />
                                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-muda-green via-emerald-400 to-muda-blue bg-[length:200%_auto] animate-[text-shimmer_4s_linear_infinite]">
                                        O Paraguai a liberta.
                                    </span>
                                </span>
                            </motion.h1>

                            {/* Subtitle */}
                            <motion.p
                                variants={itemVariants}
                                className="text-lg lg:text-xl text-white/60 mb-10 max-w-xl leading-relaxed"
                            >
                                Empreender no Brasil é um teste de resistência.
                                A{" "}
                                <strong className="font-semibold text-white/90">Muda Paraguai</strong>{" "}
                                estrutura sua operação com impostos de{" "}
                                <span className="text-muda-green font-semibold">1% a 10%</span>
                                , para que seu foco volte a ser o crescimento do negócio.
                            </motion.p>

                            {/* CTA buttons */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10"
                            >
                                {/* Primary CTA */}
                                <MagneticButton>
                                    <Button
                                        size="lg"
                                        className="group relative overflow-hidden w-full sm:w-auto bg-gradient-to-r from-muda-green via-emerald-500 to-muda-blue bg-[length:200%_auto] text-white hover:opacity-95 text-base font-semibold h-14 px-8 rounded-xl shadow-[0_8px_32px_rgba(20,122,49,0.45)] hover:-translate-y-0.5 transition-all duration-300 border-0"
                                        asChild
                                    >
                                        <Link href="/diagnostico">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Fazer diagnóstico grátis
                                                <ArrowRight
                                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                            {/* Shimmer sweep */}
                                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2.5s_infinite_ease-in-out]" />
                                        </Link>
                                    </Button>
                                </MagneticButton>

                                {/* Secondary CTA — WhatsApp */}
                                <MagneticButton magneticPull={15}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full sm:w-auto text-base font-semibold h-14 px-8 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-white/85 hover:text-white backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-300 group"
                                        asChild
                                    >
                                        <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                            <MessageCircle
                                                className="mr-2 w-4 h-4 text-green-400 group-hover:scale-110 transition-transform duration-200"
                                                aria-hidden="true"
                                            />
                                            Falar no WhatsApp
                                        </Link>
                                    </Button>
                                </MagneticButton>
                            </motion.div>

                            {/* Trust signals */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap items-center gap-x-5 gap-y-2"
                            >
                                {trustSignals.map((signal, i) => (
                                    <div key={signal} className="flex items-center gap-1.5">
                                        {i > 0 && (
                                            <div className="w-px h-3 bg-white/15 mr-3" />
                                        )}
                                        <CheckCircle2 className="w-3.5 h-3.5 text-muda-green shrink-0" />
                                        <span className="text-xs text-white/50 font-medium">{signal}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* ── Right column (comparison card) — desktop ──── */}
                        <motion.div
                            className="hidden lg:flex flex-1 items-center justify-center lg:justify-end mt-12 lg:mt-0"
                            variants={cardVariants}
                            initial="hidden"
                            animate="show"
                        >
                            <ComparisonCard />
                        </motion.div>
                    </div>

                    {/* ── Comparison card — mobile (below text) ─────────── */}
                    <motion.div
                        className="mt-12 lg:hidden"
                        variants={cardVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <ComparisonCard />
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#061121] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
