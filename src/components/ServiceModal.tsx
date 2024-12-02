import { X, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    caseStudies: Array<{
      title: string;
      metric: string;
      description: string;
    }>;
    testimonials: Array<{
      name: string;
      role: string;
      company: string;
      content: string;
      image: string;
    }>;
    packages: Array<{
      name: string;
      price: string;
      features: string[];
      isPopular?: boolean;
    }>;
    tools: Array<{
      name: string;
      description: string;
      icon: string;
    }>;
  };
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="container mx-auto max-w-4xl p-4"
        >
          <div className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden">
            {/* Header */}
            <div className="relative h-48 bg-gradient-to-r from-blue-500 to-purple-500">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-4 left-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Key Features */}
              <section>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Key Features & Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Case Studies */}
              <section>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.caseStudies.map((study, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-blue-400 mb-2">{study.metric}</div>
                      <h4 className="font-medium text-black dark:text-white mb-2">{study.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{study.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Testimonials */}
              <section>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Client Testimonials</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-black dark:text-white">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role} at {testimonial.company}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing */}
              <section>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Service Packages</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.packages.map((pkg, index) => (
                    <div
                      key={index}
                      className={`relative bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-6 ${
                        pkg.isPopular ? 'ring-2 ring-blue-500' : ''
                      }`}
                    >
                      {pkg.isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-2">{pkg.name}</h4>
                      <div className="text-2xl font-bold text-black dark:text-white mb-4">{pkg.price}</div>
                      <ul className="space-y-2 mb-6">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tools */}
              <section>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Tools & Technologies</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {service.tools.map((tool, index) => (
                    <div
                      key={index}
                      className="group bg-gray-50 dark:bg-zinc-800/50 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-zinc-700/50 transition-colors"
                    >
                      <img src={tool.icon} alt={tool.name} className="w-8 h-8 mb-2" />
                      <h4 className="font-medium text-black dark:text-white mb-1">{tool.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{tool.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CTA */}
              <section className="text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  Start Your Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </section>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}