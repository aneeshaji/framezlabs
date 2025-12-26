import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { EnquiryForm } from './EnquiryForm';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EnquiryModal = ({ isOpen, onClose }: EnquiryModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 999
                        }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.9, x: '-50%', y: '-45%' }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            // transform handled by motion
                            width: '90%',
                            maxWidth: '500px',
                            backgroundColor: 'white',
                            borderRadius: 'var(--radius-lg)',
                            padding: '2rem',
                            zIndex: 1000,
                            boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <EnquiryForm minimal={true} />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
