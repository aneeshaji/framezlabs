import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Phone, X, Loader2, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CallbackButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        preferredTime: 'anytime'
    });

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Send via WhatsApp
        const message = `🔔 Callback Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Time: ${formData.preferredTime}`;
        const whatsappUrl = `https://wa.me/919995064344?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSuccess(false);
            setIsOpen(false);
            setFormData({ name: '', phone: '', preferredTime: 'anytime' });
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
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            zIndex: 9999,
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
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '24px',
                                padding: '2.5rem',
                                width: 'min(100%, 450px)',
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
                                onClick={() => setIsOpen(false)}
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
                                    <h3 style={{ color: '#2D3446', marginBottom: '0.75rem', fontSize: '1.5rem', fontWeight: 700 }}>Request Sent!</h3>
                                    <p style={{ color: '#666', fontSize: '1rem' }}>We'll call you back shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                                            <div style={{ backgroundColor: '#f0f4ff', padding: '0.75rem', borderRadius: '15px' }}>
                                                <Phone size={28} style={{ color: '#2D3446' }} />
                                            </div>
                                            <h2 style={{ color: '#2D3446', margin: 0, fontSize: '1.5rem', fontWeight: 800 }}>Request a Callback</h2>
                                        </div>
                                        <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                            Fill in your details and we'll call you back within 30 minutes!
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: '#2D3446' }}>
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
                                                    backgroundColor: '#f9fafb',
                                                    transition: 'all 0.3s'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#2D3446';
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.boxShadow = '0 0 0 4px rgba(45, 52, 70, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#f3f4f6';
                                                    e.target.style.backgroundColor = '#f9fafb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: '#2D3446' }}>
                                                Phone Number *
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
                                                    backgroundColor: '#f9fafb',
                                                    transition: 'all 0.3s'
                                                }}
                                                onFocus={(e) => {
                                                    e.target.style.borderColor = '#2D3446';
                                                    e.target.style.backgroundColor = 'white';
                                                    e.target.style.boxShadow = '0 0 0 4px rgba(45, 52, 70, 0.05)';
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor = '#f3f4f6';
                                                    e.target.style.backgroundColor = '#f9fafb';
                                                    e.target.style.boxShadow = 'none';
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', fontWeight: 700, color: '#2D3446' }}>
                                                Preferred Time
                                            </label>
                                            <select
                                                value={formData.preferredTime}
                                                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
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
                                                <option value="anytime">Anytime</option>
                                                <option value="morning">Morning (9 AM - 12 PM)</option>
                                                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                                                <option value="evening">Evening (4 PM - 8 PM)</option>
                                            </select>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            style={{
                                                backgroundColor: '#2D3446',
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
                                                boxShadow: '0 8px 25px rgba(45, 52, 70, 0.3)',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseEnter={(e) => {
                                                if (!isSubmitting) {
                                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(45, 52, 70, 0.4)';
                                                }
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 8px 25px rgba(45, 52, 70, 0.3)';
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={24} className="animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    <Phone size={24} />
                                                    Request Callback
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );

    return (
        <>
            {/* Floating Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '7rem', // Moved up to avoid overlap with WhatsApp button
                    right: '2rem',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2D3446 0%, #1a1f2e 100%)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(45, 52, 70, 0.4)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 999
                }}
            >
                <Phone size={24} />
            </motion.button>

            {createPortal(modalContent, document.getElementById('modal-root') || document.body)}
        </>
    );
};
