import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { pageTransition } from '../utils/animations';

export const NotFound = () => {
    return (
        <motion.div
            className="not-found-page"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem'
            }}
        >
            <h1 style={{ fontSize: '8rem', fontWeight: 900, color: 'var(--color-gold)', lineHeight: 1, marginBottom: 0 }}>404</h1>
            <h2 className="text-teal" style={{ marginBottom: '1.5rem' }}>Page Not Found</h2>
            <p style={{ color: 'var(--color-gray)', maxWidth: '400px', marginBottom: '3rem' }}>
                Oops! The page you are looking for might have been removed or is temporarily unavailable.
            </p>

            <Link to="/" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <Home size={18} /> Back to Home
            </Link>
        </motion.div>
    );
};
