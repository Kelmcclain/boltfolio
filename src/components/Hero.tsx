import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  return (
    <section className="min-h-screen pt-14 bg-white dark:bg-black relative overflow-hidden flex items-center p-5">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-3 text-black dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm McClain
            </motion.h1>
            <motion.h2
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              And I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Data Analyst",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-blue-400"
                repeat={Infinity}
              />
            </motion.h2>
            <motion.p
              className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Check out some of my brand designs and website projects for small
              businesses
            </motion.p>
            <motion.div
              className="flex gap-3 mb-6"
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
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/Kelmcclain/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mcclain-kelvin-9894a81ba/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
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
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}