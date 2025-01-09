// ServiceDetailPage.tsx
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data/services';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-black min-h-screen mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Services
          </button>

          <div className="bg-gray-50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-zinc-800/50">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                <service.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold text-black dark:text-white">{service.title}</h1>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12">{service.description}</p>

            {/* Key Features Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.packages
                  .flatMap(pkg => pkg.features)
                  .filter((feature, index, self) => self.indexOf(feature) === index) // Remove duplicates
                  .map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1">
                        <Check className="w-5 h-5 text-blue-500" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Development Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getServiceProcess(service.id).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-zinc-800/50 p-6 rounded-lg border border-gray-200 dark:border-zinc-700"
                  >
                    <div className="text-blue-500 font-bold mb-2">Step {index + 1}</div>
                    <h3 className="font-semibold text-black dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Available Packages */}
            <div>
              <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Available Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white dark:bg-zinc-800/50 p-6 rounded-lg border border-gray-200 dark:border-zinc-700"
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-blue-500 mb-4">${pkg.price.toLocaleString()}</div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{pkg.description}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Timeline: {pkg.timeline}</div>
                    
                    <h4 className="font-medium text-black dark:text-white mb-2">Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-blue-500 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {pkg.addons && pkg.addons.length > 0 && (
                      <>
                        <h4 className="font-medium text-black dark:text-white mb-2">Available Add-ons:</h4>
                        <ul className="space-y-2 mb-6">
                          {pkg.addons.map((addon) => (
                            <li key={addon.id} className="text-sm text-gray-600 dark:text-gray-400">
                              <span className="font-medium">{addon.name}</span> - ${addon.price.toLocaleString()}
                              <p className="text-xs text-gray-500 ml-4">{addon.description}</p>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/services/${service.id}/packages/${pkg.id}/details`)}
                      className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper function to get process steps based on service type
function getServiceProcess(serviceId: string) {
  const commonSteps = [
    {
      title: 'Discovery & Planning',
      description: 'Understanding requirements, goals, and creating a detailed project roadmap'
    },
    {
      title: 'Design & Development',
      description: 'Implementing solutions while maintaining constant communication'
    },
    {
      title: 'Testing & Deployment',
      description: 'Rigorous testing and smooth deployment to production'
    }
  ];

  const processSteps = {
    'web-development': [
      {
        title: 'Requirements Analysis',
        description: 'Gathering and analyzing project requirements, setting goals and objectives'
      },
      {
        title: 'Design & Prototyping',
        description: 'Creating wireframes, designs, and interactive prototypes'
      },
      {
        title: 'Development',
        description: 'Building the application with modern technologies and best practices'
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing including unit, integration, and user acceptance testing'
      },
      {
        title: 'Deployment',
        description: 'Deploying to production with monitoring and performance optimization'
      },
      {
        title: 'Support & Maintenance',
        description: 'Ongoing support, updates, and performance monitoring'
      }
    ],
    'ui-design': [
      {
        title: 'Research & Analysis',
        description: 'User research, competitor analysis, and requirement gathering'
      },
      {
        title: 'Wireframing',
        description: 'Creating low-fidelity wireframes and user flows'
      },
      {
        title: 'UI Design',
        description: 'Developing high-fidelity designs and design systems'
      },
      {
        title: 'Prototyping',
        description: 'Building interactive prototypes for user testing'
      },
      {
        title: 'User Testing',
        description: 'Conducting usability tests and gathering feedback'
      },
      {
        title: 'Handoff & Support',
        description: 'Developer handoff and implementation support'
      }
    ],
    'data-analytics': [
      {
        title: 'Data Assessment',
        description: 'Evaluating data sources, quality, and requirements'
      },
      {
        title: 'Data Processing',
        description: 'Cleaning, transforming, and preparing data for analysis'
      },
      {
        title: 'Analysis & Modeling',
        description: 'Applying statistical methods and building predictive models'
      },
      {
        title: 'Visualization',
        description: 'Creating interactive dashboards and visual reports'
      },
      {
        title: 'Implementation',
        description: 'Setting up data pipelines and automation'
      },
      {
        title: 'Monitoring & Optimization',
        description: 'Continuous monitoring and performance optimization'
      }
    ],
    'android-development': [
      {
        title: 'Requirements & Planning',
        description: 'Defining app features, architecture, and technical requirements'
      },
      {
        title: 'UI/UX Design',
        description: 'Creating app designs following Material Design guidelines'
      },
      {
        title: 'Development',
        description: 'Building the app using modern Android development practices'
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing on various devices and Android versions'
      },
      {
        title: 'Publication',
        description: 'Publishing to Google Play Store and handling app releases'
      },
      {
        title: 'Maintenance & Updates',
        description: 'Regular updates, bug fixes, and feature enhancements'
      }
    ]
  };

  return processSteps[serviceId as keyof typeof processSteps] || commonSteps;
}