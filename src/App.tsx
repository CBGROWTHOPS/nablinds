import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileStickyCTA from './components/MobileStickyCTA';
import ConsultationPopup from './components/ConsultationPopup';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import ServiceAreas from './pages/ServiceAreas';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import ThankYou from './pages/ThankYou';
import Contact2 from './pages/Contact-2';
import Consultation from './pages/Consultation';
import DocsHub from './pages/docs/DocsHub';
import ClarityDoc from './pages/docs/ClarityDoc';
import AnalyticsDoc from './pages/docs/AnalyticsDoc';
import WebhookDoc from './pages/docs/WebhookDoc';
import ContactFormDoc from './pages/docs/ContactFormDoc';
import ConsultationFunnelDoc from './pages/docs/ConsultationFunnelDoc';
import MobileStickyCTADoc from './pages/docs/MobileStickyCTADoc';
import ThankYouDoc from './pages/docs/ThankYouDoc';
import SEODoc from './pages/docs/SEODoc';
import GeolocationDoc from './pages/docs/GeolocationDoc';
import DatabaseDoc from './pages/docs/DatabaseDoc';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MobileStickyCTA />
      <ConsultationPopup />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/docs" element={<DocsHub />} />
          <Route path="/docs/clarity" element={<ClarityDoc />} />
          <Route path="/docs/analytics" element={<AnalyticsDoc />} />
          <Route path="/docs/webhook" element={<WebhookDoc />} />
          <Route path="/docs/contact-form" element={<ContactFormDoc />} />
          <Route path="/docs/consultation-funnel" element={<ConsultationFunnelDoc />} />
          <Route path="/docs/mobile-sticky-cta" element={<MobileStickyCTADoc />} />
          <Route path="/docs/thank-you" element={<ThankYouDoc />} />
          <Route path="/docs/seo" element={<SEODoc />} />
          <Route path="/docs/geolocation" element={<GeolocationDoc />} />
          <Route path="/docs/database" element={<DatabaseDoc />} />
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/process" element={<Layout><Process /></Layout>} />
          <Route path="/service-areas" element={<Layout><ServiceAreas /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
          <Route path="/faq" element={<Layout><FAQ /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/contact-2" element={<Layout><Contact2 /></Layout>} />
          <Route path="/terms" element={<Layout><Terms /></Layout>} />
          <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
