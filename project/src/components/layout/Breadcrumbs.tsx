import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const routeNames: Record<string, string> = {
  '': 'Início',
  'builder': 'Montagem',
  'about': 'Sobre'
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      <Link to="/" className="hover:text-cyan-400 transition-colors">
        Início
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return (
          <React.Fragment key={name}>
            <ChevronRight className="h-4 w-4" />
            {isLast ? (
              <span className="text-cyan-400">{routeNames[name] || name}</span>
            ) : (
              <Link 
                to={routeTo}
                className="hover:text-cyan-400 transition-colors"
              >
                {routeNames[name] || name}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;