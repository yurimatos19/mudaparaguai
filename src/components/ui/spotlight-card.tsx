"use client"

import React, { useRef, useState, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string; // e.g., "rgba(30, 142, 62, 0.25)"
    spotlightSize?: number;
}

export function SpotlightCard({
    children,
    className,
    glowColor = "rgba(255, 255, 255, 0.15)",
    spotlightSize = 500
}: SpotlightCardProps): React.ReactElement {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-[2rem] bg-background/50 backdrop-blur-xl border border-white/10 dark:border-white/5",
                "shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500",
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* 
                1. Spotlight Layer: Follows the mouse using a radial gradient.
                Masked by the element boundaries. 
            */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
                            ${glowColor},
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Sharp reactive border glow that strictly follows the mouse */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-screen z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            200px circle at ${mouseX}px ${mouseY}px,
                            rgba(255,255,255,0.1) 0%,
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* 
                2. Inner Glass Border Layer (Cinematic 3D Details):
                Adds that premium tactile 1px white inset shadow at the top.
            */}
            <div className="absolute inset-0 rounded-[2rem] pointer-events-none border border-transparent [background:linear-gradient(to_bottom,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)_border-box] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude]" />

            {/* 3. Actual Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
