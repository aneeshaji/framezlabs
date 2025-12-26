import { Phone, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { iconBounce } from '../utils/animations';

export const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(to bottom, #1a1a1a, #0a0a0a)',
            color: 'var(--color-off-white)',
            marginTop: 'auto',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container section-padding">
                <div className="grid grid-cols-1" style={{ gap: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>

                    {/* Brand */}
                    <div className="footer-col">
                        <h2 style={{
                            color: 'var(--color-gold)',
                            fontSize: '1.8rem',
                            fontFamily: 'var(--font-heading)',
                            marginBottom: '1.5rem',
                            letterSpacing: '-1px'
                        }}>
                            FramezLabs
                        </h2>
                        <p style={{ color: '#999', marginBottom: '2rem', lineHeight: '1.8', fontSize: '1rem' }}>
                            We turn your cherished moments into timeless masterpieces. Premium quality, handcrafted with passion.
                        </p>
                        <div className="social-links" style={{ display: 'flex', gap: '1.2rem' }}>
                            {[
                                { icon: <Instagram size={20} />, url: "https://instagram.com/framez__labs" },
                                { icon: <Facebook size={20} />, url: "https://www.facebook.com/share/1Bxpottkrx/" },
                                { icon: <Phone size={20} />, url: "https://wa.me/919995064344" }
                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    whileHover="animate"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.05)',
                                        color: 'var(--color-gold)',
                                        width: '45px',
                                        height: '45px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <motion.div variants={iconBounce}>
                                        {social.icon}
                                    </motion.div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['Home', 'Products', 'About', 'Contact'].map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}
                                        className="hover-gold"
                                        style={{ color: '#aaa', fontSize: '0.95rem' }}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Reach Out</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li className="flex items-center" style={{ gap: '0.75rem' }}>
                                <div style={{ color: 'var(--color-gold)', backgroundColor: 'rgba(224, 122, 95, 0.1)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                    <Phone size={16} />
                                </div>
                                <span style={{ color: '#aaa', fontSize: '0.95rem' }}>+91 9995064344</span>
                            </li>
                            <li className="flex items-center" style={{ gap: '0.75rem' }}>
                                <div style={{ color: 'var(--color-gold)', backgroundColor: 'rgba(224, 122, 95, 0.1)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                    <Instagram size={16} />
                                </div>
                                <span style={{ color: '#aaa', fontSize: '0.95rem' }}>@framez__labs</span>
                            </li>
                            <li className="flex items-center" style={{ gap: '0.75rem' }}>
                                <div style={{ color: 'var(--color-gold)', backgroundColor: 'rgba(224, 122, 95, 0.1)', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                                    <Facebook size={16} />
                                </div>
                                <a href="https://www.facebook.com/share/1Bxpottkrx/" target="_blank" rel="noopener noreferrer" style={{ color: '#aaa', fontSize: '0.95rem' }} className="hover-gold">
                                    FramezLabs Facebook
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="footer-col">
                        <h4 style={{ color: 'var(--color-white)', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>Policy</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { name: 'Terms & Conditions', path: '/terms' },
                                { name: 'Privacy Policy', path: '/privacy' },
                                { name: 'Shipping Policy', path: '/shipping' },
                                { name: 'Refund Policy', path: '/refund' }
                            ].map((legal, i) => (
                                <li key={i}>
                                    <Link to={legal.path} className="hover-gold" style={{ color: '#aaa', fontSize: '0.95rem' }}>
                                        {legal.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div style={{
                    marginTop: '5rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'center',
                    color: '#666',
                    fontSize: '0.85rem'
                }}>
                    <p style={{ marginBottom: 0 }}>&copy; {new Date().getFullYear()} FramezLabs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
