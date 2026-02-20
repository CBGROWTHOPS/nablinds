import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  noindex?: boolean;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
}

function setMeta(property: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSEO({ title, description, canonicalUrl, noindex = false, ogImage, ogTitle, ogDescription }: SEOProps) {
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

    const ogTitleVal = ogTitle ?? title;
    const ogDescVal = ogDescription ?? description;
    const ogImageVal = ogImage ? (ogImage.startsWith('http') ? ogImage : `https://www.nablinds.co${ogImage}`) : undefined;

    setMeta('og:title', ogTitleVal, true);
    setMeta('og:description', ogDescVal, true);
    if (ogImageVal) setMeta('og:image', ogImageVal, true);
    if (canonicalUrl) setMeta('og:url', canonicalUrl.startsWith('http') ? canonicalUrl : `https://www.nablinds.co${canonicalUrl}`, true);
    setMeta('twitter:title', ogTitleVal);
    setMeta('twitter:description', ogDescVal);
    if (ogImageVal) setMeta('twitter:image', ogImageVal);

    return () => {
      document.title = 'NA Blinds | Custom Window Treatments South Florida';
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Professional custom blinds, shades & shutters for South Florida. BBB A+ rated, licensed & insured. Same-week consultations. Serving Miami, Broward & Palm Beach.');
      }
      if (metaRobots) {
        metaRobots.setAttribute('content', 'index, follow');
      }
    };
  }, [title, description, canonicalUrl, noindex, ogImage, ogTitle, ogDescription]);
}
