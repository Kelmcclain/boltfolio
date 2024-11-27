import { motion } from 'framer-motion';
import { Music, Plane, Book, Mountain } from 'lucide-react';
import { ProfileCard } from './resume-components/ProfileCard';
import { ProgrammingSkills } from './resume-components/ProgrammingSkills';
import { ExperienceTimeline } from './resume-components/ExperienceTimeline';
import { TechnicalSkills } from './resume-components/TechnicalSkills';
import { ThemeToggle } from './resume-components/ThemeToggle';
import { DownloadButton } from './resume-components/DownloadButton';

const jobs = [
  {
    title: "Fullstack Developer",
    company: "Beakon Inc.",
    period: "2023 - Present",
    description: "In my role as a Fullstack Developer, I manage end-to-end development, encompassing UX/UI design, front-end and back-end development, RESTful API integration, and system administration."
  },
  {
    title: "AI Training Specialist",
    company: "CloudFactory",
    period: "2023",
    description: "Worked as an AI Training Specialist, excelling in curating event detection datasets and training AI models for precise identification."
  },
  {
    title: "Data Analyst",
    company: "CloudFactory",
    period: "2021-2022",
    description: "Worked as a data transcriptionist employing Intelligent Verbatim Transcription to my work as per the client's requirements."
  }
];

function Resume() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white p-4 lg:p-8 transition-colors">
      <ThemeToggle />
      <DownloadButton />
      <section className="max-w-7xl mx-auto grid lg:grid-cols-[350px,1fr] gap-8 mt-15"   style={{ marginTop: '60px' }}
      >
      {/* Left Column */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 shadow-lg transition-colors">
            <ProfileCard />
          </div>

          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 space-y-8 shadow-lg transition-colors">
            <ProgrammingSkills />
            <TechnicalSkills />

            {/* Hobbies */}
            <div>
              <h3 className="text-lg font-semibold border-b border-zinc-200 dark:border-zinc-800 pb-2 mb-4">Hobbies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Music</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Travel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Book className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Reading</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
                  <span>Hiking</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Profile */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Profile</h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Hi there, I'm McClain, a passionate developer and computer science enthusiast with over 4 years of experience in the industry. 
              My expertise lies in developing web and mobile applications using modern web technologies such as NodeJS, React, CSS and Flutter.
            </p>
          </div>

          {/* Professional Summary */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Versatile and results-driven Software Engineer with over 4 years of experience in developing dynamic, high-performing web and mobile applications. 
              Proficient in both frontend and backend technologies, with a focus on creating seamless user experiences and efficient systems.
            </p>
            <h4 className="font-semibold mb-3">Technical Proficiencies</h4>
            <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-2">
              <li><strong>Frontend:</strong> React (TSX), Vite, HTML, CSS, JavaScript, Figma</li>
              <li><strong>Backend:</strong> Node.js (TypeScript/JavaScript), Express.js, RESTful APIs</li>
              <li><strong>Databases:</strong> MongoDB, Firebase</li>
              <li><strong>Cloud Services:</strong> Google Cloud Platform (GCP), Firebase</li>
              <li><strong>Development Tools:</strong> Git, NPM, Docker, Postman</li>
              <li><strong>DevOps:</strong> CI/CD, automated testing, system monitoring</li>
              <li><strong>Mobile Development:</strong> Flutter (cross-platform)</li>
            </ul>
          </div>

          {/* Experience */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            <ExperienceTimeline jobs={jobs} />
          </div>

          {/* Education */}
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-xl p-6 shadow-lg transition-colors">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="pl-6 border-l border-zinc-200 dark:border-zinc-800 relative">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2" />
              <h4 className="font-semibold">Diploma in Computer Science</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">Mount Kenya University | 2020 - 2023</p>
              <ul className="list-disc list-inside text-zinc-600 dark:text-zinc-400 space-y-1">
                <li>Software Engineering</li>
                <li>Information Science</li>
                <li>Cybersecurity</li>
                <li>Data Structures and Algorithms</li>
                <li>Operating Systems</li>
                <li>Networking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Resume;