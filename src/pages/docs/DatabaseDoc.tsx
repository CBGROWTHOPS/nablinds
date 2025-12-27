import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { trackPageView } from '../../utils/tracking';

export default function DatabaseDoc() {
  useEffect(() => {
    trackPageView('/docs/database', 'Database Documentation');
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
            Supabase Database
          </h1>
          <p className="text-gray-600 mt-2">
            Database setup, configuration, and management
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-2">Current Status: Available But Not Active</h2>
              <p className="text-blue-900 leading-relaxed">
                A Supabase database is provisioned and available for this project, but it's not currently being used. All lead data flows directly to GoHighLevel CRM via webhook. This documentation explains what's available and how to use it if needed in the future.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Purpose</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Supabase database provides a PostgreSQL backend for potential future features such as:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Lead backup:</span> Store leads locally before/after webhook submission
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">User accounts:</span> Customer portal for order tracking
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Analytics:</span> Custom conversion tracking beyond Clarity
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Quote calculator:</span> Save/share custom quotes
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold">Blog/CMS:</span> Dynamic content management
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Current Configuration</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Connection Details</h3>
              <p className="text-gray-700 mb-3">
                Environment variables are configured in <code className="bg-gray-100 px-2 py-1 rounded">.env</code>:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`}
                </pre>
              </div>
              <p className="text-gray-700 mt-3 text-sm">
                <strong>Note:</strong> These are automatically managed by Bolt. Do not modify manually.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Supabase Client Setup</h3>
              <p className="text-gray-700 mb-3">
                The <code className="bg-gray-100 px-2 py-1 rounded">@supabase/supabase-js</code> package is installed and ready to use:
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)`}
                </pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Example: Storing Form Submissions</h3>
              <p className="text-gray-700 mb-3">
                If you wanted to store leads in Supabase (in addition to webhook):
              </p>
              <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
{`// 1. Create a table (via Supabase dashboard or migration)
// 2. Insert data
const { data, error } = await supabase
  .from('leads')
  .insert([
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      created_at: new Date().toISOString()
    }
  ])

if (error) {
  console.error('Database error:', error)
} else {
  console.log('Lead stored:', data)
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">When to Use the Database</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">✅ Good Use Cases</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Lead backup:</strong> Store a copy of every form submission in case webhook fails</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Custom features:</strong> Quote calculator, project gallery, customer portal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Analytics:</strong> Track page views, form abandonment, A/B test results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Content management:</strong> Blog posts, FAQs, testimonials</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">❌ When NOT to Use</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Replacing GoHighLevel:</strong> Don't use database as primary CRM - webhook is faster and more reliable</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Duplicate data:</strong> Don't create parallel systems that get out of sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Overengineering:</strong> Keep it simple unless there's a clear business need</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">How to Access Supabase</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Supabase Dashboard</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li>Go to <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="text-ocean hover:underline">supabase.com</a></li>
                <li>Log in with Bolt credentials (managed separately)</li>
                <li>Select the NA Blinds project</li>
                <li>Access:
                  <ul className="ml-8 mt-2 space-y-1 text-sm">
                    <li>• Table Editor - manage tables and data</li>
                    <li>• SQL Editor - run custom queries</li>
                    <li>• Authentication - if user accounts are added</li>
                    <li>• Storage - for file uploads (photos, documents)</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-warm-dark mb-2">Available Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Migrations:</strong> Use <code className="bg-gray-100 px-2 py-1 rounded">mcp__supabase__apply_migration</code> tool to create/modify tables</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Queries:</strong> Use <code className="bg-gray-100 px-2 py-1 rounded">mcp__supabase__execute_sql</code> tool to read/write data</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-ocean rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Edge Functions:</strong> Deploy serverless functions with <code className="bg-gray-100 px-2 py-1 rounded">mcp__supabase__deploy_edge_function</code></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <h2 className="text-2xl font-bold text-amber-900">Important Warnings</h2>
          </div>

          <ul className="space-y-3 text-amber-900">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Don't break the webhook:</strong> If adding database features, ensure webhook to GoHighLevel still works</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Enable RLS on all tables:</strong> Row Level Security prevents data leaks</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Test migrations thoroughly:</strong> Database changes are hard to undo</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Never expose credentials:</strong> Anon key is safe for frontend, but never commit service role key</span>
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-6">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">Potential Future Features</h2>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-warm-dark mb-2">1. Lead Backup System</h3>
              <p className="text-gray-700 mb-2">
                Store every form submission in database before sending to webhook. Benefits:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Recover leads if webhook fails</li>
                <li>• Track submission timestamps</li>
                <li>• Analyze form abandonment</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-warm-dark mb-2">2. Customer Portal</h3>
              <p className="text-gray-700 mb-2">
                Allow customers to:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Track order status</li>
                <li>• View quotes and invoices</li>
                <li>• Schedule follow-up appointments</li>
                <li>• Access warranty information</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-warm-dark mb-2">3. Interactive Quote Calculator</h3>
              <p className="text-gray-700 mb-2">
                Let users:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Input room dimensions</li>
                <li>• Select products and features</li>
                <li>• Get instant price estimates</li>
                <li>• Save/share quotes via email</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-warm-dark mb-2">4. Project Gallery CMS</h3>
              <p className="text-gray-700 mb-2">
                Upload and manage:
              </p>
              <ul className="space-y-1 text-sm text-gray-700 ml-4">
                <li>• Before/after photos</li>
                <li>• Project details and locations</li>
                <li>• Filterable by product type</li>
                <li>• Admin dashboard for easy updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Best Practices for Future Development</h2>

          <ul className="space-y-3 text-blue-900">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Always use migrations:</strong> Never manually create tables in dashboard - use migration files for version control</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Enable RLS by default:</strong> Every new table should have Row Level Security enabled immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Document everything:</strong> Update this doc when adding database features</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Test in isolation:</strong> Don't break existing webhook flow when adding database features</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <span><strong>Monitor performance:</strong> Watch for slow queries that could hurt page load</span>
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
