import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { submitToWebhook } from '../utils/webhook';

const ContactForm = memo(() => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [appointmentConsent, setAppointmentConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    await submitToWebhook({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      address: formData.address,
    });

    navigate(`/thank-you?email=${encodeURIComponent(formData.email)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-warm-dark mb-6">
          Request a Free Estimate
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm sm:text-base font-medium text-warm-dark mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-warm-dark mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              inputMode="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-warm-dark mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              inputMode="tel"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm sm:text-base font-medium text-warm-dark mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={handleChange}
              placeholder="City or Zip Code"
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent transition-shadow"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm sm:text-base font-medium text-warm-dark mb-2">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project (number of windows, room types, preferences, etc.)"
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none transition-shadow"
            ></textarea>
          </div>

          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={marketingConsent}
                onChange={(e) => setMarketingConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-navy focus:ring-navy flex-shrink-0"
              />
              <span className="text-xs text-warm-gray leading-relaxed">
                I consent to receive marketing text messages, about special offers, discounts, and service updates, from NA Blinds at the phone number provided. Message frequency may vary. Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={appointmentConsent}
                onChange={(e) => setAppointmentConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-navy focus:ring-navy flex-shrink-0"
              />
              <span className="text-xs text-warm-gray leading-relaxed">
                I consent to receive non-marketing text messages from NA Blinds about appointments. Message frequency may vary, message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-navy text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-90 active:bg-opacity-80 transition-all flex items-center justify-center gap-2 touch-manipulation shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 flex-shrink-0" />
            {isSubmitting ? 'Submitting...' : 'Request Estimate'}
          </button>

          <p className="text-xs sm:text-sm text-warm-gray text-center leading-relaxed">
            By submitting this form, you agree to be contacted by NA Blinds regarding your inquiry.
          </p>
        </form>
      </div>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
