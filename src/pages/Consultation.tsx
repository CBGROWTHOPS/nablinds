import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { submitConsultationToWebhook } from '../utils/consultationWebhook';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface FormData {
  serviceType: string;
  projectLocation: string;
  installationTimeline: string;
  propertyType: string;
  projectPriority: string;
  firstName: string;
  phone: string;
  email: string;
  priorityFlag?: string;
}

export default function Consultation() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    projectLocation: '',
    installationTimeline: '',
    propertyType: '',
    projectPriority: '',
    firstName: '',
    phone: '',
    email: '',
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
      if (currentStep < 6) {
        setCurrentStep((currentStep + 1) as Step);
      }
    }, 200);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < 6) {
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
      serviceType: formData.serviceType,
      projectLocation: formData.projectLocation,
      installationTimeline: formData.installationTimeline,
      propertyType: formData.propertyType,
      projectPriority: formData.projectPriority,
      priorityFlag: formData.priorityFlag,
    });

    if (success) {
      navigate('/thank-you');
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
        return formData.projectLocation.trim() !== '';
      case 3:
        return formData.installationTimeline !== '';
      case 4:
        return formData.propertyType !== '';
      case 5:
        return formData.projectPriority !== '';
      case 6:
        return formData.firstName.trim() !== '' && formData.phone.trim() !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col">
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
              {[1, 2, 3, 4, 5, 6].map((step) => (
                <div key={step} className="flex-1 flex items-center">
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                      step < currentStep
                        ? 'bg-ocean text-white'
                        : step === currentStep
                        ? 'bg-ocean text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step}
                  </div>
                  {step < 6 && (
                    <div
                      className={`flex-1 h-1 mx-1 sm:mx-2 transition-colors ${
                        step < currentStep ? 'bg-ocean' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-600">
              Step {currentStep} of 6
            </p>
            <p className="text-center text-xs text-gray-500 mt-2">
              Takes about 30 seconds · A local installer will follow up
            </p>
            <p className="text-center text-xs text-gray-500 mt-1">
              🇺🇸 Made in the USA
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            {currentStep === 1 && (
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-2">
                  Blinds Installation in South Florida
                </h1>
                <p className="text-gray-600 mb-6">
                  Answer a few quick questions to request a consultation.
                </p>
                <h2 className="text-xl font-bold text-warm-dark mb-4">
                  What do you need help with?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Blinds',
                    'Window Shades',
                    'Drapes',
                    'Shutters',
                    'Not sure yet',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect('serviceType', option)}
                      className="p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-ocean hover:bg-ocean/5 active:bg-ocean/10 transition-all text-left"
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
                  Where is your South Florida project located?
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                  We serve residential and commercial properties throughout South Florida
                </p>
                <input
                  type="text"
                  value={formData.projectLocation}
                  onChange={(e) =>
                    handleInputChange('projectLocation', e.target.value)
                  }
                  placeholder="Enter zip code or city"
                  className="w-full p-4 border-2 border-gray-300 rounded-lg text-lg focus:border-ocean focus:outline-none mb-6"
                  autoFocus
                />
                <button
                  onClick={handleNext}
                  disabled={!isStepValid(2)}
                  className="w-full bg-ocean text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 active:bg-opacity-80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-6">
                  When are you looking to install?
                </h2>
                <div className="space-y-3">
                  {[
                    'As soon as possible',
                    'In the next few weeks',
                    'Just planning / researching',
                  ].map((option) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleOptionSelect('installationTimeline', option)
                      }
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-ocean hover:bg-ocean/5 active:bg-ocean/10 transition-all text-left"
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
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-ocean hover:bg-ocean/5 active:bg-ocean/10 transition-all text-left"
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
                      className="w-full p-4 border-2 border-gray-300 rounded-lg font-medium text-warm-dark hover:border-ocean hover:bg-ocean/5 active:bg-ocean/10 transition-all text-left"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 6 && (
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl sm:text-2xl font-bold text-warm-dark mb-2">
                  Where should we send your quote and next steps?
                </h2>
                <p className="text-gray-600 mb-6">
                  We'll reach out shortly to confirm your consultation.
                </p>
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
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-ocean focus:outline-none"
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
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-ocean focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-ocean focus:outline-none"
                    />
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    By submitting, you agree to be contacted by phone or text
                    regarding your request.
                  </p>
                  <button
                    type="submit"
                    disabled={!isStepValid(6) || isSubmitting}
                    className="w-full bg-ocean text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 active:bg-opacity-80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Consultation'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-4 px-4 text-center text-sm text-gray-600">
        <p>
          NA Blinds · South Florida ·{' '}
          <Link to="/privacy" className="text-ocean hover:underline">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}
