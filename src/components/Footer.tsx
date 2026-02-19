import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const serviceLinks = [
    { name: 'Solar & Light-Filtering Shades', path: '/services#solar-light-filtering' },
    { name: 'Blackout Shades', path: '/services#blackout' },
    { name: 'Zebra & Dual-Layer Shades', path: '/services#zebra-dual-layer' },
    { name: 'Vertical Blinds', path: '/services#vertical-blinds' },
    { name: 'Roman Shades', path: '/services#roman-shades' },
    { name: 'Custom Drapes', path: '/services#custom-drapes' },
    { name: 'Motorized & Smart Shades', path: '/motorized-blinds' },
    { name: 'Condo Treatments', path: '/condo-window-treatments' },
    { name: 'Get Estimate', path: '/consultation' },
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Process', path: '/process' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Guides', path: '/guides' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div>
            <img
              src="/nablinds_logo_transparent_black.png"
              alt="NA Blinds"
              className="h-12 w-auto mb-6"
            />
            <p className="text-warm-gray text-sm leading-relaxed mb-6">
              South Florida's trusted partner for custom window treatments. Professional service from consultation to installation.
            </p>
            <div className="flex gap-4">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8203c13b9c6469cc82d3.png"
                alt="Angi Super Service Award"
                className="h-12 w-auto"
              />
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8045a0fb4a71324d0823.png"
                alt="BBB Accredited"
                className="h-12 w-auto"
              />
              <img
                src="/houzz.png"
                alt="Houzz"
                className="h-12 w-auto"
              />
            </div>
          </div>

          <div>
            <h3 className="text-warm-dark font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-warm-gray hover:text-navy transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-dark font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-warm-gray hover:text-navy transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-warm-dark font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:954-629-1373"
                  className="flex items-start gap-3 text-warm-gray hover:text-navy transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-navy" />
                  <span>954-629-1373</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nablinds.co"
                  className="flex items-start gap-3 text-warm-gray hover:text-navy transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-navy" />
                  <span>info@nablinds.co</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-warm-gray text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <address className="not-italic" itemScope itemType="https://schema.org/PostalAddress">
                  <div itemProp="streetAddress">10034 Spanish Isles Blvd</div>
                  <div>
                    <span itemProp="addressLocality">Boca Raton</span>, <span itemProp="addressRegion">FL</span> <span itemProp="postalCode">33498</span>
                  </div>
                  <div className="mt-2 text-xs opacity-80">Serving Miami-Dade, Broward & Palm Beach Counties</div>
                </address>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.facebook.com/nablindsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-navy transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/nablindsofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-gray hover:text-navy transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-warm-gray">
            <p>© {new Date().getFullYear()} NA Blinds. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/terms" className="hover:text-navy transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-navy transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <p className="text-warm-gray text-sm">
            Licensed & Insured • BBB A+ Rated
          </p>
        </div>
      </div>
    </footer>
  );
}
