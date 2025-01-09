import { X, Check, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ServiceType {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  packages: ServicePackageType[];
}

export interface ServicePackageType {
  id: string;
  name: string;
  price: number;
  description: string;
  timeline: string;
  features: string[];
  addons: ServiceAddonType[];
  isPopular?: boolean;
}

export interface ServiceAddonType {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceType;
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
          className="container mx-auto max-w-4xl p-4 my-8"
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
              {/* Description */}
              <section>
                <p className="text-gray-600 dark:text-gray-300 text-lg">{service.description}</p>
              </section>

              {/* Packages */}
              <section>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Available Packages</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {service.packages.map((pkg) => (
                    <div
                      key={pkg.id}
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
                      <div className="text-2xl font-bold text-black dark:text-white mb-2">
                        ${pkg.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Timeline: {pkg.timeline}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-medium text-black dark:text-white mb-2">Features:</h5>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {pkg.addons.length > 0 && (
                        <div className="mb-4">
                          <h5 className="font-medium text-black dark:text-white mb-2">Available Add-ons:</h5>
                          <ul className="space-y-2">
                            {pkg.addons.map((addon) => (
                              <li key={addon.id} className="text-sm">
                                <div className="font-medium text-gray-700 dark:text-gray-200">
                                  {addon.name} - ${addon.price.toLocaleString()}
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">{addon.description}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <button className="w-full py-2 px-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
                        Get Started
                      </button>
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