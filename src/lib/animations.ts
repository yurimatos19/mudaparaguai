import { Variants } from "framer-motion";

/**
 * Standard staggered container animation.
 * Used for lists, grids, or grouped elements that should appear sequentially.
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

/**
 * Standard upward fade-in item animation.
 * Ideal for individual elements within a staggered container.
 */
export const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    },
};

/**
 * Subtle scale-in animation.
 * Useful for badges, icons, or floating UI elements.
 */
export const scaleInItem: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.6
        }
    },
};
