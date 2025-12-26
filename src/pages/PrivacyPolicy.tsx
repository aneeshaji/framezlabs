import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const PrivacyPolicy = () => {
    return (
        <div className="page-wrapper" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--color-bg-main)' }}>
            <div className="container section-padding">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="card"
                    style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}
                >
                    <h1 className="text-gold" style={{ marginBottom: '2rem' }}>Privacy Policy</h1>

                    <div className="legal-content" style={{ lineHeight: '1.8', color: 'var(--color-dark)' }}>
                        <p>Your privacy is important to us. This Privacy Policy explains how FramezLabs collects, uses, and protects your information.</p>

                        <h3>1. Information Collection</h3>
                        <p>We collect information you provide directly to us when you place an order, including your name, contact details, and any images or text for customization.</p>

                        <h3>2. Use of Information</h3>
                        <p>We use your information to process orders, communicate with you via WhatsApp, and improve our services. We do not sell your personal data to third parties.</p>

                        <h3>3. Data Security</h3>
                        <p>We implement industry-standard security measures to protect your personal information and media files.</p>

                        <h3>4. Cookies</h3>
                        <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings if you wish.</p>

                        <h3>5. Third-Party Services</h3>
                        <p>We may use third-party services for payments and analytics. These services have their own privacy policies.</p>

                        <h3>6. Changes to This Policy</h3>
                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

                        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-gray)' }}>Last updated: December 25, 2025</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
