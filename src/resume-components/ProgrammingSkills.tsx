import { Globe, Smartphone, Server, Palette } from 'lucide-react';
import { SkillCategory } from './SkillCategory';

const skillCategories = [
  {
    name: 'Web Development',
    description: 'Full-stack web development with modern frameworks and tools',
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    skills: [
      {
        name: 'Frontend (React, Vue)',
        level: 85,
        details: 'Modern frontend development with React and Vue.js, including state management and responsive design'
      },
      {
        name: 'Backend (Node.js)',
        level: 80,
        details: 'Server-side development with Node.js, Express, and RESTful APIs'
      },
      {
        name: 'HTML/CSS',
        level: 90,
        details: 'Advanced HTML5, CSS3, and modern CSS frameworks like Tailwind'
      }
    ]
  },
  {
    name: 'Mobile Development',
    description: 'Cross-platform mobile app development',
    icon: <Smartphone className="w-6 h-6 text-blue-500" />,
    skills: [
      {
        name: 'Flutter',
        level: 65,
        details: 'Cross-platform mobile development with Flutter and Dart'
      },
      {
        name: 'React Native',
        level: 60,
        details: 'Mobile app development using React Native'
      }
    ]
  },
  {
    name: 'Backend Services',
    description: 'Cloud services and backend infrastructure',
    icon: <Server className="w-6 h-6 text-blue-500" />,
    skills: [
      {
        name: 'Cloud Platforms',
        level: 75,
        details: 'Experience with AWS, Google Cloud Platform, and Firebase'
      },
      {
        name: 'Database Management',
        level: 80,
        details: 'MongoDB, PostgreSQL, and Firebase Realtime Database'
      },
      {
        name: 'API Development',
        level: 85,
        details: 'RESTful API design and implementation'
      }
    ]
  },
  {
    name: 'UI/UX Design',
    description: 'User interface and experience design',
    icon: <Palette className="w-6 h-6 text-blue-500" />,
    skills: [
      {
        name: 'UI Design',
        level: 70,
        details: 'Interface design with Figma and Adobe XD'
      },
      {
        name: 'UX Research',
        level: 65,
        details: 'User research, wireframing, and prototyping'
      }
    ]
  }
];

export function ProgrammingSkills() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2">Programming Skills</h3>
      <div className="grid gap-4">
        {skillCategories.map((category) => (
          <SkillCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
}