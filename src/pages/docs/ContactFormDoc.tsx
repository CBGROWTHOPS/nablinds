import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function ContactFormDoc() {
  useEffect(() => {
    trackPageView('/docs/contact-form', 'Contact Form Documentation');
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
            Contact Form Flow
          </h1>
          <p className="text-gray-600 mt-2">
            Form submission, validation, and conversion tracking
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The contact form is the primary conversion point for the website. It captures leads and sends them to GoHighLevel CRM for follow-up. The form is designed for:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Mobile-first experience:</strong> Touch-friendly with proper spacing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Minimal friction:</strong> Only essential fields are required</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span><strong>Clear value prop:</strong> Free consultation messaging throughout</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Two Contact Form Implementations</h2>
          <p className="text-blue-900 leading-relaxed mb-6">
            This site has two contact page versions for A/B testing and flexibility:
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                <code className="bg-blue-100 px-3 py-1 rounded">/contact</code> - Custom Form
              </h3>
              <p className="text-gray-700 mb-4">
                Uses a custom-built React form component with full control over styling, validation, and tracking.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Form component:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/components/ContactForm.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Submission:</strong> Posts to webhook via <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/webhook.ts</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Redirect:</strong> Navigates to <code className="bg-gray-100 px-2 py-1 rounded">/thank-you</code> after submission</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Benefits:</strong> Full styling control, custom validation, integrated tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                <code className="bg-blue-100 px-3 py-1 rounded">/contact-2</code> - Embedded GoHighLevel Form
              </h3>
              <p className="text-gray-700 mb-4">
                Uses an embedded iframe form directly from GoHighLevel. Form is managed entirely in the GHL platform.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Form source:</strong> iframe from <code className="bg-gray-100 px-2 py-1 rounded text-xs">https://api.leadconnectorhq.com/widget/form/...</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Submission:</strong> Handled entirely by GoHighLevel iframe</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Redirect:</strong> Configured within GoHighLevel platform settings</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Benefits:</strong> No code changes needed, managed in GHL, easier for non-technical updates</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-blue-100 border border-blue-300 rounded-lg p-4">
            <p className="text-blue-900 font-semibold mb-2">💡 When to Use Each:</p>
            <ul className="space-y-2 text-blue-900 text-sm">
              <li><strong>/contact</strong> - When you need custom styling, validation logic, or tight integration with analytics</li>
              <li><strong>/contact-2</strong> - When you want to manage form fields in GoHighLevel without code changes</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How It Works - /contact (Custom Form)</h2>
          <p className="text-gray-600 mb-6">
            This section explains the custom form implementation used on <code className="bg-gray-100 px-2 py-1 rounded">/contact</code>.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Complete Flow</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User lands on Contact page</p>
                    <p className="text-sm text-gray-600">Route: <code className="bg-gray-100 px-2 py-1 rounded">/contact</code></p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User fills out form fields</p>
                    <p className="text-sm text-gray-600">Required: Name, Email, Phone | Optional: Address, Message</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User clicks "Request Consultation"</p>
                    <p className="text-sm text-gray-600">Button disables to prevent duplicate submissions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <p className="font-semibold text-warm-dark">Client-side validation runs</p>
                    <p className="text-sm text-gray-600">HTML5 validation: email format, required fields</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                  <div>
                    <p className="font-semibold text-warm-dark">Data sent to webhook</p>
                    <p className="text-sm text-gray-600">Via <code className="bg-gray-100 px-2 py-1 rounded">submitToWebhook()</code> function</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-ocean text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                  <div>
                    <p className="font-semibold text-warm-dark">User redirected to Thank You page</p>
                    <p className="text-sm text-gray-600">Route: <code className="bg-gray-100 px-2 py-1 rounded">/thank-you</code></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Form Fields</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Field</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Type</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Required</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Name</td>
                      <td className="px-4 py-3 text-sm text-gray-600">text</td>
                      <td className="px-4 py-3 text-sm">✅ Yes</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Split into first/last for CRM</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Email</td>
                      <td className="px-4 py-3 text-sm text-gray-600">email</td>
                      <td className="px-4 py-3 text-sm">✅ Yes</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Primary contact method</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Phone</td>
                      <td className="px-4 py-3 text-sm text-gray-600">tel</td>
                      <td className="px-4 py-3 text-sm">✅ Yes</td>
                      <td className="px-4 py-3 text-sm text-gray-600">SMS follow-up capability</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Address</td>
                      <td className="px-4 py-3 text-sm text-gray-600">text</td>
                      <td className="px-4 py-3 text-sm">❌ No</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Service area qualification</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-700">Message</td>
                      <td className="px-4 py-3 text-sm text-gray-600">textarea</td>
                      <td className="px-4 py-3 text-sm">❌ No</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Project details for prep</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">State Management</h3>
              <p className="text-gray-700 mb-3">
                The form uses React state to manage:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">formData</code> - All field values</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><code className="bg-gray-100 px-2 py-1 rounded">isSubmitting</code> - Prevents duplicate submissions</span>
                </li>
              </ul>
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
                  <span><strong>Custom form page:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/Contact.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Embedded form page:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/Contact-2.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Form component:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/components/ContactForm.tsx</code> (used only on /contact)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Related Systems</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Webhook utility:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/webhook.ts</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>SEO utility:</strong> <code className="bg-gray-100 px-2 py-1 rounded">/src/utils/seo.tsx</code></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>React Router:</strong> For navigation to Thank You page</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">External Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>GoHighLevel CRM (via webhook)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span>Microsoft Clarity (tracks form interactions)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Setup for /contact-2 (Embedded Form)</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The <code className="bg-gray-100 px-2 py-1 rounded">/contact-2</code> page uses an embedded GoHighLevel form. Here's how it's configured:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Iframe Configuration</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-3">
                  The form is embedded using an iframe that loads from GoHighLevel's form widget system:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Form URL:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-xs">https://api.leadconnectorhq.com/widget/form/v8LMVxlC3k5fMrhbqP2F</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Form ID:</strong> <code className="bg-gray-100 px-2 py-1 rounded">v8LMVxlC3k5fMrhbqP2F</code></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Form Name:</strong> NA Blinds Leads - Bolt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Height:</strong> 602px (fixed)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Script Loading</h3>
              <p className="text-gray-700 mb-3">
                The page dynamically loads the GoHighLevel form embed script:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <code className="text-sm text-gray-800">https://link.msgsndr.com/js/form_embed.js</code>
                <p className="text-sm text-gray-600 mt-2">
                  This script is loaded when the component mounts and removed on unmount to prevent memory leaks.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Managing the Embedded Form</h3>
              <p className="text-gray-700 mb-3">
                To update the embedded form (fields, styling, redirect URL, etc.):
              </p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Log into your GoHighLevel account</li>
                <li>Navigate to Sites → Forms</li>
                <li>Find the form named "NA Blinds Leads - Bolt"</li>
                <li>Make your changes (add/remove fields, update styling, configure redirect)</li>
                <li>Save changes - they will apply immediately to the website</li>
              </ol>
              <div className="mt-3 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-blue-900 text-sm">
                  <strong>Note:</strong> Changes made in GoHighLevel take effect immediately without requiring a code deployment. This makes /contact-2 ideal for quick form updates.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Changing the Form</h3>
              <p className="text-gray-700 mb-3">
                To swap in a different GoHighLevel form:
              </p>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Get the new form's embed code from GoHighLevel</li>
                <li>Extract the form ID from the iframe src URL</li>
                <li>Update the iframe src in <code className="bg-gray-100 px-2 py-1 rounded">/src/pages/Contact-2.tsx</code></li>
                <li>Update the data-form-id and data-form-name attributes</li>
                <li>Adjust height if needed (check form height in GHL)</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-amber-900">What NOT to Change</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-3">For /contact (Custom Form)</h3>
              <ul className="space-y-3 text-amber-900">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't add more required fields</strong> - every required field decreases conversion rate</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't remove the isSubmitting check</strong> - prevents duplicate leads in CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't change the redirect to /thank-you</strong> - this is needed for conversion tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't add CAPTCHA</strong> without A/B testing - adds friction, may hurt conversions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't remove touch-optimized styling</strong> - most traffic is mobile</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-3">For /contact-2 (Embedded Form)</h3>
              <ul className="space-y-3 text-amber-900">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't change the form ID without testing</strong> - verify the new form works in GHL first</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't remove the script cleanup in useEffect</strong> - prevents memory leaks and script conflicts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't hardcode a smaller height</strong> - the form may get cut off on mobile</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Don't forget to test the GHL redirect</strong> - iframe forms handle redirects differently than custom forms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Test</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Testing /contact (Custom Form)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-warm-dark mb-2">Desktop Testing</h4>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Open <code className="bg-gray-100 px-2 py-1 rounded">/contact</code> in browser</li>
                    <li>Test all validation (empty fields, invalid email)</li>
                    <li>Fill out form with test data</li>
                    <li>Check button disables during submission</li>
                    <li>Verify redirect to Thank You page</li>
                    <li>Check CRM for lead arrival</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-warm-dark mb-2">Mobile Testing</h4>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Open on actual mobile device (not just Chrome DevTools)</li>
                    <li>Test with phone keyboard (check autocomplete works)</li>
                    <li>Verify tap targets are large enough (44px minimum)</li>
                    <li>Check form doesn't zoom in on focus (viewport tag)</li>
                    <li>Test with slow 3G connection to verify loading states</li>
                  </ol>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Testing /contact-2 (Embedded Form)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-warm-dark mb-2">Desktop Testing</h4>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Open <code className="bg-gray-100 px-2 py-1 rounded">/contact-2</code> in browser</li>
                    <li>Verify iframe loads completely (no broken frame)</li>
                    <li>Test form submission with test data</li>
                    <li>Verify GHL redirect works (check GHL form settings)</li>
                    <li>Check CRM for lead arrival</li>
                    <li>Test scroll-to-form anchor (<code className="bg-gray-100 px-2 py-1 rounded">#consultation-form</code>)</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold text-warm-dark mb-2">Mobile Testing</h4>
                  <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                    <li>Open on actual mobile device</li>
                    <li>Check iframe is responsive and fits viewport</li>
                    <li>Verify no horizontal scrolling inside iframe</li>
                    <li>Test form height is correct (no cut-off fields)</li>
                    <li>Verify iframe doesn't cause page layout issues</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <p className="text-blue-900 text-sm">
                    <strong>Important:</strong> GHL iframe forms may have different styling than your site. Test thoroughly to ensure brand consistency.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-3">Form Field Testing (Both Versions)</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-700 mb-2 font-semibold">Test these edge cases on both forms:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Name with special characters (O'Brien, José)</li>
                  <li>• Single-word name (Madonna)</li>
                  <li>• Email with + symbol (user+test@example.com)</li>
                  <li>• Phone with various formats (954-629-1373, 9546291373, 1-954-629-1373)</li>
                  <li>• Very long message (test textarea expansion)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6">Common Mistakes / Failure Points</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4">For /contact (Custom Form)</h3>
              <div className="space-y-4 text-red-900">
                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Form Submits to Nowhere</h4>
                  <p className="mb-2">
                    If the webhook is broken but form still submits, users get redirected to Thank You but no lead is captured. Always test end-to-end in CRM.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Duplicate Submissions</h4>
                  <p className="mb-2">
                    If <code className="bg-red-100 px-2 py-1 rounded">isSubmitting</code> state is removed or broken, users can double-click and create duplicate leads.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Mobile Input Zoom</h4>
                  <p className="mb-2">
                    If input font size is smaller than 16px on mobile, iOS will zoom in. This is annoying. Keep inputs at 16px minimum on mobile.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Broken Required Field Validation</h4>
                  <p className="mb-2">
                    If <code className="bg-red-100 px-2 py-1 rounded">required</code> attribute is removed, empty submissions can be sent. Always keep HTML5 validation.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Form Not Accessible via Keyboard</h4>
                  <p className="mb-2">
                    Test tab navigation. Users should be able to fill the entire form and submit using only keyboard (Tab, Enter keys).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-red-900 mb-4">For /contact-2 (Embedded Form)</h3>
              <div className="space-y-4 text-red-900">
                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Iframe Not Loading</h4>
                  <p className="mb-2">
                    If the form embed script fails to load or the form ID is wrong, users see a blank space. Verify the form is published in GHL and the iframe URL is correct.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Script Conflicts</h4>
                  <p className="mb-2">
                    If the GHL script isn't properly cleaned up, it can cause issues on other pages. Always use the useEffect cleanup function.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Height Issues on Mobile</h4>
                  <p className="mb-2">
                    If the iframe height is too small, fields get cut off. If too large, there's excessive white space. Test on real devices.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ GHL Redirect Not Configured</h4>
                  <p className="mb-2">
                    Unlike the custom form, the embedded form's redirect is configured in GoHighLevel. If not set up, users won't reach the thank you page.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">❌ Tracking Not Working</h4>
                  <p className="mb-2">
                    Iframe forms can block analytics tracking. Make sure Facebook Pixel, GA, and Clarity are configured in GHL form settings.
                  </p>
                </div>
              </div>
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
