import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Gallery } from './pages/Gallery';
import { FAQPage } from './pages/FAQPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import RefundPolicy from './pages/RefundPolicy';
import { Shop } from './pages/Shop';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { OfferBanner } from './components/OfferBanner';
import { CallbackButton } from './components/CallbackButton';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
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
        <OfferBanner />
        <Navbar />
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
