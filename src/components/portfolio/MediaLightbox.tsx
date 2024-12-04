import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { mediaProjects } from './portfolioData';

interface MediaLightboxProps {
  project: typeof mediaProjects[0];
  onClose: () => void;
  projects: typeof mediaProjects;
  onNavigate: (project: typeof mediaProjects[0]) => void;
}

export function MediaLightbox({ project, onClose, projects, onNavigate }: MediaLightboxProps) {
  const currentIndex = projects.findIndex(p => p.id === project.id);
  
  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onNavigate(projects[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onNavigate(projects[nextIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/75 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/75 hover:text-white transition-colors"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/75 hover:text-white transition-colors"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <motion.div
        layoutId={`image-${project.id}`}
        className="max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        <div className="mt-4 text-white">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-300">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-white/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}