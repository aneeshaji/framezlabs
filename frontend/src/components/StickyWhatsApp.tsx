import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const StickyWhatsApp = () => {
    return (
        <motion.a
            href="https://wa.me/919995064344"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                backgroundColor: '#25D366',
                color: 'white',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                zIndex: 9999,
                cursor: 'pointer',
                border: '2px solid white'
            }}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} fill="white" strokeWidth={0} />
        </motion.a>
    );
};
