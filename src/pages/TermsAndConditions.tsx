import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const TermsAndConditions = () => {
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
                    <h1 className="text-gold" style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>

                    <div className="legal-content" style={{ lineHeight: '1.8', color: 'var(--color-dark)' }}>
                        <h3>1. Acceptance of Terms</h3>
                        <p>By accessing and using the FramezLabs website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using our services.</p>

                        <h3>2. Product Customization</h3>
                        <p>FramezLabs specializes in personalized gifts. By providing images or text for customization, you confirm that you own the rights to such content or have obtained permission for its use.</p>

                        <h3>3. Order Confirmation</h3>
                        <p>Orders are processed through WhatsApp. An order is considered confirmed only after the payment is completed and the design is approved by the customer.</p>

                        <h3>4. Pricing and Payment</h3>
                        <p>All prices are subject to change without notice. Payment must be made in full through the provided channels before production begins.</p>

                        <h3>5. Intellectual Property</h3>
                        <p>The content on this website, including designs, logos, and text, is the property of FramezLabs and is protected by copyright laws.</p>

                        <h3>6. Limitation of Liability</h3>
                        <p>FramezLabs shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.</p>

                        <h3>7. Governing Law</h3>
                        <p>These terms shall be governed by and construed in accordance with the laws of India.</p>

                        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-gray)' }}>Last updated: December 25, 2025</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
