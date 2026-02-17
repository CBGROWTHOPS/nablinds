export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle
      });
    }
    if (window.fbq) {
      window.fbq('track', 'PageView');

      // Fire custom "warming" event on all pages except homepage, thank you pages, and docs
      const excludedPages = ['/', '/thank-you-consultation', '/thank-you'];
      const isDocPage = pagePath.startsWith('/docs');
      const shouldTrackWarming = !excludedPages.includes(pagePath) && !isDocPage;

      if (shouldTrackWarming) {
        window.fbq('track', 'warming');
      }
    }
    if (window.clarity) {
      window.clarity('set', 'page', pagePath.replace(/\//g, '-').substring(1));
    }
  }
};
