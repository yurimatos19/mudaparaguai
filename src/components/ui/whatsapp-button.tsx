"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export function WhatsAppButton(): React.ReactElement | null {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Only show button after scrolling down a bit
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
            >
                {/* Tooltip that shows on hover */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.9 }}
                            className="bg-white text-foreground px-4 py-2 rounded-xl shadow-lg border border-border text-sm font-semibold whitespace-nowrap mb-2 relative"
                        >
                            Fale com um especialista
                            {/* Triangle pointer */}
                            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-border rotate-45" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <a
                    href="https://wa.me/5581992992676"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => sendGAEvent({ event: "conversion", send_to: "AW-18306339409/p-sWCP3NwMwcENGkkplE" })}
                    className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
                    aria-label="Falar no WhatsApp"
                >
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" style={{ animationDuration: '3s' }} />
                    
                    <MessageCircle className="w-7 h-7 relative z-10" />
                </a>
            </motion.div>
        </AnimatePresence>
    );
}
