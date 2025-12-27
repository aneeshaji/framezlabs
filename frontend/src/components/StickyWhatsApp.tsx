import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export const StickyWhatsApp = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const location = useLocation();

    // Dynamic message based on current page
    const getWhatsAppMessage = () => {
        const path = location.pathname;
        if (path.includes('/products/')) {
            return "Hi! I'm interested in this product. Can you provide more details?";
        } else if (path === '/products') {
            return "Hi! I'd like to know more about your custom photo frames.";
        } else if (path === '/contact') {
            return "Hi! I'd like to get in touch with you.";
        } else if (path === '/about') {
            return "Hi! I'd like to know more about FramezLabs.";
        } else {
            return "Hi! I'm interested in your custom photo frames and personalized gifts.";
        }
    };

    const whatsappUrl = `https://wa.me/919995064344?text=${encodeURIComponent(getWhatsAppMessage())}`;

    return (
        <>
            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    right: '2rem',
                    backgroundColor: '#25D366',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 9999,
                    cursor: 'pointer',
                    border: '2px solid white',
                    textDecoration: 'none'
                }}
                aria-label="Chat on WhatsApp"
            >
                {/* Pulsing ring animation */}
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '3px solid #25D366',
                        zIndex: -1
                    }}
                />

                {/* Unread badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                    style={{
                        position: 'absolute',
                        top: '-2px',
                        right: '-2px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#ff3b30',
                        color: 'white',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid white'
                    }}
                >
                    1
                </motion.div>

                <MessageCircle size={32} fill="white" strokeWidth={0} />
            </motion.a>

            {/* Tooltip */}
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        style={{
                            position: 'fixed',
                            bottom: '2.5rem',
                            right: '5.5rem',
                            backgroundColor: 'white',
                            color: '#2D3446',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            zIndex: 9998,
                            whiteSpace: 'nowrap',
                            pointerEvents: 'none'
                        }}
                    >
                        Chat with us! 🟢 Online now
                        <div style={{
                            position: 'absolute',
                            right: '-6px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: 0,
                            height: 0,
                            borderTop: '6px solid transparent',
                            borderBottom: '6px solid transparent',
                            borderLeft: '6px solid white'
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
