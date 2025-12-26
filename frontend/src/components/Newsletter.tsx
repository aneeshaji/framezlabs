import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'subscribed'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            try {
                const res = await fetch('http://localhost:5000/api/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });

                if (res.ok) {
                    setStatus('subscribed');
                    setEmail('');
                }
            } catch (err) {
                console.error('Subscription failed', err);
            }
        }
    };

    return (
        <div style={{ marginTop: '2rem' }}>
            <h4 style={{ color: 'var(--color-gold)', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Stay Updated</h4>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Join our newsletter for exclusive offers and new product launches.
            </p>

            <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <AnimatePresence mode="wait">
                    {status === 'idle' ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                borderRadius: 'var(--radius-sm)',
                                padding: '0.25rem',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'white',
                                    padding: '0.75rem',
                                    flex: 1,
                                    outline: 'none',
                                    fontSize: '0.9rem',
                                    minWidth: 0
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: 'var(--color-gold)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    width: '36px',
                                    height: '36px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex items-center gap-sm"
                            style={{
                                color: '#4ade80',
                                backgroundColor: 'rgba(74, 222, 128, 0.1)',
                                padding: '1rem',
                                borderRadius: 'var(--radius-sm)'
                            }}
                        >
                            <Check size={18} />
                            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Subscribed successfully!</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};
