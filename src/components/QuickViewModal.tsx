import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';
import type { Product } from '../data/products';

interface QuickViewModalProps {
    product: Product | null;
    onClose: () => void;
}

export const QuickViewModal = ({ product, onClose }: QuickViewModalProps) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    backdropFilter: 'blur(8px)',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem'
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 30 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor: 'white',
                        width: '100%',
                        maxWidth: '900px',
                        borderRadius: 'var(--radius-xl)',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        maxHeight: 'min(90vh, 800px)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '1.2rem',
                            right: '1.2rem',
                            zIndex: 10,
                            backgroundColor: 'white',
                            border: 'none',
                            borderRadius: '50%',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 'var(--shadow-md)',
                            cursor: 'pointer',
                            color: 'var(--color-teal)',
                            transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    >
                        <X size={22} />
                    </button>

                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }} className="md:flex-row">
                        <div style={{ flex: '1.2', minHeight: '350px', backgroundColor: '#f9f9f9', position: 'relative' }} className="h-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            {product.tag && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    left: '1.5rem',
                                    backgroundColor: 'var(--color-gold)',
                                    color: 'white',
                                    padding: '6px 16px',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}>
                                    {product.tag}
                                </div>
                            )}
                        </div>

                        <div style={{ flex: '1', padding: '3.5rem', display: 'flex', flexDirection: 'column', backgroundColor: 'white' }}>
                            <div style={{ marginBottom: '2rem' }}>
                                <span style={{
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    color: 'var(--color-gold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.5px',
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>
                                    {product.category}
                                </span>
                                <h2 style={{ fontSize: '2.4rem', color: 'var(--color-teal)', lineHeight: '1.1' }}>{product.name}</h2>
                            </div>

                            <p style={{ color: 'var(--color-gray)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                                {product.description}
                                <br /><br />
                                <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                    ✨ Premium Quality Frames<br />
                                    🎨 Professionally Designed<br />
                                    🚚 Safe Delivery Pan-India
                                </span>
                            </p>

                            <div style={{ marginTop: 'auto' }}>
                                <a
                                    href={`https://wa.me/919995064344?text=Hi, I am interested in ${product.name}. Please share details.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-gold"
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.8rem',
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        borderRadius: 'var(--radius-sm)'
                                    }}
                                >
                                    <ShoppingBag size={20} /> Enquire via WhatsApp
                                </a>
                                <p style={{ fontSize: '0.85rem', color: '#999', textAlign: 'center', marginTop: '1.2rem' }}>
                                    Handcrafted with ❤️ at FramezLabs
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};
