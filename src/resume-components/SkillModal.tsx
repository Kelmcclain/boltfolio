import { X, Award, TrendingUp, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

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
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-emerald-500 to-green-500';
    if (level >= 70) return 'from-blue-500 to-indigo-500';
    if (level >= 50) return 'from-violet-500 to-purple-500';
    return 'from-rose-500 to-pink-500';
  };

  const getExpertiseLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 70) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

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
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-2xl shadow-2xl relative overflow-hidden"
        >

          {/* Header */}
          <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {category.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 flex items-start gap-2">
              <Info className="w-4 h-4 mt-1 flex-shrink-0" />
              {category.description}
            </p>
          </div>
          
          {/* Skills list */}
          <div className="p-6 space-y-8 max-h-[60vh] overflow-y-auto">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zinc-400" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-zinc-500">
                      {getExpertiseLabel(skill.level)}
                    </span>
                    <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8, type: "spring" }}
                    className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} origin-left`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                {/* Skill details */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-sm text-zinc-600 dark:text-zinc-400 mt-2"
                >
                  {skill.details}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}