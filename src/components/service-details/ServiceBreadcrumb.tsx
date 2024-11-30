import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceBreadcrumbProps {
  path: string[];
}

export function ServiceBreadcrumb({ path }: ServiceBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
      <Link to="/" className="hover:text-white transition-colors">
        Home
      </Link>
      {path.map((item, index) => (
        <div key={item} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" />
          {index === path.length - 1 ? (
            <span className="text-white">{item}</span>
          ) : (
            <Link
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-white transition-colors"
            >
              {item}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}