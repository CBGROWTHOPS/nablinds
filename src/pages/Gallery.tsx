import { useState } from 'react';
import CTASection from '../components/CTASection';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { useSEO } from '../utils/seo';
import { projects, ROOMS, PRODUCT_TYPES, type Project, type Room, type ProductType } from '../data/projects';

export default function Gallery() {
  useSEO({
    title: 'Gallery - Real Window Treatment Projects | NA Blinds South Florida',
    description: 'View real installations from homes across South Florida. Shades, blinds, and custom drapes in Miami, Fort Lauderdale, Boca Raton, and throughout Broward and Palm Beach counties.',
    canonicalUrl: 'https://www.nablinds.co/gallery'
  });

  const [filterMode, setFilterMode] = useState<'room' | 'product'>('room');
  const [activeFilter, setActiveFilter] = useState<string | 'All'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = filterMode === 'room' ? ROOMS : PRODUCT_TYPES;
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) =>
        filterMode === 'room'
          ? p.room === activeFilter
          : p.productTypes.includes(activeFilter as ProductType)
      );

  return (
    <div>
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center py-8 md:py-20 px-6">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/hero-gallery.png')` }}>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="text-left bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-warm-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-taupe mb-3">{project.location} • {project.room}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.productTypes.map((pt) => (
                      <span
                        key={pt}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-taupe/15 text-warm-dark"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="See What's Possible in Your Home"
        subtitle="Every project starts with a conversation. We'll visit your home, show samples, and create a custom solution."
      />

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
