import { useState, useMemo } from 'react';
import CTASection from '../components/CTASection';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { useSEO } from '../utils/seo';
import { projects, ROOMS, PRODUCT_TYPES, type Project, type Room, type ProductType } from '../data/projects';

function FilterPill({
  label,
  count,
  isActive,
  onClick,
}: {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap
        transition-all duration-200 ease-out
        ${isActive
          ? 'bg-navy text-white shadow-md'
          : 'bg-soft-sand/80 text-warm-dark hover:bg-taupe/20 hover:text-charcoal'
        }
      `}
    >
      <span>{label}</span>
      <span className={`text-xs ${isActive ? 'text-white/90' : 'text-warm-gray'}`}>
        {count}
      </span>
    </button>
  );
}

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

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) =>
      filterMode === 'room'
        ? p.room === activeFilter
        : p.productTypes.includes(activeFilter as ProductType)
    );
  }, [activeFilter, filterMode]);

  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = { All: projects.length };
    filters.forEach((f) => {
      counts[f] = projects.filter((p) =>
        filterMode === 'room' ? p.room === f : p.productTypes.includes(f as ProductType)
      ).length;
    });
    return counts;
  }, [filterMode, filters]);

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

      <section className="py-12 md:py-20 px-4 sm:px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          {/* Filter header */}
          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
              <h2 className="text-xl font-semibold text-warm-dark">
                Browse by {filterMode === 'room' ? 'room' : 'product'}
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-warm-gray">Filter by:</span>
                <div className="inline-flex p-1 rounded-lg bg-soft-sand/60" role="group" aria-label="Filter mode">
                  <button
                    onClick={() => { setFilterMode('room'); setActiveFilter('All'); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      filterMode === 'room'
                        ? 'bg-white text-navy shadow-sm'
                        : 'text-warm-dark hover:text-charcoal'
                    }`}
                  >
                    Room
                  </button>
                  <button
                    onClick={() => { setFilterMode('product'); setActiveFilter('All'); }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      filterMode === 'product'
                        ? 'bg-white text-navy shadow-sm'
                        : 'text-warm-dark hover:text-charcoal'
                    }`}
                  >
                    Product
                  </button>
                </div>
              </div>
            </div>

            {/* Filter pills - horizontal scroll on mobile */}
            <div className="overflow-x-auto pb-2 -mx-1 scrollbar-hide">
              <div className="flex gap-2 min-w-max px-1">
                <FilterPill
                  label="All"
                  count={filterCounts.All}
                  isActive={activeFilter === 'All'}
                  onClick={() => setActiveFilter('All')}
                />
                {filters.map((f) => (
                  <FilterPill
                    key={f}
                    label={f}
                    count={filterCounts[f] ?? 0}
                    isActive={activeFilter === f}
                    onClick={() => setActiveFilter(f)}
                  />
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm text-warm-gray">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''} shown
            </p>
          </div>

          {/* Results grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="text-left bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-taupe/20"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.images[0]}
                    alt={`${project.title} - ${project.location}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {project.room === 'Full Home' && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy/90 text-white text-xs font-semibold backdrop-blur-sm">
                      Full Home
                    </span>
                  )}
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl text-warm-dark mb-2 font-medium group-hover:text-navy transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-taupe mb-3">{project.location} • {project.room}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.productTypes.map((pt) => (
                      <span
                        key={pt}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-taupe/15 text-warm-dark"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-warm-gray text-lg">No projects match this filter.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="mt-4 text-navy font-medium hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
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
