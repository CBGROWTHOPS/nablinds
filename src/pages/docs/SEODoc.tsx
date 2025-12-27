import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function SEODoc() {
  useEffect(() => {
    trackPageView('/docs/seo', 'SEO System Documentation');
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
            SEO System
          </h1>
          <p className="text-gray-600 mt-2">
            Dynamic meta tags and structured data management
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The SEO system manages page-specific meta tags and structured data for search engine optimization. This ensures:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Unique page titles:</span> Each page has optimized, keyword-rich titles
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Meta descriptions:</span> Compelling summaries for search results
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Canonical URLs:</span> Prevents duplicate content issues
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Open Graph tags:</span> Optimized social media sharing
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Structured data:</span> LocalBusiness schema for rich snippets
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How It Works</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Two-Layer System</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-warm-dark mb-2">Layer 1: Global Defaults (index.html)</h4>
                  <p className="text-gray-700 mb-2">
                    Base tags loaded with the HTML:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 ml-4">
                    <li>• Default title and description</li>
                    <li>• Open Graph tags</li>
                    <li>• Twitter Card tags</li>
                    <li>• Geo location tags</li>
                    <li>• LocalBusiness JSON-LD structured data</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-warm-dark mb-2">Layer 2: Page-Specific Overrides (useSEO hook)</h4>
                  <p className="text-gray-700 mb-2">
                    Each page calls <code className="bg-gray-100 px-2 py-1 rounded">useSEO()</code> to override defaults:
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded-lg mt-2 overflow-x-auto">
                    <pre className="text-xs">
{`useSEO({
  title: 'Contact NA Blinds | Free Consultation',
  description: 'Request a free consultation...',
  canonicalUrl: 'https://www.nablinds.co/contact'
});`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">The useSEO Hook</h3>
              <p className="text-gray-700 mb-3">
                Located in: <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/seo.tsx</code>
              </p>
              <p className="text-gray-700 mb-3">
                This React hook dynamically updates:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">document.title</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">&lt;meta name="description"&gt;</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">&lt;link rel="canonical"&gt;</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Open Graph tags (<code className="bg-gray-100 px-2 py-1 rounded">og:title</code>, <code className="bg-gray-100 px-2 py-1 rounded">og:description</code>, <code className="bg-gray-100 px-2 py-1 rounded">og:url</code>)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Usage Example</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`import { useSEO } from '../utils/seo';

export default function Services() {
  useSEO({
    title: 'Window Treatment Services | Blinds, Shades & Shutters',
    description: 'Custom blinds, shades, shutters, and more...',
    canonicalUrl: 'https://www.nablinds.co/services'
  });

  return (
    <div>
      {/* Page content */}
    </div>
  );
}`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Structured Data (JSON-LD)</h3>
              <p className="text-gray-700 mb-3">
                The <code className="bg-gray-100 px-2 py-1 rounded">index.html</code> includes LocalBusiness schema:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2 font-semibold">What it includes:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Business name, logo, phone</li>
                  <li>• Service areas (Miami, Fort Lauderdale, Boca Raton, West Palm Beach)</li>
                  <li>• Aggregate rating (5 stars, 150 reviews)</li>
                  <li>• Operating hours</li>
                  <li>• Geographic coordinates</li>
                </ul>
              </div>
              <p className="text-gray-700 mt-3">
                <strong>Why this matters:</strong> Google uses this data for rich snippets in search results (star ratings, hours, location).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Dependencies</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Code Locations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Global defaults:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/index.html</code> (lines 1-100)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>useSEO hook:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/seo.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Page usage:</strong> All page components in <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/</code></span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">External Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Google Search Console (monitors indexing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Schema.org validator (validates structured data)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-amber-900">What NOT to Change</h2>
          </div>

          <ul className="space-y-3 text-amber-900">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove canonical tags</strong> - prevents duplicate content penalties</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't break JSON-LD syntax</strong> - invalid JSON breaks rich snippets</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't change phone number format</strong> - must be <code className="bg-amber-100 px-2 py-1 rounded">+1-XXX-XXX-XXXX</code> in structured data</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't duplicate title tags</strong> - each page needs a unique title</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove useSEO calls</strong> - pages will use generic defaults</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Verify It's Working</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 1: Browser Inspection</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open any page on the site</li>
                <li>Right-click → View Page Source</li>
                <li>Check <code className="bg-gray-100 px-2 py-1 rounded">&lt;title&gt;</code> is page-specific</li>
                <li>Look for <code className="bg-gray-100 px-2 py-1 rounded">&lt;meta name="description"&gt;</code> with unique content</li>
                <li>Find <code className="bg-gray-100 px-2 py-1 rounded">&lt;link rel="canonical"&gt;</code> pointing to correct URL</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 2: Schema Validator</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Go to <a href="https://validator.schema.org/" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">validator.schema.org</a></li>
                <li>Enter <code className="bg-gray-100 px-2 py-1 rounded">https://www.nablinds.co</code></li>
                <li>Click "Run Test"</li>
                <li>Check for zero errors</li>
                <li>Verify LocalBusiness schema is detected</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 3: Google Search Console</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Log into Google Search Console</li>
                <li>Go to "Enhancements" → "Unparsable structured data"</li>
                <li>Check for zero errors</li>
                <li>Go to "Coverage" to see indexed pages</li>
                <li>Verify all main pages are indexed</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 4: Facebook Sharing Debugger</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Go to <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">Facebook Sharing Debugger</a></li>
                <li>Enter any page URL</li>
                <li>Check Open Graph tags are correct</li>
                <li>Verify image, title, description appear</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Common Mistakes / Failure Points</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Duplicate Title Tags</h3>
              <p className="mb-2">
                If <code className="bg-red-100 px-2 py-1 rounded">useSEO()</code> isn't called on a page, it uses the generic default. Every page needs a unique title.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Invalid JSON-LD</h3>
              <p className="mb-2">
                A single quote or comma error breaks structured data. Always validate after editing JSON-LD in <code className="bg-red-100 px-2 py-1 rounded">index.html</code>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Wrong Canonical URLs</h3>
              <p className="mb-2">
                If canonical URL doesn't match the actual page URL, search engines get confused. Always use full absolute URLs starting with <code className="bg-red-100 px-2 py-1 rounded">https://</code>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Missing Meta Descriptions</h3>
              <p className="mb-2">
                Google generates its own snippets if meta description is missing. This usually results in poor click-through rates.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Outdated Schema Data</h3>
              <p className="mb-2">
                If business hours, phone number, or rating changes, update the JSON-LD in <code className="bg-red-100 px-2 py-1 rounded">index.html</code>. Outdated info hurts trust.
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
