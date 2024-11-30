import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, LineChart, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ServiceModal } from './ServiceModal';

const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications that drive business growth.',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: '$2,999',
        features: [
          'Single page website',
          'Mobile responsive design',
          'Basic SEO optimization',
          '3 rounds of revisions',
          '1 month support'
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: '$5,999',
        features: [
          'Multi-page website',
          'Advanced SEO optimization',
          'Custom animations',
          'API integration',
          '3 months support'
        ],
        isPopular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        features: [
          'Full-scale web application',
          'Custom features & integrations',
          'Performance optimization',
          'Priority support',
          '12 months support'
        ]
      }
    ],
    features: [
      'Custom web application development',
      'Responsive design implementation',
      'Performance optimization',
      'SEO enhancement',
      'API integration'
    ]
  },
  // Add other services here with similar structure
];

export function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handlePackageSelect = (serviceId: string, packageId: string) => {
    setSelectedPackage(packageId);
    navigate(`/services/${serviceId}/packages/${packageId}`);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>

              <p className="text-gray-400 mb-8">{service.description}</p>

              <div className="space-y-4">
                {service.packages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      selectedPackage === pkg.id
                        ? 'bg-blue-500/20 border-blue-500'
                        : 'bg-zinc-800/50 hover:bg-zinc-800'
                    } border-2 border-transparent`}
                    onClick={() => handlePackageSelect(service.id, pkg.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-white">{pkg.name}</h4>
                      <span className="text-blue-400 font-bold">{pkg.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-blue-400">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
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