import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getServicePackage } from '../data/services';
import { ServiceBreadcrumb } from '../components/service-details/ServiceBreadcrumb';
import { PackageDetails } from '../components/service-details/PackageDetails';
import { ProjectForm } from '../components/service-details/ProjectForm';
import { AddOns } from '../components/service-details/AddOns';

function ServiceDetailsPage() {
  const { serviceId, packageId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const packageDetails = serviceId && packageId ? getServicePackage(serviceId, packageId) : null;

  if (!packageDetails) {
    return (
      <div className="min-h-screen bg-black py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
          <button
            onClick={() => navigate('/services')}
            className="text-blue-400 hover:text-blue-300"
          >
            Return to Services
          </button>
        </div>
      </div>
    );
  }

  const calculateTotalPrice = () => {
    const basePrice = packageDetails.price;
    const addonsTotal = selectedAddons.reduce((total, addonId) => {
      const addon = packageDetails.addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return basePrice + addonsTotal;
  };

  const handleStartProject = () => {
    setShowForm(true);
  };

  const handleAddonToggle = (addonIds: string[]) => {
    setSelectedAddons(addonIds);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <ServiceBreadcrumb 
          path={['Services', 'Web Development', packageDetails.name]} 
        />

        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PackageDetails 
              packageDetails={packageDetails}
              totalPrice={calculateTotalPrice()}
              onStartProject={handleStartProject}
            />
            <AddOns 
              addons={packageDetails.addons}
              selectedAddons={selectedAddons}
              onAddonsChange={handleAddonToggle}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectForm 
              packageName={packageDetails.name}
              totalPrice={calculateTotalPrice()}
              onBack={() => setShowForm(false)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetailsPage;