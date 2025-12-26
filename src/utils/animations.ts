import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12
        }
    }
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
    }
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
};

export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
        opacity: 0, 
        y: -20,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    }
};

export const floating: Variants = {
    animate: {
        y: [0, -15, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const revealList: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

export const iconBounce: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.2, 1],
        transition: {
            duration: 0.4,
            ease: "easeInOut"
        }
    }
};

export const iconPulse: Variants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.8, 1, 0.8],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

export const iconJiggle: Variants = {
    animate: {
        rotate: [0, -10, 10, -10, 10, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        }
    }
};

export const iconFloat: Variants = {
    animate: {
        y: [0, -5, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
