import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { MediaLightbox } from './MediaLightbox';
import { MediaFilters } from './MediaFilters';
import { mediaProjects } from './portfolioData';

interface MediaGridProps {
  projects: typeof mediaProjects;
}

export function MediaGrid({ projects }: MediaGridProps) {
  const [selectedProject, setSelectedProject] = useState<typeof mediaProjects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === activeFilter);

  return (
    <>
      <MediaFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-8 w-auto"
        columnClassName="pl-8 bg-clip-padding"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-8"
          >
            <div
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedProject(project)}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                layoutId={`image-${project.id}`}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
              >
                <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </Masonry>

      <AnimatePresence>
        {selectedProject && (
          <MediaLightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            projects={projects}
            onNavigate={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}