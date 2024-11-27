import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SkillModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: {
    name: string;
    description: string;
    skills: Array<{ name: string; level: number; details: string }>;
  };
}

export function SkillModal({ isOpen, onClose, category }: SkillModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-zinc-900 rounded-xl p-6 max-w-lg w-full shadow-xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{category.name}</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            {category.description}
          </p>

          <div className="space-y-6">
            {category.skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-zinc-500">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {skill.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}