import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ServiceModal } from './ServiceModal';
import { services } from '../data/services'; // Import from our services data file

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePackageSelect = (serviceId: string, packageId: string) => {
    setSelectedPackage(packageId);
    navigate(`/services/${serviceId}/packages/${packageId}/details`);
  };

  return (
    <section className="py-20 bg-white dark:bg-black min-h-screen mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">My Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Delivering comprehensive solutions across web development, design, analytics, and mobile development
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-zinc-800/50"
            >
              <div 
                className="flex items-center gap-4 mb-6 cursor-pointer group"
                onClick={() => navigate(`/services/${service.id}`)}
              >
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-8">{service.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {service.packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    className={`relative p-4 rounded-lg cursor-pointer transition-all ${
                      selectedPackage === pkg.id
                        ? 'bg-blue-500/20 border-blue-500'
                        : 'bg-white dark:bg-zinc-800/50 hover:bg-gray-50 dark:hover:bg-zinc-800'
                    } border-2 border-transparent`}
                    onClick={() => handlePackageSelect(service.id, pkg.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-black dark:text-white">{pkg.name}</h4>
                      <span className="text-blue-400">${pkg.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{pkg.description}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      Timeline: {pkg.timeline}
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          {feature}
                        </li>
                      ))}
                      {pkg.features.length > 3 && (
                        <li className="text-sm text-blue-500 mt-2">
                          +{pkg.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                    {pkg.addons && pkg.addons.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h5 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                          Available Add-ons
                        </h5>
                        <ul className="space-y-1">
                          {pkg.addons.map((addon) => (
                            <li key={addon.id} className="text-xs text-gray-600 dark:text-gray-400">
                              • {addon.name} (${addon.price.toLocaleString()})
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/services/${service.id}/packages/${pkg.id}/details`);
                      }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {selectedService && (
          <ServiceModal
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
          />
        )}
      </div>
    </section>
  );
}