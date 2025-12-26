import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';
import { EnquiryModal } from './EnquiryModal';

export const FloatingQuoteButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '7rem', // Stacked above WhatsApp
                        right: '2rem',
                        backgroundColor: 'var(--color-gold)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '1rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 15px rgba(224, 122, 95, 0.4)',
                        zIndex: 900,
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.95rem'
                    }}
                >
                    <MessageSquareText size={20} />
                    <span className="hidden-mobile">Get Quote</span>
                </motion.button>
            </AnimatePresence>

            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
