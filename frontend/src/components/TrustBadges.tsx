import { Shield, Truck, Award, Lock, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustBadges = () => {
    const badges = [
        {
            icon: <Users size={24} />,
            title: '500+',
            subtitle: 'Happy Customers',
            color: '#E07A5F'
        },
        {
            icon: <Shield size={24} />,
            title: '100%',
            subtitle: 'Quality Guaranteed',
            color: '#2D3446'
        },
        {
            icon: <Truck size={24} />,
            title: 'Pan-India',
            subtitle: 'Free Shipping',
            color: '#10b981'
        },
        {
            icon: <Lock size={24} />,
            title: 'Secure',
            subtitle: 'SSL Encrypted',
            color: '#3b82f6'
        },
        {
            icon: <CheckCircle size={24} />,
            title: 'Easy',
            subtitle: 'Returns & Refunds',
            color: '#8b5cf6'
        },
        {
            icon: <Award size={24} />,
            title: 'Verified',
            subtitle: 'Business',
            color: '#f59e0b'
        }
    ];

    return (
        <div style={{
            backgroundColor: 'var(--color-off-white)',
            padding: '4rem 0',
            borderTop: '1px solid rgba(0,0,0,0.03)',
            borderBottom: '1px solid rgba(0,0,0,0.03)'
        }}>
            <div className="container">
                <div className="trust-badges-grid">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '2rem 1.5rem',
                                backgroundColor: 'white',
                                borderRadius: '20px',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                border: '1px solid rgba(0,0,0,0.02)',
                                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                                cursor: 'default'
                            }}
                        >
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                backgroundColor: `${badge.color}10`, // Softer background
                                color: badge.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.2rem',
                                transition: 'transform 0.3s ease'
                            }} className="badge-icon-wrapper">
                                {badge.icon}
                            </div>
                            <h4 style={{
                                margin: 0,
                                fontSize: '1.2rem',
                                fontWeight: 800,
                                color: 'var(--color-dark)',
                                marginBottom: '0.4rem',
                                letterSpacing: '-0.02em'
                            }}>
                                {badge.title}
                            </h4>
                            <p style={{
                                margin: 0,
                                fontSize: '0.85rem',
                                color: 'var(--color-gray)',
                                fontWeight: 500,
                                lineHeight: 1.4
                            }}>
                                {badge.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .trust-badges-grid {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1.5rem;
                }

                @media (max-width: 1200px) {
                    .trust-badges-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                @media (max-width: 768px) {
                    .trust-badges-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .trust-badges-grid {
                        grid-template-columns: 1fr;
                        padding: 0 1rem;
                    }
                }

                .badge-icon-wrapper svg {
                    transition: transform 0.3s ease;
                }

                motion.div:hover .badge-icon-wrapper svg {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};
