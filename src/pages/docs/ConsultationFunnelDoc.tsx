import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function ConsultationFunnelDoc() {
  useEffect(() => {
    trackPageView('/docs/consultation-funnel', 'Consultation Funnel Documentation');
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
            Consultation Funnel
          </h1>
          <p className="text-gray-600 mt-2">
            Multi-step lead qualification form optimized for paid traffic conversion
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The consultation funnel at <code className="bg-gray-100 px-2 py-1 rounded">/consultation</code> is a 6-step guided form designed to maximize conversion from paid advertising traffic. Unlike the traditional contact form, this funnel:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Qualifies leads:</strong> Gathers project details before asking for contact info</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Reduces abandonment:</strong> Progressive disclosure feels less overwhelming than a long form</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Increases engagement:</strong> Interactive format keeps users engaged through completion</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Better lead data:</strong> Sales team knows project details before calling</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">When to Use This Funnel</h2>
          <div className="space-y-4 text-blue-900">
            <div>
              <h3 className="text-lg font-semibold mb-2">✅ Best For:</h3>
              <ul className="space-y-2 ml-6">
                <li>• Google Ads campaigns (especially Search Ads)</li>
                <li>• Facebook/Instagram lead generation ads</li>
                <li>• High-intent traffic sources</li>
                <li>• Campaigns targeting specific services (e.g., "motorized blinds")</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">❌ Not Ideal For:</h3>
              <ul className="space-y-2 ml-6">
                <li>• General contact/inquiry pages</li>
                <li>• Users just browsing services</li>
                <li>• Organic traffic from blog posts</li>
                <li>• Users with simple questions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">The 6-Step Flow</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-ocean pl-6">
              <h3 className="text-xl font-bold text-warm-dark mb-2">Step 1: Service Type</h3>
              <p className="text-gray-700 mb-3">
                <strong>Question:</strong> "What do you need help with?"
              </p>
              <p className="text-gray-600 text-sm mb-2">Options:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Blinds</li>
                <li>• Window Shades</li>
                <li>• Drapes</li>
                <li>• Motorized Blinds</li>
                <li>• Not sure yet</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Purpose:</strong> Qualifies service interest and allows sales team to prepare relevant product info
              </p>
            </div>

            <div className="border-l-4 border-ocean pl-6">
              <h3 className="text-xl font-bold text-warm-dark mb-2">Step 2: Project Location</h3>
              <p className="text-gray-700 mb-3">
                <strong>Question:</strong> "Where is the project located?"
              </p>
              <p className="text-gray-600 text-sm mb-2">
                Text input field (zip code or city name)
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Purpose:</strong> Confirms service area eligibility before collecting personal info
              </p>
            </div>

            <div className="border-l-4 border-ocean pl-6">
              <h3 className="text-xl font-bold text-warm-dark mb-2">Step 3: Installation Timeline</h3>
              <p className="text-gray-700 mb-3">
                <strong>Question:</strong> "When are you looking to install?"
              </p>
              <p className="text-gray-600 text-sm mb-2">Options:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• As soon as possible</li>
                <li>• In the next few weeks</li>
                <li>• Just planning / researching</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Purpose:</strong> Prioritizes hot leads vs. long-term nurture prospects
              </p>
            </div>

            <div className="border-l-4 border-ocean pl-6">
              <h3 className="text-xl font-bold text-warm-dark mb-2">Step 4: Property Type</h3>
              <p className="text-gray-700 mb-3">
                <strong>Question:</strong> "What type of property is this for?"
              </p>
              <p className="text-gray-600 text-sm mb-2">Options:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• House</li>
                <li>• Apartment / Condo</li>
                <li>• Office / Commercial</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Purpose:</strong> Helps estimate project size and product recommendations
              </p>
            </div>

            <div className="border-l-4 border-ocean pl-6">
              <h3 className="text-xl font-bold text-warm-dark mb-2">Step 5: Project Priority</h3>
              <p className="text-gray-700 mb-3">
                <strong>Question:</strong> "What's most important to you for this project?"
              </p>
              <p className="text-gray-600 text-sm mb-2">Options:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Privacy</li>
                <li>• Light control</li>
                <li>• Style / design</li>
                <li>• Heat / sun reduction</li>
                <li>• Not sure yet</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Purpose:</strong> Identifies key pain points for tailored consultation
              </p>
            </div>

            <div className="border-l-4 border-ocean pl-6">
              <h3 className="text-xl font-bold text-warm-dark mb-2">Step 6: Contact Information</h3>
              <p className="text-gray-700 mb-3">
                <strong>Question:</strong> "Where should we send your quote and next steps?"
              </p>
              <p className="text-gray-600 text-sm mb-2">Required fields:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• First Name</li>
                <li>• Phone Number</li>
              </ul>
              <p className="text-gray-600 text-sm mb-2">Optional field:</p>
              <ul className="text-sm text-gray-600 space-y-1 ml-4">
                <li>• Email</li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                <strong>Purpose:</strong> Collects minimum contact info needed for follow-up
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Technical Implementation</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Component Structure</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Main component:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/Consultation.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Webhook utility:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/consultationWebhook.ts</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Route:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/consultation</code></span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">State Management</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">currentStep</code> - Tracks which step (1-6) the user is on</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">formData</code> - Stores all user inputs across all steps</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">isSubmitting</code> - Prevents duplicate submissions during webhook POST</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">User Flow Logic</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User clicks a service option (Steps 1, 3-5)</p>
                    <p className="text-sm text-gray-600">Automatically advances to next step after 200ms delay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User types location (Step 2)</p>
                    <p className="text-sm text-gray-600">Must click "Continue" button to advance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User fills contact info (Step 6)</p>
                    <p className="text-sm text-gray-600">Phone number is formatted to E.164 format (+1XXXXXXXXXX)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-warm-dark">Form submitted to webhook</p>
                    <p className="text-sm text-gray-600">Sends to GoHighLevel with source tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User redirected to Thank You page</p>
                    <p className="text-sm text-gray-600">Route: <code className="bg-gray-100 px-2 py-1 rounded">/thank-you-consultation</code></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Webhook Payload</h3>
              <p className="text-gray-700 mb-3">
                Data sent to GoHighLevel CRM includes:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">first_name</code> - Customer name</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">phone</code> - Formatted to E.164 (+1XXXXXXXXXX)</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">email</code> - Optional email address</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">service_type</code> - Selected service</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">project_location</code> - Zip/city entered</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">installation_timeline</code> - Timeline selection</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">property_type</code> - Property type</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">project_priority</code> - Main priority</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">source</code> - "Google Ads → Consultation Funnel"</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">form_name</code> - "Consultation Funnel"</li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">page_url</code> - Current page URL</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Phone Formatting</h3>
              <p className="text-gray-700 mb-3">
                The consultation webhook automatically formats phone numbers to E.164 international format:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">9546291373</code> → <code className="bg-gray-100 px-2 py-1 rounded">+19546291373</code></li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">954-629-1373</code> → <code className="bg-gray-100 px-2 py-1 rounded">+19546291373</code></li>
                  <li>• <code className="bg-gray-100 px-2 py-1 rounded">1-954-629-1373</code> → <code className="bg-gray-100 px-2 py-1 rounded">+19546291373</code></li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  This ensures consistent phone format for SMS/call automations in GoHighLevel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Design Principles</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Progress Indicator</h3>
              <p className="text-gray-700 mb-3">
                Visual progress bar at top shows "Step X of 6" with numbered circles. Completed steps are highlighted in ocean blue.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Purpose:</strong> Reduces abandonment by showing progress and setting expectations
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">One Question Per Screen</h3>
              <p className="text-gray-700 mb-3">
                Each step shows only one question to avoid cognitive overload. Clean, focused interface.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Purpose:</strong> Increases completion rate vs. long multi-field forms
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Auto-Advance on Selection</h3>
              <p className="text-gray-700 mb-3">
                Multiple choice steps automatically advance after selection (200ms delay for visual feedback).
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Purpose:</strong> Reduces friction and makes form feel fast/modern
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Mobile-First Design</h3>
              <p className="text-gray-700 mb-3">
                Large tap targets, clear typography, responsive layout optimized for thumb zones.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Purpose:</strong> Most paid traffic arrives on mobile devices
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Minimalist Header/Footer</h3>
              <p className="text-gray-700 mb-3">
                Simple logo header and footer. No navigation menu to reduce distractions and exit points.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Purpose:</strong> Keeps users focused on completing the funnel
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
              <span><strong>Don't add more steps</strong> - 6 steps is already pushing it. Each added step increases abandonment exponentially.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't require email</strong> - Phone-only requirement reduces friction. Email is optional for good reason.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't remove auto-advance</strong> - Makes funnel feel slow and requires extra clicks.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't add navigation menu</strong> - Exits kill conversions. Keep users in the funnel.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't show the consultation popup</strong> - Would conflict with the funnel itself. Popup is disabled on this page.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't collect contact info earlier</strong> - Wait until Step 6. Asking for name/phone too early scares users away.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Testing the Funnel</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Complete Flow Test</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Visit <code className="bg-gray-100 px-2 py-1 rounded">/consultation</code></li>
                <li>Complete all 6 steps with test data</li>
                <li>Verify auto-advance works on multiple choice steps</li>
                <li>Check progress bar updates correctly</li>
                <li>Submit form with test phone number</li>
                <li>Verify redirect to <code className="bg-gray-100 px-2 py-1 rounded">/thank-you-consultation</code></li>
                <li>Check GoHighLevel CRM for lead with all details</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Mobile Testing</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Test on real mobile device (not just Chrome DevTools)</li>
                <li>Verify tap targets are large enough (minimum 44px)</li>
                <li>Check keyboard doesn't cover input fields</li>
                <li>Test with slow connection (check loading states)</li>
                <li>Verify progress indicator fits on small screens</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Validation Testing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Try advancing Step 2 with empty location field (should be blocked)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Try submitting Step 6 without name or phone (should be blocked)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Test phone formatting with various formats (954-629-1373, 9546291373, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Verify submit button disables during submission (no double-submit)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Analytics Verification</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Check Microsoft Clarity session recording captures funnel flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Verify Google Analytics tracks page view for /consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Confirm form submission triggers Thank You page conversion event</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6">Common Mistakes / Failure Points</h2>

          <div className="space-y-4 text-red-900">
            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Webhook Failure Silent</h4>
              <p className="mb-2">
                If webhook fails but form still advances to Thank You page, you'll think conversion happened but no lead in CRM. Always test end-to-end and check CRM.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Step Validation Breaking</h4>
              <p className="mb-2">
                If validation logic breaks, users can skip steps or submit incomplete data. Test all validation edge cases.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Progress Bar Not Updating</h4>
              <p className="mb-2">
                If progress indicator breaks, users don't know how many steps remain. This increases abandonment significantly.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Auto-Advance Too Fast</h4>
              <p className="mb-2">
                If 200ms delay is removed, users don't get visual feedback on their selection. Feels broken. Keep the delay.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Mobile Keyboard Covering Inputs</h4>
              <p className="mb-2">
                On Step 2 and Step 6, test that keyboard doesn't cover input fields on iOS/Android. Viewport must scroll properly.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Phone Format Issues in CRM</h4>
              <p className="mb-2">
                If phone isn't formatted to E.164, GoHighLevel SMS automation may fail. Verify phone format in webhook utility is working.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">❌ Popup Showing on Funnel Page</h4>
              <p className="mb-2">
                If consultation popup appears on /consultation page, it creates a confusing UX loop. Verify <code className="bg-red-100 px-2 py-1 rounded">/consultation</code> is in excluded pages list.
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
