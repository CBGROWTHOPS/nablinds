import { useSEO } from '../utils/seo';

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy | NA Blinds',
    description: 'Privacy policy for NA Blinds. Learn how we collect, use, and protect your personal information.',
    canonicalUrl: 'https://www.nablinds.co/privacy',
    noindex: true
  });

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-dark mb-8">
            Privacy Policy
          </h1>
          <p className="text-warm-gray mb-12">
            Last updated: December 2025
          </p>

          <div className="space-y-8 text-warm-gray">
            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                1. Information We Collect
              </h2>
              <p className="leading-relaxed mb-3">
                We collect information to provide better services to our customers. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email, phone number, address)</li>
                <li>Property details for consultation and installation purposes</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Photos of windows and installations (with your permission)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Schedule and conduct free consultations</li>
                <li>Provide accurate measurements and estimates</li>
                <li>Process orders and complete installations</li>
                <li>Communicate about your project status</li>
                <li>Provide customer support and warranty services</li>
                <li>Send appointment reminders and follow-ups</li>
                <li>Improve our services and customer experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                3. Information Sharing
              </h2>
              <p className="leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Product manufacturers for warranty purposes</li>
                <li>Service providers who assist in our operations (payment processors, scheduling tools)</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="leading-relaxed mt-3">
                All third parties are required to maintain the confidentiality of your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                4. Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information. This includes secure data storage, encrypted transmissions, and limited access to personal information by authorized personnel only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                5. Cookies and Tracking
              </h2>
              <p className="leading-relaxed">
                Our website may use cookies to enhance user experience and analyze site traffic. You can choose to disable cookies in your browser settings, though some features of the site may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                6. Marketing Communications
              </h2>
              <p className="leading-relaxed">
                With your permission, we may send you marketing communications about our services, special offers, and updates. You can opt out of these communications at any time by contacting us or using the unsubscribe link in our emails.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                7. SMS/Text Messaging and Mobile Information
              </h2>
              <p className="leading-relaxed mb-3">
                <strong>How You Opt In:</strong> By providing your phone number and checking the SMS consent box on our contact or consultation forms, you agree to receive text messages from NA Blinds. Consent is not required to purchase goods or services.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Types of Messages:</strong> If you opt in, you may receive appointment reminders, scheduling confirmations, service updates, and promotional messages about special offers and discounts. Message frequency varies based on your interactions with us.
              </p>
              <p className="leading-relaxed mb-3">
                <strong>Opt-Out:</strong> You can opt out at any time by replying STOP to any message. Reply HELP for assistance.
              </p>
              <p className="leading-relaxed">
                <strong>Mobile Information Sharing:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing with subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                8. Photo Usage
              </h2>
              <p className="leading-relaxed">
                Before and after photos of installations may be used for marketing purposes with your explicit permission. We will never share photos without your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                9. Your Rights
              </h2>
              <p className="leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections to your information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                10. Data Retention
              </h2>
              <p className="leading-relaxed">
                We retain your information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements. Customer records are typically maintained for warranty and business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                11. Third-Party Links
              </h2>
              <p className="leading-relaxed">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                12. Children's Privacy
              </h2>
              <p className="leading-relaxed">
                Our services are not directed to individuals under 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                13. Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page with an updated date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-warm-dark mb-4">
                14. Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your information, please contact us at:
                <br />
                <br />
                Phone: 954-629-1373
                <br />
                Email: info@nablinds.co
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
