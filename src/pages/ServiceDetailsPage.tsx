import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Plus, Minus } from 'lucide-react';
import { ServiceBreadcrumb } from '../components/service-details/ServiceBreadcrumb';
import { PackageDetails } from '../components/service-details/PackageDetails';
import { ProjectForm } from '../components/service-details/ProjectForm';
import { AddOns } from '../components/service-details/AddOns';

function ServiceDetailsPage() {
  const { packageId } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  // This would come from your services data/API
  const packageDetails = {
    name: 'Premium Web Development',
    description: 'Everything you need for a high-performing, modern website',
    price: '$5,999',
    timeline: '2-4 weeks',
    features: [
      'Custom design and development',
      'Responsive across all devices',
      'SEO optimization',
      'Performance optimization',
      'Security implementation',
      '3 months of support'
    ],
    addons: [
      {
        name: 'Extended Support',
        description: '12 months of priority support and maintenance',
        price: '$1,999'
      },
      {
        name: 'Advanced SEO Package',
        description: 'Comprehensive SEO strategy and implementation',
        price: '$999'
      },
      {
        name: 'Content Management System',
        description: 'Custom CMS for easy content updates',
        price: '$1,499'
      }
    ]
  };

  const handleStartProject = () => {
    setShowForm(true);
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
              onStartProject={handleStartProject}
            />
            <AddOns addons={packageDetails.addons} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectForm 
              packageName={packageDetails.name}
              onBack={() => setShowForm(false)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default ServiceDetailsPage;