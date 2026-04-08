import { NavLink } from 'react-router-dom';
import { Icon } from '../shared/Icon';

const navItems = [
  { name: 'home', label: 'Home', path: '/home' },
  { name: 'search', label: 'Search', path: '/explore' },
  { name: 'explore', label: 'Explore', path: '/explore' },
  { name: 'movie', label: 'Reels', path: '/explore' },
  { name: 'chat', label: 'Messages', path: '/messages' },
 { name: 'notifications', path: '/notifications', label: 'Notifications' },
];

const bottomItems = [
  { name: 'settings', label: 'Settings', path: '/settings/account' },
  { name: 'history', label: 'Activity', path: '/notifications' },
];

export function Sidebar({ brand = 'NEXUS' }) {
  return (
    <aside className="hidden lg:flex fixed left-0 h-full w-64 flex-col bg-white/95 backdrop-blur-sm z-40 border-r border-gray-100 shadow-xl rounded-tr-2xl rounded-br-2xl">
      
      {/* Logo Section */}
      <div className="mb-8 px-6 pt-6">
        <div className="flex items-center gap-2 px-2">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="instaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#833AB4" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="100%" stopColor="#F77737" />
              </linearGradient>
            </defs>
            <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaGrad)" />
            <circle cx="12" cy="12" r="4.5" fill="white" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          </svg>
          <h1 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent">
            {brand}
          </h1>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
              }`
            }
          >
            <Icon 
              name={item.name} 
              className={`text-2xl transition-colors duration-200 ${
                item.name === 'favorite_border' ? 'text-2xl' : 'text-2xl'
              }`} 
            />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Create Post Button */}
      <div className="mt-6 px-3">
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `w-full py-3 px-4 rounded-xl font-semibold text-sm shadow-md active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 ${
              isActive
                ? 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white shadow-lg'
                : 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:shadow-lg transform hover:scale-[1.02]'
            }`
          }
        >
          <Icon name="add_box" className="text-xl" />
          Create Post
        </NavLink>
      </div>

      {/* Bottom Navigation */}
      <div className="mt-auto flex flex-col space-y-1 mb-6 px-3">
        {bottomItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
              }`
            }
          >
            <Icon name={item.name} className="text-2xl" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
        
        {/* User Profile Section */}
        <div className="pt-4 mt-4 border-t border-gray-100">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-50 transition-all duration-200 group">
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_-jai7o6N62GGSB0NagEzEWaS9E29PDb91xwalt_xTiRnxcOn-Rt2BfKvvzhVEdICarn8m2m4XJJxgXMrq3pPBM9CBRBajL1Yy-Wa6cjmIqR3pp_-_ZXYYISzrdXCln6QC75b960YhiGvztyjXYHFBJg2ZXNgOlP9cUMO241-PHk1W518TU6DTv1ax23TXWjYHA1NZN-ZVdMBCEbUtgZWh8wuMPZENLxQb--pkHtP9qm4G9NtS1kdWTt_EpveT9Kbmmgz5dG8z6It" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-[#E1306C] transition-colors">
                alex_designer
                
              </p>
              <p className="text-xs text-gray-500">Alex Rivera</p>
            </div>
            <Icon name="more_horiz" className="text-gray-400 text-lg" />
          </div>
        </div>
      </div>
    </aside>
  );
}