"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BridgeFlowProps {
    className?: string;
    width?: string;
    height?: string;
}

export function BridgeFlow({ className, width = "w-16", height = "h-[2px]" }: BridgeFlowProps): React.ReactElement {
    return (
        <div className={cn("relative flex items-center justify-center", className)}>
            {/* Starting point (Brasil) */}
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-muda-green to-muda-yellow shadow-[0_0_8px_rgba(30,142,62,0.5)] z-10" />

            {/* The Bridge Line */}
            <div className={cn("relative mx-1 overflow-hidden", width, height)}>
                {/* Background track */}
                <div className="absolute inset-0 bg-muda-navy/20 dark:bg-muda-offwhite/20 rounded-full" />

                {/* Animated flow effect */}
                <motion.div
                    className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-muda-green via-muda-yellow to-muda-red"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                        repeatDelay: 0.5
                    }}
                />
            </div>

            {/* Destination point (Paraguai) */}
            <div className="w-2 h-2 rounded-full bg-gradient-to-br from-muda-red to-muda-blue shadow-[0_0_8px_rgba(211,47,47,0.5)] z-10" />
        </div>
    );
}
