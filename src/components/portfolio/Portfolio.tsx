import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioGrid } from './PortfolioGrid';
import { MediaGrid } from './MediaGrid';
import { PortfolioTabs } from './PortfolioTabs';
import { engineeringProjects, mediaProjects } from './portfolioData';
import { Search, Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 6;

export function Portfolio() {
  const [activeTab, setActiveTab] = useState('engineering');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

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

  const visibleProjects = filteredProjects.slice(0, visibleItems);
  const hasMore = visibleItems < filteredProjects.length;

  const handleLoadMore = async () => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    setVisibleItems(prev => prev + ITEMS_PER_PAGE);
    setIsLoading(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setVisibleItems(ITEMS_PER_PAGE);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleItems(ITEMS_PER_PAGE);
  };

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
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-900/50 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <PortfolioTabs activeTab={activeTab} onTabChange={handleTabChange} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'engineering' ? (
              <PortfolioGrid projects={visibleProjects} />
            ) : (
              <MediaGrid projects={visibleProjects} />
            )}
          </motion.div>
        </AnimatePresence>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                'Load More Projects'
              )}
            </motion.button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No projects found matching your search criteria.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}