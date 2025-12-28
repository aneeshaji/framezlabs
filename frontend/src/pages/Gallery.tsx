import { motion } from 'framer-motion';
import { pageTransition, fadeInUp } from '../utils/animations';
import { Camera } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Gallery = () => {
    return (
        <>
            <SEO
                title="Photo Gallery | Custom Frame Designs by FramezLabs"
                description="Explore our gallery of custom photo frames, mosaic art, and personalized gifts. See real customer stories and design inspirations from FramezLabs."
                keywords="framezlabs gallery, custom frame designs, photo frame ideas, mosaic art gallery, personalized gift examples, Personalized Love Story Photo Frame, Romantic Couple Photo Frame, Personalized Baby Birth Detail Frame, Trip To Life Collage Frame, Brother Sister Photo Frame, Memories Galore Dad Frame, Elegant Wooden Personalized Photo Frame, Heartfelt Memories Frame, LoveFold Personalized Picture Frame, Personalised Keepsake Frame, Professional Photo Prints, Adorable Hamper of Mug, Frame, Chocolates N Perfume, Special Gift Hamper For Birthday With Photo Frame Mug N Chocolates, Personalised Photoframe with Chocolates Bars"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Gallery', url: '/gallery' }
                ]}
            />
            <motion.div
                className="gallery-page"
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
                        <Camera size={40} />
                    </div>
                    <h1 className="text-teal" style={{ marginBottom: '1rem' }}>Gallery Coming Soon</h1>
                    <p style={{ color: 'var(--color-gray)', maxWidth: '500px', margin: '0 auto' }}>
                        We are currently curating a beautiful selection of our customer's stories. <br />
                        Check back soon to see our masterpieces.
                    </p>
                </motion.div>
            </motion.div>
        </>
    );
};
