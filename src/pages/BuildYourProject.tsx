import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../utils/seo';
import {
  ROOMS,
  CATEGORIES,
  PRODUCT_TYPES,
  COLOURS,
  CONTROL_TYPES,
  type ProductCategory,
} from '../data/configuratorData';
import { submitConfiguratorToWebhook } from '../utils/configuratorWebhook';

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface ConfiguratorState {
  room: string;
  productCategory: ProductCategory | '';
  productType: string;
  colour: string;
  customColour: string;
  controlType: string;
  knowsDimensions: boolean | null;
  widthCm: string;
  heightCm: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  suburb: string;
}

const TOTAL_STEPS = 7;

function getDisplayStep(currentStep: Step, productCategory: ProductCategory | ''): Step {
  if (productCategory === 'shutters' && currentStep === 6) return 5;
  if (productCategory === 'shutters' && currentStep === 7) return 6;
  return currentStep;
}

// Australian mobile: 04XX XXX XXX or +61 4XX XXX XXX
function isValidAustralianMobile(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 10 && digits.startsWith('04')) return true;
  if (digits.length === 11 && digits.startsWith('614')) return true;
  if (digits.length === 9 && digits.startsWith('4')) return true;
  return false;
}

function fireMetaPixelLead() {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
}

function fireGoogleAdsConversion() {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-17947516684/NULUCKH77vYbEIy-he5C',
    });
  }
}

export default function BuildYourProject() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');
  const [state, setState] = useState<ConfiguratorState>({
    room: '',
    productCategory: '',
    productType: '',
    colour: '',
    customColour: '',
    controlType: '',
    knowsDimensions: null,
    widthCm: '',
    heightCm: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    suburb: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [mobileError, setMobileError] = useState('');

  useSEO({
    title: 'Build Your Project | Custom Window Coverings | NA Blinds',
    description: 'Design your perfect window coverings. Select your room, product type, colour and get a personalised quote. Free measure included.',
    canonicalUrl: 'https://www.nablinds.co/build-your-project',
  });

  const skipControlStep = state.productCategory === 'shutters';
  const displayStep = getDisplayStep(currentStep, state.productCategory);

  const goNext = () => {
    setDirection('forward');
    if (skipControlStep && currentStep === 4) {
      setCurrentStep(6);
    } else if (currentStep < 7) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const goBack = () => {
    setDirection('back');
    if (skipControlStep && currentStep === 6) {
      setCurrentStep(4);
    } else if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const updateState = (updates: Partial<ConfiguratorState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMobileError('');

    if (!isValidAustralianMobile(state.mobile)) {
      setMobileError('Please enter a valid Australian mobile number (e.g. 04XX XXX XXX)');
      return;
    }

    setIsSubmitting(true);

    const success = await submitConfiguratorToWebhook({
      room: state.room,
      productCategory: state.productCategory,
      productType: state.productType,
      colour: state.colour,
      customColour: state.colour === 'custom' ? state.customColour : undefined,
      controlType: skipControlStep ? undefined : state.controlType,
      knowsDimensions: state.knowsDimensions ?? false,
      widthCm: state.widthCm || undefined,
      heightCm: state.heightCm || undefined,
      firstName: state.firstName,
      lastName: state.lastName,
      mobile: state.mobile,
      email: state.email,
      suburb: state.suburb,
    });

    if (success) {
      fireMetaPixelLead();
      fireGoogleAdsConversion();
      setIsSuccess(true);
    } else {
      alert('Something went wrong. Please try again or call us at 954-629-1373.');
    }
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-warm-white flex flex-col">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-4 font-serif">
              Thanks {state.firstName}! We&apos;ve received your selections and will be in touch shortly with your personalised quote.
            </h1>
            <p className="text-warm-gray mb-8">
              A member of our team will review your project and get back to you within 1–2 business days.
            </p>
            <Link
              to="/"
              className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-warm-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <Link to="/" className="inline-block mb-6">
          <img src="/nablinds_logo_transparent_black.png" alt="NA Blinds" className="h-10 sm:h-12" />
        </Link>

        <div className="mb-8">
          <div className="flex justify-between gap-1 mb-2">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => {
              const isSkipped = skipControlStep && step === 5;
              const isComplete = (skipControlStep ? (step < 5 ? displayStep > step : displayStep > 5) : displayStep > step);
              const isCurrent = displayStep === step;
              return (
                <div
                  key={step}
                  className={`flex-1 h-1.5 sm:h-2 rounded-full transition-colors duration-300 ${
                    isSkipped ? 'bg-transparent' : isComplete ? 'bg-charcoal' : isCurrent ? 'bg-navy' : 'bg-gray-200'
                  }`}
                />
              );
            })}
          </div>
          <p className="text-center text-sm text-warm-gray">Step {displayStep} of {skipControlStep ? 6 : 7}</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            key={currentStep}
            className={`${direction === 'forward' ? 'animate-slide-in' : 'animate-slide-in-back'}`}
          >
            {currentStep === 1 && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  What room are you shopping for?
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {ROOMS.map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => {
                        updateState({ room: room.name });
                        setTimeout(goNext, 150);
                      }}
                      className={`group relative aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 ${
                        state.room === room.name ? 'border-navy ring-2 ring-navy/20' : 'border-gray-200 hover:border-taupe'
                      }`}
                    >
                      <img
                        src={room.image}
                        alt={room.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-base sm:text-lg">
                        {room.name}
                      </span>
                      {state.room === room.name && (
                        <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-navy flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {currentStep === 2 && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  What type of window covering are you interested in?
                </h1>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        updateState({ productCategory: cat.id, productType: '' });
                        setTimeout(goNext, 150);
                      }}
                      className={`group relative aspect-[4/5] sm:aspect-[5/4] rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 text-left ${
                        state.productCategory === cat.id ? 'border-navy ring-2 ring-navy/20' : 'border-gray-200 hover:border-taupe'
                      }`}
                    >
                      <img
                        src={cat.image}
                        alt={cat.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <span className="text-white font-bold text-lg sm:text-xl block">{cat.name}</span>
                        <span className="text-white/90 text-sm sm:text-base">{cat.description}</span>
                      </div>
                      {state.productCategory === cat.id && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {currentStep === 3 && state.productCategory && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  Choose your product type
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {PRODUCT_TYPES[state.productCategory as ProductCategory].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        updateState({ productType: type.name });
                        setTimeout(goNext, 150);
                      }}
                      className={`group relative aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 text-left ${
                        state.productType === type.name ? 'border-navy ring-2 ring-navy/20' : 'border-gray-200 hover:border-taupe'
                      }`}
                    >
                      <img
                        src={type.image}
                        alt={type.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <span className="text-white font-bold text-base sm:text-lg block">{type.name}</span>
                        <span className="text-white/90 text-sm">{type.description}</span>
                      </div>
                      {state.productType === type.name && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {currentStep === 4 && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  Choose your colour
                </h1>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
                  {COLOURS.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => updateState({ colour: c.name })}
                      className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 min-h-[100px] ${
                        state.colour === c.name ? 'border-navy ring-2 ring-navy/20 bg-navy/5' : 'border-gray-200 hover:border-taupe'
                      }`}
                    >
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-200 shadow-inner flex-shrink-0"
                        style={{ background: c.value }}
                      />
                      <span className="text-sm font-medium text-warm-dark text-center">{c.name}</span>
                    </button>
                  ))}
                </div>
                {state.colour === 'Custom' && (
                  <div className="mt-6 p-4 bg-white rounded-xl border border-gray-200">
                    <label className="block text-sm font-medium text-warm-dark mb-2">
                      Describe your colour or finish
                    </label>
                    <input
                      type="text"
                      value={state.customColour}
                      onChange={(e) => updateState({ customColour: e.target.value })}
                      placeholder="e.g. Warm grey, brushed nickel, dark oak"
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                    />
                  </div>
                )}
                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!state.colour}
                    className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </section>
            )}

            {currentStep === 5 && !skipControlStep && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  How would you like to control your window coverings?
                </h1>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {CONTROL_TYPES.map((ctrl) => (
                    <button
                      key={ctrl.id}
                      type="button"
                      onClick={() => {
                        updateState({ controlType: ctrl.name });
                        setTimeout(goNext, 150);
                      }}
                      className={`relative aspect-[5/4] rounded-xl overflow-hidden border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 text-left ${
                        state.controlType === ctrl.name ? 'border-navy ring-2 ring-navy/20' : 'border-gray-200 hover:border-taupe'
                      }`}
                    >
                      <img
                        src={ctrl.image}
                        alt={ctrl.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold bg-navy text-white">
                        {ctrl.badge}
                      </span>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                        <span className="text-white font-bold text-lg sm:text-xl block">{ctrl.name}</span>
                        <span className="text-white/90 text-sm sm:text-base">{ctrl.description}</span>
                      </div>
                      {state.controlType === ctrl.name && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-navy flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            )}

            {currentStep === 6 && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  Do you know your window measurements?
                </h1>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => updateState({ knowsDimensions: true, widthCm: '', heightCm: '' })}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      state.knowsDimensions === true ? 'border-navy ring-2 ring-navy/20 bg-navy/5' : 'border-gray-200 hover:border-taupe'
                    }`}
                  >
                    <span className="font-semibold text-warm-dark text-lg">Yes</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      updateState({ knowsDimensions: false });
                      setTimeout(goNext, 150);
                    }}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      state.knowsDimensions === false ? 'border-navy ring-2 ring-navy/20 bg-navy/5' : 'border-gray-200 hover:border-taupe'
                    }`}
                  >
                    <span className="font-semibold text-warm-dark text-lg">No</span>
                  </button>
                </div>
                {state.knowsDimensions === true && (
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">Width (cm)</label>
                      <input
                        type="number"
                        value={state.widthCm}
                        onChange={(e) => updateState({ widthCm: e.target.value })}
                        placeholder="e.g. 120"
                        min={1}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">Height (cm)</label>
                      <input
                        type="number"
                        value={state.heightCm}
                        onChange={(e) => updateState({ heightCm: e.target.value })}
                        placeholder="e.g. 140"
                        min={1}
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                      />
                    </div>
                  </div>
                )}
                {state.knowsDimensions === false && (
                  <p className="text-warm-gray mb-8 p-4 bg-soft-sand rounded-xl">
                    No problem — we include a complimentary measure with every quote.
                  </p>
                )}
                {state.knowsDimensions !== null && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={goNext}
                      className="bg-navy text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                )}
              </section>
            )}

            {currentStep === 7 && (
              <section className="animate-fadeIn">
                <h1 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-6 font-serif text-center sm:text-left">
                  You&apos;re one step away from your free quote.
                </h1>

                <div className="bg-soft-sand rounded-xl p-6 mb-8 border border-taupe/15">
                  <h2 className="font-semibold text-warm-dark mb-4">Your Selections</h2>
                  <dl className="space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between gap-4">
                      <dt className="text-warm-gray">Room</dt>
                      <dd className="font-medium text-warm-dark">{state.room}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-warm-gray">Product Category</dt>
                      <dd className="font-medium text-warm-dark">
                        {CATEGORIES.find((c) => c.id === state.productCategory)?.name ?? state.productCategory}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-warm-gray">Product Type</dt>
                      <dd className="font-medium text-warm-dark">{state.productType}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-warm-gray">Colour</dt>
                      <dd className="font-medium text-warm-dark">
                        {state.colour}
                        {state.colour === 'Custom' && state.customColour && ` (${state.customColour})`}
                      </dd>
                    </div>
                    {!skipControlStep && (
                      <div className="flex justify-between gap-4">
                        <dt className="text-warm-gray">Control</dt>
                        <dd className="font-medium text-warm-dark">{state.controlType}</dd>
                      </div>
                    )}
                    <div className="flex justify-between gap-4">
                      <dt className="text-warm-gray">Dimensions</dt>
                      <dd className="font-medium text-warm-dark">
                        {state.knowsDimensions === true
                          ? state.widthCm && state.heightCm
                            ? `${state.widthCm}cm × ${state.heightCm}cm`
                            : 'Not provided'
                          : 'Complimentary measure included'}
                      </dd>
                    </div>
                  </dl>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">First Name *</label>
                      <input
                        type="text"
                        value={state.firstName}
                        onChange={(e) => updateState({ firstName: e.target.value })}
                        required
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-warm-dark mb-2">Last Name *</label>
                      <input
                        type="text"
                        value={state.lastName}
                        onChange={(e) => updateState({ lastName: e.target.value })}
                        required
                        className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-dark mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      value={state.mobile}
                      onChange={(e) => {
                        updateState({ mobile: e.target.value });
                        setMobileError('');
                      }}
                      required
                      placeholder="04XX XXX XXX"
                      className={`w-full p-3 border-2 rounded-lg focus:outline-none ${
                        mobileError ? 'border-red-500' : 'border-gray-300 focus:border-navy'
                      }`}
                    />
                    {mobileError && <p className="text-red-500 text-sm mt-1">{mobileError}</p>}
                    <p className="text-warm-gray text-xs mt-1">Australian mobile numbers only</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-dark mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={state.email}
                      onChange={(e) => updateState({ email: e.target.value })}
                      required
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-warm-dark mb-2">Suburb *</label>
                    <input
                      type="text"
                      value={state.suburb}
                      onChange={(e) => updateState({ suburb: e.target.value })}
                      required
                      placeholder="e.g. Boca Raton, Miami"
                      className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-navy focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy text-white py-4 rounded-lg font-bold text-lg hover:bg-navy/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mt-6"
                  >
                    {isSubmitting ? 'Sending...' : 'Send My Quote Request'}
                  </button>
                </form>
              </section>
            )}
          </div>
        </div>

        {currentStep > 1 && (
          <div className="mt-8">
            <button
              type="button"
              onClick={goBack}
              className="text-warm-gray hover:text-navy font-medium flex items-center gap-2 transition-colors"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
