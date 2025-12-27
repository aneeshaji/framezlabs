import { useState } from 'react';
import { X, Loader2, CheckCircle, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const QuoteModal = ({ isOpen, onClose }: QuoteModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        category: '',
        budget: '1000-2000',
        requirements: ''
    });

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
        const message = `📋 Free Quote Request\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nCategory: ${formData.category}\nBudget: ₹${formData.budget}\nRequirements: ${formData.requirements || 'None'}`;
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
                email: '',
                category: '',
                budget: '1000-2000',
                requirements: ''
            });
        }, 3000);
    };

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
                            zIndex: 1000,
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            margin: 'auto',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            padding: '2.5rem',
                            width: '90%',
                            maxWidth: '500px',
                            height: 'fit-content',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            zIndex: 1001,
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#666'
                            }}
                        >
                            <X size={24} />
                        </button>

                        {isSuccess ? (
                            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                                <CheckCircle size={72} style={{ color: '#10b981', marginBottom: '1.5rem' }} />
                                <h3 style={{ color: '#2D3446', marginBottom: '0.75rem', fontSize: '1.5rem' }}>Quote Request Sent!</h3>
                                <p style={{ color: '#666', fontSize: '1rem' }}>
                                    We'll send you a detailed quote within 2 hours.
                                </p>
                            </div>
                        ) : (
                            <>
                                <div style={{ marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                                        <Gift size={28} style={{ color: '#E07A5F' }} />
                                        <h2 style={{ color: '#2D3446', margin: 0 }}>Get Free Quote</h2>
                                    </div>
                                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>
                                        Fill in your details and get a personalized quote in 2 hours!
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                                                padding: '0.875rem',
                                                borderRadius: '10px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit',
                                                transition: 'border-color 0.3s'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#E07A5F'}
                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
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
                                                padding: '0.875rem',
                                                borderRadius: '10px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#E07A5F'}
                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
                                            Email (Optional)
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="your@email.com"
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem',
                                                borderRadius: '10px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#E07A5F'}
                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
                                            Product Category *
                                        </label>
                                        <select
                                            required
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem',
                                                borderRadius: '10px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit',
                                                backgroundColor: 'white'
                                            }}
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map(cat => (
                                                <option key={cat} value={cat}>{cat}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
                                            Budget Range
                                        </label>
                                        <select
                                            value={formData.budget}
                                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem',
                                                borderRadius: '10px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit',
                                                backgroundColor: 'white'
                                            }}
                                        >
                                            <option value="500-1000">₹500 - ₹1,000</option>
                                            <option value="1000-2000">₹1,000 - ₹2,000</option>
                                            <option value="2000-3000">₹2,000 - ₹3,000</option>
                                            <option value="3000-5000">₹3,000 - ₹5,000</option>
                                            <option value="5000+">₹5,000+</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#2D3446' }}>
                                            Special Requirements (Optional)
                                        </label>
                                        <textarea
                                            value={formData.requirements}
                                            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                                            placeholder="Tell us about your customization needs..."
                                            rows={3}
                                            style={{
                                                width: '100%',
                                                padding: '0.875rem',
                                                borderRadius: '10px',
                                                border: '2px solid #e5e7eb',
                                                fontSize: '1rem',
                                                fontFamily: 'inherit',
                                                resize: 'vertical'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#E07A5F'}
                                            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        style={{
                                            background: 'linear-gradient(135deg, #E07A5F 0%, #d66a4f 100%)',
                                            color: 'white',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            border: 'none',
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.5rem',
                                            marginTop: '0.5rem',
                                            opacity: isSubmitting ? 0.7 : 1,
                                            boxShadow: '0 4px 12px rgba(224, 122, 95, 0.3)'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 size={22} className="animate-spin" />
                                                Sending Request...
                                            </>
                                        ) : (
                                            <>
                                                <Gift size={22} />
                                                Get Free Quote
                                            </>
                                        )}
                                    </button>

                                    <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#666', margin: 0 }}>
                                        💬 We'll respond within 2 hours during business hours
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
