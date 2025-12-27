import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MobileStickyCTA from './components/MobileStickyCTA';
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
import DocsHub from './pages/docs/DocsHub';
import ClarityDoc from './pages/docs/ClarityDoc';
import AnalyticsDoc from './pages/docs/AnalyticsDoc';
import WebhookDoc from './pages/docs/WebhookDoc';
import ContactFormDoc from './pages/docs/ContactFormDoc';
import MobileStickyCTADoc from './pages/docs/MobileStickyCTADoc';
import ThankYouDoc from './pages/docs/ThankYouDoc';
import SEODoc from './pages/docs/SEODoc';
import GeolocationDoc from './pages/docs/GeolocationDoc';
import DatabaseDoc from './pages/docs/DatabaseDoc';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MobileStickyCTA />
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/docs" element={<DocsHub />} />
          <Route path="/docs/clarity" element={<ClarityDoc />} />
          <Route path="/docs/analytics" element={<AnalyticsDoc />} />
          <Route path="/docs/webhook" element={<WebhookDoc />} />
          <Route path="/docs/contact-form" element={<ContactFormDoc />} />
          <Route path="/docs/mobile-sticky-cta" element={<MobileStickyCTADoc />} />
          <Route path="/docs/thank-you" element={<ThankYouDoc />} />
          <Route path="/docs/seo" element={<SEODoc />} />
          <Route path="/docs/geolocation" element={<GeolocationDoc />} />
          <Route path="/docs/database" element={<DatabaseDoc />} />
          <Route path="*" element={
            <>
              <Header />
              <main className="flex-grow pb-20 md:pb-0">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/process" element={<Process />} />
                  <Route path="/service-areas" element={<ServiceAreas />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/contact-2" element={<Contact2 />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
