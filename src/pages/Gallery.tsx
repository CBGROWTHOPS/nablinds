import { useState } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { useSEO } from '../utils/seo';

type Room = 'Living Room' | 'Bedroom' | 'Kitchen' | 'Bathroom' | 'Office';
type ProductType = 'Roller Shades' | 'Roman Shades' | 'Zebra Shades' | 'Vertical Blinds' | 'Drapes' | 'Solar Shades' | 'Shutters';

const ROOMS: Room[] = ['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office'];
const PRODUCT_TYPES: ProductType[] = ['Roller Shades', 'Roman Shades', 'Zebra Shades', 'Vertical Blinds', 'Drapes', 'Solar Shades', 'Shutters'];

export default function Gallery() {
  useSEO({
    title: 'Gallery - Real Window Treatment Projects | NA Blinds South Florida',
    description: 'View real installations from homes across South Florida. Shades, blinds, and custom drapes in Miami, Fort Lauderdale, Boca Raton, and throughout Broward and Palm Beach counties.',
    canonicalUrl: 'https://www.nablinds.co/gallery'
  });

  const [filterMode, setFilterMode] = useState<'room' | 'product'>('room');
  const [activeFilter, setActiveFilter] = useState<string | 'All'>('All');

  const projects = [
    { title: 'Light-Filtering Roller Shades', location: 'Coconut Grove, Living Room', room: 'Living Room' as Room, productType: 'Roller Shades' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png', description: 'Filters harsh sunlight while maintaining privacy and views.' },
    { title: 'Blackout Roller Shade', location: 'Coral Gables, Bedroom', room: 'Bedroom' as Room, productType: 'Roller Shades' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b865e6116092501a8.png', description: 'Complete darkness for restful sleep.' },
    { title: 'Zebra Shades', location: 'Pinecrest, Bedroom', room: 'Bedroom' as Room, productType: 'Zebra Shades' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e23865e61df5f24bf18.png', description: 'Adjustable light and privacy control.' },
    { title: 'Room-Darkening Roman Shade', location: 'Boca Raton, Bedroom', room: 'Bedroom' as Room, productType: 'Roman Shades' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e238219f214749c9423.png', description: 'Elegant fabric with superior light blocking.' },
    { title: 'Light-Filtering Roller Shade', location: 'Delray Beach, Kitchen', room: 'Kitchen' as Room, productType: 'Roller Shades' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b85602c4fa44fd44e.png', description: 'Designer pattern with soft natural light.' },
    { title: 'Vertical Blinds', location: 'Weston, Living Room', room: 'Living Room' as Room, productType: 'Vertical Blinds' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c109dca1362.png', description: 'Smooth operation for sliding glass door.' },
    { title: 'Solar Roller Shades', location: 'Brickell High-Rise, Office', room: 'Office' as Room, productType: 'Solar Shades' as ProductType, image: 'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9ce352ca1361.png', description: 'Glare reduction and UV protection with maintained view.' },
    { title: 'Custom Drapes', location: 'Palm Beach Gardens, Bedroom', room: 'Bedroom' as Room, productType: 'Drapes' as ProductType, image: 'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c0f5fca135d.png', description: 'Tailored luxury with premium fabric and hardware.' },
    { title: 'Privacy Shade', location: 'Miami Beach, Bathroom', room: 'Bathroom' as Room, productType: 'Roller Shades' as ProductType, image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b85602c4fa44fd44e.png', description: 'Moisture-resistant fabric for humid coastal bathrooms.' },
  ];

  const filters = filterMode === 'room' ? ROOMS : PRODUCT_TYPES;
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => (filterMode === 'room' ? p.room : p.productType) === activeFilter);

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/roller_shade__001.jpg')` }}>
          <div className="absolute inset-0 bg-warm-dark bg-opacity-50" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Inspiration Gallery
          </h1>
          <p className="text-xl leading-relaxed drop-shadow-md">
            Real installations from homes across South Florida. Every project is custom-designed and professionally installed.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-warm-dark text-2xl mb-4">Featured Room Imagery</h2>
            <p className="text-warm-gray mb-6">Aspirational lifestyle photography — styled room shots that sell the feeling.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <ImagePlaceholder width={800} height={600} description="Living room with natural light — sun-drenched space, coastal or minimal style, window treatment visible" />
              <ImagePlaceholder width={800} height={600} description="Bedroom with blackout shades — restful retreat, soft styling" />
              <ImagePlaceholder width={800} height={600} description="Home office or coastal bathroom — professional lifestyle shot" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex gap-2">
              <button
                onClick={() => { setFilterMode('room'); setActiveFilter('All'); }}
                className={`px-4 py-2 rounded font-medium text-sm transition-colors ${filterMode === 'room' ? 'bg-navy text-white' : 'bg-gray-100 text-warm-dark hover:bg-gray-200'}`}
              >
                By Room
              </button>
              <button
                onClick={() => { setFilterMode('product'); setActiveFilter('All'); }}
                className={`px-4 py-2 rounded font-medium text-sm transition-colors ${filterMode === 'product' ? 'bg-navy text-white' : 'bg-gray-100 text-warm-dark hover:bg-gray-200'}`}
              >
                By Product
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('All')}
                className={`px-3 py-1.5 rounded text-sm transition-colors ${activeFilter === 'All' ? 'bg-taupe/30 text-warm-dark font-medium' : 'text-warm-gray hover:bg-gray-100'}`}
              >
                All
              </button>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 rounded text-sm transition-colors ${activeFilter === f ? 'bg-taupe/30 text-warm-dark font-medium' : 'text-warm-gray hover:bg-gray-100'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <div
                key={project.title + project.location}
                className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-warm-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-taupe mb-3">{project.location}</p>
                  <p className="text-warm-gray leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-soft-sand border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 text-navy font-medium hover:gap-3 transition-all"
          >
            Get a free consultation or order free fabric samples
          </Link>
        </div>
      </section>

      <CTASection
        title="See What's Possible in Your Home"
        subtitle="Every project starts with a conversation. We'll visit your home, show samples, and create a custom solution."
      />
    </div>
  );
}
