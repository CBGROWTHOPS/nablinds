import { memo } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = memo(() => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-warm-dark mb-6">
        Contact Information
      </h2>
      <p className="text-warm-gray mb-8 leading-relaxed">
        Serving homeowners across Miami-Dade, Broward, and Palm Beach counties with professional window treatment installation.
      </p>

      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
        <a
          href="tel:954-629-1373"
          className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-soft-sand rounded-lg hover:bg-white active:bg-white transition-colors group touch-manipulation"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-taupe/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-phone group-hover:bg-opacity-100 transition-colors">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white" />
          </div>
          <div>
            <p className="font-semibold text-warm-dark mb-1 text-sm sm:text-base">Phone</p>
            <p className="text-phone text-lg sm:text-xl font-semibold">954-629-1373</p>
            <p className="text-xs sm:text-sm text-warm-gray mt-1">Call for immediate assistance</p>
          </div>
        </a>

        <a
          href="mailto:info@nablinds.co"
          className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-soft-sand rounded-lg hover:bg-white active:bg-white transition-colors group touch-manipulation"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-taupe/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-charcoal group-hover:bg-opacity-100 transition-colors">
            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal group-hover:text-white" />
          </div>
          <div>
            <p className="font-semibold text-warm-dark mb-1 text-sm sm:text-base">Email</p>
            <p className="text-charcoal font-semibold text-base sm:text-lg break-all">info@nablinds.co</p>
            <p className="text-xs sm:text-sm text-warm-gray mt-1">We respond within 24 hours</p>
          </div>
        </a>

        <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-soft-sand rounded-lg">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-taupe/20 rounded-full flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
          </div>
          <div>
            <p className="font-semibold text-warm-dark mb-1 text-sm sm:text-base">Service Area</p>
            <p className="text-warm-gray text-sm sm:text-base">Miami-Dade, Broward & Palm Beach Counties</p>
            <p className="text-xs sm:text-sm text-warm-gray mt-1">Proudly serving South Florida</p>
          </div>
        </div>

        <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-soft-sand rounded-lg">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-taupe/20 rounded-full flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal" />
          </div>
          <div>
            <p className="font-semibold text-warm-dark mb-1 text-sm sm:text-base">Hours</p>
            <p className="text-warm-gray text-sm sm:text-base">Monday - Friday: 8:00 AM - 6:00 PM</p>
            <p className="text-warm-gray text-sm sm:text-base">Saturday: 9:00 AM - 3:00 PM</p>
            <p className="text-xs sm:text-sm text-warm-gray mt-1">Sunday: By appointment</p>
          </div>
        </div>
      </div>

      <div className="bg-soft-sand p-8 rounded-lg">
        <h3 className="text-xl font-semibold text-warm-dark mb-4">
          What to Expect
        </h3>
        <ul className="space-y-3 text-warm-gray">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
            <span>Response within 24 hours to all inquiries</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
            <span>Free in-home consultation throughout South Florida</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
            <span>Professional measurement and product recommendations</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
            <span>Transparent quotes with no hidden fees</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-taupe rounded-full mt-2.5 flex-shrink-0"></div>
            <span>HOA-compliant options for condos and high-rises</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

ContactInfo.displayName = 'ContactInfo';

export default ContactInfo;
