import { Link } from 'react-router-dom';
import { BookOpen, Sun } from 'lucide-react';
import CTASection from '../components/CTASection';
import { useSEO } from '../utils/seo';

const guides = [
  {
    icon: BookOpen,
    title: 'South Florida Window Treatment Buyer\'s Guide',
    description: 'Everything you need to know before choosing window treatments — from climate challenges and product types to budget expectations and what to ask during a consultation.',
    link: '/guides/south-florida-buyers-guide',
    readTime: '8 min read',
  },
  {
    icon: Sun,
    title: 'Solar vs. Blackout vs. Zebra Shades',
    description: 'The three most popular shade types compared side by side. Learn which works best for each room, how they handle heat and light, and what to expect on pricing.',
    link: '/guides/solar-vs-blackout-vs-zebra',
    readTime: '6 min read',
  },
];

export default function Guides() {
  useSEO({
    title: 'Window Treatment Guides | NA Blinds | South Florida',
    description: 'Free educational guides to help you choose the right window treatments for your South Florida home. Expert advice on shades, blinds, and more.',
    canonicalUrl: 'https://www.nablinds.co/guides'
  });

  return (
    <>
      <section className="relative py-20 md:py-28 bg-soft-sand">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-warm-dark mb-6">
            Window Treatment Guides
          </h1>
          <p className="text-lg md:text-xl text-warm-gray max-w-2xl mx-auto leading-relaxed">
            Expert resources to help you make confident decisions about your home. Written by our team with over a decade of South Florida experience.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {guides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.link}
                  to={guide.link}
                  className="group bg-warm-white p-8 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all"
                >
                  <Icon className="w-8 h-8 text-taupe mb-4" />
                  <h3 className="text-warm-dark mb-3 group-hover:text-taupe transition-colors">{guide.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">{guide.description}</p>
                  <span className="text-xs text-taupe font-medium uppercase tracking-wide">{guide.readTime}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
