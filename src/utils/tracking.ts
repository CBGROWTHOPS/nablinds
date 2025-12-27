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
    }
    if (window.clarity) {
      window.clarity('set', 'page', pagePath.replace(/\//g, '-').substring(1));
    }
  }
};
