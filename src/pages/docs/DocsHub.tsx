import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {
  FileText,
  Webhook,
  Mail,
  CheckCircle,
  BarChart3,
  Search,
  Database,
  Home,
  Smartphone,
  MapPin,
  ListChecks
} from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function DocsHub() {
  useEffect(() => {
    trackPageView('/docs', 'Documentation Hub');
  }, []);
  const docSections = [
    {
      title: 'Analytics & Tracking Systems',
      description: 'Facebook Pixel, Google Analytics, Microsoft Clarity, and GoHighLevel integration',
      icon: BarChart3,
      link: '/docs/analytics',
      color: 'bg-blue-500',
    },
    {
      title: 'Microsoft Clarity Tracking',
      description: 'Detailed Clarity session recording and heatmap setup',
      icon: BarChart3,
      link: '/docs/clarity',
      color: 'bg-sky-500',
    },
    {
      title: 'GoHighLevel Webhook Integration',
      description: 'CRM integration and lead submission system',
      icon: Webhook,
      link: '/docs/webhook',
      color: 'bg-green-500',
    },
    {
      title: 'Contact Form Flow',
      description: 'Form submission, validation, and conversion tracking',
      icon: Mail,
      link: '/docs/contact-form',
      color: 'bg-purple-500',
    },
    {
      title: 'Consultation Funnel',
      description: 'Multi-step lead qualification form optimized for paid traffic',
      icon: ListChecks,
      link: '/docs/consultation-funnel',
      color: 'bg-violet-500',
    },
    {
      title: 'Mobile Sticky CTA Bar',
      description: 'Bottom-fixed call-to-action bar for mobile conversion',
      icon: Smartphone,
      link: '/docs/mobile-sticky-cta',
      color: 'bg-pink-500',
    },
    {
      title: 'Thank You Page System',
      description: 'Post-conversion page and next steps',
      icon: CheckCircle,
      link: '/docs/thank-you',
      color: 'bg-teal-500',
    },
    {
      title: 'SEO System',
      description: 'Dynamic meta tags and structured data',
      icon: Search,
      link: '/docs/seo',
      color: 'bg-orange-500',
    },
    {
      title: 'Dynamic Geolocation',
      description: 'Automatic city detection and personalized hero text',
      icon: MapPin,
      link: '/docs/geolocation',
      color: 'bg-red-500',
    },
    {
      title: 'Supabase Database',
      description: 'Database setup and configuration',
      icon: Database,
      link: '/docs/database',
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-ocean" />
            <h1 className="text-3xl font-bold text-warm-dark">
              NA Blinds Internal Documentation
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            System documentation for managing the NA Blinds lead-generation website
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-4 py-3 rounded-lg border border-amber-200">
            <span className="font-semibold">⚠️ INTERNAL ONLY:</span>
            <span>This documentation is not visible on the public website</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-2">
            Quick Navigation
          </h2>
          <p className="text-gray-600">
            Select a system below to view detailed documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {docSections.map((section) => (
            <Link
              key={section.link}
              to={section.link}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-ocean transition-all group"
            >
              <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-warm-dark mb-2 group-hover:text-ocean transition-colors">
                {section.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {section.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">
            Documentation Standards
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Always update documentation</strong> when making functional changes to the site
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Document the 'why'</strong> not just the 'what' - explain business context
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Include failure points</strong> and common mistakes to avoid
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <p>
                <strong>Keep it operational</strong> - write for someone managing the site without you
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ocean hover:text-warm-dark transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
