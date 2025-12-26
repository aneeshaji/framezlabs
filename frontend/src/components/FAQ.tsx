import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ marginBottom: '1rem' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem 2rem',
                    textAlign: 'left',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 215, 0, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    color: 'white',
                    transition: 'all 0.3s ease'
                }}
            >
                <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{question}</span>
                {isOpen ? <Minus className="text-gold" size={20} /> : <Plus className="text-gold" size={20} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{
                            padding: '1.5rem 2rem',
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: '1.6',
                            borderLeft: '2px solid var(--color-gold)',
                            marginLeft: '2rem',
                            marginTop: '0.5rem'
                        }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const faqs = [
        {
            question: "How do I share my photos for customization?",
            answer: "Once you select a product, you can directly chat with us via WhatsApp. You can share your high-quality photos there, and our designers will help you with the layout."
        },
        {
            question: "How long does delivery take?",
            answer: "We typically ship products within 3-5 working days. Depending on your location in India, it usually takes another 2-4 days for the product to reach your doorstep."
        },
        {
            question: "Do you provide a digital proof before printing?",
            answer: "Yes! We always share a digital preview of your customized design (like mosaics or collages) via WhatsApp for your approval before we proceed to printing."
        },
        {
            question: "Are the frames durable?",
            answer: "Absolutely. we use premium quality wood and acrylic/glass materials to ensure your memories are preserved for a lifetime. Our packaging is also extra-secure to prevent any damage during transit."
        },
        {
            question: "Can I order in bulk for events?",
            answer: "Yes, we handle bulk orders for weddings, birthdays, and corporate events. Please use our enquiry form or contact us directly on WhatsApp for special bulk pricing."
        }
    ];

    return (
        <section style={{
            padding: '8rem 0',
            background: 'linear-gradient(to bottom, #020617, #0f172a)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decor */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(224,122,95,0.05) 0%, transparent 70%)',
                filter: 'blur(50px)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>
                        <HelpCircle size={20} />
                        <span style={{ fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Questions?</span>
                    </div>
                    <h2 style={{ color: 'white', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Common FAQs</h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto' }}>
                        Everything you need to know about getting your precious moments framed at FramezLabs.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};
