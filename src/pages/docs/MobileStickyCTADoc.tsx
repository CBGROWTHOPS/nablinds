import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function MobileStickyCTADoc() {
  useEffect(() => {
    trackPageView('/docs/mobile-sticky-cta', 'Mobile Sticky CTA Documentation');
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
            Mobile Sticky CTA Bar
          </h1>
          <p className="text-gray-600 mt-2">
            Bottom-fixed call-to-action bar for mobile conversion optimization
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The mobile sticky CTA bar is a fixed bottom bar that appears on mobile devices to maximize conversion opportunities. It provides persistent access to the two primary conversion actions throughout the user's browsing experience.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Always accessible:</strong> Remains visible as users scroll through content</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Mobile-only:</strong> Hidden on desktop where space is less constrained</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Smart visibility:</strong> Only appears on pages where it supports conversion</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How It Works</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Visibility Rules</h3>
              <p className="text-gray-700 mb-3">
                The CTA bar only appears after the user scrolls ~15% down the page. This prevents it from blocking initial above-the-fold content while ensuring it's available once users engage with the page.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm font-semibold text-warm-dark mb-2">Scroll Trigger Logic:</p>
                <code className="text-xs text-gray-700 block">
                  scrollPercentage = (scrollY / (pageHeight - viewportHeight)) × 100
                  <br />
                  isVisible = scrollPercentage &gt; 15%
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Two Primary Actions</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-6 h-6 bg-white border-2 border-ocean text-ocean rounded flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <p className="font-semibold text-warm-dark">Call Button (Left)</p>
                      <p className="text-sm text-gray-600 mt-1">Initiates phone call to <code className="bg-gray-100 px-2 py-1 rounded">tel:954-629-1373</code></p>
                      <p className="text-sm text-gray-600 mt-1">Style: White background, ocean border (outlined style)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-6 h-6 bg-ocean text-white rounded flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <p className="font-semibold text-warm-dark">Request Free Consultation Button (Right)</p>
                      <p className="text-sm text-gray-600 mt-1">Takes up 2x the width of the call button (more prominent)</p>
                      <p className="text-sm text-gray-600 mt-1">Behavior:</p>
                      <ul className="text-sm text-gray-600 mt-1 ml-4 space-y-1">
                        <li>• If already on contact page: scrolls to consultation form</li>
                        <li>• Otherwise: navigates to <code className="bg-gray-100 px-2 py-1 rounded">/contact-2#consultation-form</code></li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-1">Style: Solid ocean background, white text (primary action)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Page Visibility Rules</h2>
          <p className="text-blue-900 mb-4">
            The sticky CTA bar intelligently hides itself on pages where it would be redundant or disruptive.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Hidden On These Pages:</h3>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <code className="bg-blue-100 px-2 py-1 rounded">/contact</code>
                      <p className="text-sm text-blue-700 mt-1">User is already on the contact page</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <code className="bg-blue-100 px-2 py-1 rounded">/contact-2</code>
                      <p className="text-sm text-blue-700 mt-1">Alternate contact page</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <code className="bg-blue-100 px-2 py-1 rounded">/thank-you</code>
                      <p className="text-sm text-blue-700 mt-1">User has already converted</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <code className="bg-blue-100 px-2 py-1 rounded">/thank-you-facebook</code>
                      <p className="text-sm text-blue-700 mt-1">Facebook campaign thank you page</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <code className="bg-blue-100 px-2 py-1 rounded">/internal-docs/*</code> and <code className="bg-blue-100 px-2 py-1 rounded">/docs/*</code>
                      <p className="text-sm text-blue-700 mt-1">Internal documentation pages</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Visible On These Pages:</h3>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <ul className="space-y-2 text-blue-900">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Homepage <code className="bg-blue-100 px-2 py-1 rounded">/</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Services page <code className="bg-blue-100 px-2 py-1 rounded">/services</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Gallery page <code className="bg-blue-100 px-2 py-1 rounded">/gallery</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>About page <code className="bg-blue-100 px-2 py-1 rounded">/about</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Service Areas page <code className="bg-blue-100 px-2 py-1 rounded">/service-areas</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>All other informational pages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Technical Implementation</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Code Location</h3>
              <p className="text-gray-700">
                <code className="bg-gray-100 px-2 py-1 rounded">/src/components/MobileStickyCTA.tsx</code>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Key Functions</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-warm-dark mb-2">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">shouldHideStickyBar(pathname: string)</code>
                  </p>
                  <p className="text-sm text-gray-700">
                    Centralized logic for determining which pages should hide the CTA bar. Checks against an array of excluded paths and pathname prefixes.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-warm-dark mb-2">
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">useEffect hook with scroll handler</code>
                  </p>
                  <p className="text-sm text-gray-700">
                    Monitors scroll position and calculates percentage to determine visibility. Cleans up event listener on unmount to prevent memory leaks.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Dependencies</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">react-router-dom</code> - For navigation and pathname detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">lucide-react</code> - Phone icon</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">/src/utils/scrollToForm.ts</code> - Scroll utility for in-page navigation</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Responsive Behavior</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2">
                  Uses Tailwind's <code className="bg-gray-100 px-2 py-1 rounded">md:hidden</code> class to ensure the bar only appears on screens smaller than 768px wide.
                </p>
                <p className="text-sm text-gray-700">
                  Desktop users see standard CTAs within the page content instead.
                </p>
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
              <span><strong>Don't change the 15% scroll threshold</strong> - this was chosen to balance visibility with not blocking initial content</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't add more buttons</strong> - two actions is the maximum before mobile users get overwhelmed</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove the page exclusion logic</strong> - showing CTAs on thank you pages or contact pages creates a poor UX</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't change button size ratios</strong> - the consultation button gets 2x width because it's the primary action</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove touch-manipulation class</strong> - prevents 300ms click delay on mobile devices</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't show on desktop</strong> - desktop has more space for in-content CTAs and doesn't need a sticky bar</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Add New Excluded Pages</h2>

          <p className="text-gray-700 mb-4">
            To hide the sticky CTA bar on additional pages, update the <code className="bg-gray-100 px-2 py-1 rounded">shouldHideStickyBar</code> function:
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
            <h3 className="text-sm font-semibold text-warm-dark mb-2">For exact path matches:</h3>
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`const excludedPages = [
  '/contact',
  '/contact-2',
  '/thank-you',
  '/thank-you-facebook',
  '/your-new-page', // Add here
];`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="text-sm font-semibold text-warm-dark mb-2">For path prefixes:</h3>
            <pre className="text-xs text-gray-700 overflow-x-auto">
{`if (pathname.startsWith('/internal-docs') ||
    pathname.startsWith('/docs') ||
    pathname.startsWith('/your-section')) { // Add here
  return true;
}`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Test</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Mobile Device Testing</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open site on actual mobile device (iPhone and Android)</li>
                <li>Navigate to homepage and scroll down 15-20%</li>
                <li>Verify CTA bar appears smoothly without layout shift</li>
                <li>Test both buttons - call should dial, consultation should navigate</li>
                <li>Navigate to <code className="bg-gray-100 px-2 py-1 rounded">/contact</code> - verify bar is hidden</li>
                <li>Navigate to <code className="bg-gray-100 px-2 py-1 rounded">/thank-you</code> - verify bar is hidden</li>
                <li>Navigate to <code className="bg-gray-100 px-2 py-1 rounded">/docs</code> - verify bar is hidden</li>
                <li>Check other pages to ensure bar appears correctly</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Chrome DevTools Testing</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Open DevTools and toggle device toolbar</li>
                <li>Set viewport to iPhone 12 Pro (390 x 844)</li>
                <li>Verify bar appears only on mobile viewport</li>
                <li>Expand to desktop width - verify bar disappears</li>
                <li>Test scroll behavior with throttled CPU (slow 3G)</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Page Exclusion Testing</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2 font-semibold">Test these pages specifically:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">/contact</code> - Bar should NOT appear</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">/contact-2</code> - Bar should NOT appear</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">/thank-you</code> - Bar should NOT appear</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">/docs</code> - Bar should NOT appear</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">/</code> - Bar SHOULD appear after scrolling</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">/services</code> - Bar SHOULD appear after scrolling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-4">Common Mistakes / Failure Points</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Bar Blocks Content</h3>
              <p className="mb-2">
                If page content doesn't have bottom padding, the sticky bar can cover important content. Ensure pages have adequate bottom padding when the bar is visible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Bar Appears on Desktop</h3>
              <p className="mb-2">
                If <code className="bg-red-100 px-2 py-1 rounded">md:hidden</code> class is removed, the bar will appear on desktop. This creates a poor UX since desktop has space for regular CTAs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Bar Shows on Thank You Page</h3>
              <p className="mb-2">
                If exclusion logic is broken, the bar appears after conversion. This creates confusion since the user already converted.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Scroll Handler Not Cleaned Up</h3>
              <p className="mb-2">
                If the event listener isn't removed in the cleanup function, memory leaks occur on page navigation. Always return cleanup function from useEffect.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Layout Shift on Appearance</h3>
              <p className="mb-2">
                Using <code className="bg-red-100 px-2 py-1 rounded">position: fixed</code> prevents layout shift. Never use <code className="bg-red-100 px-2 py-1 rounded">position: sticky</code> for this component.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Button Tap Delay on iOS</h3>
              <p className="mb-2">
                Without <code className="bg-red-100 px-2 py-1 rounded">touch-manipulation</code> class, iOS has a 300ms click delay. This makes the UI feel sluggish.
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
