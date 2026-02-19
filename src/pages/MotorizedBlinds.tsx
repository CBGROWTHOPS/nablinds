import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Home, Volume2, Shield, Calendar, Lock } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { trackPageView } from '../utils/tracking';

export default function MotorizedBlinds() {
  useSEO({
    title: 'Motorized Blinds & Shades in South Florida | NA Blinds',
    description: 'Smart motorized blinds for Miami, Broward & Palm Beach homes. Remote control, voice activation, energy efficiency. Explore options & install fast.',
    canonicalUrl: 'https://www.nablinds.co/motorized-blinds'
  });

  useEffect(() => {
    trackPageView('/motorized-blinds', 'Motorized Blinds & Smart Shades | NA Blinds');
  }, []);

  const faqs = [
    {
      q: 'How much do motorized blinds cost?',
      a: 'Motorized systems range based on size, material, and control features. A single motorized roller shade might start at one price point, while a full-home motorized plantation shutter system costs more. Rather than general estimates (which can be misleading), we recommend scheduling a consultation. We\'ll assess your needs, show you options across budget ranges, and provide transparent pricing for your specific home. No pressure—just information.',
    },
    {
      q: 'How long does installation take?',
      a: 'Most installations complete in a single visit, usually 2-4 hours depending on the number of windows and complexity. For multiple rooms or large homes in Miami-Dade, Broward, or Palm Beach, we coordinate scheduling that fits your life. We also prioritize quick turnaround—many customers see their motorized blinds installed within 1-2 weeks of choosing their system.',
    },
    {
      q: 'Are motorized blinds reliable? What if the motor fails?',
      a: 'Modern motorized blind motors are engineered for 10+ years of daily use with minimal maintenance. Failure is rare. Every system includes a backup manual control option—a hidden cord or release mechanism—so your blinds function even if power is lost. NA Blinds systems come with manufacturer warranties covering motor defects. We also maintain parts and service relationships, so repairs are quick and affordable if ever needed.',
    },
    {
      q: 'What brands do you use? Are they reliable?',
      a: 'We partner with established manufacturers known for quality, durability, and customer support. All brands we recommend are industry standards in South Florida and have proven track records in high-humidity, intense-sun environments like ours. Every system we recommend meets our reliability threshold—meaning we\'d install it in our own homes.',
    },
    {
      q: 'Can I control motorized blinds if my Wi-Fi goes down?',
      a: 'Yes. Most systems include backup remotes that operate on direct signal (not Wi-Fi), so you maintain control even during internet outages. Your scheduled automations won\'t run without connectivity, but manual operation always works. For homes where Wi-Fi reliability is a concern, we can discuss dedicated control solutions that don\'t depend on your home internet.',
    },
    {
      q: 'Do motorized blinds work with existing smart home systems?',
      a: 'Yes. That\'s actually one of their biggest advantages. Whether you have Alexa, Google Home, Apple HomeKit, or another platform, motorized blinds integrate cleanly. We\'ll handle compatibility verification during your consultation and ensure everything syncs properly before we leave.',
    },
    {
      q: 'How do motorized blinds handle South Florida heat and humidity?',
      a: 'Humidity is real—it can damage motors and electronics if systems aren\'t built for it. That\'s why we select motorized blind systems specifically rated for high-humidity environments. All motors are sealed against moisture, and components are chosen to withstand South Florida\'s extreme conditions. We also recommend annual maintenance checks, especially after hurricane season.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-navy to-navy/90 text-white py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white mb-4 leading-tight">
            Control Your Light. Control Your Comfort.
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Transform your South Florida home with motorized blinds that work the way you do—at the touch of a button, a voice command, or right from your phone. Beat the heat, boost energy efficiency, and elevate your lifestyle with smart window coverings designed for Miami, Broward, and Palm Beach homes.
          </p>
          <Link
            to="/consultation"
            className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 active:bg-gray-200 transition-all shadow-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      {/* WHY MOTORIZED SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-warm-dark mb-8 text-center">
            Why Motorized Blinds Are Changing How South Florida Homes Feel
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 text-center">
            Living in South Florida means battling intense heat, relentless sun, and humidity that never quits. Traditional blinds require manual adjustment—opening and closing them throughout the day just to manage temperature and light. Motorized blinds eliminate that friction and give you true control over your indoor environment.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Zap className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Convenience That Actually Matters</h3>
              <p className="text-gray-700 leading-relaxed">
                Imagine waking up and your blinds open automatically. Coming home and they close before the afternoon heat peaks. No more climbing ladders, wrestling with cords, or forgetting which window shade is halfway open. With motorized blinds, adjustments happen instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Lock className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Energy Efficiency Built In</h3>
              <p className="text-gray-700 leading-relaxed">
                In South Florida, air conditioning runs overtime. Motorized blinds let you manage solar heat gain strategically—closing during peak sun hours to keep interiors cool. This simple shift can reduce your cooling costs noticeably. Homes in Miami-Dade, Broward, and Palm Beach benefit especially during summer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Home className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">It's a Lifestyle Upgrade</h3>
              <p className="text-gray-700 leading-relaxed">
                There's something about motorized blinds that feels effortlessly modern. They integrate seamlessly with smart home systems, respond to voice commands, and fit the way people actually live today. Whether you're managing multiple rooms from your phone or syncing blinds to circadian rhythms, motorized systems adapt to you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Volume2 className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Comfort You Control Every Day</h3>
              <p className="text-gray-700 leading-relaxed">
                South Florida summers are intense. Being able to reduce glare instantly without getting up, dim light for afternoon naps, or block heat before it enters your home—these small conveniences add up to a genuinely better living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-warm-dark mb-8 text-center">
            Smart Control, Simple to Use
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 text-center">
            Motorized blinds sound high-tech, but the experience is refreshingly straightforward. Here's the flow:
          </p>

          <div className="space-y-8">
            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-xl text-warm-dark mb-3">The Basics</h3>
              <p className="text-gray-700 leading-relaxed">
                Every motorized blind system uses a small motor installed inside the blind tube or mechanism. Instead of pulling a cord, you trigger that motor through a control method of your choice—and the blinds move smoothly open or closed.
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-warm-dark mb-6">Your Control Options</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Remote Control</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A wireless remote lets you open or close any shade from anywhere in the room. Great for quick adjustments without reaching for your phone.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Smartphone App</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Download the app, connect to your home Wi-Fi, and control blinds from anywhere. Protect furniture from UV damage or open blinds as you arrive home.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Voice Commands</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Integrate with Alexa or Google Home. "Alexa, close the living room shades." It works. Perfect for mornings or when you're settling in.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-lg">
                  <h4 className="text-lg font-semibold text-charcoal mb-3">Scheduling & Automation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Set blinds to open at sunrise, close during peak afternoon heat, and adjust for sunset. Your blinds anticipate your preferences over time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-emerald-500">
              <h3 className="text-xl text-warm-dark mb-3">Installation is Professional</h3>
              <p className="text-gray-700 leading-relaxed">
                We handle the installation completely. The motor and wiring integrate cleanly into the blind structure, so everything looks polished and feels premium. You'll never see a dangling wire—just beautiful, functional window coverings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT OPTIONS SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-warm-dark mb-8 text-center">
            Motorized Solutions for Every Room & Style
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 text-center">
            Not all window treatments are the same. NA Blinds offers motorized versions of the styles homeowners actually want:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl text-charcoal mb-3">Motorized Blinds</h3>
              <p className="text-gray-700 leading-relaxed">
                Classic slat blinds with a modern upgrade. Aluminum or wood slats, motorized operation. Perfect for living rooms, offices, and bedrooms. They provide precise light control and clean aesthetics that work in any home.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl text-charcoal mb-3">Motorized Shades</h3>
              <p className="text-gray-700 leading-relaxed">
                Fabric-forward options that diffuse light while maintaining privacy. Motorized roller shades, cellular shades, and solar shades are ideal for bedrooms and nurseries. They're soft, sophisticated, and reduce glare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl text-charcoal mb-3">Motorized Shutters</h3>
              <p className="text-gray-700 leading-relaxed">
                For homeowners who want statement-making window coverings, motorized shutters deliver luxury, durability, and instant curb appeal. Popular in Miami-Dade and Palm Beach where sophistication matters.
              </p>
            </div>
          </div>

          <div className="bg-taupe/10 p-6 rounded-lg text-center">
            <p className="text-gray-700 leading-relaxed">
              <strong>Why It Matters:</strong> Whatever your style preference, there's a motorized option that fits. No compromise between aesthetics and functionality.
            </p>
          </div>
        </div>
      </section>

      {/* SMART INTEGRATIONS SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-warm-dark mb-8 text-center">
            Your Blinds, Your Voice, Your Home
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 text-center">
            The real magic of motorized blinds isn't just that they move—it's how they integrate into the broader smart home ecosystem.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4 items-start bg-taupe/10 p-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Alexa & Amazon Echo</h3>
                <p className="text-gray-700 leading-relaxed">
                  "Alexa, open the kitchen blinds to 50%." Routine voice commands become reality. Set up automations so your blinds adjust based on time of day, weather, or occupancy.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-taupe/10 p-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Google Home & Google Assistant</h3>
                <p className="text-gray-700 leading-relaxed">
                  Same convenience with Google's ecosystem. Voice control, scheduling, and integration with other smart home devices. Full compatibility whether you're Google-first or mixed.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-taupe/10 p-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Smartphone Apps</h3>
                <p className="text-gray-700 leading-relaxed">
                  Check status, adjust positions, set schedules—all from a single app. Control your blinds from work, the beach, or anywhere you are.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-taupe/10 p-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Circadian Rhythm Scheduling</h3>
                <p className="text-gray-700 leading-relaxed">
                  Sync your blinds to natural light patterns. Open automatically at sunrise, close gradually during sunset. Aligning light exposure with natural rhythms improves sleep and wellbeing.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-taupe/10 p-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Weather Integration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Set rules like "close blinds when temperature exceeds 85°F" or "fully close during hurricane wind alerts." In South Florida, this kind of automated protection is genuinely valuable.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-taupe/10 p-6 rounded-lg">
              <CheckCircle className="w-6 h-6 text-charcoal flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Multi-Room Control</h3>
                <p className="text-gray-700 leading-relaxed">
                  Open the bedroom, kitchen, and living room simultaneously. Close specific zones while others stay open. Coordinate different rooms to create moods and manage temperature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-warm-dark mb-8 text-center">
            Why South Florida Homeowners Choose Motorized Blinds
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Zap className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Lower Energy Bills</h3>
              <p className="text-gray-700 leading-relaxed">
                Active solar management reduces cooling costs substantially. Studies show homeowners save 10-15% on summer cooling by managing heat gain through window treatments. In Miami-Dade and Broward, that adds up quickly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Shield className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Extended Furniture & Décor Life</h3>
              <p className="text-gray-700 leading-relaxed">
                UV damage fades fabrics and finishes. Automated blinds can close during peak sun hours, protecting your investment in furniture, artwork, and flooring. Over time, this preservation is worth hundreds or thousands.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Volume2 className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Improved Sleep & Wellbeing</h3>
              <p className="text-gray-700 leading-relaxed">
                Blackout shades eliminate early morning light, supporting deeper sleep. Natural light synchronization in the morning helps regulate circadian rhythms. Better sleep means better mood, focus, and health.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Lock className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Home Security & Presence</h3>
              <p className="text-gray-700 leading-relaxed">
                Blinds that open and close on schedule—even when you're away—simulate occupancy and deter break-ins. In busy neighborhoods throughout South Florida, this invisible security layer provides peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Home className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">Enhanced Property Appeal</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart home features, especially visible luxury updates like motorized shutters or premium shades, increase perceived value. Buyers and appraisers notice motorized systems because they're modern, functional, and aspirational.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <Zap className="w-8 h-8 text-charcoal mb-4" />
              <h3 className="text-xl text-warm-dark mb-3">The Comfort Factor</h3>
              <p className="text-gray-700 leading-relaxed">
                Controlling your environment—light, heat, privacy, ambiance—without effort is genuinely luxurious. It's the kind of small daily upgrade that makes your home feel premium and intentional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-warm-dark mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer group"
              >
                <summary className="flex items-start gap-4 font-semibold text-warm-dark hover:text-charcoal transition-colors">
                  <span className="text-lg">{idx + 1}.</span>
                  <span className="text-lg">{faq.q}</span>
                </summary>
                <p className="text-gray-700 leading-relaxed mt-4 ml-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALLATION TIMELINE SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-warm-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-warm-dark mb-6 text-center">
            From Consultation to Installed: Here's Our Process
          </h2>
          <p className="text-gray-700 leading-relaxed mb-12 text-center">
            We know you want to enjoy your motorized blinds quickly. Here's how fast we move in South Florida:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-charcoal text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Week 1: Consultation & Selection</h3>
                <p className="text-gray-700 leading-relaxed">
                  Schedule a free in-home consultation. We measure windows, discuss your style, show product samples, and answer questions. You'll leave with a clear understanding of options and pricing.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-charcoal text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Week 2: Order & Coordination</h3>
                <p className="text-gray-700 leading-relaxed">
                  Once you've selected your system, we place the order and coordinate delivery with your schedule. Custom orders may take slightly longer, but we manage expectations upfront.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-charcoal text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Week 3-4: Installation</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our installation team arrives at your home, installs motorized systems cleanly and professionally, tests everything, and walks you through operation. Setup typically takes 2-4 hours.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-charcoal text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg text-warm-dark mb-2">Ongoing Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  We're not done when installation ends. We're available for questions, adjustments, and support. If issues arise, we respond quickly because we want your motorized blinds to feel effortlessly perfect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WARRANTY & SERVICE SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl text-warm-dark mb-12 text-center">
            We Stand Behind Our Work
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-lg text-warm-dark mb-3">Manufacturer Warranty</h3>
              <p className="text-gray-700 leading-relaxed">
                Every motorized system comes with the manufacturer's warranty, typically covering motor defects and mechanical failures for 2-5 years. We'll provide full warranty documentation.
              </p>
            </div>

            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-lg text-warm-dark mb-3">Installation Warranty</h3>
              <p className="text-gray-700 leading-relaxed">
                Our work is covered. If installation issues arise, we make it right at no cost. This warranty typically extends one year from installation.
              </p>
            </div>

            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-lg text-warm-dark mb-3">Service & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed">
                After your warranty period, we offer affordable service packages: annual inspections, emergency repairs, and parts replacement. We keep your systems running smoothly.
              </p>
            </div>

            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-lg text-warm-dark mb-3">Emergency Support</h3>
              <p className="text-gray-700 leading-relaxed">
                If something breaks unexpectedly, we prioritize emergency repairs. In South Florida, losing control during peak heat season is inconvenient. We get to you quickly.
              </p>
            </div>

            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-lg text-warm-dark mb-3">Parts Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain inventory of common replacement parts. If your motor or component needs replacing, we source and install it rapidly—not months of downtime.
              </p>
            </div>

            <div className="bg-taupe/10 p-6 rounded-lg border-l-4 border-taupe">
              <h3 className="text-lg text-warm-dark mb-3">BBB A+ Rated</h3>
              <p className="text-gray-700 leading-relaxed">
                Licensed & Insured. Professional workmanship guaranteed. Same-week consultations available for Miami-Dade, Broward & Palm Beach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER SECTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">
            Ready to Experience Smart Blinds?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Motorized blinds transform how you live in your South Florida home. Better comfort, lower energy bills, seamless smart home integration, and the kind of everyday luxury that makes you smile when you walk through the door.
          </p>
          <p className="text-base text-white/80 mb-8">
            Let's find the right system for your home. Schedule a free consultation with NA Blinds. We'll measure, show samples, answer every question, and provide transparent pricing—all at no obligation.
          </p>
          <Link
            to="/consultation"
            className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 active:bg-gray-200 transition-all shadow-lg"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
