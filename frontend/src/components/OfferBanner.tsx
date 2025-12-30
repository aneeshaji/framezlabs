import { useState, useEffect } from 'react';
import { X, Gift, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const OfferBanner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Set offer end date (7 days from now)
    const offerEndDate = new Date();
    offerEndDate.setDate(offerEndDate.getDate() + 7);

    useEffect(() => {
        // Check if user has dismissed the banner
        const dismissed = localStorage.getItem('offerBannerDismissed');
        if (dismissed) {
            setIsVisible(false);
        }

        // Countdown timer
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = offerEndDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                setIsVisible(false);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem('offerBannerDismissed', 'true');
    };

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                exit={{ height: 0, opacity: 0 }}
                style={{
                    background: 'linear-gradient(135deg, #E07A5F 0%, #d66a4f 100%)',
                    color: 'white',
                    position: 'relative',
                    zIndex: 1000,
                    overflow: 'hidden'
                }}
            >
                {/* Animated background pattern */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.3
                }} />

                <div className="container" style={{
                    padding: '1rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {/* Offer Text */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Gift size={28} />
                        </motion.div>
                        <div>
                            <h3 style={{
                                margin: 0,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                letterSpacing: '0.5px'
                            }}>
                                🎉 SPECIAL OFFER: BUY 1 GET 1 FREE!
                            </h3>
                            <p style={{
                                margin: 0,
                                fontSize: '0.85rem',
                                opacity: 0.95
                            }}>
                                On all custom photo frames - Limited time only!
                            </p>
                        </div>
                    </div>

                    {/* Countdown Timer */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Clock size={18} />
                        <div style={{ display: 'flex', gap: '0.5rem', fontWeight: 700 }}>
                            <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                            <span>:</span>
                            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                            <span>:</span>
                            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                            <span>:</span>
                            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/919995064344?text=Hi! I'm interested in the BUY 1 GET 1 FREE offer on custom photo frames. Please share more details."
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            backgroundColor: 'white',
                            color: '#E07A5F',
                            padding: '0.6rem 1.5rem',
                            borderRadius: '50px',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                        }}
                    >
                        Claim Offer Now
                    </a>

                    {/* Close Button */}
                    <button
                        onClick={handleDismiss}
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                        }}
                    >
                        <X size={18} />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};
