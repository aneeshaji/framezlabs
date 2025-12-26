import { motion } from 'framer-motion';
import { pageTransition, fadeInUp } from '../utils/animations';
import { ShoppingBag } from 'lucide-react';

export const Shop = () => {
    return (
        <motion.div
            className="shop-page"
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
                padding: '2rem',
                backgroundColor: 'var(--color-bg-main)'
            }}
        >
            <motion.div variants={fadeInUp}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(224, 122, 95, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem auto',
                    color: 'var(--color-gold)'
                }}>
                    <ShoppingBag size={40} />
                </div>
                <h1 className="text-teal" style={{ marginBottom: '1rem' }}>Shop Coming Soon</h1>
                <p style={{ color: 'var(--color-gray)', maxWidth: '500px', margin: '0 auto' }}>
                    We are building an exciting new shopping experience for you. <br />
                    Stay tuned for exclusive frames and personalized gifts!
                </p>
            </motion.div>
        </motion.div>
    );
};
