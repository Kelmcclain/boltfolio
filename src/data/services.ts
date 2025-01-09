import { Code, Palette, LineChart, Smartphone } from 'lucide-react';

export interface ServiceType {
  id: string;
  icon: React.ComponentType;
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
        price: 999,
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
        price: 1999,
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
        price: 4999,
        description: 'Full-scale solution for large organizations',
        timeline: '6-8 months',
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
  },
  {
    id: 'ui-design',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences that delight your customers.',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 799,
        description: 'Essential UI design package for simple applications',
        timeline: '1-2 weeks',
        features: [
          'Basic wireframes',
          'UI design for up to 5 screens',
          'Basic design system',
          '2 revision rounds',
          'Source files included'
        ],
        addons: [
          {
            id: 'additional-screens',
            name: 'Additional Screens',
            description: 'Design for 5 additional screens',
            price: 399
          },
          {
            id: 'interactive-prototype',
            name: 'Interactive Prototype',
            description: 'Clickable prototype in Figma',
            price: 299
          }
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 1499,
        description: 'Comprehensive design solution for complex applications',
        timeline: '2-3 weeks',
        features: [
          'Advanced wireframes',
          'UI design for up to 12 screens',
          'Complete design system',
          'Interactive prototype',
          'User flow diagrams',
          'Accessibility optimization'
        ],
        addons: [
          {
            id: 'user-research',
            name: 'User Research',
            description: 'In-depth user research and testing',
            price: 999
          },
          {
            id: 'motion-design',
            name: 'Motion Design',
            description: 'Custom animations and transitions',
            price: 799
          }
        ],
        isPopular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 3999,
        description: 'End-to-end design solution for large-scale applications',
        timeline: '4-6 weeks',
        features: [
          'Comprehensive UX research',
          'Unlimited screen designs',
          'Advanced prototyping',
          'Custom design system',
          'Design QA',
          'Documentation',
          'Team training'
        ],
        addons: [
          {
            id: 'design-system',
            name: 'Custom Design System',
            description: 'Comprehensive design system with documentation',
            price: 2999
          },
          {
            id: 'usability-testing',
            name: 'Usability Testing',
            description: 'Comprehensive user testing and analysis',
            price: 1999
          }
        ]
      }
    ]
  },
  {
    id: 'data-analytics',
    icon: LineChart,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics solutions.',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 1499,
        description: 'Essential analytics setup for small businesses',
        timeline: '2-3 weeks',
        features: [
          'Basic data visualization',
          'Monthly reports',
          'Google Analytics setup',
          'Basic KPI tracking',
          'Data collection setup'
        ],
        addons: [
          {
            id: 'custom-dashboard',
            name: 'Custom Dashboard',
            description: 'Personalized analytics dashboard',
            price: 799
          },
          {
            id: 'additional-tracking',
            name: 'Additional Tracking',
            description: 'Custom event tracking setup',
            price: 499
          }
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 2999,
        description: 'Advanced analytics solution for data-driven businesses',
        timeline: '4-6 weeks',
        features: [
          'Advanced data visualization',
          'Real-time analytics',
          'Custom reporting',
          'Predictive analytics',
          'Data integration',
          'API development'
        ],
        addons: [
          {
            id: 'machine-learning',
            name: 'Machine Learning Integration',
            description: 'Custom ML models for predictions',
            price: 1999
          },
          {
            id: 'data-pipeline',
            name: 'Custom Data Pipeline',
            description: 'Automated data processing system',
            price: 1499
          }
        ],
        isPopular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 5999,
        description: 'Full-scale analytics solution for large organizations',
        timeline: '8-12 weeks',
        features: [
          'Big data processing',
          'Custom ML models',
          'Advanced visualization',
          'Real-time analytics',
          'Data warehouse setup',
          'Team training',
          'Priority support'
        ],
        addons: [
          {
            id: 'ai-analytics',
            name: 'AI-Powered Analytics',
            description: 'Advanced AI analytics integration',
            price: 3999
          },
          {
            id: 'compliance',
            name: 'Compliance Package',
            description: 'GDPR, HIPAA compliance setup',
            price: 2999
          }
        ]
      }
    ]
  },
  {
    id: 'android-development',
    icon: Smartphone,
    title: 'Android Development',
    description: 'Building native Android applications that provide seamless mobile experiences.',
    packages: [
      {
        id: 'basic',
        name: 'Basic',
        price: 1999,
        description: 'Essential Android app development for simple applications',
        timeline: '4-6 weeks',
        features: [
          'Native Android development',
          'Basic UI implementation',
          'Local data storage',
          'Basic API integration',
          '3 months support'
        ],
        addons: [
          {
            id: 'offline-mode',
            name: 'Offline Mode',
            description: 'Offline data synchronization',
            price: 799
          },
          {
            id: 'push-notifications',
            name: 'Push Notifications',
            description: 'Firebase notification setup',
            price: 499
          }
        ]
      },
      {
        id: 'professional',
        name: 'Professional',
        price: 3999,
        description: 'Comprehensive Android solution for complex applications',
        timeline: '8-12 weeks',
        features: [
          'Advanced UI/UX implementation',
          'Complex API integration',
          'Real-time features',
          'Authentication system',
          'Performance optimization',
          '6 months support'
        ],
        addons: [
          {
            id: 'payment-gateway',
            name: 'Payment Integration',
            description: 'Secure payment processing setup',
            price: 1499
          },
          {
            id: 'social-integration',
            name: 'Social Integration',
            description: 'Social media login and sharing',
            price: 999
          }
        ],
        isPopular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: 7999,
        description: 'Full-scale Android solution for large organizations',
        timeline: '3-4 months',
        features: [
          'Custom architecture',
          'Advanced security features',
          'Complex integrations',
          'CI/CD setup',
          'Analytics integration',
          'Performance monitoring',
          '12 months support'
        ],
        addons: [
          {
            id: 'ml-kit',
            name: 'ML Kit Integration',
            description: 'Custom ML features implementation',
            price: 2999
          },
          {
            id: 'ar-features',
            name: 'AR Features',
            description: 'Augmented reality implementation',
            price: 3999
          }
        ]
      }
    ]
  }
];

export const getServicePackage = (serviceId: string, packageId: string) => {
  const service = services.find(s => s.id === serviceId);
  return service?.packages.find(p => p.id === packageId);
};