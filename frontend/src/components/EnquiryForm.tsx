import { useState } from 'react';
import { Send, Phone, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EnquiryForm = ({ productName = "", minimal = false }: { productName?: string, minimal?: boolean }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: productName ? `I am interested in ${productName}.` : ''
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
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send enquiry');
            }
        } catch (error) {
            console.error('Enquiry Error:', error);
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again or contact us directly.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={minimal ? "" : "card"}
            style={{
                padding: minimal ? '0' : '2rem',
                backgroundColor: minimal ? 'transparent' : 'white',
                maxWidth: '500px',
                margin: '0 auto',
                boxShadow: minimal ? 'none' : 'var(--shadow-lg)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h3 className="text-teal" style={{ marginBottom: '0.5rem' }}>{minimal ? "Get Your Quote" : "Get a Free Quote"}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Fill out the form and we'll get back to you via email/phone.</p>
            </div>

            <AnimatePresence mode="wait">
                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--color-success)' }}
                    >
                        <CheckCircle size={48} className="text-teal" style={{ margin: '0 auto 1rem' }} />
                        <h4 style={{ color: 'var(--color-teal)' }}>Enquiry Sent!</h4>
                        <p style={{ color: '#666' }}>Thank you for reaching out. We will contact you shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="btn btn-outline"
                            style={{ marginTop: '1rem', fontSize: '0.9rem' }}
                        >
                            Send Another
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Your Name</label>
                            <input
                                required
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                disabled={status === 'loading'}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Phone Number</label>
                            <div className="flex" style={{ alignItems: 'center', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'white' }}>
                                <span style={{ backgroundColor: '#f4f4f4', padding: '0.8rem', color: '#555', borderRight: '1px solid #ddd', minWidth: '3.5rem', textAlign: 'center' }}>+91</span>
                                <input
                                    required
                                    type="tel"
                                    placeholder="9876543210"
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid 10-digit mobile number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    disabled={status === 'loading'}
                                    style={{ flex: 1, padding: '0.8rem', border: 'none', fontSize: '1rem', outline: 'none', width: '100%', minWidth: 0 }}
                                />
                            </div>
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Your Requirement</label>
                            <textarea
                                required
                                rows={3}
                                placeholder="I want a customized mosaic frame..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                disabled={status === 'loading'}
                                style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit' }}
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
                            className="btn btn-gold"
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                opacity: status === 'loading' ? 0.7 : 1,
                                cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {status === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                            {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
                <p className="flex items-center justify-center gap-sm">
                    <Phone size={14} /> Prefer to call? <a href="tel:+919995064344" style={{ fontWeight: 600, color: 'var(--color-dark)' }}>+91 9995064344</a>
                </p>
            </div>
        </motion.div>
    );
};
