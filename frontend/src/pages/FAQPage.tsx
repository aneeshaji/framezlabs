import { motion } from 'framer-motion';
import { FAQ } from '../components/FAQ';
import { pageTransition } from '../utils/animations';

export const FAQPage = () => {
    return (
        <motion.div
            className="faq-page"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ paddingTop: '100px', backgroundColor: 'var(--color-off-white)', minHeight: '100vh' }}
        >
            <div className="text-center" style={{ marginBottom: '2rem' }}>
                <h1 className="text-teal">Frequently Asked Questions</h1>
                <p style={{ color: 'var(--color-gray)' }}>Find answers to common questions about our products and services.</p>
            </div>

            {/* Reuse existing FAQ component component */}
            <FAQ />
        </motion.div>
    );
};
