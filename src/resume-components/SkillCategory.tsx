import { useState } from 'react';
import { motion } from 'framer-motion';
import { SkillModal } from './SkillModal';

interface Skill {
  name: string;
  level: number;
  details: string;
}

interface Category {
  name: string;
  description: string;
  skills: Skill[];
  icon: React.ReactNode;
}

interface SkillCategoryProps {
  category: Category;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const averageLevel = Math.round(
    category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length
  );

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
            {category.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-medium mb-1">{category.name}</h4>
            <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${averageLevel}%` }}
                transition={{ duration: 1 }}
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
              />
            </div>
          </div>
          <span className="text-sm text-zinc-500">{averageLevel}%</span>
        </div>
      </motion.div>

      <SkillModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={category}
      />
    </>
  );
}