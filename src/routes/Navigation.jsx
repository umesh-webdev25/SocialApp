import { NavLink, useNavigate } from 'react-router-dom';
import { Icon } from '../components/shared';
import { authRoutes, mainRoutes, settingsRoutes } from './routes';

const navIcons = {
  home: 'home',
  profile: 'person',
  explore: 'explore',
  messages: 'chat',
  notifications: 'favorite_border',
  create: 'add_box',
  admin: 'dashboard',
  'settings/account': 'person',
  'settings/privacy': 'lock',
  'settings/theme': 'palette',
};

export function Navigation({ type = 'sidebar', className = '' }) {
  const navigate = useNavigate();

  const getRoutes = () => {
    switch (type) {
      case 'auth':
        return authRoutes;
      case 'main':
        return mainRoutes;
      case 'settings':
        return settingsRoutes;
      default:
        return [];
    }
  };

  const routes = getRoutes();

  if (type === 'sidebar') {
    return (
      <nav className={`flex flex-col gap-1 ${className}`}>
        {routes.map((route) => {
          const iconName = navIcons[route.path.replace('/', '')] || 'circle';
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-surface-container-low text-primary font-bold border-l-4 border-primary'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                }`
              }
            >
              <Icon name={iconName} className="text-xl" />
              <span className="text-sm">{route.title}</span>
            </NavLink>
          );
        })}
      </nav>
    );
  }

  if (type === 'tabs') {
    return (
      <div className={`flex gap-2 ${className}`}>
        {routes.map((route) => {
          const iconName = navIcons[route.path.replace('/', '')] || 'circle';
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`
              }
            >
              <Icon name={iconName} className="text-lg" />
              <span>{route.title}</span>
            </NavLink>
          );
        })}
      </div>
    );
  }

  if (type === 'bottom') {
    return (
      <nav className={`flex items-center justify-around h-14 ${className}`}>
        {routes.slice(0, 5).map((route) => {
          const iconName = navIcons[route.path.replace('/', '')] || 'circle';
          return (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-2 transition-transform ${
                  isActive ? 'text-primary scale-110' : 'text-stone-500'
                }`
              }
            >
              <Icon name={iconName} className="text-2xl" />
            </NavLink>
          );
        })}
      </nav>
    );
  }

  return null;
}

export function Breadcrumbs({ paths = [] }) {
  const navigate = useNavigate();

  if (paths.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm">
      {paths.map((path, index) => (
        <div key={path.path} className="flex items-center gap-2">
          {index > 0 && <span className="text-on-surface-variant">/</span>}
          <button
            onClick={() => navigate(path.path)}
            className={`${
              index === paths.length - 1
                ? 'text-on-surface font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            } transition-colors`}
          >
            {path.label}
          </button>
        </div>
      ))}
    </nav>
  );
}

export function NavMenu({ items, variant = 'dropdown', className = '' }) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      {variant === 'dropdown' && (
        <div className="bg-surface-lowest border border-outline-variant rounded-lg shadow-lg overflow-hidden">
          {items.map((item, index) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface-container-low transition-colors ${
                index !== items.length - 1 ? 'border-b border-outline-variant/10' : ''
              }`}
            >
              {item.icon && <Icon name={item.icon} className="text-lg text-on-surface-variant" />}
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      )}

      {variant === 'list' && (
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-on-surface hover:bg-surface-container-low'
                }`
              }
            >
              {item.icon && <Icon name={item.icon} className="text-lg" />}
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export function QuickNav({ currentPath, onNavigate }) {
  const allRoutes = [...mainRoutes, ...settingsRoutes];
  const currentIndex = allRoutes.findIndex((r) => r.path === currentPath);

  const prevRoute = currentIndex > 0 ? allRoutes[currentIndex - 1] : null;
  const nextRoute = currentIndex < allRoutes.length - 1 ? allRoutes[currentIndex + 1] : null;

  return (
    <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
      <button
        onClick={() => prevRoute && onNavigate(prevRoute.path)}
        disabled={!prevRoute}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          prevRoute
            ? 'hover:bg-surface-container-high text-on-surface'
            : 'text-on-surface-variant/50 cursor-not-allowed'
        }`}
      >
        <Icon name="chevron_left" className="text-xl" />
        <span className="text-sm">{prevRoute?.title || 'Previous'}</span>
      </button>

      <button
        onClick={() => nextRoute && onNavigate(nextRoute.path)}
        disabled={!nextRoute}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          nextRoute
            ? 'hover:bg-surface-container-high text-on-surface'
            : 'text-on-surface-variant/50 cursor-not-allowed'
        }`}
      >
        <span className="text-sm">{nextRoute?.title || 'Next'}</span>
        <Icon name="chevron_right" className="text-xl" />
      </button>
    </div>
  );
}
