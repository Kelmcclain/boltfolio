import { motion } from 'framer-motion';

interface MediaFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function MediaFilters({ activeFilter, onFilterChange }: MediaFiltersProps) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photography', label: 'Photography' },
    { id: 'videography', label: 'Videography' }
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex bg-gray-100 dark:bg-zinc-900/50 rounded-xl p-1">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`relative px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeFilter === filter.id
                ? 'text-white'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {activeFilter === filter.id && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{filter.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}