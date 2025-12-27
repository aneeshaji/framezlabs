import { useState } from 'react';
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call - In production, send to your backend
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
                    bottom: '90px',
                    right: '20px',
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

            {/* Modal */}
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
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                zIndex: 1000,
                                backdropFilter: 'blur(4px)'
                            }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            style={{
                                position: 'fixed',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'white',
                                borderRadius: '16px',
                                padding: '2rem',
                                width: '90%',
                                maxWidth: '400px',
                                zIndex: 1001,
                                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
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

                            {isSuccess ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <CheckCircle size={64} style={{ color: '#10b981', marginBottom: '1rem' }} />
                                    <h3 style={{ color: '#2D3446', marginBottom: '0.5rem' }}>Request Sent!</h3>
                                    <p style={{ color: '#666' }}>We'll call you back shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 style={{ color: '#2D3446', marginBottom: '0.5rem' }}>Request a Callback</h3>
                                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                                        Fill in your details and we'll call you back within 30 minutes!
                                    </p>

                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
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
                                                    padding: '0.75rem',
                                                    borderRadius: '8px',
                                                    border: '1.5px solid #e5e7eb',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
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
                                                    padding: '0.75rem',
                                                    borderRadius: '8px',
                                                    border: '1.5px solid #e5e7eb',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit'
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
                                                Preferred Time
                                            </label>
                                            <select
                                                value={formData.preferredTime}
                                                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                                style={{
                                                    width: '100%',
                                                    padding: '0.75rem',
                                                    borderRadius: '8px',
                                                    border: '1.5px solid #e5e7eb',
                                                    fontSize: '1rem',
                                                    fontFamily: 'inherit',
                                                    backgroundColor: 'white'
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
                                                backgroundColor: '#E07A5F',
                                                color: 'white',
                                                padding: '0.875rem',
                                                borderRadius: '8px',
                                                border: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '0.5rem',
                                                marginTop: '0.5rem',
                                                opacity: isSubmitting ? 0.7 : 1
                                            }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 size={20} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Phone size={20} />
                                                    Request Callback
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
