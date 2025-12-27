import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Send } from 'lucide-react';
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

    navigate('/thank-you');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-warm-dark mb-6">
          Request a Free Consultation
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
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-shadow"
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
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-shadow"
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
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-shadow"
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
              value={formData.address}
              onChange={handleChange}
              placeholder="City or Zip Code"
              className="w-full px-4 py-3 sm:py-3.5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition-shadow"
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
              className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent resize-none transition-shadow"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-ocean text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-opacity-90 active:bg-opacity-80 transition-all flex items-center justify-center gap-2 touch-manipulation shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5 flex-shrink-0" />
            {isSubmitting ? 'Submitting...' : 'Request Consultation'}
          </button>

          <div className="text-center text-sm md:text-base text-warm-gray pt-2">
            <div className="mb-1">⭐⭐⭐⭐⭐</div>
            <p className="italic">"Installed in our Brickell condo. HOA approved and flawless."</p>
            <p className="mt-1">— David R., Brickell</p>
          </div>

          <p className="text-xs sm:text-sm text-warm-gray text-center leading-relaxed">
            By submitting this form, you agree to be contacted by NA Blinds regarding your inquiry.
          </p>
        </form>
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-warm-gray mb-3 sm:mb-4 text-sm sm:text-base">Prefer to call?</p>
        <a
          href="tel:954-629-1373"
          className="inline-flex items-center justify-center gap-2 bg-white text-ocean border-2 border-ocean px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-ocean hover:text-white active:bg-ocean active:text-white transition-all touch-manipulation shadow-sm"
        >
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span>Call 954-629-1373 Now</span>
        </a>
      </div>
    </div>
  );
});

ContactForm.displayName = 'ContactForm';

export default ContactForm;
