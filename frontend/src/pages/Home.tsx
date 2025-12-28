import { motion } from 'framer-motion';
import { ArrowRight, Star, Heart, ShieldCheck, Truck, Gift, CheckCircle, MessageCircle, Sparkles, Baby, Cake, Users, Frame, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnquiryForm } from '../components/EnquiryForm';
import { FAQ } from '../components/FAQ';
import { NewYearBanner } from '../components/NewYearBanner';
import { SEO } from '../components/SEO';
import { TrustBadges } from '../components/TrustBadges';
import { pageTransition, fadeInUp, staggerContainer, scaleIn, floating, iconBounce, iconJiggle } from "../utils/animations";

export const Home = () => {
    return (
        <>
            <SEO
                title="Custom Photo Frames & Personalized Gifts | FramezLabs India"
                description="Create lasting memories with premium custom photo frames, gift hampers & photo books. Handcrafted with love, delivered pan-India. Perfect for birthdays, anniversaries & special occasions."
                keywords="custom photo frames India, personalized gifts, anniversary frames, birthday photo frames, baby milestone frames, collage frames, mosaic frames, gift hampers, photo books, couple frames, handcrafted frames, premium frames online, Personalized Love Story Photo Frame, Romantic Couple Photo Frame, Personalized Baby Birth Detail Frame, Trip To Life Collage Frame, Brother Sister Photo Frame, Memories Galore Dad Frame, Elegant Wooden Personalized Photo Frame, Heartfelt Memories Frame, LoveFold Personalized Picture Frame, Personalised Keepsake Frame, Professional Photo Prints"
            />
            <motion.div
                className="home-page"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {/* Hero Section */}
                <section
                    className="hero"
                    style={{
                        minHeight: '65vh', // Reduced height as requested
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundColor: 'var(--color-bg-main)'
                    }}
                >

                    {/* Mesh Gradient Background - Dark Mode Optimized */}
                    <div style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(255,196,155,0.15) 0%, rgba(2,6,23,0) 70%)',
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                        zIndex: 0
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-10%',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(30,41,59,0.5) 0%, rgba(2,6,23,0) 70%)',
                        borderRadius: '50%',
                        filter: 'blur(60px)',
                        zIndex: 0
                    }} />

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <h1 style={{ marginBottom: '1.5rem', color: 'var(--color-dark)' }}>
                                    Frame Your <br />
                                    <span style={{ color: 'var(--color-teal)', fontStyle: 'italic' }}>Moments</span> Forever.
                                </h1>
                                <p style={{ fontSize: '1.2rem', color: 'var(--color-gray)', marginBottom: '2.5rem', maxWidth: '500px' }}>
                                    We create your moments with premium quality customized frames, gift hampers, and photo books. The perfect gift for your loved ones.
                                </p>
                                <div className="flex gap-md">
                                    <a href="#enquiry" className="btn btn-primary">
                                        Get Started
                                    </a>
                                    <Link to="/products" className="btn btn-outline">
                                        View Products
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Hero Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                style={{ position: 'relative' }}
                            >
                                <motion.div
                                    variants={floating}
                                    animate="animate"
                                >
                                    <div style={{
                                        position: 'relative',
                                        borderRadius: 'var(--radius-lg)',
                                        overflow: 'hidden',
                                        boxShadow: 'var(--shadow-gold)',
                                        border: '8px solid white'
                                    }}>
                                        <img
                                            src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=800"
                                            alt="Couple Frame"
                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                        />
                                    </div>
                                    {/* Floating Badge */}
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        style={{
                                            position: 'absolute',
                                            bottom: '10%',
                                            left: '-10%',
                                            backgroundColor: 'white',
                                            padding: '1rem',
                                            borderRadius: 'var(--radius-md)',
                                            boxShadow: 'var(--shadow-lg)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem'
                                        }}
                                    >
                                        <div style={{ backgroundColor: 'var(--color-gold-light)', padding: '0.5rem', borderRadius: '50%' }}>
                                            <Star size={20} className="text-gold" fill="currentColor" />
                                        </div>
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '0.9rem' }}>Top Rated</h5>
                                            <span style={{ fontSize: '0.8rem', color: '#666' }}>Trusted by 1000+ Customers</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                        </div>
                    </div>
                </section>

                {/* New Year Offer Banner */}
                <NewYearBanner />

                {/* Trust Bar - Redesigned for Premium Feel */}
                <div style={{
                    backgroundColor: 'var(--color-off-white)',
                    padding: '2.5rem 0',
                    borderTop: '1px solid rgba(0,0,0,0.03)',
                    borderBottom: '1px solid rgba(0,0,0,0.03)'
                }}>
                    <div className="container">
                        <div className="flex justify-center items-center flex-wrap" style={{ gap: 'clamp(1rem, 5vw, 4rem)' }}>
                            {[
                                { icon: <ShieldCheck size={24} />, title: "100% Quality Guaranteed", desc: "Rigorous quality checks for every frame" },
                                { icon: <Truck size={24} />, title: "Safe Pan-India Shipping", desc: "Premium packaging for zero-damage delivery" },
                                { icon: <Sparkles size={24} />, title: "Handcrafted with Love", desc: "Expert craftsmanship in every detail" }
                            ].map((trust, i) => (
                                <div key={i} className="flex items-start gap-md" style={{ flex: '1 1 280px', maxWidth: '350px' }}>
                                    <motion.div
                                        variants={iconBounce}
                                        whileInView="animate"
                                        viewport={{ once: true }}
                                        style={{
                                            color: 'white',
                                            backgroundColor: 'var(--color-gold)',
                                            padding: '0.75rem',
                                            borderRadius: '12px',
                                            boxShadow: 'var(--shadow-glow)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {trust.icon}
                                    </motion.div>
                                    <div>
                                        <h5 style={{ margin: 0, fontWeight: 700, color: 'var(--color-teal)' }}>{trust.title}</h5>
                                        <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-gray)' }}>{trust.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <TrustBadges />

                {/* Categories Section */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-main)' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h2 className="text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Our Collections</h2>
                            <p style={{ color: 'var(--color-gray)' }}>Explore our wide range of personalized items</p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid"
                            style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '2rem' }}
                        >
                            {[
                                { name: 'Birthday Frames', icon: <Cake size={28} /> },
                                { name: 'Baby Details Frames', icon: <Baby size={28} /> },
                                { name: 'Anniversary Frames', icon: <Heart size={28} /> },
                                { name: 'Collage Frames', icon: <ImageIcon size={28} /> },
                                { name: 'Mosaic Frames', icon: <Sparkles size={28} /> },
                                { name: 'Square Frames', icon: <Frame size={28} /> },
                                { name: 'Couple Mini Frames', icon: <Users size={28} /> },
                                { name: 'Gift Hampers', icon: <Gift size={28} /> }
                            ].map((cat, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ y: -12, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <Link
                                        to="/products"
                                        state={{ category: cat.name }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '2.5rem 1.5rem',
                                            background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
                                            borderRadius: '16px',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
                                            border: '1px solid rgba(224, 122, 95, 0.1)',
                                            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            minHeight: '180px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(224, 122, 95, 0.2), 0 4px 16px rgba(0,0,0,0.1)';
                                            e.currentTarget.style.borderColor = 'var(--color-gold)';
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #fff5f2 100%)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)';
                                            e.currentTarget.style.borderColor = 'rgba(224, 122, 95, 0.1)';
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)';
                                        }}
                                    >
                                        {/* Decorative gradient overlay */}
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: 'linear-gradient(90deg, var(--color-gold), var(--color-teal))',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease'
                                        }} className="category-gradient" />

                                        <motion.div
                                            variants={iconBounce}
                                            whileHover="animate"
                                            style={{
                                                color: 'white',
                                                background: 'linear-gradient(135deg, var(--color-gold) 0%, #d66a4f 100%)',
                                                width: '72px',
                                                height: '72px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '1.5rem',
                                                boxShadow: '0 8px 24px rgba(224, 122, 95, 0.3)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {cat.icon}
                                        </motion.div>

                                        <h4 style={{
                                            fontSize: '1.1rem',
                                            textAlign: 'center',
                                            fontWeight: 600,
                                            color: 'var(--color-dark)',
                                            marginBottom: '0.5rem',
                                            lineHeight: 1.4
                                        }}>
                                            {cat.name}
                                        </h4>

                                        <span style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--color-gold)',
                                            fontWeight: 600,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                            opacity: 0.8
                                        }}>
                                            Explore →
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={fadeInUp}
                                whileHover={{ y: -12, scale: 1.02 }}
                                style={{
                                    gridColumn: '1 / -1',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '1rem'
                                }}
                            >
                                <Link
                                    to="/products"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '2.5rem 1.5rem',
                                        background: 'linear-gradient(135deg, var(--color-teal) 0%, #1e5f5a 100%)',
                                        borderRadius: '16px',
                                        textDecoration: 'none',
                                        color: 'white',
                                        boxShadow: '0 4px 20px rgba(45, 52, 54, 0.15)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                        minHeight: '180px',
                                        minWidth: '220px',
                                        fontWeight: 700,
                                        fontSize: '1.1rem'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(45, 52, 54, 0.3)';
                                        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(45, 52, 54, 0.15)';
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    }}
                                >
                                    View All <ArrowRight size={24} style={{ marginLeft: '0.5rem' }} />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-off-white)' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '3rem' }}>
                            <h2 className="text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Why Choose FramezLabs?</h2>
                            <p>We are committed to delivering the best quality memories.</p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="grid grid-cols-3"
                            style={{ gap: '2rem' }}
                        >
                            {[
                                { icon: <ShieldCheck size={32} />, title: "Premium Quality", desc: "Top-grade materials used for all frames." },
                                { icon: <Heart size={32} />, title: "Made with Love", desc: "Handcrafted with attention to detail." },
                                { icon: <Truck size={32} />, title: "Safe Delivery", desc: "Secure packaging to prevent damage." },
                                { icon: <Gift size={32} />, title: "Perfect Gifting", desc: "The best choice for your loved ones." },
                                { icon: <MessageCircle size={32} />, title: "Quick Support", desc: "Direct WhatsApp support for all your queries." },
                                { icon: <Sparkles size={32} />, title: "Creative Designs", desc: "Expert designers to help craft your memories." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={scaleIn}
                                    whileHover={{ y: -5 }}
                                    className="card"
                                    style={{ padding: '2rem', textAlign: 'center' }}
                                >
                                    <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>{item.icon}</div>
                                    <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-main)' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h2 className="text-teal" style={{ fontFamily: 'var(--font-heading)' }}>How It Works</h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3"
                            style={{ textAlign: 'center' }}
                        >
                            {[
                                { step: "01", title: "Choose Product", desc: "Select from our wide range of products." },
                                { step: "02", title: "Chat & Customize", desc: "Share your photos via WhatsApp." },
                                { step: "03", title: "Fast Delivery", desc: "Get it delivered to your doorstep." }
                            ].map((item, i) => (
                                <div key={i} style={{ padding: '1rem' }}>
                                    <h1 style={{ color: 'var(--color-gold-light)', fontSize: '4rem', opacity: 0.5 }}>{item.step}</h1>
                                    <h3 style={{ marginTop: '-1rem' }}>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-teal)', color: 'white' }}>
                    <div className="container text-center">
                        <h2 style={{ color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '3rem' }}>What Our Customers Say</h2>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2-auto"
                            style={{ gap: '2rem' }}
                        >
                            {[
                                { name: "Priya S.", comment: "The mosaic frame was absolutely stunning! Best anniversary gift ever." },
                                { name: "Rahul M.", comment: "Super fast delivery and the packaging was very secure. Highly recommended!" },
                                { name: "Sneha K.", comment: "Loved the baby milestones frame. Quality is top notch." }
                            ].map((t, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: 'var(--radius-md)' }}
                                >
                                    <div style={{ color: 'var(--color-gold)', marginBottom: '1rem' }}>★★★★★</div>
                                    <p style={{ color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontSize: '1.1rem' }}>"{t.comment}"</p>
                                    <h5 style={{ color: 'white', marginTop: '1rem' }}>- {t.name}</h5>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Shop by Occasion - Premium Gallery Style */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-main)' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h2 className="text-teal" style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>Shop by Occasion</h2>
                            <p style={{ color: 'var(--color-gray)', maxWidth: '500px', margin: '0 auto' }}>Select the perfect milestone and let us help you find the most thoughtful gift.</p>
                        </div>

                        <div className="grid grid-cols-4" style={{ gap: '2rem' }}>
                            {[
                                { title: 'Anniversaries', icon: <Heart size={32} />, category: 'Anniversary Frames' },
                                { title: 'New Born', icon: <Baby size={32} />, category: 'Baby Details Frames' },
                                { title: 'Birthdays', icon: <Cake size={32} />, category: 'Birthday Frames' },
                                { title: 'Couple Goals', icon: <Users size={32} />, category: 'Couple Mini Frames' }
                            ].map((occ, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -12 }}
                                >
                                    <Link
                                        to="/products"
                                        state={{ category: occ.category }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            padding: '4rem 2rem',
                                            backgroundColor: 'white',
                                            borderRadius: 'var(--radius-lg)',
                                            textDecoration: 'none',
                                            color: 'inherit',
                                            boxShadow: 'var(--shadow-sm)',
                                            border: '1px solid rgba(0,0,0,0.03)',
                                            transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                        }}
                                    >
                                        <motion.div
                                            variants={iconJiggle}
                                            whileHover="animate"
                                            style={{
                                                color: 'white',
                                                backgroundColor: 'var(--color-gold)',
                                                width: '64px',
                                                height: '64px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '1.5rem',
                                                boxShadow: 'var(--shadow-glow)'
                                            }}
                                        >
                                            {occ.icon}
                                        </motion.div>
                                        <h4 style={{ fontSize: '1.1rem', textAlign: 'center', fontWeight: 700, color: 'var(--color-teal)' }}>{occ.title}</h4>
                                        <span style={{
                                            marginTop: '1rem',
                                            fontSize: '0.8rem',
                                            color: 'var(--color-gold)',
                                            fontWeight: 600,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase'
                                        }}>View Frames</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <FAQ />

                {/* Enquiry Section */}
                <section id="enquiry" className="section-padding" style={{ backgroundColor: 'var(--color-off-white)' }}>
                    <div className="container">
                        <div className="grid grid-cols-1" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h2 className="text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Have a Custom Concept?</h2>
                                <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                                    Whether it's a corporate gift, a bulk order, or a unique idea you have in mind – let us know! We turn your concepts into reality.
                                </p>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <li className="flex items-center gap-sm"><CheckCircle className="text-gold" /> 100% Customized Designs</li>
                                    <li className="flex items-center gap-sm"><CheckCircle className="text-gold" /> Digital Proof before Printing</li>
                                    <li className="flex items-center gap-sm"><CheckCircle className="text-gold" /> Pan-India Shipping</li>
                                </ul>
                            </div>
                            <div>
                                <EnquiryForm />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Strip */}
                <section style={{
                    padding: '8rem 0',
                    background: 'linear-gradient(rgba(45, 52, 70, 0.95), rgba(2, 6, 23, 1)), url("https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1600")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    textAlign: 'center',
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontSize: '3rem', letterSpacing: '-1px' }}>Ready to Frame Your Memories?</h2>
                            <p style={{ color: '#ccc', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                                Every moment tells a story. Let us help you tell yours with perfection and grace.
                            </p>
                            <Link to="/products" className="btn btn-gold" style={{ padding: '1.2rem 3.5rem', borderRadius: 'var(--radius-full)' }}>
                                Explore Collections
                            </Link>
                        </motion.div>
                    </div>
                    {/* Decorative overlay */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)', zIndex: 1 }} />
                </section>
            </motion.div >
        </>
    );
};
