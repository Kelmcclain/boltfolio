import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Camera, Database, Layout, Smartphone, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const skills = [
  { 
    icon: Code, 
    label: "Full Stack Development",
    description: "React, Node.js, Python",
    color: "from-blue-600 to-cyan-500"
  },
  { 
    icon: Smartphone, 
    label: "Mobile Development",
    description: "React Native, Flutter",
    color: "from-purple-600 to-pink-500"
  },
  { 
    icon: Palette, 
    label: "Graphic Design",
    description: "UI/UX, Branding",
    color: "from-orange-500 to-red-500"
  },
  { 
    icon: Layout, 
    label: "LLM Integration",
    description: "OpenAI, Claude",
    color: "from-green-500 to-emerald-400"
  },
  { 
    icon: Database, 
    label: "Data Analysis",
    description: "Python, R, SQL",
    color: "from-yellow-500 to-orange-400"
  },
  { 
    icon: Camera, 
    label: "Photography",
    description: "Portrait, Landscape",
    color: "from-indigo-500 to-purple-500"
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Kelmcclain" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mcclain-kelvin-9894a81ba/" },
  { icon: Twitter, label: "Twitter", href: "https://x.com/Kelmcclain" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/Kelmcclain" },

];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black"></div>
      <div className="absolute inset-0 opacity-30 dark:opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div className={`relative group transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl transform -rotate-6 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl transform rotate-6 group-hover:-rotate-6 transition-transform duration-500"></div>
            
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://flashfocusstudios.org/flashfocus/1732452463493-photo.webp"
                alt="McClain Kelvin"
                className="w-full h-[600px] object-cover transform scale-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-center space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="w-5 h-5 text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`space-y-10 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {/* Section Title */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 tracking-wider uppercase">
                Get to know me
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm <span className="font-semibold text-gray-900 dark:text-white">McClain Kelvin</span>, 
                a multi-disciplinary professional with expertise across various technology domains. 
                With a passion for creating innovative solutions, I bring a unique blend of creative 
                and analytical skills to every project.
              </p>
              <p className="leading-relaxed">
                My journey in tech began with a fascination for how digital solutions can transform 
                businesses and improve lives. Over the years, I've honed my skills in various areas 
                of technology, allowing me to approach problems from multiple angles and deliver 
                comprehensive solutions.
              </p>
              <p className="leading-relaxed">
                When I'm not coding or designing, you can find me exploring new photography techniques,
                analyzing datasets for fun, or contributing to open-source projects. I believe in continuous
                learning and staying updated with the latest industry trends.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="group relative"
                  onMouseEnter={() => setActiveSkill(skill.label)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 rounded-2xl blur transition-opacity duration-300`} />
                  <div className="relative p-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group-hover:border-transparent transition-colors duration-300">
                    <div className="flex flex-col space-y-2">
                      <skill.icon className={`w-6 h-6 ${activeSkill === skill.label ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} transition-colors duration-300`} />
                      <h3 className={`font-medium ${activeSkill === skill.label ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'} transition-colors duration-300`}>
                        {skill.label}
                      </h3>
                      <p className={`text-sm ${activeSkill === skill.label ? 'text-gray-700 dark:text-white/90' : 'text-gray-500 dark:text-gray-400'} transition-colors duration-300`}>
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                to="/resume"
                className="group relative inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium overflow-hidden"
              >
                <span className="relative flex items-center">
                  View Full Resume
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;