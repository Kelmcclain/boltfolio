import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioGrid } from './PortfolioGrid';
import { MediaGrid } from './MediaGrid';
import { PortfolioTabs } from './PortfolioTabs';
import { engineeringProjects, mediaProjects } from './portfolioData';
import { Search } from 'lucide-react';

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('engineering');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = activeTab === 'engineering' 
    ? engineeringProjects.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : mediaProjects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  return (
    <section className="min-h-screen bg-white dark:bg-black pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest work across different disciplines
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <PortfolioTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'engineering' ? (
              <PortfolioGrid projects={filteredProjects} />
            ) : (
              <MediaGrid projects={filteredProjects} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}