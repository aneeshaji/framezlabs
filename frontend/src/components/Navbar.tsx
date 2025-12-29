import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { iconPulse, revealList, fadeInUp } from "../utils/animations";
import { QuoteModal } from './QuoteModal';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showQuoteModal, setShowQuoteModal] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                position: 'sticky',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'white',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: scrolled ? '0.6rem 0' : '1.2rem 0'
            }}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                        <span style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: scrolled ? '1.5rem' : '1.8rem',
                            fontWeight: '700',
                            color: 'var(--color-dark)',
                            letterSpacing: '-0.5px',
                            transition: 'all 0.4s ease'
                        }}>
                            Framez<span style={{ color: 'var(--color-gold)' }}>Labs</span>
                        </span>
                    </Link>
                </motion.div>

                {/* Desktop Links */}
                <div className="desktop-menu-container" style={{ gap: '0.5rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            active={location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    {/* Get Free Quote Button */}
                    <motion.button
                        onClick={() => setShowQuoteModal(true)}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1.4rem',
                            fontSize: '0.85rem',
                            background: 'linear-gradient(135deg, #E07A5F 0%, #d66a4f 100%)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 700,
                            boxShadow: '0 4px 15px rgba(224, 122, 95, 0.3)',
                            textTransform: 'none',
                            letterSpacing: '0',
                            marginLeft: '1rem',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        <Gift size={16} />
                        <span style={{ whiteSpace: 'nowrap' }}>Get Free Quote</span>
                    </motion.button>

                    <motion.a
                        href="https://wa.me/919995064344"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.6rem 1.4rem',
                            fontSize: '0.85rem',
                            background: 'linear-gradient(135deg, #128C7E 0%, #075E54 100%)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: 600,
                            boxShadow: '0 4px 15px rgba(18, 140, 126, 0.2)',
                            textTransform: 'none',
                            letterSpacing: '0',
                            marginLeft: '0.5rem',
                            textDecoration: 'none'
                        }}
                    >
                        <motion.div
                            variants={iconPulse}
                            animate="animate"
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <MessageCircle size={16} />
                        </motion.div>
                        <span style={{ whiteSpace: 'nowrap' }}>Chat with Us</span>
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-nav-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-dark)',
                        cursor: 'pointer',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mobile-menu"
                        style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            padding: '2rem',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            textAlign: 'center',
                            overflow: 'hidden',
                            borderTop: '1px solid rgba(0,0,0,0.05)'
                        }}
                    >
                        <motion.div variants={revealList} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {navLinks.map((link) => (
                                <motion.div key={link.path} variants={fadeInUp}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            fontSize: '1.2rem',
                                            fontWeight: 700,
                                            color: location.pathname === link.path ? 'var(--color-gold)' : 'var(--color-dark)',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div variants={fadeInUp} style={{ marginTop: '0.5rem' }}>
                                <a
                                    href="https://wa.me/919995064344"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-gold"
                                    style={{ width: '100%', borderRadius: 'var(--radius-full)' }}
                                >
                                    <MessageCircle size={18} style={{ marginRight: '0.5rem' }} /> Enquire on WhatsApp
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Quote Modal */}
            <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
        </nav>
    );
};

const NavLink = ({ to, children, active }: { to: string, children: React.ReactNode, active: boolean }) => {
    return (
        <Link
            to={to}
            className="nav-link"
            style={{
                fontWeight: 600,
                color: active ? 'var(--color-dark)' : 'var(--color-gray)',
                position: 'relative',
                padding: '0.5rem 1.2rem',
                fontSize: '0.9rem',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {active && (
                <motion.div
                    layoutId="navbar-pill-v2"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(224, 122, 95, 0.08)',
                        borderRadius: 'var(--radius-full)',
                        zIndex: -1
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
            )}
            {children}
            {!active && (
                <motion.div
                    className="nav-underline"
                    whileHover={{ opacity: 1, height: '4px' }}
                    initial={{ opacity: 0, height: '0px' }}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '1.2rem',
                        right: '1.2rem',
                        backgroundColor: 'rgba(224, 122, 95, 0.4)',
                        borderRadius: '2px',
                        pointerEvents: 'none'
                    }}
                />
            )}
        </Link>
    );
};
