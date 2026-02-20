import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import type { Project } from '../data/projects';

type Props = {
  project: Project;
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const goPrev = () => setImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setImageIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-title"
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white z-10 flex justify-end p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 text-warm-gray hover:text-warm-dark transition-colors rounded-lg hover:bg-soft-sand"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {/* Image carousel */}
          <div className="relative mb-6 rounded-lg overflow-hidden bg-soft-sand">
            <div className="aspect-[4/3] relative">
              <img
                src={images[imageIndex]}
                alt={`${project.title} - ${imageIndex + 1} of ${images.length}`}
                className="w-full h-full object-cover"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-warm-dark hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-warm-dark hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === imageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Before/after strip */}
          {project.beforeImage && (
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div>
                <p className="text-xs font-medium text-warm-gray mb-1">Before</p>
                <img
                  src={project.beforeImage}
                  alt="Before"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-warm-gray mb-1">After</p>
                <img
                  src={images[0]}
                  alt="After"
                  className="w-full aspect-[4/3] object-cover rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Title and meta */}
          <h2 id="project-title" className="text-2xl text-warm-dark mb-2">
            {project.title}
          </h2>
          <p className="text-taupe text-sm mb-3">{project.location} • {project.room}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.productTypes.map((pt) => (
              <span
                key={pt}
                className="px-3 py-1 rounded-full text-xs font-medium bg-taupe/20 text-warm-dark"
              >
                {pt}
              </span>
            ))}
          </div>

          {project.highlight && (
            <div className="bg-soft-sand p-4 rounded-lg mb-4 text-sm text-warm-gray">
              {project.highlight}
            </div>
          )}

          <p className="text-warm-gray leading-relaxed mb-6">{project.description}</p>

          <Link
            to="/consultation"
            onClick={onClose}
            className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded font-medium hover:bg-navy/90 transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Get a similar result
          </Link>
        </div>
      </div>
    </div>
  );
}
