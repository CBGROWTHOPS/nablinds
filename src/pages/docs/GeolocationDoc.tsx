import { Link } from 'react-router-dom';
import { MapPin, ArrowLeft, CheckCircle, AlertCircle, Code } from 'lucide-react';

export default function GeolocationDoc() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 text-ocean hover:text-warm-dark transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Documentation Hub</span>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-ocean" />
            <h1 className="text-3xl font-bold text-warm-dark">
              Dynamic Location Detection System
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Automatically personalizes hero text with the user's city for better local relevance
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Overview
          </h2>
          <div className="space-y-4 text-gray-700">
            <p>
              The geolocation system automatically detects a visitor's city and dynamically replaces
              "South Florida" in the hero headline with their actual city name when applicable.
            </p>
            <p>
              <strong>Example:</strong> A visitor from Miami sees <em>"Custom Window Treatments for Miami Homes & Condos"</em>
              instead of the generic <em>"Custom Window Treatments for South Florida Homes & Condos"</em>
            </p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="pl-6 border-l-4 border-ocean">
              <h3 className="font-bold text-warm-dark mb-2">1. IP-Based Detection</h3>
              <p className="text-gray-700">
                Uses <code className="bg-gray-100 px-2 py-1 rounded text-sm">ipapi.co</code> (free, no API key required)
                to detect the user's city based on their IP address.
              </p>
            </div>

            <div className="pl-6 border-l-4 border-ocean">
              <h3 className="font-bold text-warm-dark mb-2">2. Service Area Validation</h3>
              <p className="text-gray-700">
                Checks if the detected city is within the South Florida service area. If yes, displays the city name.
                If no, defaults to "South Florida".
              </p>
            </div>

            <div className="pl-6 border-l-4 border-ocean">
              <h3 className="font-bold text-warm-dark mb-2">3. Session Caching</h3>
              <p className="text-gray-700">
                Results are cached in <code className="bg-gray-100 px-2 py-1 rounded text-sm">sessionStorage</code>
                to prevent repeated API calls during the same browsing session.
              </p>
            </div>

            <div className="pl-6 border-l-4 border-ocean">
              <h3 className="font-bold text-warm-dark mb-2">4. Graceful Fallback</h3>
              <p className="text-gray-700">
                If geolocation fails (API timeout, network error, etc.), automatically defaults to "South Florida"
                without breaking the user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">
            Supported Cities
          </h2>
          <p className="text-gray-700 mb-4">
            The system recognizes these South Florida cities and displays them by name:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              'Miami', 'Fort Lauderdale', 'Boca Raton', 'Coral Springs',
              'Pompano Beach', 'Hollywood', 'Pembroke Pines', 'Miramar',
              'Davie', 'Plantation', 'Sunrise', 'Coral Gables',
              'Miami Beach', 'Hialeah', 'Doral', 'Aventura',
              'Kendall', 'Homestead', 'Key West', 'Delray Beach',
              'Boynton Beach', 'West Palm Beach', 'Palm Beach', 'Wellington',
              'Jupiter', 'Weston', 'Coconut Grove', 'Pinecrest',
              'Cutler Bay', 'Palmetto Bay', 'North Miami', 'North Miami Beach',
              'Sunny Isles', 'Bal Harbour', 'Surfside', 'Brickell',
              'Hallandale', 'Dania Beach'
            ].map((city) => (
              <div key={city} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{city}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-ocean" />
            Technical Details
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-warm-dark mb-2">File Location</h3>
              <p className="text-gray-700 mb-2">
                Geolocation utility: <code className="bg-gray-100 px-2 py-1 rounded text-sm">/src/utils/geolocation.ts</code>
              </p>
              <p className="text-gray-700">
                Implementation: <code className="bg-gray-100 px-2 py-1 rounded text-sm">/src/pages/Home.tsx</code> (lines 6, 16-22, 173)
              </p>
            </div>

            <div>
              <h3 className="font-bold text-warm-dark mb-2">API Specifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span><strong>Endpoint:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">https://ipapi.co/json/</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span><strong>Timeout:</strong> 3 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span><strong>Cost:</strong> Free (no API key required)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span><strong>Rate Limit:</strong> 1,000 requests/day for free tier</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-warm-dark mb-2">Performance Optimization</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>Results cached in sessionStorage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>Only one API call per browsing session</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>3-second timeout prevents slow page loads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>Instant fallback to default text on failure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-amber-600" />
            Important Considerations
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">SEO Impact</p>
                <p>
                  The page title and meta description remain static ("South Florida") for SEO consistency.
                  Only the visible hero text changes dynamically.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Privacy</p>
                <p>
                  No personal data is collected or stored. Only the city name from IP-based geolocation
                  is cached temporarily in sessionStorage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">VPN Users</p>
                <p>
                  Users with VPNs will see the city based on their VPN location. This is expected behavior
                  and the fallback to "South Florida" ensures the site still works correctly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Rate Limits</p>
                <p>
                  The free tier of ipapi.co allows 1,000 requests/day. With sessionStorage caching,
                  this equals approximately 1,000 unique daily visitors before rate limiting occurs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">
            Testing the Feature
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-warm-dark mb-2">Test from Different Locations</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-ocean">1.</span>
                  <span>Clear your browser's sessionStorage (DevTools → Application → Session Storage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">2.</span>
                  <span>Reload the homepage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">3.</span>
                  <span>Check the hero headline - it should reflect your actual city or default to "South Florida"</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-warm-dark mb-2">Force Default Behavior</h3>
              <p className="mb-2">To test the fallback mechanism:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>Open DevTools → Network tab</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>Throttle to "Offline" mode</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-ocean">•</span>
                  <span>Reload - should show "South Florida" immediately</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-warm-dark mb-4">
            Expanding to Other Pages
          </h2>
          <p className="text-gray-700 mb-4">
            Currently, dynamic location detection is only active on the homepage hero section.
            To expand this feature to other pages:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-800 overflow-x-auto">
{`import { useState, useEffect } from 'react';
import { getUserLocation } from '../utils/geolocation';

// In your component:
const [userLocation, setUserLocation] = useState<string>('South Florida');

useEffect(() => {
  getUserLocation().then(location => {
    setUserLocation(location);
  });
}, []);

// Use {userLocation} in your JSX`}
            </pre>
          </div>
        </div>

      </div>
    </div>
  );
}
