
// ServiceBreadcrumb.tsx
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface ServiceBreadcrumbProps {
  path: BreadcrumbItem[];
}

export function ServiceBreadcrumb({ path }: ServiceBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8 mt-20">
      <Link 
        to="/" 
        className="hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Home
      </Link>
      {path.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" />
          {index === path.length - 1 ? (
            <span className="text-gray-900 dark:text-white">{item.name}</span>
          ) : (
            <Link
              to={item.path}
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}