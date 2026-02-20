import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { submitConsultationToWebhook } from '../utils/consultationWebhook';
import PromoBar from '../components/PromoBar';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

interface FormData {
  serviceType: string;
  motorizedInterest: string;
  projectLocation: string;
  installationTimeline: string;
  propertyType: string;
  windowCount: string;
  projectPriority: string;
  firstName: string;
  phone: string;
  email: string;
  preferredCallTime: string;
  priorityFlag?: string;
}

export default function Consultation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    motorizedInterest: '',
    projectLocation: '',
    installationTimeline: '',
    propertyType: '',
    windowCount: '',
    projectPriority: '',
    firstName: '',
    phone: '',
    email: '',
    preferredCallTime: '',
  });

  useEffect(() => {
    document.title = 'Free Consultation | NA Blinds';
  }, []);

  const handleOptionSelect = (field: keyof FormData, value: string) => {
    const updatedData = { ...formData, [field]: value };
    if (field === 'installationTimeline' && value === 'As soon as possible') {
      updatedData.priorityFlag = 'high';
    }
    setFormData(updatedData);
    setTimeout(() => {
      if (currentStep < 8) {
        setCurrentStep((currentStep + 1) as Step);
      }
    }, 200);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitConsultationToWebhook({
      firstName: formData.firstName,
      phone: formData.phone,
      email: formData.email,
      preferredCallTime: formData.preferredCallTime,
      serviceType: formData.serviceType,
      motorizedInterest: formData.motorizedInterest,
      projectLocation: formData.projectLocation,
      installationTimeline: formData.installationTimeline,
      propertyType: formData.propertyType,
      windowCount: formData.windowCount,
      projectPriority: formData.projectPriority,
      priorityFlag: formData.priorityFlag,
    });

    if (success) {
      navigate(`/thank-you-consultation?email=${encodeURIComponent(formData.email)}`);
    } else {
      alert('Something went wrong. Please try again or call us at 954-629-1373.');
      setIsSubmitting(false);
    }
  };

  const isStepValid = (step: Step): boolean => {
    switch (step) {
      case 1:
        return formData.serviceType !== '';
      case 2:
        return formData.motorizedInterest !== '';
      case 3:
        return formData.projectLocation.trim() !== '';
      case 4:
        return formData.installationTimeline !== '';
      case 5:
        return formData.propertyType !== '';
      case 6:
        return formData.windowCount !== '';
      case 7:
        return formData.projectPriority !== '';
      case 8:
        return formData.firstName.trim() !== '' && formData.phone.trim() !== '' && formData.preferredCallTime !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
      <PromoBar />
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <Link to="/">
            <img
              src="/nablinds_logo_transparent_black.png"
              alt="NA Blinds"
              className="h-10 sm:h-12"
            />
          </Link>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-2xl">
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                <div key={step} className="flex-1 flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step < currentStep
                        ? 'bg-charcoal text-white'
                        : step === currentStep
                        ? 'bg-charcoal text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 8 && (
                    <div
                      className={`flex-1 h-1 mx-1 sm:mx-2 transition-colors ${
                        step < currentStep ? 'bg-charcoal' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-warm-gray">
              Step {currentStep} of 8
            </p>
            <p className="text-center text-xs text-warm-gray mt-2">
              Takes about 30 seconds · Answer a few quick questions to see pricing options.
            </p>
            <p className="text-center text-xs text-warm-gray mt-4">
              🇺🇸 All products made in the USA
            </p>
            <p className="text-center text-xs text-warm-gray mt-1">
              ⭐ 4.8 stars · 120+ South Florida homeowners served
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            {currentStep === 1 && (
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-2">
                  What do you need help with?
                </h1>
                <p className="text-gray-600 mb-6">
                  Tell us about your home and we'll tailor your consultation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Blinds',
                    'Window Shades',
                    'Drapes',
                    'Shutters',
                    "I'd like professional guidance",
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect('serviceType', option)}
                      className="p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-2">
                  Would you like motorized control?
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  Control your blinds with remote, app, or voice.
                </p>
                <div className="space-y-3">
                  {[
                    'Yes',
                    'No',
                    'Not sure',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect('motorizedInterest', option)}
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-2">
                  Which area are you located in?
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  We currently serve South Florida properties.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Miami-Dade',
                    'Broward',
                    'Palm Beach',
                    'Other',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect('projectLocation', option)}
                      className="p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-6">
                  When are you looking to install?
                </h2>
                <div className="space-y-3">
                  {[
                    'As soon as possible',
                    'In the next few weeks',
                    'Planning for the future',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleOptionSelect('installationTimeline', option)
                      }
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-6">
                  What type of property is this for?
                </h2>
                <div className="space-y-3">
                  {[
                    'House',
                    'Apartment / Condo',
                    'Office / Commercial',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect('propertyType', option)}
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-6">
                  How many windows need treatment?
                </h2>
                <div className="space-y-3">
                  {[
                    '1–3',
                    '4–7',
                    '8+',
                    'Not sure',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect('windowCount', option)}
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 7 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-6">
                  What's most important to you for this project?
                </h2>
                <div className="space-y-3">
                  {[
                    'Privacy',
                    'Light control',
                    'Style / design',
                    'Heat / sun reduction',
                    'Not sure yet',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleOptionSelect('projectPriority', option)
                      }
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 8 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-2">
                  What's a good time to call and discuss your project?
                </h2>
                <p className="text-gray-600 mb-4">
                  We'll share recommendations based on what you selected.
                </p>
                <div className="mb-6 p-4 bg-warm-white rounded-lg border border-taupe/15 text-center">
                  <p className="text-sm text-warm-gray mb-2">Want to skip the form and talk to someone now?</p>
                  <a
                    href="tel:954-629-1373"
                    className="inline-flex items-center gap-2 text-warm-dark font-medium hover:text-navy transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 954-629-1373</span>
                  </a>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange('firstName', e.target.value)
                      }
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                      autoFocus
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Optional. Helpful if you prefer email over text.
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred time of day for a call *
                    </label>
                    <select
                      value={formData.preferredCallTime}
                      onChange={(e) =>
                        handleInputChange('preferredCallTime', e.target.value)
                      }
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none bg-white"
                    >
                      <option value="">Select a time</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Early evening">Early evening</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={!isStepValid(8) || isSubmitting}
                    className="w-full bg-navy text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 active:bg-opacity-80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Estimate'}
                  </button>
                  <p className="text-xs text-gray-500 leading-relaxed text-center">
                    By submitting, you agree to be contacted by phone or text
                    regarding your request.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-4 px-4 text-center text-sm text-gray-600">
        <p>
          NA Blinds · South Florida ·{' '}
          <Link to="/privacy" className="text-phone hover:underline">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}
