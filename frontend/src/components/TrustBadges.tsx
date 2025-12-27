import { Shield, Truck, Award, Lock, CheckCircle, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const TrustBadges = () => {
    const badges = [
        {
            icon: <Users size={24} />,
            title: '1000+',
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
            padding: '2.5rem 0',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'center'
                }}>
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                padding: '1rem',
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50%',
                                backgroundColor: `${badge.color}15`,
                                color: badge.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '0.75rem'
                            }}>
                                {badge.icon}
                            </div>
                            <h4 style={{
                                margin: 0,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                color: '#2D3446',
                                marginBottom: '0.25rem'
                            }}>
                                {badge.title}
                            </h4>
                            <p style={{
                                margin: 0,
                                fontSize: '0.85rem',
                                color: '#666',
                                lineHeight: 1.3
                            }}>
                                {badge.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
