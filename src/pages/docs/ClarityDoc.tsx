import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function ClarityDoc() {
  useEffect(() => {
    trackPageView('/docs/clarity', 'Microsoft Clarity Documentation');
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
            Microsoft Clarity Tracking
          </h1>
          <p className="text-gray-600 mt-2">
            Session recording and heatmap analytics system
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed">
            Microsoft Clarity tracks user behavior through session recordings and heatmaps. This helps identify:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Where users click, scroll, and hesitate</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Form abandonment points</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Mobile vs desktop behavior differences</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Conversion funnel drop-off points</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How It Works</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                The Clarity tracking script is loaded in <code className="bg-gray-100 px-2 py-1 rounded text-sm">index.html</code> in the <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;head&gt;</code> section:
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
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Tracking ID</h3>
              <p className="text-gray-700 mb-2">
                <strong>Project ID:</strong> <code className="bg-blue-50 px-3 py-1 rounded text-blue-700 font-mono">iksmufx6c3</code>
              </p>
              <p className="text-gray-700">
                This ID is unique to the NA Blinds Clarity project. The script loads asynchronously so it doesn't slow down page load.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">What Gets Tracked</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Session recordings:</strong> Complete user sessions (anonymized)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Heatmaps:</strong> Click, scroll, and movement patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Dead clicks:</strong> Areas users click that aren't interactive</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Rage clicks:</strong> Repeated clicks indicating frustration</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Form interactions:</strong> How users interact with contact forms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Dependencies</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Location</h3>
              <p className="text-gray-700">
                <code className="bg-gray-100 px-2 py-1 rounded">/index.html</code> (lines 102-108)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">External Service</h3>
              <p className="text-gray-700 mb-2">
                Microsoft Clarity Dashboard:
                <a
                  href="https://clarity.microsoft.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 ml-2 text-ocean hover:underline"
                >
                  clarity.microsoft.com
                  <ExternalLink className="w-4 h-4" />
                </a>
              </p>
              <p className="text-gray-700">
                Access the dashboard to view recordings and heatmaps. Login credentials are managed separately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">No Other Dependencies</h3>
              <p className="text-gray-700">
                Clarity runs independently. It doesn't affect or depend on other tracking systems.
              </p>
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
              <span><strong>Never change the tracking ID</strong> <code className="bg-amber-100 px-2 py-1 rounded">iksmufx6c3</code> - this will break all historical data</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove the script</strong> - conversion optimization depends on this data</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't move the script</strong> from the <code className="bg-amber-100 px-2 py-1 rounded">&lt;head&gt;</code> section - it needs to load early</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't add multiple Clarity scripts</strong> - one project ID per site</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Verify It's Working</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 1: Browser Console</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open the website in Chrome/Firefox</li>
                <li>Open Developer Tools (F12 or right-click → Inspect)</li>
                <li>Go to Console tab</li>
                <li>Type <code className="bg-gray-100 px-2 py-1 rounded">clarity</code> and press Enter</li>
                <li>You should see the Clarity function object (not "undefined")</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 2: Network Tab</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open Developer Tools → Network tab</li>
                <li>Reload the page</li>
                <li>Filter by "clarity"</li>
                <li>You should see requests to <code className="bg-gray-100 px-2 py-1 rounded">clarity.ms</code> loading successfully</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 3: Clarity Dashboard</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Log into <a href="https://clarity.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">clarity.microsoft.com</a></li>
                <li>Select the NA Blinds project</li>
                <li>Check if recent sessions are appearing (within last hour)</li>
                <li>If no sessions appear after 10-15 minutes, troubleshoot</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Common Mistakes / Failure Points</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Typo in Project ID</h3>
              <p className="mb-2">
                Even one wrong character breaks tracking. Always copy-paste the ID, never type it manually.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Script Placed in Body Instead of Head</h3>
              <p className="mb-2">
                Clarity may not capture early interactions if loaded too late. Keep it in <code className="bg-red-100 px-2 py-1 rounded">&lt;head&gt;</code>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Ad Blockers</h3>
              <p className="mb-2">
                When testing, disable browser ad blockers. They may block Clarity. This doesn't affect real users though.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ HTTPS Issues</h3>
              <p className="mb-2">
                Clarity requires HTTPS. It won't work properly on http:// URLs in production.
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
