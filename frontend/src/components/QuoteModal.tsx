import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Loader2, CheckCircle, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialCategory?: string;
}

export const QuoteModal = ({ isOpen, onClose, initialCategory }: QuoteModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: initialCategory || ''
    });

    // Update category if initialCategory changes
    useEffect(() => {
        if (initialCategory) {
            setFormData(prev => ({ ...prev, category: initialCategory }));
        }
    }, [initialCategory]);

    // Handle body scroll locking
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const categories = [
        'Birthday Frames',
        'Anniversary Frames',
        'Baby Details Frames',
        'Collage Frames',
        'Mosaic Frames',
        'Gift Hampers',
        'Other'
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1500));

        // Send via WhatsApp
        const message = `📋 Free Quote Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.category}`;
        const whatsappUrl = `https://wa.me/919995064344?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
        setIsSuccess(true);

        setTimeout(() => {
            setIsSuccess(false);
            onClose();
            setFormData({
                name: '',
                phone: '',
                category: ''
            });
        }, 3000);
    };

    const modalContent = (
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
                            zIndex: 9999, // Super high z-index
                            backdropFilter: 'blur(8px)'
                        }}
                    />

                    {/* Modal Wrapper for centering */}
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                        pointerEvents: 'none',
                        padding: '1rem'
                    }}>
                        {/* Modal Box */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                padding: 'clamp(1.5rem, 5vw, 2.5rem)',
                                width: 'min(100%, 500px)',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                boxShadow: '0 25px 70px rgba(0,0,0,0.4)',
                                pointerEvents: 'auto',
                                position: 'relative'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '1.25rem',
                                    right: '1.25rem',
                                    background: '#f3f4f6',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#666',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                                    e.currentTarget.style.color = '#000';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                                    e.currentTarget.style.color = '#666';
                                }}
                            >
                                <X size={18} />
                            </button>

                            {isSuccess ? (
                                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                    <CheckCircle size={72} style={{ color: '#10b981', marginBottom: '1.5rem' }} />
                                    <h3 style={{ color: '#2D3446', marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: 700 }}>Quote Request Sent!</h3>
                                    <p style={{ color: '#666', fontSize: '1rem' }}>
                                        We'll send you a detailed quote within 2 hours.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                            <div style={{ backgroundColor: '#fff5f2', padding: '0.75rem', borderRadius: '15px' }}>
                                                <Gift size={28} style={{ color: '#E07A5F' }} />
                                            </div>
                                            <h2 style={{ color: '#2D3446', margin: 0, fontSize: '1.75rem', fontWeight: 800 }}>Get Free Quote</h2>
                                        </div>
                                        <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.5 }}>
                                            Fill in your details and get a personalized quote in 2 hours!
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#2D3446' }}>
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="Enter your name"
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    border: '2px solid #f3f4f6',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit',
                                                    transition: 'all 0.3s',
                                                    backgroundColor: '#f9fafb'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#E07A5F';
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.boxShadow = '0 0 0 4px rgba(224, 122, 95, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#f3f4f6';
                                                    e.target.style.backgroundColor = '#f9fafb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#2D3446' }}>
                                                WhatsApp Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="+91 "
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    border: '2px solid #f3f4f6',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit',
                                                    transition: 'all 0.3s',
                                                    backgroundColor: '#f9fafb'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#E07A5F';
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.boxShadow = '0 0 0 4px rgba(224, 122, 95, 0.1)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#f3f4f6';
                                                    e.target.style.backgroundColor = '#f9fafb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#2D3446' }}>
                                                Product Category *
                                            </label>
                                            <select
                                                required
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    borderRadius: '12px',
                                                    border: '2px solid #f3f4f6',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit',
                                                    backgroundColor: '#f9fafb',
                                                    transition: 'all 0.3s'
                                                }}
                                            >
                                                <option value="">Select a category</option>
                                                {categories.map(cat => (
                                                    <option key={cat} value={cat}>{cat}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            style={{
                                                background: 'linear-gradient(135deg, #E07A5F 0%, #d66a4f 100%)',
                                                color: 'white',
                                                padding: '1.1rem',
                                                borderRadius: '12px',
                                                border: 'none',
                                                fontSize: '1.1rem',
                                                fontWeight: 800,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.75rem',
                                                marginTop: '0.5rem',
                                                opacity: isSubmitting ? 0.7 : 1,
                                                boxShadow: '0 8px 25px rgba(224, 122, 95, 0.4)',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(224, 122, 95, 0.5)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(224, 122, 95, 0.4)';
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={24} className="animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <Gift size={24} />
                                                    Get Free Quote
                                                </>
                                            )}
                                        </button>

                                        <div style={{
                                            textAlign: 'center',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            fontSize: '0.9rem',
                                            color: '#666',
                                            marginTop: '0.5rem'
                                        }}>
                                            <span style={{ display: 'inline-block', width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
                                            Response time: ~2 hours
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.getElementById('modal-root') || document.body);
};
