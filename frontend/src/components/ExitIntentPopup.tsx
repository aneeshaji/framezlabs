import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

export const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if already shown in this session
        const shownInSession = sessionStorage.getItem('framez_exit_intent_shown');
        if (shownInSession) {
            setHasShown(true);
            return;
        }

        // Timer Trigger (for mobile/general)
        const timer = setTimeout(() => {
            if (!hasShown && !sessionStorage.getItem('framez_exit_intent_shown')) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('framez_exit_intent_shown', 'true');
            }
        }, 30000); // 30 seconds

        // Mouse Exit Trigger (Desktop)
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('framez_exit_intent_shown')) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('framez_exit_intent_shown', 'true');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 9999
                        }}
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-45%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-45%' }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            // transform handled by motion
                            width: '90%',
                            maxWidth: '450px',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            zIndex: 10000,
                            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header with Offer */}
                        <div style={{
                            background: 'linear-gradient(135deg, var(--color-gold) 0%, #d46b50 100%)',
                            padding: '1.5rem',
                            textAlign: 'center',
                            color: 'white',
                            position: 'relative'
                        }}>
                            <button
                                onClick={handleClose}
                                style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    background: 'rgba(255,255,255,0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                            >
                                <X size={18} />
                            </button>
                            <Gift size={48} style={{ marginBottom: '0.5rem', opacity: 0.9 }} />
                            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>WAIT!</h2>
                            <p style={{ fontSize: '1.1rem', margin: '0.5rem 0 0', opacity: 0.95 }}>
                                Get <span style={{ fontWeight: 800, textDecoration: 'underline' }}>10% OFF</span> on your first order.
                            </p>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem' }}>
                            <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                Fill out the form below to claim your discount code.
                            </p>
                            <EnquiryForm minimal={true} />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
