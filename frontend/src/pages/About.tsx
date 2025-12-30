import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { pageTransition, fadeInUp, staggerContainer, iconFloat } from '../utils/animations';

export const About = () => {
    return (
        <>
            <SEO
                title="About FramezLabs | Premium Custom Photo Frames & Gifts"
                description="Discover the FramezLabs story. We create premium customized frames, mosaic art, and curated gift hampers that turn your precious moments into lasting legacy. Handcrafted with love in India."
                keywords="about framezlabs, custom frame makers, handcrafted frames India, personalized gift company, photo frame boutique, premium frames, Personalized Love Story Photo Frame, Romantic Couple Photo Frame, Personalized Baby Birth Detail Frame, Trip To Life Collage Frame, Brother Sister Photo Frame, Memories Galore Dad Frame, Elegant Wooden Personalized Photo Frame, Heartfelt Memories Frame, LoveFold Personalized Picture Frame, Personalised Keepsake Frame, Professional Photo Prints, Adorable Hamper of Mug, Frame, Chocolates N Perfume, Special Gift Hamper For Birthday With Photo Frame Mug N Chocolates, Personalised Photoframe with Chocolates Bars"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'About', url: '/about' }
                ]}
            />
            <motion.div
                className="about-page"
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {/* Hero Section */}
                <section
                    className="section-padding"
                    style={{
                        backgroundColor: 'var(--color-bg-main)',
                        minHeight: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '8rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '10%',
                        right: '5%',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(224,122,95,0.05) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        zIndex: 0
                    }} />

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ textAlign: 'center' }}
                        >
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                style={{
                                    color: 'var(--color-gold)',
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'block',
                                    marginBottom: '1rem'
                                }}
                            >
                                Crafting Legacies
                            </motion.span>
                            <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', lineHeight: 1.1 }}>
                                Our <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Story</span> & <br /> Vision
                            </h1>
                            <p style={{
                                textAlign: 'center',
                                maxWidth: '800px',
                                margin: '0 auto',
                                fontSize: '1.25rem',
                                color: 'var(--color-gray)',
                                lineHeight: 1.6
                            }}>
                                At FramezLabs, we don't just sell frames; we preserve the echoes of your most cherished laughter, the warmth of your milestones, and the stories that define your life.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Impact Milestones */}
                <section style={{ backgroundColor: 'var(--color-teal)', padding: '4rem 0', color: 'white' }}>
                    <div className="container">
                        <div className="grid grid-cols-4" style={{ gap: '2rem', textAlign: 'center' }}>
                            {[
                                { label: 'Happy Customers', value: '500+' },
                                { label: 'Cities Reached', value: '50+' },
                                { label: 'Designs Crafted', value: '1000+' },
                                { label: 'Quality Check', value: '100%' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h2 style={{ color: 'var(--color-gold)', fontSize: '2.5rem', marginBottom: '0.25rem' }}>{stat.value}</h2>
                                    <p style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="section-padding" style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '6rem', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-teal" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Where Memories Get a Permanent Home</h2>
                                <div style={{ color: 'var(--color-gray)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    <p style={{ marginBottom: '1.5rem' }}>
                                        Founded with a passion for storytelling through art, FramezLabs started as a boutique dedicated to one simple idea: <strong>Your memories are your greatest heritage.</strong>
                                    </p>
                                    <p style={{ marginBottom: '1.5rem' }}>
                                        What began as a personal hobby of creating unique gifts for loved ones evolved into a professional studio. We realized that in a digital age, the physical preservation of a moment has become even more meaningful.
                                    </p>
                                    <p>
                                        Today, we specialize in high-quality customized frames, intricate mosaic art, and curated hampers. Every piece that leaves our studio is handcrafted with precision, ensuring that what you receive is a masterpiece worthy of your story.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                style={{ position: 'relative' }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    left: '-20px',
                                    right: '20px',
                                    bottom: '20px',
                                    border: '2px solid var(--color-gold)',
                                    borderRadius: 'var(--radius-lg)',
                                    zIndex: 0
                                }} />
                                <img
                                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800&fm=webp"
                                    alt="Craftsmanship"
                                    style={{
                                        borderRadius: 'var(--radius-lg)',
                                        boxShadow: 'var(--shadow-xl)',
                                        position: 'relative',
                                        zIndex: 1,
                                        width: '100%'
                                    }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-off-white)' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '5rem' }}>
                            <h2 className="text-teal" style={{ fontSize: '2.5rem' }}>The Journey of Your Frame</h2>
                            <p style={{ color: 'var(--color-gray)' }}>From a thought to a beautiful physical reality.</p>
                        </div>

                        <div className="grid grid-cols-3" style={{ gap: '3rem' }}>
                            {[
                                {
                                    step: "01",
                                    title: "Choose & Detail",
                                    desc: "Select your favorite frame or hamper from our curated collections and share your details."
                                },
                                {
                                    step: "02",
                                    title: "Design & Approve",
                                    desc: "Our expert designers create a digital proof. We only proceed once you fall in love with the design."
                                },
                                {
                                    step: "03",
                                    title: "Handcraft & Deliver",
                                    desc: "We meticulously craft, securely pack, and deliver your memory across India with zero-damage guarantee."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    style={{ textAlign: 'center', position: 'relative' }}
                                >
                                    <span style={{
                                        fontSize: '6rem',
                                        fontWeight: 900,
                                        color: 'rgba(224,122,95,0.1)',
                                        position: 'absolute',
                                        top: '-40px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 0
                                    }}>
                                        {item.step}
                                    </span>
                                    <div style={{ position: 'relative', zIndex: 1 }}>
                                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>{item.title}</h4>
                                        <p style={{ color: 'var(--color-gray)', lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding" style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h2 className="text-teal" style={{ fontSize: '2.5rem' }}>The FramezLabs Promise</h2>
                            <p style={{ color: 'var(--color-gray)' }}>The principles that guide every frame we create.</p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-3"
                            style={{ gap: '2rem' }}
                        >
                            {[
                                {
                                    icon: <ShieldCheck size={32} />,
                                    title: "Quality First",
                                    desc: "We use premium materials and high-grade printing technology to ensure your frames last a lifetime."
                                },
                                {
                                    icon: <Sparkles size={32} />,
                                    title: "Creative Soul",
                                    desc: "Our designers approach every customized request with a creative eye, ensuring your gift is unique."
                                },
                                {
                                    icon: <Heart size={32} />,
                                    title: "Customer Love",
                                    desc: "We aren't happy until you are. Your satisfaction is the heart of our boutique business."
                                }
                            ].map((value, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    className="card"
                                    style={{
                                        padding: '4rem 2rem',
                                        textAlign: 'center',
                                        backgroundColor: 'var(--color-bg-main)',
                                        borderRadius: '24px',
                                        border: '1px solid rgba(224,122,95,0.1)'
                                    }}
                                >
                                    <motion.div
                                        variants={iconFloat}
                                        animate="animate"
                                        style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h4 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{value.title}</h4>
                                    <p style={{ fontSize: '1rem', color: 'var(--color-gray)', lineHeight: 1.6 }}>{value.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding" style={{
                    backgroundColor: 'var(--color-teal)',
                    color: 'white',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '-5%',
                        width: '400px',
                        height: '400px',
                        background: 'radial-gradient(circle, rgba(224,122,95,0.1) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                    }} />

                    <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Create Your Masterpiece?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                                Browse our collections and let's work together to turn your photographs into lasting legacies.
                            </p>
                            <Link to="/products" className="btn btn-gold" style={{ padding: '1.2rem 3.5rem', borderRadius: 'var(--radius-full)' }}>
                                Explore Collections
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};
