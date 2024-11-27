import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const technicalSkills = [
  'Code Optimization & Performance Tuning',
  'Collaborative Development & Version Control (e.g., Git)',
  'Debugging & Troubleshooting',
  'Agile & Scrum Methodologies',
  'Project & Time Management'
];

export function TechnicalSkills() {
  return (
    <div className="space-y-3">
      {technicalSkills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-start gap-2"
        >
          <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <span className="text-zinc-400 text-sm">{skill}</span>
        </motion.div>
      ))}
    </div>
  );
}