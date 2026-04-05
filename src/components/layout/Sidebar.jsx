import { NavLink } from 'react-router-dom';
import { Icon } from '../shared/Icon';

const navItems = [
  { name: 'home', label: 'Home', path: '/home' },
  { name: 'search', label: 'Search', path: '/explore' },
  { name: 'explore', label: 'Explore', path: '/explore' },
  { name: 'movie', label: 'Reels', path: '/explore' },
  { name: 'chat', label: 'Messages', path: '/messages' },
  { name: 'favorite_border', label: 'Notifications', path: '/notifications' },
  { name: 'add_box', label: 'Create', path: '/create' },
];

const bottomItems = [
  { name: 'settings', label: 'Settings', path: '/settings/account' },
  { name: 'history', label: 'Activity', path: '/notifications' },
];

export function Sidebar({ brand = 'Editorial' }) {
  return (
    <aside className="hidden lg:flex fixed left-0 h-full w-64 flex-col p-6 bg-white z-40 border-r border-outline-variant/10 shadow-md rounded-tr-2xl rounded-br-2xl">
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
          {brand}
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-primary/5 text-primary font-bold border-l-4 border-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`
            }
          >
            <Icon name={item.name} className="text-xl" />
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-8 px-3">
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `w-full py-3 px-4 rounded-xl font-semibold text-sm shadow-soft-md active:scale-95 transition-transform flex items-center justify-center ${
              isActive
                ? 'bg-surface-container-low text-primary'
                : 'bg-instagram text-white'
            }`
          }
        >
          Create Post
        </NavLink>
      </div>

      <div className="mt-auto flex flex-col space-y-1 mb-8">
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-surface-container-low text-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
              }`
            }
          >
            <Icon name={item.name} className="text-xl" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
}
