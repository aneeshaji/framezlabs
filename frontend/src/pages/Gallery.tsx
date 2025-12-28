import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, fadeInUp, staggerContainer } from '../utils/animations';
import { Instagram, MessageCircle, X, Maximize2, Play } from 'lucide-react';
import { SEO } from '../components/SEO';

// Asset Imports
import customer1 from '../assets/gallery/customer-1.jpg';
import customer2 from '../assets/gallery/customer-2.jpg';
import customer3 from '../assets/gallery/customer-3.jpg';
import customer4 from '../assets/gallery/customer-4.jpg';
import customer5 from '../assets/gallery/customer-5.jpg';
import customer6 from '../assets/gallery/customer-6.jpg';
import customer7 from '../assets/gallery/customer-7.jpg';
import customerVideo from '../assets/gallery/customer-video.mp4';

interface GalleryItem {
    type: 'image' | 'video';
    src: string;
    caption: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
    { type: 'image', src: customer1, caption: "Joyful Moments Captured" },
    { type: 'video', src: customerVideo, caption: "Unboxing Happiness" },
    { type: 'image', src: customer4, caption: "Birthday Surprise Success" },
    { type: 'image', src: customer5, caption: "Personalized Perfection" },
    { type: 'image', src: customer6, caption: "Anniversary Love" },
    { type: 'image', src: customer7, caption: "Home Decor Elegance" },
    { type: 'image', src: customer2, caption: "Customer Appreciation" },
    { type: 'image', src: customer3, caption: "Creating Memories" },
];

export const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    // Handle ESC key to close lightbox
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedItem(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scroll when lightbox is open
    useEffect(() => {
        if (selectedItem) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedItem]);

    return (
        <>
            <SEO
                title="Customer Stories | Happy Customers - FramezLabs"
                description="See the joy our custom frames bring to our customers. A gallery of real stories, unboxings, and happy moments from the FramezLabs family."
                keywords="customer gallery, happy customers, framezlabs reviews, photo frame testimonials, personalized gift stories"
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
                    backgroundColor: 'var(--color-bg-main)',
                    paddingTop: '8rem',
                    paddingBottom: '4rem',
                    minHeight: '100vh'
                }}
            >
                <div className="container">
                    <motion.div
                        variants={fadeInUp}
                        style={{ textAlign: 'center', marginBottom: '4rem' }}
                    >
                        <div className="badge" style={{ marginBottom: '1rem' }}>Our Community</div>
                        <h1 className="text-teal" style={{ marginBottom: '1rem' }}>
                            Customer <span style={{ color: 'var(--color-gold)', fontStyle: 'italic' }}>Happiness</span>
                        </h1>
                        <p style={{ color: 'var(--color-gray)', maxWidth: '600px', margin: '0 auto' }}>
                            Every frame we build is a story of love, joy, and cherished memories.
                            Join our growing family of happy customers across India.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="gallery-grid"
                    >
                        {GALLERY_ITEMS.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`gallery-item ${index % 3 === 0 ? 'large' : ''}`}
                                onClick={() => setSelectedItem(item)}
                                whileHover={{ y: -10 }}
                            >
                                <div className="gallery-card-inner">
                                    {item.type === 'image' ? (
                                        <img src={item.src} alt={item.caption} />
                                    ) : (
                                        <div className="video-thumb-container">
                                            <video src={item.src} muted loop autoPlay playsInline />
                                            <div className="video-play-indicator">
                                                <Play size={24} fill="white" />
                                            </div>
                                        </div>
                                    )}

                                    <div className="gallery-overlay">
                                        <div className="overlay-content">
                                            <p>{item.caption}</p>
                                        </div>
                                        <div className="maximize-hint">
                                            <Maximize2 size={20} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Engagement Section */}
                    <motion.div
                        variants={fadeInUp}
                        className="gallery-cta"
                    >
                        <h2 className="text-teal">Want to be featured?</h2>
                        <p>Tag us in your photos or send us your unboxing videos on Instagram!</p>
                        <div className="cta-buttons">
                            <a href="https://instagram.com/framezlabs" target="_blank" rel="noopener noreferrer" className="btn btn-insta">
                                <Instagram size={20} /> Instagram
                            </a>
                            <a href="https://wa.me/9995064344" target="_blank" rel="noopener noreferrer" className="btn btn-teal">
                                <MessageCircle size={20} /> Share Story
                            </a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="lightbox-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.button
                            className="lightbox-close"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSelectedItem(null)}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedItem.type === 'image' ? (
                                <img src={selectedItem.src} alt={selectedItem.caption} />
                            ) : (
                                <video src={selectedItem.src} controls autoPlay />
                            )}

                            <div className="lightbox-footer">
                                <p>{selectedItem.caption}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    grid-auto-rows: 350px;
                    gap: 1.5rem;
                }

                .gallery-item {
                    cursor: pointer;
                    height: 100%;
                }

                .gallery-item.large {
                    grid-row: span 2;
                }

                @media (max-width: 768px) {
                    .gallery-grid {
                        grid-template-columns: 1fr;
                        grid-auto-rows: auto;
                    }
                    .gallery-item.large {
                        grid-row: auto;
                    }
                    .gallery-item {
                        aspect-ratio: 4/5;
                    }
                }

                .gallery-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    box-shadow: var(--shadow-md);
                    background: white;
                }

                .gallery-card-inner img,
                .video-thumb-container video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .gallery-item:hover img,
                .gallery-item:hover video {
                    transform: scale(1.05);
                }

                .video-thumb-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }

                .video-play-indicator {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: rgba(0,0,0,0.5);
                    padding: 0.5rem;
                    border-radius: 50%;
                    color: white;
                    backdrop-filter: blur(4px);
                }

                .gallery-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;
                    padding: 2rem 1.5rem;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .gallery-item:hover .gallery-overlay {
                    opacity: 1;
                }

                @media (max-width: 1024px) {
                    .gallery-overlay {
                        opacity: 1;
                        background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%);
                        padding: 1.2rem;
                    }
                }

                .overlay-content p {
                    color: white;
                    margin: 0;
                    font-size: 1rem;
                    font-weight: 500;
                }

                .user-info {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: rgba(255,255,255,0.9);
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                }

                .maximize-hint {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    opacity: 0;
                    transition: all 0.3s ease;
                    background: rgba(17, 71, 66, 0.8);
                    padding: 1rem;
                    border-radius: 50%;
                }

                .gallery-item:hover .maximize-hint {
                    opacity: 1;
                }

                .gallery-cta {
                    margin-top: 6rem;
                    text-align: center;
                    padding: 4rem 2rem;
                    background: white;
                    border-radius: var(--radius-2xl);
                    box-shadow: var(--shadow-xl);
                }

                .cta-buttons {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-top: 2rem;
                    flex-wrap: wrap;
                }

                .btn-insta {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: white;
                    border: none;
                }

                /* Lightbox Styles */
                .lightbox-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(0,0,0,0.95);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                    backdrop-filter: blur(8px);
                }

                .lightbox-close {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                    z-index: 10001;
                }

                .lightbox-content {
                    max-width: 1000px;
                    width: 100%;
                    max-height: 85vh;
                    position: relative;
                    background: #111;
                    border-radius: var(--radius-xl);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .lightbox-content img,
                .lightbox-content video {
                    width: 100%;
                    height: auto;
                    max-height: 70vh;
                    object-fit: contain;
                }

                .lightbox-footer {
                    padding: 2rem;
                    background: white;
                    color: var(--color-teal);
                }

                .user-tag {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-gold);
                }

                .lightbox-footer p {
                    margin: 0;
                    font-size: 1.1rem;
                }

                @media (max-width: 768px) {
                    .lightbox-backdrop {
                        padding: 1rem;
                    }
                    .lightbox-close {
                        top: 1rem;
                        right: 1rem;
                    }
                    .lightbox-footer {
                        padding: 1.5rem;
                    }
                }
            `}</style>
        </>
    );
};
