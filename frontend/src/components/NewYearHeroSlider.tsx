import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, PartyPopper, Sparkles, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    cta: string;
    ctaLink: string;
    bgGradient: string;
}

const slides: Slide[] = [
    {
        id: 1,
        title: "Happy New Year 2026! 🎉",
        subtitle: "Start the Year with Memories",
        description: "Celebrate 2026 with stunning personalized frames. Get FLAT 40% OFF on all products!",
        image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80&w=1200",
        cta: "Shop New Year Offers",
        ctaLink: "/products",
        bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
    },
    {
        id: 2,
        title: "New Year, New Memories",
        subtitle: "Frame Your 2026 Journey",
        description: "Premium custom photo frames & gifts to capture your special moments this year",
        image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=1200",
        cta: "Explore Collections",
        ctaLink: "/products",
        bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%)"
    },
    {
        id: 3,
        title: "2026 Special Gift Hampers",
        subtitle: "Perfect Gifts for Loved Ones",
        description: "Handcrafted hampers with frames, mugs, chocolates & more. Limited New Year Edition!",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&q=80&w=1200",
        cta: "View Gift Hampers",
        ctaLink: "/products",
        bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #43e97b 100%)"
    }
];

export const NewYearHeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section style={{
            position: 'relative',
            height: '70vh',
            minHeight: '600px',
            overflow: 'hidden',
            backgroundColor: '#0a0e27'
        }}>
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: slides[currentSlide].bgGradient
                    }}
                >
                    {/* Floating Sparkles/Confetti Effect */}
                    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -20, x: Math.random() * 100 + '%', opacity: 0 }}
                                animate={{
                                    y: ['0vh', '100vh'],
                                    opacity: [0, 1, 0],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 4,
                                    repeat: Infinity,
                                    delay: Math.random() * 3,
                                    ease: "linear"
                                }}
                                style={{
                                    position: 'absolute',
                                    top: 0
                                }}
                            >
                                {i % 3 === 0 ? (
                                    <Sparkles size={Math.random() * 15 + 10} color="#FFD700" />
                                ) : i % 3 === 1 ? (
                                    <PartyPopper size={Math.random() * 15 + 10} color="#FF69B4" />
                                ) : (
                                    <Gift size={Math.random() * 15 + 10} color="#00CED1" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Content Container */}
                    <div className="container" style={{
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 2
                    }}>
                        <div className="grid grid-cols-1 grid-cols-2" style={{
                            gap: '4rem',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    style={{
                                        display: 'inline-block',
                                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '50px',
                                        backdropFilter: 'blur(10px)',
                                        marginBottom: '1.5rem',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}
                                >
                                    <span style={{
                                        color: 'white',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        letterSpacing: '1px'
                                    }}>
                                        {slides[currentSlide].subtitle}
                                    </span>
                                </motion.div>

                                <h1 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                    fontWeight: 800,
                                    color: 'white',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.1,
                                    textShadow: '2px 2px 20px rgba(0,0,0,0.3)'
                                }}>
                                    {slides[currentSlide].title}
                                </h1>

                                <p style={{
                                    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
                                    color: 'rgba(255, 255, 255, 0.95)',
                                    marginBottom: '2.5rem',
                                    maxWidth: '550px',
                                    lineHeight: 1.6,
                                    textShadow: '1px 1px 10px rgba(0,0,0,0.2)'
                                }}>
                                    {slides[currentSlide].description}
                                </p>

                                <Link to={slides[currentSlide].ctaLink} style={{ textDecoration: 'none' }}>
                                    <motion.button
                                        whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.3)' }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            backgroundColor: 'white',
                                            color: '#667eea',
                                            padding: '1rem 3rem',
                                            fontSize: '1.1rem',
                                            fontWeight: 700,
                                            borderRadius: '50px',
                                            border: 'none',
                                            cursor: 'pointer',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {slides[currentSlide].cta}
                                    </motion.button>
                                </Link>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
                                style={{
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -20, 0],
                                        rotate: [0, 3, 0, -3, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        borderRadius: '30px',
                                        overflow: 'hidden',
                                        boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                                        border: '6px solid rgba(255,255,255,0.2)',
                                        backdropFilter: 'blur(10px)',
                                        maxWidth: '550px',
                                        width: '100%'
                                    }}
                                >
                                    <img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
            >
                <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                gap: '0.75rem'
            }}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        style={{
                            width: currentSlide === index ? '40px' : '12px',
                            height: '12px',
                            borderRadius: '10px',
                            border: '2px solid white',
                            backgroundColor: currentSlide === index ? 'white' : 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backdropFilter: 'blur(5px)'
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .grid-cols-2 {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                        text-align: center;
                    }
                    .grid-cols-2 > div:last-child {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
};
