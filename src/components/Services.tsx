import { Code, Palette, LineChart, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications that drive business growth.',
    details: [
      'Custom web application development using React, Vue, and Node.js',
      'Responsive design implementation with modern CSS frameworks',
      'Performance optimization and SEO enhancement',
      'API integration and development',
      'Progressive Web Apps (PWA) development'
    ],
    tools: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Crafting visually stunning designs that capture attention and convey your message.',
    details: [
      'Brand identity design and guidelines',
      'UI/UX design for web and mobile applications',
      'Social media graphics and marketing materials',
      'Logo design and corporate identity',
      'Print design and digital publications'
    ],
    tools: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'InDesign']
  },
  {
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transforming raw data into actionable insights to drive informed decision-making.',
    details: [
      'Data visualization and dashboard creation',
      'Statistical analysis and reporting',
      'Business intelligence implementation',
      'Predictive analytics modeling',
      'Data cleaning and preprocessing'
    ],
    tools: ['Python', 'R', 'Tableau', 'Power BI', 'SQL']
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    description: 'Building native and cross-platform mobile applications that users love.',
    details: [
      'Native Android app development with Kotlin',
      'Cross-platform development with Flutter',
      'Mobile UI/UX design and implementation',
      'App performance optimization',
      'Play Store deployment and maintenance'
    ],
    tools: ['Kotlin', 'Flutter', 'Android Studio', 'Firebase', 'RESTful APIs']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export function Services() {
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Delivering comprehensive solutions across multiple domains with expertise and innovation
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-400 mb-6">{service.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">What I Offer:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-start">
                          <span className="mr-2 text-blue-400">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}