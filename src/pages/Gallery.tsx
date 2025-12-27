import CTASection from '../components/CTASection';

export default function Gallery() {
  const projects = [
    {
      title: 'Light-Filtering Roller Shades',
      location: 'Coconut Grove, Living Room',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6cfac13b9cc739c9b6fc.png',
      description: 'Filters harsh sunlight while maintaining privacy and views.',
    },
    {
      title: 'Blackout Roller Shade',
      location: 'Coral Gables, Bedroom',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b865e6116092501a8.png',
      description: 'Complete darkness for restful sleep.',
    },
    {
      title: 'Zebra Shades',
      location: 'Pinecrest, Bedroom',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e23865e61df5f24bf18.png',
      description: 'Adjustable light and privacy control.',
    },
    {
      title: 'Room-Darkening Roman Shade',
      location: 'Boca Raton, Bedroom',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a6e238219f214749c9423.png',
      description: 'Elegant fabric with superior light blocking.',
    },
    {
      title: 'Light-Filtering Roller Shade',
      location: 'Delray Beach, Kitchen',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705b85602c4fa44fd44e.png',
      description: 'Designer pattern with soft natural light.',
    },
    {
      title: 'Vertical Blinds',
      location: 'Weston, Living Room',
      image: 'https://storage.googleapis.com/msgsndr/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c109dca1362.png',
      description: 'Smooth operation for sliding glass door.',
    },
    {
      title: 'Solar Roller Shades',
      location: 'Brickell High-Rise, Office',
      image: 'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9ce352ca1361.png',
      description: 'Glare reduction and UV protection with maintained view.',
    },
    {
      title: 'Custom Drapes',
      location: 'Palm Beach Gardens, Bedroom',
      image: 'https://assets.cdn.filesafe.space/pKgTEQf1DpuyRDPhTsOA/media/691a705bc13b9c0f5fca135d.png',
      description: 'Tailored luxury with premium fabric and hardware.',
    },
  ];

  return (
    <div>
      <section className="py-20 px-6 bg-soft-sand">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-warm-dark mb-6">
            Our Work
          </h1>
          <p className="text-xl text-warm-gray leading-relaxed">
            Real installations from homes across South Florida. Every project is custom-designed and professionally installed.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title + project.location}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-warm-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ocean mb-3">{project.location}</p>
                  <p className="text-warm-gray leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Space?"
        subtitle="Schedule your free consultation. We'll visit your home and create a custom solution."
      />
    </div>
  );
}
