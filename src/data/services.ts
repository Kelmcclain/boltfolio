import { Code, Palette, LineChart, Smartphone } from 'lucide-react';

export const services = [
  {
    id: 'web-development',
    icon: Code,
    title: 'Web Development',
    description: 'Creating responsive and dynamic web applications that drive business growth.',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 2999,
        description: 'Perfect for small businesses looking to establish their online presence',
        timeline: '2-3 weeks',
        features: [
          'Single page website',
          'Mobile responsive design',
          'Basic SEO optimization',
          '3 rounds of revisions',
          '1 month support'
        ],
        addons: [
          {
            id: 'seo',
            name: 'SEO Package',
            description: 'Enhanced SEO optimization and strategy',
            price: 499
          },
          {
            id: 'analytics',
            name: 'Analytics Integration',
            description: 'Advanced tracking and reporting',
            price: 299
          }
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 5999,
        description: 'Comprehensive solution for growing businesses',
        timeline: '4-6 weeks',
        features: [
          'Multi-page website',
          'Advanced SEO optimization',
          'Custom animations',
          'API integration',
          '3 months support',
          'Performance optimization'
        ],
        addons: [
          {
            id: 'cms',
            name: 'Content Management System',
            description: 'Custom CMS for easy content updates',
            price: 1499
          },
          {
            id: 'extended-support',
            name: 'Extended Support',
            description: '12 months of priority support',
            price: 1999
          }
        ],
        isPopular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 9999,
        description: 'Full-scale solution for large organizations',
        timeline: '8-12 weeks',
        features: [
          'Full-scale web application',
          'Custom features & integrations',
          'Performance optimization',
          'Priority support',
          '12 months support',
          'Advanced security features',
          'Load balancing setup'
        ],
        addons: [
          {
            id: 'ai-integration',
            name: 'AI Integration',
            description: 'Custom AI/ML features integration',
            price: 4999
          },
          {
            id: 'advanced-analytics',
            name: 'Advanced Analytics Suite',
            description: 'Custom analytics and reporting dashboard',
            price: 2999
          }
        ]
      }
    ]
  }
  // Add other services here with similar structure
];

export const getServicePackage = (serviceId: string, packageId: string) => {
  const service = services.find(s => s.id === serviceId);
  return service?.packages.find(p => p.id === packageId);
};