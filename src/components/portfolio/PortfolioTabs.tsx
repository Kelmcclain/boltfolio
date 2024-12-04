import { motion } from 'framer-motion';
import { Code, Camera } from 'lucide-react';

interface PortfolioTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function PortfolioTabs({ activeTab, onTabChange }: PortfolioTabsProps) {
  const tabs = [
    {
      id: 'engineering',
      label: 'Engineering',
      icon: Code
    },
    {
      id: 'media',
      label: 'Photography & Videography',
      icon: Camera
    }
  ];

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex bg-gray-100 dark:bg-zinc-900/50 rounded-xl p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                <Icon className="w-4 h-4" />
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}