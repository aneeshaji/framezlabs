import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FEATURED_PRODUCTS, CATEGORIES } from '../data/products';
import { ShoppingBag, Eye } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { fadeInUp, pageTransition, revealList } from '../utils/animations';
import { QuickViewModal } from '../components/QuickViewModal';
import type { Product } from '../data/products';

export const Products = () => {
    const location = useLocation();
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const state = location.state as { category?: string } | null;
        if (state && state.category) {
            setActiveCategory(state.category);
        }
    }, [location.state]);

    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = activeCategory === "All"
        ? FEATURED_PRODUCTS
        : FEATURED_PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <motion.div
            className="page-wrapper"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
        >
            <div className="container section-padding">

                {/* Header */}
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h1 className="text-gold" style={{ fontFamily: 'cursive' }}>Our Collection</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#666' }}>
                        Browse through our wide variety of custom frames and gifts. Found something you like? Click to order via WhatsApp!
                    </p>
                </div>

                {/* Filters */}
                <div
                    className="filters"
                    style={{
                        display: 'flex',
                        gap: '0.8rem',
                        overflowX: 'auto',
                        paddingBottom: '1rem',
                        marginBottom: '3rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <button
                        className={`btn ${activeCategory === "All" ? 'btn-primary' : 'btn-outline'}`}
                        onClick={() => setActiveCategory("All")}
                        style={{ borderRadius: 'var(--radius-full)', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                    >
                        All
                    </button>

                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                            onClick={() => setActiveCategory(cat)}
                            style={{ whiteSpace: 'nowrap', borderRadius: 'var(--radius-full)', padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    key={activeCategory} // Force re-animation on category change
                    variants={revealList}
                    initial="hidden"
                    animate="visible"
                    className="grid"
                    style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="product-card"
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-md)',
                                overflow: 'hidden',
                                boxShadow: 'var(--shadow-sm)',
                                border: 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
                                <Link to={`/products/${product.id}`} style={{ display: 'block', height: '100%', color: 'inherit' }}>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800';
                                        }}
                                    />
                                </Link>

                                {/* Quick View Overlay - visible on hover */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    onClick={() => setSelectedProduct(product)}
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        zIndex: 5
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: 'white',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: 'var(--radius-full)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--color-teal)',
                                        fontWeight: 700,
                                        boxShadow: 'var(--shadow-md)',
                                        fontSize: '0.85rem'
                                    }}>
                                        <Eye size={18} /> Quick View
                                    </div>
                                </motion.div>

                                {product.tag && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        left: '1rem',
                                        backgroundColor: 'var(--color-gold)',
                                        color: 'white',
                                        padding: '4px 12px',
                                        borderRadius: 'var(--radius-full)',
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                        zIndex: 2
                                    }}>
                                        {product.tag}
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                    <Link to={`/products/${product.id}`} style={{ flex: 1, marginRight: '1rem' }}>
                                        <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{product.name}</h4>
                                    </Link>
                                    <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '4px 10px', backgroundColor: 'var(--color-gray-light)', color: '#555', borderRadius: '20px', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                                        {product.category}
                                    </span>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#777', marginBottom: '1.5rem' }}>
                                    {product.description}
                                </p>
                                <a
                                    href={`https://wa.me/919995064344?text=Hi, I am interested in ${product.name}. Please share details.`}
                                    target="_blank"
                                    className="btn btn-gold"
                                    style={{ width: '100%', borderRadius: 'var(--radius-sm)' }}
                                >
                                    <ShoppingBag size={18} style={{ marginRight: '0.5rem' }} /> Enquire Now
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center" style={{ padding: '4rem 0', color: '#888' }}>
                        <p>No products found in this category yet. Check back soon!</p>
                    </div>
                )}

                <QuickViewModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />

            </div>
        </motion.div >
    );
};
