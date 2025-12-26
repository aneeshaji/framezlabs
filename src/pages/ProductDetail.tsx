import { useParams, Link } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../data/products';
import { ArrowLeft, ShoppingBag, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideInLeft, slideInRight } from '../utils/animations';

export const ProductDetail = () => {
    const { id } = useParams();
    const product = FEATURED_PRODUCTS.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container section-padding text-center" style={{ paddingTop: '100px' }}>
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Products</Link>
            </div>
        );
    }

    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-cream)' }}>
            <div className="container">
                <Link to="/products" className="flex items-center gap-sm" style={{ marginBottom: '2rem', color: '#666' }}>
                    <ArrowLeft size={18} /> Back to Products
                </Link>

                <div className="grid grid-cols-1" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>

                    {/* Image */}
                    <motion.div
                        variants={slideInLeft}
                        initial="hidden"
                        animate="visible"
                        style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800';
                            }}
                        />
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        animate="visible"
                        className="product-info"
                    >
                        <span className="text-teal" style={{ fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {product.category}
                        </span>
                        <h1 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>{product.name}</h1>

                        <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem', lineHeight: 1.8 }}>
                            {product.description} <br />
                            Customized to perfection with your photos and memories. High-quality printing and premium framing materials used.
                        </p>

                        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div className="flex items-center gap-sm"><Check size={18} className="text-gold" /> <span>Premium Quality Frame</span></div>
                            <div className="flex items-center gap-sm"><Check size={18} className="text-gold" /> <span>High Resolution Printing</span></div>
                            <div className="flex items-center gap-sm"><Check size={18} className="text-gold" /> <span>Custom Size Available</span></div>
                            <div className="flex items-center gap-sm"><Check size={18} className="text-gold" /> <span>Safe & Secure Packaging</span></div>
                        </div>

                        <a
                            href={`https://wa.me/919995064344?text=Hi, I am interested in the ${product.name}. Can you please share more details?`}
                            target="_blank"
                            className="btn btn-gold"
                            style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}
                        >
                            <ShoppingBag size={20} style={{ marginRight: '0.5rem' }} /> Enquire Now
                        </a>

                        <p style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: '#999' }}>
                            * Prices may vary based on customization and size requirements.
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
