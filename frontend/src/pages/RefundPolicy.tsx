import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const RefundPolicy = () => {
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
                    <h1 className="text-gold" style={{ marginBottom: '2rem' }}>Refund & Return Policy</h1>

                    <div className="legal-content" style={{ lineHeight: '1.8', color: 'var(--color-dark)' }}>
                        <h3>1. Personalized Items</h3>
                        <p>Due to the nature of custom-made and personalized products, we generally do not accept returns or offer refunds unless the item is damaged or there is a production error on our part.</p>

                        <h3>2. Damaged on Arrival</h3>
                        <p>If you receive a damaged product, please provide an unboxing video and photos within 24 hours of delivery. Upon verification, we will provide a replacement at no extra cost.</p>

                        <h3>3. Cancellations</h3>
                        <p>Orders can only be canceled before production begins. Once a custom design is approved and production starts, cancellations are not permitted.</p>

                        <h3>4. Refund Process</h3>
                        <p>In cases where a refund is approved, it will be processed through the original payment method within 5-7 business days.</p>

                        <h3>5. Contact Us</h3>
                        <p>For any questions regarding returns or refunds, please reach out to us on WhatsApp with your order details.</p>

                        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-gray)' }}>Last updated: December 25, 2025</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default RefundPolicy;
