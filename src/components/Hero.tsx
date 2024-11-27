import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="min-h-screen pt-14 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div 
            className="flex-1 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm McClain Kelvin
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              And I'm a UI/UX Designer
            </motion.h2>
            <motion.p 
              className="text-gray-400 mb-6 max-w-2xl text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Check out some of my brand designs and website projects for small businesses
            </motion.p>
            <motion.div 
              className="flex gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/portfolio" className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors">
                View Work
              </Link>
              <Link to="/contact" className="border border-white text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
                Contact Me
              </Link>
            </motion.div>
            <motion.div 
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="flex-1 relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full bg-gray-900 overflow-hidden relative z-10">
                <img
                  src="https://flashfocusstudios.org/flashfocus/1732452463493-photo.webp"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}