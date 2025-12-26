import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

const ShippingPolicy = () => {
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
                    <h1 className="text-gold" style={{ marginBottom: '2rem' }}>Shipping Policy</h1>

                    <div className="legal-content" style={{ lineHeight: '1.8', color: 'var(--color-dark)' }}>
                        <h3>1. Order Processing Time</h3>
                        <p>As each product is custom-made, please allow 2-4 business days for production and packaging after design approval.</p>

                        <h3>2. Shipping Times</h3>
                        <p>Once shipped, standard delivery usually takes 3-7 business days depending on your location within India. We will provide tracking information once available.</p>

                        <h3>3. Shipping Costs</h3>
                        <p>Shipping costs depend on the weight of the product and the delivery distance. These will be communicated to you during the order process on WhatsApp.</p>

                        <h3>4. Packaging</h3>
                        <p>We take great care in packaging our products (especially frames and mugs) to ensure they reach you in perfect condition. We use multiple layers of bubble wrap and sturdy boxes.</p>

                        <h3>5. Delivery Issues</h3>
                        <p>If your package is delayed or lost in transit, please contact us on WhatsApp, and we will work with the shipping provider to resolve the issue as quickly as possible.</p>

                        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-gray)' }}>Last updated: December 25, 2025</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ShippingPolicy;
