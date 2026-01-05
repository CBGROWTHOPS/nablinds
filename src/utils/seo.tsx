import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export function useSEO({ title, description, canonicalUrl, noindex = false }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;
    }

    return () => {
      document.title = 'NA Blinds | Custom Window Treatments South Florida';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Professional custom blinds, shades & shutters for South Florida. BBB A+ rated, licensed & insured. Same-week consultations. Serving Miami, Broward & Palm Beach.');
      }
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, [title, description, canonicalUrl, noindex]);
}
