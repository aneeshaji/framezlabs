import { motion } from 'framer-motion';
import { PartyPopper, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NewYearBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                background: 'linear-gradient(45deg, #8B0000, #C70039, #900C3F, #581845)',
                backgroundSize: '300% 300%',
                animation: 'gradientBG 10s ease infinite',
                color: 'white',
                padding: '1rem 2rem',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                zIndex: 50,
                boxShadow: '0 4px 20px rgba(139, 0, 0, 0.4)',
                borderBottom: '1px solid rgba(255, 215, 0, 0.3)'
            }}
        >
            <style>{`
                @keyframes gradientBG {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .glow-text {
                    text-shadow: 0 0 10px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4);
                }
            `}</style>

            {/* Floating Particles/Sparkles Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0.3, y: -20, x: Math.random() * 100 + "%" }}
                        animate={{
                            y: [0, 100],
                            opacity: [0.3, 0.8, 0],
                            scale: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{ position: 'absolute' }}
                    >
                        <Sparkles size={Math.random() * 10 + 10} color="#FFD700" opacity={0.3} />
                    </motion.div>
                ))}
            </div>

            {/* Content Container */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                zIndex: 1,
                flexWrap: 'wrap',
                justifyContent: 'center',
                maxWidth: '1200px'
            }}>

                {/* 2026 Celebration Badge */}
                <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 215, 0, 0.3)',
                        backdropFilter: 'blur(5px)'
                    }}
                >
                    <PartyPopper size={20} className="text-gold" />
                    <span style={{ fontWeight: 700, letterSpacing: '0.5px' }}>Happy New Year 2026</span>
                </motion.div>

                {/* Main Offer Text */}
                <div style={{ textAlign: 'center' }}>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 300,
                        fontFamily: 'var(--font-heading)',
                        marginRight: '0.5rem'
                    }}>
                        Get Flat
                    </span>
                    <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="glow-text"
                        style={{
                            fontSize: '1.8rem',
                            fontWeight: 800,
                            color: '#FFD700',
                            fontFamily: 'var(--font-heading)',
                            display: 'inline-block'
                        }}
                    >
                        40% OFF
                    </motion.span>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 300,
                        fontFamily: 'var(--font-heading)',
                        marginLeft: '0.5rem'
                    }}>
                        on Everything
                    </span>
                </div>

                {/* Divider (Desktop) */}
                <div style={{ width: '1px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)' }} className="hidden md:block" />

                {/* CTA Button */}
                <Link
                    to="/products"
                    className="group"
                    style={{ textDecoration: 'none' }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            backgroundColor: '#FFD700',
                            color: '#8B0000',
                            padding: '0.8rem 2rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 800,
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Shine Effect */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                            transform: 'skewX(-20deg)',
                            animation: 'shimmer 3s infinite',
                        }} />

                        <span style={{ textTransform: 'uppercase', letterSpacing: '1px', position: 'relative', zIndex: 1 }}>Shop Now</span>
                        <ArrowRight size={20} style={{ position: 'relative', zIndex: 1 }} />
                    </motion.div>
                </Link>
            </div>
            <style>{`
                @media (min-width: 768px) {
                    .md\\:block { display: block !important; }
                }
                .hidden { display: none; }
            `}</style>
        </motion.div>
    );
};
