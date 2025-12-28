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
                keywords="about framezlabs, custom frame makers, handcrafted frames India, personalized gift company, photo frame boutique, premium frames, Personalized Love Story Photo Frame, Romantic Couple Photo Frame, Personalized Baby Birth Detail Frame, Trip To Life Collage Frame, Brother Sister Photo Frame, Memories Galore Dad Frame, Elegant Wooden Personalized Photo Frame, Heartfelt Memories Frame, LoveFold Personalized Picture Frame, Personalised Keepsake Frame, Professional Photo Prints"
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
                        minHeight: '40vh',
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop: '8rem'
                    }}
                >
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ textAlign: 'center' }}
                        >
                            <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                                Our <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Story</span>
                            </h1>
                            <p style={{
                                textAlign: 'center',
                                maxWidth: '700px',
                                margin: '0 auto',
                                fontSize: '1.2rem',
                                color: 'var(--color-gray)'
                            }}>
                                At FramezLabs, we believe that every photograph is a doorway to a memory that deserves to be cherished forever.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="section-padding" style={{ backgroundColor: 'white' }}>
                    <div className="container">
                        <div className="grid grid-cols-1" style={{ gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-teal">Where Memories Get a Home</h2>
                                <p>
                                    Founded with a passion for storytelling through art, FramezLabs started as a small boutique dedicated to one simple idea: <strong>Your memories are precious.</strong>
                                </p>
                                <p>
                                    What started as a hobby of creating unique gifts for friends and family soon evolved into a professional studio. Today, we specialize in high-quality customized frames, mosaic art, and curated gift hampers that turn moments into lasting legacy.
                                </p>
                                <p>
                                    Every piece that leaves our studio is more than just a product; it's a piece of your heart, handcrafted with precision and care by our team of expert designers.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
                                    alt="Craftsmanship"
                                    style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-off-white)' }}>
                    <div className="container">
                        <div className="text-center" style={{ marginBottom: '4rem' }}>
                            <h2 className="text-teal">The FramezLabs Promise</h2>
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
                                    style={{ padding: '3rem 2rem', textAlign: 'center', backgroundColor: 'white' }}
                                >
                                    <motion.div
                                        variants={iconFloat}
                                        animate="animate"
                                        style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}
                                    >
                                        {value.icon}
                                    </motion.div>
                                    <h4 style={{ marginBottom: '1rem' }}>{value.title}</h4>
                                    <p style={{ fontSize: '0.95rem', margin: 0 }}>{value.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding" style={{ backgroundColor: 'var(--color-teal)', color: 'white', textAlign: 'center' }}>
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Ready to Create Something Beautiful?</h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                                Browse our collections and let us help you turn your photographs into masterpieces.
                            </p>
                            <Link to="/products" className="btn btn-gold" style={{ padding: '1.2rem 3rem' }}>
                                Explore Products
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </>
    );
};
