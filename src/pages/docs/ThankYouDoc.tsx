import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function ThankYouDoc() {
  useEffect(() => {
    trackPageView('/docs/thank-you', 'Thank You Page Documentation');
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
            Thank You Page System
          </h1>
          <p className="text-gray-600 mt-2">
            Post-conversion page and next steps guidance
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are <strong>two separate thank you pages</strong> for different conversion paths:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4 space-y-3">
            <div>
              <code className="bg-white px-2 py-1 rounded border border-gray-300 text-sm">/thank-you</code>
              <p className="text-gray-700 text-sm mt-1">Contact form submissions (from /contact and /contact-2)</p>
            </div>
            <div>
              <code className="bg-white px-2 py-1 rounded border border-gray-300 text-sm">/thank-you-consultation</code>
              <p className="text-gray-700 text-sm mt-1">Consultation funnel submissions (from /consultation)</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both pages are identical in design and content. The separation allows for:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
              <span>Independent tracking and analytics for each conversion path</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
              <span>Separate conversion pixel firing for paid traffic attribution</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
              <span>A/B testing different messaging in the future</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Both Thank You pages serve these critical functions:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Conversion confirmation:</span> Assures users their request was received
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Next steps:</span> Clear expectations about what happens next
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Backup CTA:</span> Phone number for immediate contact
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Trust building:</span> Reinforces credibility (BBB, licensed, etc.)
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Conversion tracking:</span> Endpoint for analytics/pixels
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How It Works</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Page Flow</h3>
              <p className="text-gray-700 mb-3">
                Users land here after submitting the contact form. The page:
              </p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Displays success confirmation with checkmark icon</li>
                <li>Sets page title to "Thank You | NA Blinds"</li>
                <li>Adds <code className="bg-gray-100 px-2 py-1 rounded">noindex, nofollow</code> meta tag (prevents SEO indexing)</li>
                <li>Shows 3-step "What Happens Next" timeline</li>
                <li>Displays prominent phone CTA</li>
                <li>Lists trust badges (BBB A+, Licensed, 10+ years, etc.)</li>
                <li>Provides consultation prep tips</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Layout Differences</h3>
              <p className="text-gray-700 mb-3">
                Unlike other pages, the Thank You page:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>No Header navigation</strong> - uses simplified logo-only header</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>No Footer</strong> - minimal distractions, keeps focus on next steps</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Single CTA focus</strong> - phone number is the primary action</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">SEO Handling</h3>
              <p className="text-gray-700 mb-3">
                The page dynamically sets SEO tags using <code className="bg-gray-100 px-2 py-1 rounded">useEffect</code>:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`useEffect(() => {
  document.title = 'Thank You | NA Blinds';

  const metaRobots = document.querySelector('meta[name="robots"]');
  if (metaRobots) {
    metaRobots.setAttribute('content', 'noindex, nofollow');
  }

  return () => {
    // Cleanup: restore default title and robots tag
  };
}, []);`}
                </pre>
              </div>
              <p className="text-gray-700 mt-3">
                <strong>Why noindex?</strong> We don't want this page appearing in search results. Users should only reach it after submitting a form.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Dependencies</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Code Locations</h3>
              <div className="space-y-2">
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/ThankYou.tsx</code>
                  <p className="text-gray-700 text-sm mt-1">Contact form thank you page</p>
                </div>
                <div>
                  <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/ThankYouConsultation.tsx</code>
                  <p className="text-gray-700 text-sm mt-1">Consultation funnel thank you page</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Route Configuration</h3>
              <p className="text-gray-700 mb-2">
                In <code className="bg-gray-100 px-2 py-1 rounded">/src/App.tsx</code>, both routes are special:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`<Route path="/thank-you" element={<ThankYou />} />
<Route path="/thank-you-consultation" element={<ThankYouConsultation />} />`}
                </pre>
              </div>
              <p className="text-gray-700 mt-3">
                Both are defined <strong>outside</strong> the main layout route so they don't render the Header/Footer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Form Integration</h3>
              <p className="text-gray-700 mb-2">
                Each form redirects to its respective thank you page:
              </p>
              <div className="space-y-2">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Contact forms (/contact, /contact-2):</p>
                  <code className="text-sm text-gray-800">navigate('/thank-you')</code>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Consultation funnel (/consultation):</p>
                  <code className="text-sm text-gray-800">navigate('/thank-you-consultation')</code>
                </div>
              </div>
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
              <span><strong>Don't add the Header/Footer</strong> - this is intentionally minimal to reduce distractions</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove noindex tag</strong> - this page shouldn't appear in search results</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't change the route paths</strong> - <code className="bg-amber-100 px-2 py-1 rounded">/thank-you</code> and <code className="bg-amber-100 px-2 py-1 rounded">/thank-you-consultation</code> are hardcoded in their respective forms</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove the phone CTA</strong> - gives anxious leads an immediate action</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't add forms</strong> - this is a confirmation page, not a second chance to capture data</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Test</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">End-to-End Flow Testing</h3>
              <p className="text-gray-700 mb-2">Test both conversion paths:</p>

              <div className="bg-gray-50 p-4 rounded-lg mb-3">
                <p className="font-semibold text-gray-800 mb-2">Contact Form Path:</p>
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>Go to /contact or /contact-2</li>
                  <li>Fill out and submit form</li>
                  <li>Verify redirect to <code className="bg-gray-100 px-2 py-1 rounded">/thank-you</code></li>
                  <li>Verify no Header/Footer present</li>
                  <li>Check page title in browser tab</li>
                  <li>Test phone number link (should open dialer on mobile)</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800 mb-2">Consultation Funnel Path:</p>
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>Go to /consultation</li>
                  <li>Complete multi-step form</li>
                  <li>Verify redirect to <code className="bg-gray-100 px-2 py-1 rounded">/thank-you-consultation</code></li>
                  <li>Verify no Header/Footer present</li>
                  <li>Check page title in browser tab</li>
                  <li>Test phone number link (should open dialer on mobile)</li>
                </ol>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">SEO Tag Verification</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open either Thank You page</li>
                <li>Right-click → Inspect → Head section</li>
                <li>Look for <code className="bg-gray-100 px-2 py-1 rounded">&lt;meta name="robots" content="noindex, nofollow"&gt;</code></li>
                <li>Navigate away and check the tag resets</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Direct URL Access</h3>
              <p className="text-gray-700 mb-2">
                Test what happens if someone visits <code className="bg-gray-100 px-2 py-1 rounded">/thank-you</code> or <code className="bg-gray-100 px-2 py-1 rounded">/thank-you-consultation</code> directly (not via form):
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Page should still load (no errors)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Content should be generic enough to make sense</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>"Return to Homepage" link should work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Common Mistakes / Failure Points</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Adding Navigation</h3>
              <p className="mb-2">
                Don't add full site navigation. Keep it minimal. The goal is to keep users focused on the confirmation message and phone CTA.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Forgetting Mobile Optimization</h3>
              <p className="mb-2">
                The phone CTA must work on mobile with <code className="bg-red-100 px-2 py-1 rounded">tel:</code> protocol. Test that tapping it opens the phone dialer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Allowing Search Engine Indexing</h3>
              <p className="mb-2">
                If <code className="bg-red-100 px-2 py-1 rounded">noindex</code> is removed, this page can appear in search results. Users landing here directly will be confused.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Broken Return Link</h3>
              <p className="mb-2">
                The "Return to Homepage" link must work. If React Router breaks, users could be stuck here.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ No Clear Next Steps</h3>
              <p className="mb-2">
                Users need to know what happens next. If the timeline section is removed, conversion anxiety increases and satisfaction drops.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Updating Only One Thank You Page</h3>
              <p className="mb-2">
                Both thank you pages should have identical content. If you update messaging, trust badges, or phone numbers on one page, you MUST update the other page too. Users should have the same experience regardless of which conversion path they took.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Future Enhancements</h2>
          <p className="text-blue-900 mb-3">
            Potential improvements to consider (with A/B testing):
          </p>
          <ul className="space-y-2 text-blue-900">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Add conversion pixels (Google Ads, Facebook, etc.) for remarketing</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Include calendar booking link for self-scheduling</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Add video testimonial for trust building</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Show estimated response time based on current queue</span>
            </li>
          </ul>
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
