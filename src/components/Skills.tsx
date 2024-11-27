import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Database, Palette } from 'lucide-react';

const skills = [
  {
    name: 'Web Development',
    icon: Globe,
    level: 85,
    description: 'Full-stack web development with modern frameworks and tools',
    subskills: [
      {
        name: 'Frontend (React, Vue)',
        level: 85,
        description: 'Modern frontend development with React and Vue.js, including state management and responsive design'
      },
      {
        name: 'Backend (Node.js)',
        level: 80,
        description: 'Server-side development with Node.js, Express, and RESTful APIs'
      },
      {
        name: 'HTML/CSS',
        level: 90,
        description: 'Advanced HTML5, CSS3, and modern CSS frameworks like Tailwind'
      }
    ]
  },
  {
    name: 'Mobile Development',
    icon: Smartphone,
    level: 63,
    description: 'Native and cross-platform mobile app development',
    subskills: [
      {
        name: 'React Native',
        level: 75,
        description: 'Cross-platform mobile development with React Native'
      },
      {
        name: 'Android (Kotlin)',
        level: 65,
        description: 'Native Android development with Kotlin'
      }
    ]
  },
  {
    name: 'Backend Services',
    icon: Database,
    level: 80,
    description: 'Server architecture and database management',
    subskills: [
      {
        name: 'Node.js',
        level: 85,
        description: 'Backend development with Express and Node.js'
      },
      {
        name: 'Databases',
        level: 75,
        description: 'SQL and NoSQL database design and optimization'
      }
    ]
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    level: 68,
    description: 'User interface and experience design',
    subskills: [
      {
        name: 'Interface Design',
        level: 70,
        description: 'Creating intuitive and aesthetically pleasing interfaces'
      },
      {
        name: 'User Research',
        level: 65,
        description: 'Conducting user research and usability testing'
      }
    ]
  }
];

export function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Programming Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedSkill.name === skill.name ? 'bg-gray-800' : 'hover:bg-gray-900'
                  }`}
                  onClick={() => setSelectedSkill(skill)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="text-white font-medium">{skill.name}</h3>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl text-white mb-4">{selectedSkill.name}</h3>
              <p className="text-gray-400 mb-6">{selectedSkill.description}</p>
              
              <div className="space-y-4">
                {selectedSkill.subskills.map((subskill) => (
                  <div key={subskill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white">{subskill.name}</span>
                      <span className="text-gray-400">{subskill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${subskill.level}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{subskill.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}