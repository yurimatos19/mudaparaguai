"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Como funciona", href: "/#como-funciona", isAnchor: true, anchorId: "como-funciona" },
    { label: "Para quem", href: "/#para-quem", isAnchor: true, anchorId: "para-quem" },
    { label: "Serviços", href: "/servicos", isAnchor: false },
    { label: "Quem Somos", href: "/#quem-somos", isAnchor: true, anchorId: "quem-somos" },
    { label: "FAQ", href: "/#faq", isAnchor: true, anchorId: "faq" },
];

export function Header(): React.ReactElement {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
                    isScrolled
                        ? "h-16 bg-muda-navy/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30"
                        : "h-24 bg-transparent border-b border-transparent"
                )}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 relative z-10">
                        <Image
                            src="/logo.png"
                            alt="Muda Paraguai Logo"
                            width={isScrolled ? 160 : 200}
                            height={isScrolled ? 44 : 56}
                            className="object-contain transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) =>
                            link.isAnchor ? (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.anchorId!)}
                                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="text-white/70 hover:text-white hover:bg-white/10 border border-white/10"
                        >
                            <Link href="https://wa.me/5581992992676?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Muda%20Paraguai.">
                                <MessageCircle className="w-4 h-4 mr-2 text-muda-green" />
                                WhatsApp
                            </Link>
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-muda-green to-muda-blue text-white hover:opacity-90 shadow-lg shadow-muda-green/20 border border-muda-yellow/20 font-semibold"
                            asChild
                        >
                            <Link href="/diagnostico">Começar diagnóstico</Link>
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg text-white/80 hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Abrir menu"
                    >
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-muda-navy/98 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden"
                    >
                        <nav className="flex flex-col gap-1 mt-4">
                            {navLinks.map((link) =>
                                link.isAnchor ? (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.anchorId!)}
                                        className="px-4 py-4 text-lg font-medium text-white/80 hover:text-white border-b border-white/10 hover:pl-6 transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                ) : (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="px-4 py-4 text-lg font-medium text-white/80 hover:text-white border-b border-white/10 hover:pl-6 transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        <div className="mt-8 flex flex-col gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                                className="w-full border-white/20 text-white hover:bg-white/10 bg-transparent"
                            >
                                <Link href="https://wa.me/5581992992676?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Muda%20Paraguai." onClick={() => setMobileOpen(false)}>
                                    <MessageCircle className="w-5 h-5 mr-2 text-muda-green" />
                                    Falar no WhatsApp
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                asChild
                                className="w-full bg-gradient-to-r from-muda-green to-muda-blue text-white font-bold shadow-lg"
                            >
                                <Link href="/diagnostico" onClick={() => setMobileOpen(false)}>
                                    Começar diagnóstico grátis
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
