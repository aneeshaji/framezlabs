import { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export const EnquiryForm = ({ productName = "" }: { productName?: string }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: productName ? `I am interested in ${productName}.` : ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const text = `*New Enquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/919995064344?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card"
            style={{
                padding: '2rem',
                backgroundColor: 'white',
                maxWidth: '500px',
                margin: '0 auto',
                boxShadow: 'var(--shadow-lg)'
            }}
        >
            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h3 className="text-teal" style={{ marginBottom: '0.5rem' }}>Get a Free Quote</h3>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>Fill out the form and we'll contact you shortly on WhatsApp.</p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Your Name</label>
                    <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem' }}
                    />
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>WhatsApp Number</label>
                    <div className="flex" style={{ alignItems: 'center', border: '1px solid #ddd', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                        <span style={{ backgroundColor: '#f4f4f4', padding: '0.8rem', color: '#555', borderRight: '1px solid #ddd' }}>+91</span>
                        <input
                            required
                            type="tel"
                            placeholder="9876543210"
                            pattern="[0-9]{10}"
                            title="Please enter a valid 10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            style={{ flex: 1, padding: '0.8rem', border: 'none', fontSize: '1rem', outline: 'none' }}
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
                        style={{ width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', fontSize: '1rem', fontFamily: 'inherit' }}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
                >
                    <Send size={18} /> Send Enquiry
                </button>
            </form>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.85rem', color: '#888' }}>
                <p className="flex items-center justify-center gap-sm">
                    <Phone size={14} /> Prefer to call? <a href="tel:+919995064344" style={{ fontWeight: 600, color: 'var(--color-dark)' }}>+91 9995064344</a>
                </p>
            </div>
        </motion.div>
    );
};
