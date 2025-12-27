import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Mail, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { pageTransition, fadeInUp, revealList, iconBounce } from '../utils/animations';

export const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Us | FramezLabs Customer Support"
                description="Get in touch with FramezLabs for custom photo frames and personalized gifts. WhatsApp, call, or email us for expert consultation. Pan-India shipping available."
                keywords="contact framezlabs, custom frames enquiry, photo frame order, personalized gifts contact, framezlabs support, framezlabs kollam"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Contact', url: '/contact' }
                ]}
            />
            <motion.div
                className="contact-page"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
                style={{ backgroundColor: 'var(--color-bg-main)', minHeight: '100vh', paddingTop: '100px' }}
            >
                <div className="container section-padding">
                    <div className="grid grid-cols-2" style={{ gap: '4rem', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', alignItems: 'start' }}>

                        {/* Left Column: Narrative & Info */}
                        <motion.div variants={revealList} initial="hidden" animate="visible">
                            <motion.div variants={fadeInUp}>
                                <h4 style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1rem' }}>Get in Touch</h4>
                                <h1 style={{ marginBottom: '2rem', lineHeight: '1.2' }}>Let's Create a <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Masterpiece</span> Together.</h1>
                                <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '500px' }}>
                                    Have a question about a frame or a special milestone coming up? Reach out and our designers will help you create the perfect gift.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-col gap-lg">
                                <motion.div
                                    className="contact-method"
                                    whileHover="animate"
                                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                                >
                                    <motion.div
                                        variants={iconBounce}
                                        style={{
                                            width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)',
                                            color: 'var(--color-gold)'
                                        }}
                                    >
                                        <Phone size={24} />
                                    </motion.div>
                                    <div>
                                        <h5 style={{ margin: 0, fontWeight: 700 }}>WhatsApp / Call</h5>
                                        <a href="https://wa.me/919995064344" target="_blank" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>+91 9995064344</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="contact-method"
                                    whileHover="animate"
                                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                                >
                                    <motion.div
                                        variants={iconBounce}
                                        style={{
                                            width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)',
                                            color: 'var(--color-gold)'
                                        }}
                                    >
                                        <Instagram size={24} />
                                    </motion.div>
                                    <div>
                                        <a href="https://instagram.com/framez__labs" target="_blank" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>@framez__labs</a>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="contact-method"
                                    whileHover="animate"
                                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                                >
                                    <motion.div
                                        variants={iconBounce}
                                        style={{
                                            width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)',
                                            color: 'var(--color-gold)'
                                        }}
                                    >
                                        <Mail size={24} />
                                    </motion.div>
                                    <div>
                                        <h5 style={{ margin: 0, fontWeight: 700 }}>Email Us</h5>
                                        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.95rem' }}>
                                            <a href="mailto:enquiry@framezlabs.store" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>enquiry@framezlabs.store</a>
                                            <a href="mailto:support@framezlabs.store" style={{ color: 'var(--color-gray)', textDecoration: 'none' }}>support@framezlabs.store</a>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="contact-method"
                                    whileHover="animate"
                                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                                >
                                    <motion.div
                                        variants={iconBounce}
                                        style={{
                                            width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'white',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)',
                                            color: 'var(--color-gold)'
                                        }}
                                    >
                                        <MapPin size={24} />
                                    </motion.div>
                                    <div>
                                        <h5 style={{ margin: 0, fontWeight: 700 }}>Our Studio</h5>
                                        <p style={{ margin: 0, color: 'var(--color-gray)' }}>Shipping Pan-India | Kollam, Kerala</p>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div variants={fadeInUp} style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'rgba(224, 122, 95, 0.05)', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--color-gold)' }}>
                                <div className="flex items-center gap-sm" style={{ color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                                    <Sparkles size={18} />
                                    <span style={{ fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase' }}>Expert Consultation</span>
                                </div>
                                <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.9rem' }}>
                                    "Every frame is a story. Our team is dedicated to making yours timeless."
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Enquiry Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            style={{
                                backgroundColor: 'white', padding: '3.5rem', borderRadius: 'var(--radius-xl)',
                                boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(0,0,0,0.02)'
                            }}
                        >
                            <h3 style={{ marginBottom: '2.5rem' }}>Send an Enquiry</h3>
                            <EnquiryFormLogic />
                        </motion.div>

                    </div>
                </div>

                {/* Subtle aesthetic backgrounds */}
                <div style={{ position: 'fixed', top: '10%', right: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(224, 122, 95, 0.05) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
                <div style={{ position: 'fixed', bottom: '10%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(61, 64, 91, 0.03) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
            </motion.div>
        </>
    );
};

// Internal component to handle form logic to keep main component clean
import { useState } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const EnquiryFormLogic = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        category: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', category: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send enquiry');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}
            >
                <CheckCircle size={64} className="text-teal" style={{ marginBottom: '1.5rem', color: '#E07A5F' }} />
                <h3 style={{ color: 'var(--color-dark)', marginBottom: '1rem' }}>Enquiry Received!</h3>
                <p style={{ color: 'var(--color-gray)', marginBottom: '2rem' }}>We will connect with you shortly.</p>
                <button onClick={() => setStatus('idle')} className="btn btn-outline">Send Another</button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--color-teal)' }}>Your Name</label>
                <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={status === 'loading'}
                    style={{
                        width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid #eee',
                        fontFamily: 'inherit', fontSize: '1rem', transition: 'all 0.3s ease'
                    }}
                />
            </div>

            <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--color-teal)' }}>WhatsApp Number</label>
                <input
                    required
                    type="tel"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={status === 'loading'}
                    style={{
                        width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid #eee',
                        fontFamily: 'inherit', fontSize: '1rem'
                    }}
                />
            </div>

            <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--color-teal)' }}>What are you looking for?</label>
                <textarea
                    required
                    placeholder="Describe the type of frame or product you are looking for..."
                    rows={2}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    disabled={status === 'loading'}
                    style={{
                        width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid #eee',
                        fontFamily: 'inherit', fontSize: '1rem', resize: 'none'
                    }}
                />
            </div>

            <div className="form-group">
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.6rem', color: 'var(--color-teal)' }}>Message (Optional)</label>
                <textarea
                    placeholder="Tell us about the occasion..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={status === 'loading'}
                    style={{
                        width: '100%', padding: '1rem', borderRadius: 'var(--radius-sm)', border: '1.5px solid #eee',
                        fontFamily: 'inherit', fontSize: '1rem', resize: 'none'
                    }}
                />
            </div>

            {status === 'error' && (
                <div style={{ color: 'red', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertCircle size={16} /> {errorMessage}
                </div>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="btn btn-primary"
                style={{
                    marginTop: '1rem', padding: '1.2rem', borderRadius: 'var(--radius-sm)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem',
                    fontSize: '1rem', fontWeight: 600,
                    opacity: status === 'loading' ? 0.7 : 1,
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                }}
            >
                {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Mail size={18} />}
                {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
            </button>

            <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--color-gray)', marginTop: '1rem' }}>
                Or <a href="https://wa.me/919995064344" target="_blank" style={{ color: 'var(--color-gold)', fontWeight: 600 }}>Message us on WhatsApp</a> directly.
            </p>
        </form>
    )
};
