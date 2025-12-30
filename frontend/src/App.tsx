import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { OfferBanner } from './components/OfferBanner';
import { CallbackButton } from './components/CallbackButton';
import { Loader2 } from 'lucide-react';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Products = lazy(() => import('./pages/Products').then(module => ({ default: module.Products })));
const ProductDetail = lazy(() => import('./pages/ProductDetail').then(module => ({ default: module.ProductDetail })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(module => ({ default: module.FAQPage })));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const Shop = lazy(() => import('./pages/Shop').then(module => ({ default: module.Shop })));

// Loading Component
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    width: '100%',
    color: 'var(--color-gold)'
  }}>
    <Loader2 size={48} className="animate-spin" />
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

import { SEO } from './components/SEO';
import { StickyWhatsApp } from './components/StickyWhatsApp';
import { QuoteModal } from './components/QuoteModal';

function App() {
  const [showAutoQuote, setShowAutoQuote] = useState(false);

  useEffect(() => {
    // Check if user has already seen the auto-popup today
    const lastShown = localStorage.getItem('quoteAutoPopupShown');
    const today = new Date().toDateString();

    // Show if never shown before OR if last shown was on a different day
    const shouldShow = !lastShown || lastShown !== today;

    if (shouldShow) {
      // Show quote modal after 15 seconds
      const timer = setTimeout(() => {
        setShowAutoQuote(true);
        localStorage.setItem('quoteAutoPopupShown', today);
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseQuote = () => {
    setShowAutoQuote(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <SEO />
      <div className="app" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
          <OfferBanner />
          <Navbar />
        </div>
        <StickyWhatsApp />
        <CallbackButton />
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>
        <Footer />
        <ScrollToTopButton />

        {/* Auto-popup Quote Modal */}
        <QuoteModal isOpen={showAutoQuote} onClose={handleCloseQuote} />
      </div>
    </Router>
  );
}

export default App;
