import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
}

interface PortfolioGridProps {
  projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="group bg-gray-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-blue-500 dark:text-blue-400">{project.category}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-gray-200/50 dark:bg-zinc-800/50 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}