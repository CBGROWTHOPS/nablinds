import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function WebhookDoc() {
  useEffect(() => {
    trackPageView('/docs/webhook', 'Webhook Integration Documentation');
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
            GoHighLevel Webhook Integration
          </h1>
          <p className="text-gray-600 mt-2">
            CRM integration and lead submission system
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This webhook sends all contact form submissions directly to GoHighLevel CRM. Every lead captured on the website is automatically delivered to the CRM for follow-up.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold text-lg text-ocean">
            This is mission-critical. Without it, leads are lost.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How It Works</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Data Flow</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="space-y-2 text-sm text-gray-700 font-mono">
                  <div>1. User fills out contact form</div>
                  <div className="ml-4">↓</div>
                  <div>2. Form validation (client-side)</div>
                  <div className="ml-4">↓</div>
                  <div>3. <code className="bg-gray-200 px-2 py-1 rounded">submitToWebhook()</code> called</div>
                  <div className="ml-4">↓</div>
                  <div>4. Data formatted and sent to GoHighLevel</div>
                  <div className="ml-4">↓</div>
                  <div>5. User redirected to Thank You page</div>
                  <div className="ml-4">↓</div>
                  <div>6. Lead appears in GoHighLevel CRM</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Implementation</h3>
              <p className="text-gray-700 mb-3">
                Located in: <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/webhook.ts</code>
              </p>
              <p className="text-gray-700 mb-3">
                The webhook utility handles:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Name parsing:</strong> Splits full name into first/last name</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Phone formatting:</strong> Converts to E.164 format (+1XXXXXXXXXX)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Message enhancement:</strong> Appends address if provided</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Metadata tagging:</strong> Adds page URL, form name, source</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Payload Structure</h3>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`{
  "first_name": "John",
  "last_name": "Smith",
  "email": "john@example.com",
  "phone": "+19545551234",
  "message": "I need blinds for 5 windows\\n\\nAddress: Miami, FL 33101",
  "page_url": "https://www.nablinds.co/contact",
  "form_name": "Free Consultation",
  "source": "Website"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Dependencies</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Webhook URL</h3>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-2">
                <code className="text-xs sm:text-sm text-blue-900 break-all">
                  https://services.leadconnectorhq.com/hooks/pKgTEQf1DpuyRDPhTsOA/webhook-trigger/aVm43sDIMgzlnSoyZT6N
                </code>
              </div>
              <p className="text-gray-700">
                This URL is unique to the NA Blinds GoHighLevel account. It routes leads to the correct CRM location.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">GoHighLevel Account</h3>
              <p className="text-gray-700">
                Webhook is managed in the GoHighLevel dashboard under Workflows → Webhooks. Access credentials are managed separately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Contact Form Component</h3>
              <p className="text-gray-700">
                Used in: <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/Contact.tsx</code>
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
              <span><strong>Never change the webhook URL</strong> - this is hardcoded and tied to the GoHighLevel account</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't modify payload structure</strong> - GoHighLevel expects these exact field names</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove phone formatting</strong> - CRM requires E.164 format for proper SMS delivery</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't skip error handling</strong> - errors are logged but don't prevent Thank You redirect</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Verify It's Working</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 1: Test Submission</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Go to the Contact page</li>
                <li>Fill out the form with test data (use unique name like "Test [timestamp]")</li>
                <li>Submit the form</li>
                <li>Open browser console (F12) → check for errors</li>
                <li>Log into GoHighLevel CRM</li>
                <li>Check if the test lead appeared in the contact list</li>
                <li>Verify all fields are populated correctly</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 2: Browser Network Tab</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open Developer Tools → Network tab</li>
                <li>Submit a form</li>
                <li>Look for request to <code className="bg-gray-100 px-2 py-1 rounded">leadconnectorhq.com</code></li>
                <li>Check status code (should be 200 OK)</li>
                <li>Inspect request payload to confirm data is correct</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Method 3: GoHighLevel Webhook Logs</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Log into GoHighLevel</li>
                <li>Go to Settings → Workflows → Webhooks</li>
                <li>Find the NA Blinds webhook</li>
                <li>View recent activity log</li>
                <li>Check for successful submissions with timestamps</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Common Mistakes / Failure Points</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Webhook URL Changed or Expired</h3>
              <p className="mb-2">
                If GoHighLevel webhook is disabled or deleted, submissions will fail. Always check the webhook is active in GHL dashboard.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ CORS Issues (Won't Happen Here)</h3>
              <p className="mb-2">
                GoHighLevel webhooks properly handle CORS. If you see CORS errors, the webhook URL is wrong.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Phone Number Formatting Broken</h3>
              <p className="mb-2">
                If phone formatting is removed, CRM won't be able to send SMS. E.164 format is required for international SMS.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Network Errors Not Caught</h3>
              <p className="mb-2">
                The current implementation catches errors but still redirects. This is intentional - we don't want users stuck on the form if webhook temporarily fails.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Duplicate Submissions</h3>
              <p className="mb-2">
                The form disables the submit button during submission to prevent duplicates. Don't remove the <code className="bg-red-100 px-2 py-1 rounded">isSubmitting</code> state check.
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
