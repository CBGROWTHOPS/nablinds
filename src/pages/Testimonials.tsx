import { Star, Quote } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { useSEO } from '../utils/seo';

export default function Testimonials() {
  useSEO({
    title: 'Customer Reviews & Testimonials | NA Blinds South Florida',
    description: 'Read reviews from satisfied South Florida homeowners. 4.8 star rating with 120+ reviews. BBB A+ rated. See why customers choose NA Blinds for window treatments.',
    canonicalUrl: 'https://www.nablinds.co/testimonials'
  });
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Coral Gables',
      rating: 5,
      text: 'NA Blinds transformed our master bedroom with beautiful blackout shades. The installation was quick, clean, and the results exceeded our expectations. Highly professional from start to finish.',
    },
    {
      name: 'Michael R.',
      location: 'Brickell',
      rating: 5,
      text: 'We needed solar shades for our high-rise condo to reduce glare and heat. The team was knowledgeable, punctual, and the product quality is outstanding. Our energy bills have noticeably decreased.',
    },
    {
      name: 'Jennifer L.',
      location: 'Boca Raton',
      rating: 5,
      text: 'After getting quotes from multiple companies, NA Blinds offered the best value and service. The consultation was thorough, the quote was transparent, and the installation was flawless. Very impressed.',
    },
    {
      name: 'David and Lisa K.',
      location: 'Weston',
      rating: 5,
      text: 'We had vertical blinds installed on our sliding doors and roller shades throughout the house. The entire process was seamless. Great communication and beautiful results.',
    },
    {
      name: 'Rachel G.',
      location: 'Coconut Grove',
      rating: 5,
      text: 'I appreciated the design consultation and material samples. They helped me choose the perfect roman shades that match my aesthetic. The craftsmanship is excellent.',
    },
    {
      name: 'James P.',
      location: 'Fort Lauderdale',
      rating: 5,
      text: 'Fast, professional, and affordable. I called on Monday and had my shades installed by Friday. The quality is top-notch and the price was very fair.',
    },
    {
      name: 'Amanda T.',
      location: 'Pinecrest',
      rating: 5,
      text: 'NA Blinds was recommended by a neighbor and I can see why. They were patient with all my questions, provided expert recommendations, and the installation was perfect.',
    },
    {
      name: 'Robert C.',
      location: 'Palm Beach Gardens',
      rating: 5,
      text: 'We chose custom drapes for our formal living room. The attention to detail was impressive and the final product looks stunning. Worth every penny.',
    },
    {
      name: 'Emily S.',
      location: 'Miami Beach',
      rating: 5,
      text: 'Living near the beach means dealing with harsh sun and salt air. NA Blinds recommended moisture-resistant materials that look great and hold up beautifully.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Homes Transformed' },
    { number: '10+', label: 'Years Experience' },
    { number: 'A+', label: 'BBB Rating' },
    { number: '4.8', label: 'Average Rating' },
  ];

  return (
    <div>
      <section className="py-20 md:py-28 px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-warm-dark mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-warm-gray leading-relaxed">
            Read what South Florida homeowners are saying about their experience with NA Blinds.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-charcoal mb-2">
                  {stat.number}
                </p>
                <p className="text-warm-gray font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-4 mb-12">
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8203c13b9c6469cc82d3.png"
              alt="Angi Super Service Award"
              className="h-16 w-auto"
            />
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a8045a0fb4a71324d0823.png"
              alt="BBB Accredited"
              className="h-16 w-auto"
            />
            <img
              src="/houzz.png"
              alt="Houzz"
              className="h-16 w-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex-shrink-0">
                  <ImagePlaceholder width={80} height={80} description="Client headshot — professional photo of homeowner, neutral background" className="rounded-full w-full h-full" />
                </div>
                <Quote className="w-8 h-8 text-taupe/40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-taupe text-taupe"
                    />
                  ))}
                </div>
                <p className="text-warm-gray leading-relaxed mb-6">
                  {testimonial.text}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-warm-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-warm-gray">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl text-warm-dark text-center mb-10">Before & After</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg overflow-hidden border border-gray-200">
                  <div className="grid grid-cols-2 gap-0">
                    <ImagePlaceholder width={400} height={300} description="Window before treatment — bare window, same room" />
                    <ImagePlaceholder width={400} height={300} description="Window after installation — same window with treatment" />
                  </div>
                  <div className="p-4 bg-white text-center">
                    <p className="text-sm text-warm-gray">Project {i} — South Florida home</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
