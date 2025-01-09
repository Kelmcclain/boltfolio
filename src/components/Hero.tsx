import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="min-h-screen pt-14 bg-white dark:bg-black relative overflow-hidden flex items-center p-5">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <motion.div
            className="flex-1 relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Available for projects</span>
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                  McClain
                </span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                I'm a{" "}
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                    "Data Scientist",
                    2000,
                    "Photographer & Videographer",
                    2000,
                    "Product Manager & Designer",
                    2000,
                    "LLM Prompt Engineer & AI Specialist",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-blue-400"
                  repeat={Infinity}
                />
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Crafting exceptional digital experiences through innovative development
              and creative design. Explore my portfolio of brand designs and custom 
              solutions for forward-thinking businesses.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex gap-3 mb-6 relative z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:opacity-90"
                >
                  View Work
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-black/50 dark:border-white/50 text-black dark:text-white px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black hover:border-black dark:hover:border-white hover:shadow-lg hover:shadow-black/25 dark:hover:shadow-white/25 active:opacity-90"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">Find me on</span>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Kelmcclain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mcclain-kelvin-9894a81ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Original Image with Spinning Background */}
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
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="flex-1 relative">
                <div
                  className="relative h-[400px] w-[400px] rounded-full overflow-visible"
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #4c87af33, transparent)",
                  }}
                >
                  <img
                    src="https://flashfocusstudios.org/flashfocus/mcclain.png"
                    alt="Profile"
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[450px] object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;