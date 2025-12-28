import { motion } from 'framer-motion';
import { FAQ } from '../components/FAQ';
import { SEO } from '../components/SEO';
import { pageTransition } from '../utils/animations';

export const FAQPage = () => {
    return (
        <>
            <SEO
                title="FAQ | Frequently Asked Questions - FramezLabs"
                description="Find answers to common questions about FramezLabs custom photo frames, ordering process, shipping, pricing, and customization options."
                keywords="framezlabs faq, custom frames questions, photo frame ordering, shipping policy, customization options, frame pricing, Personalized Love Story Photo Frame, Romantic Couple Photo Frame, Personalized Baby Birth Detail Frame, Trip To Life Collage Frame, Brother Sister Photo Frame, Memories Galore Dad Frame, Elegant Wooden Personalized Photo Frame, Heartfelt Memories Frame, LoveFold Personalized Picture Frame, Personalised Keepsake Frame, Professional Photo Prints"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'FAQ', url: '/faq' }
                ]}
            />
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
        </>
    );
};
