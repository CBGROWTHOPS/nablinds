import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle, ExternalLink, BarChart3 } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function AnalyticsDoc() {
  useEffect(() => {
    trackPageView('/docs/analytics', 'Analytics & Tracking Systems Documentation');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-ocean hover:text-warm-dark transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Documentation Hub</span>
          </Link>
          <h1 className="text-3xl font-bold text-warm-dark">
            Analytics & Tracking Systems
          </h1>
          <p className="text-gray-600 mt-2">
            Comprehensive tracking implementation using Facebook Pixel, Google Ads, Google Tag Manager, Microsoft Clarity, and GoHighLevel
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: Feb 11, 2025 — GA4 pixel removed, Google Ads conversion tracking verified
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The site uses five complementary tracking systems that work together to provide complete visibility into user behavior, conversions, and site performance.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
              <BarChart3 className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-bold text-blue-900 mb-1">Facebook Pixel</h3>
              <p className="text-sm text-blue-700">Conversion tracking & ad optimization</p>
            </div>
            <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
              <BarChart3 className="w-8 h-8 text-red-600 mb-2" />
              <h3 className="font-bold text-red-900 mb-1">Google Ads</h3>
              <p className="text-sm text-red-700">Conversion tracking & call attribution</p>
            </div>
            <div className="border border-teal-200 bg-teal-50 p-4 rounded-lg">
              <BarChart3 className="w-8 h-8 text-teal-600 mb-2" />
              <h3 className="font-bold text-teal-900 mb-1">Google Tag Manager</h3>
              <p className="text-sm text-teal-700">Centralized tag management system</p>
            </div>
            <div className="border border-purple-200 bg-purple-50 p-4 rounded-lg">
              <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
              <h3 className="font-bold text-purple-900 mb-1">Microsoft Clarity</h3>
              <p className="text-sm text-purple-700">Session recordings & heatmaps</p>
            </div>
            <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg">
              <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
              <h3 className="font-bold text-orange-900 mb-1">GoHighLevel</h3>
              <p className="text-sm text-orange-700">CRM-integrated tracking & attribution</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">1. Facebook Pixel</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Purpose</h3>
              <p className="text-gray-700 mb-3">
                Facebook Pixel tracks user interactions for Facebook and Instagram ad campaigns. It enables:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Conversion tracking for ad campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Building custom audiences for retargeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Optimizing ad delivery to people likely to convert</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Measuring return on ad spend (ROAS)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                The Facebook Pixel is loaded in <code className="bg-gray-100 px-2 py-1 rounded text-sm">index.html</code> in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code> section:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1713496592502419');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1713496592502419&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Pixel ID</h3>
              <p className="text-gray-700 mb-2">
                <strong>Pixel ID:</strong> <code className="bg-blue-50 px-3 py-1 rounded text-blue-700 font-mono">1713496592502419</code>
              </p>
              <p className="text-gray-700">
                This ID connects the website to the NA Blinds Facebook Ads account. The pixel fires on every page load to track PageView events.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Events Tracked</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>PageView:</strong> Automatically tracked on every page load</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Lead conversions:</strong> Can be tracked with custom events on form submissions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Dashboard Access</h3>
              <p className="text-gray-700">
                <a
                  href="https://business.facebook.com/events_manager2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ocean hover:underline"
                >
                  Facebook Events Manager
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">2. Google Ads Conversion Tracking</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Purpose</h3>
              <p className="text-gray-700 mb-3">
                Google Ads conversion tracking measures direct business results from your Google Ads campaigns:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Phone call conversion tracking from click-to-call buttons</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Return on ad spend (ROAS) measurement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Ad campaign optimization based on actual conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Attribution from Google Ads click to sale</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                Google Ads conversion tracking is implemented via Google Tag Manager using gtag.js:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`<!-- Google Ads Pixel -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-17947516684"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17947516684');
</script>

<!-- Click to Call Conversion -->
<script>
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      'send_to': 'AW-17947516684/NULUCKH77vYbEIy-he5C',
      'value': 1.0,
      'currency': 'USD',
      'event_callback': callback
    });
    return false;
  }
</script>`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Account & Conversion IDs</h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Google Ads Account:</strong> <code className="bg-red-50 px-3 py-1 rounded text-red-700 font-mono">8156230499</code> (MCC: 2529129980)
                </p>
                <p className="text-gray-700">
                  <strong>Ads Pixel ID:</strong> <code className="bg-red-50 px-3 py-1 rounded text-red-700 font-mono">AW-17947516684</code>
                </p>
                <p className="text-gray-700">
                  <strong>Conversion Action ID:</strong> <code className="bg-red-50 px-3 py-1 rounded text-red-700 font-mono">NULUCKH77vYbEIy-he5C</code>
                </p>
                <p className="text-gray-700">
                  <strong>Conversion Type:</strong> Phone Call (value: $1.00 USD)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Events Tracked</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Phone Click-to-Call:</strong> When user clicks to call (954-629-1373)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Dashboard Access</h3>
              <p className="text-gray-700">
                <a
                  href="https://ads.google.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ocean hover:underline"
                >
                  Google Ads Dashboard
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">API Access</h3>
              <p className="text-gray-700 text-sm mb-2">
                For automated reporting and integrations, the Google Ads API is available at:
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700">
                <code>https://googleads.googleapis.com/v23/customers/8156230499/googleAds:search</code>
              </div>
              <p className="text-gray-700 text-sm mt-2">
                OAuth credentials and developer tokens stored in secure system keychain.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">3. Google Tag Manager</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Purpose</h3>
              <p className="text-gray-700 mb-3">
                Google Tag Manager (GTM) is a tag management system that allows you to quickly update tracking codes and related code snippets without editing site code directly:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Centralized management of all marketing and analytics tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Deploy and update tags without modifying site code</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Version control and testing capabilities for tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Improved site performance through asynchronous tag loading</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                Google Tag Manager is loaded in <code className="bg-gray-100 px-2 py-1 rounded text-sm">index.html</code> at the very beginning of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code> section:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQJ34G6X');</script>
<!-- End Google Tag Manager -->`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Container ID</h3>
              <p className="text-gray-700 mb-2">
                <strong>GTM Container ID:</strong> <code className="bg-teal-50 px-3 py-1 rounded text-teal-700 font-mono">GTM-WQJ34G6X</code>
              </p>
              <p className="text-gray-700">
                This ID identifies your Google Tag Manager container. All tags, triggers, and variables are managed within this container.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">What You Can Manage with GTM</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Additional analytics platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conversion tracking pixels</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remarketing tags</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Custom event tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>A/B testing tools</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Dashboard Access</h3>
              <p className="text-gray-700">
                <a
                  href="https://tagmanager.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ocean hover:underline"
                >
                  Google Tag Manager Dashboard
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Key Benefits</h3>
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Why GTM is valuable:</strong> Instead of asking a developer to add new tracking codes to your website every time you need one, you can add, edit, and disable tags yourself through the GTM interface. This makes marketing campaigns more agile and reduces development dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">4. Microsoft Clarity</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Purpose</h3>
              <p className="text-gray-700 mb-3">
                Microsoft Clarity provides qualitative behavior analysis through session recordings and heatmaps:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Session recordings to watch actual user behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Heatmaps showing click and scroll patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Rage click and dead click detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Form abandonment analysis</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                Clarity is loaded in <code className="bg-gray-100 px-2 py-1 rounded text-sm">index.html</code> in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code> section:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`<script type="text/javascript">
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "iksmufx6c3");
</script>`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Project ID</h3>
              <p className="text-gray-700 mb-2">
                <strong>Clarity Project ID:</strong> <code className="bg-purple-50 px-3 py-1 rounded text-purple-700 font-mono">iksmufx6c3</code>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Dashboard Access</h3>
              <p className="text-gray-700">
                <a
                  href="https://clarity.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-ocean hover:underline"
                >
                  Microsoft Clarity Dashboard
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
            </div>

            <div>
              <p className="text-gray-600 text-sm italic">
                For detailed Clarity documentation, see the <Link to="/docs/clarity" className="text-ocean hover:underline">dedicated Clarity documentation page</Link>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">5. GoHighLevel Tracking</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Purpose</h3>
              <p className="text-gray-700 mb-3">
                GoHighLevel's external tracking script connects website activity to your GHL CRM, enabling:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Attribution tracking from website visit to CRM lead</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Unified analytics dashboard in GoHighLevel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Form submission tracking integrated with CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Campaign performance visibility within GHL</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                The GoHighLevel tracking script is loaded at the end of <code className="bg-gray-100 px-2 py-1 rounded text-sm">index.html</code> just before the closing <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;/body&gt;</code> tag:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`<script
  src="https://link.msgsndr.com/js/external-tracking.js"
  data-tracking-id="tk_c676f3dd9df646f7ace29c259ea53d75"
></script>`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Tracking ID</h3>
              <p className="text-gray-700 mb-2">
                <strong>GHL Tracking ID:</strong> <code className="bg-orange-50 px-3 py-1 rounded text-orange-700 font-mono">tk_c676f3dd9df646f7ace29c259ea53d75</code>
              </p>
              <p className="text-gray-700">
                This ID links website activity to the NA Blinds GoHighLevel CRM account. The script tracks page views and form submissions, making them visible in your GHL analytics dashboard.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Key Difference</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> Unlike Facebook Pixel, Google Analytics, and Clarity which load in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code>, the GoHighLevel script loads at the end of <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;body&gt;</code> to ensure it doesn't block page rendering.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Dashboard Access</h3>
              <p className="text-gray-700">
                View tracking data in your GoHighLevel account under Analytics or Reporting sections.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How These Systems Work Together</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-warm-dark mb-1">Facebook Pixel</h3>
              <p className="text-gray-700 text-sm">Tells you which ads drive conversions and helps optimize Facebook/Instagram campaigns</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-warm-dark mb-1">Google Ads Conversion Tracking</h3>
              <p className="text-gray-700 text-sm">Measures phone calls from Google Ads clicks to calculate ROI and optimize bid strategy</p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <h3 className="font-semibold text-warm-dark mb-1">Google Tag Manager</h3>
              <p className="text-gray-700 text-sm">Manages all conversion and marketing tags in one place for easy updates and testing</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-warm-dark mb-1">Microsoft Clarity</h3>
              <p className="text-gray-700 text-sm">Shows you HOW users interact with your site through session recordings and heatmaps</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-warm-dark mb-1">GoHighLevel</h3>
              <p className="text-gray-700 text-sm">Connects website activity to CRM records for complete lead attribution and pipeline management</p>
            </div>
          </div>

          <p className="text-gray-700 mt-6">
            <strong>Example workflow:</strong> Google Ads shows you're getting phone call conversions from specific keywords → Clarity recordings reveal which page elements convince users to call → Facebook Pixel measures if those same users are in your Facebook audience → GoHighLevel tracks which calls converted to scheduled consultations in your CRM.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">📝 Recent Changes (Feb 11, 2025)</h2>
          <div className="space-y-3 text-blue-900">
            <p className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Removed GA4 pixel (G-0C7Q5FGZ1V)</strong> - No longer needed; Google Ads + GTM handle conversion tracking</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Verified Google Ads Account</strong> - Confirmed account 8156230499 with API access (v23 endpoint)</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Google Ads Conversion Tracking Active</strong> - Phone call conversions reporting to AW-17947516684/NULUCKH77vYbEIy-he5C</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Credentials Secured</strong> - Google Ads OAuth + Developer Token stored in macOS Keychain</span>
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-amber-900">Critical: What NOT to Change</h2>
          </div>

          <ul className="space-y-3 text-amber-900">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Never change any tracking IDs</strong> - this breaks all historical data and ad campaign tracking</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove Google Ads conversion script</strong> - this tracks ROI for phone call conversions</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Keep script locations correct</strong> - Facebook Pixel, Google Ads, GTM, and Clarity in <code className="bg-amber-100 px-2 py-1 rounded">&lt;head&gt;</code>, GoHighLevel before closing <code className="bg-amber-100 px-2 py-1 rounded">&lt;/body&gt;</code></span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't duplicate tracking scripts</strong> - one instance per system only</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Verification: How to Check All Systems Are Working</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Browser Console Method</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open the website and open Developer Tools (F12)</li>
                <li>Go to Console tab</li>
                <li>Type <code className="bg-gray-100 px-2 py-1 rounded">fbq</code> and press Enter - should show Facebook Pixel function</li>
                <li>Type <code className="bg-gray-100 px-2 py-1 rounded">gtag</code> and press Enter - should show Google Ads/GTM function</li>
                <li>Type <code className="bg-gray-100 px-2 py-1 rounded">dataLayer</code> and press Enter - should show Google Tag Manager data layer</li>
                <li>Type <code className="bg-gray-100 px-2 py-1 rounded">clarity</code> and press Enter - should show Clarity function</li>
                <li>Check Network tab for <code className="bg-gray-100 px-2 py-1 rounded">link.msgsndr.com</code> - verifies GoHighLevel tracking loaded</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Network Tab Method</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open Developer Tools → Network tab</li>
                <li>Reload the page</li>
                <li>Look for successful requests to:
                  <ul className="ml-6 mt-2 space-y-1 text-sm">
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded">connect.facebook.net</code> (Facebook Pixel)</li>
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded">www.googletagmanager.com/gtag/js</code> (Google Ads & GTM)</li>
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded">www.googletagmanager.com/gtm.js</code> (Google Tag Manager container)</li>
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded">clarity.ms</code> (Microsoft Clarity)</li>
                    <li>• <code className="bg-gray-100 px-2 py-1 rounded">link.msgsndr.com</code> (GoHighLevel)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Browser Extension Method</h3>
              <p className="text-gray-700 mb-2">Install browser extensions to verify tracking:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• <strong>Facebook Pixel Helper</strong> - Chrome extension to verify Pixel firing</li>
                <li>• <strong>Google Ads Helper</strong> - Chrome extension to verify Google Ads conversion tracking</li>
                <li>• <strong>Tag Assistant</strong> - Chrome extension to verify GTM container firing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Common Issues & Solutions</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Ad Blockers Preventing Tracking</h3>
              <p className="mb-2">
                When testing, disable browser ad blockers. They commonly block Facebook Pixel and Google Ads pixels. This doesn't affect most real users.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Google Ads Conversions Not Reporting</h3>
              <p className="mb-2">
                If phone call conversions don't show in Google Ads account 8156230499:
              </p>
              <ul className="ml-4 space-y-1 text-sm">
                <li>• Verify conversion ID matches <code className="bg-red-100 px-2 py-1 rounded">NULUCKH77vYbEIy-he5C</code></li>
                <li>• Check that gtag conversion event is firing (console: <code className="bg-red-100 px-2 py-1 rounded">gtag('event', 'conversion'...)</code>)</li>
                <li>• Verify call clicks are going through the click-to-call button</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Tracking Scripts Not Loading</h3>
              <p className="mb-2">
                Check browser console for errors. Ensure all scripts are in <code className="bg-red-100 px-2 py-1 rounded">&lt;head&gt;</code> and site is on HTTPS.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Data Showing in One System But Not Others</h3>
              <p className="mb-2">
                Each system is independent. Google Ads tracks phone calls specifically, while Facebook Pixel and Clarity track broader user behavior. If one works but another doesn't, check that specific tracking ID and script implementation.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Historical Data Lost</h3>
              <p className="mb-2">
                If tracking IDs are changed, historical data becomes inaccessible. Always verify IDs match the original accounts before making changes. Current setup: AW-17947516684 for Google Ads account 8156230499.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-ocean hover:text-warm-dark transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Documentation Hub</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
