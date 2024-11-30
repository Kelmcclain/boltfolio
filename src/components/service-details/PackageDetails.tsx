import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PackageDetailsProps {
  packageDetails: {
    name: string;
    description: string;
    price: string;
    timeline: string;
    features: string[];
  };
  onStartProject: () => void;
}

export function PackageDetails({ packageDetails, onStartProject }: PackageDetailsProps) {
  return (
    <div className="bg-zinc-900/50 rounded-xl p-8 mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        {packageDetails.name}
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        {packageDetails.description}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Package Features</h2>
          <ul className="space-y-3">
            {packageDetails.features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-800/50 rounded-xl p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Investment</h3>
            <div className="text-3xl font-bold text-white">{packageDetails.price}</div>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-300 mb-2">Timeline</h3>
            <div className="text-xl text-white">{packageDetails.timeline}</div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartProject}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project
          </motion.button>
        </div>
      </div>
    </div>
  );
}