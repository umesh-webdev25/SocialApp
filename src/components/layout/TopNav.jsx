import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../shared/Icon';

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8W0AFzwopEGTAJsRuAMn8H4vWEDtdPOGTBPkBSpq11Ct7DgPxtwZh5m9mAIPfOr75HF1ahgigacuowdd-b3NCftr1RAKxu_fbWnCnD7mVIUgn_8ZHDeR079xYkxBg83Mw48sFVB70EOu894eO2vsKZRGnm5z86gBB5thyksL9gZJVrv_Uwrux3oIs7v-4W4vSZsTMSRUBoKn457SKMs6D9TnJTR_sHAWPf4ld1cGm46Yt50o7GLD4gS23WelxGxH9DzenBwN9bBE5';

export function TopNav({ title = 'NEXUS', showSearch = true, brandClickable = true }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'home', path: '/home', label: 'Home' },
    { name: 'chat_bubble', path: '/messages', label: 'Messages' },
    { name: 'add_box', path: '/create', label: 'Create' },
    { name: 'explore', path: '/explore', label: 'Explore' },
   { name: 'notifications', path: '/notifications', label: 'Notifications' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-16 shadow-sm">
      <div className="flex items-center justify-between px-6 h-16 w-full max-w-screen-2xl mx-auto">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-8">
          {brandClickable ? (
            <button
              onClick={() => navigate('/home')}
              className="flex items-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
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
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent">
                {title}
              </span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
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
              <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent">
                {title}
              </span>
            </div>
          )}
          
          {/* Search Bar - Instagram Style */}
          {showSearch && (
            <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-2 w-80 border border-gray-100 focus-within:border-[#E1306C]/30 focus-within:ring-2 focus-within:ring-[#E1306C]/30 transition-all duration-200">
              <Icon name="search" className="text-gray-400 text-lg mr-2" />
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-full p-0 placeholder:text-gray-400 text-gray-800"
                placeholder="Search"
                type="text"
              />
            </div>
          )}
        </div>

        {/* Right Section - Navigation Icons */}
        <div className="flex items-center space-x-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`relative p-2 rounded-xl cursor-pointer transition-all duration-200 group ${
                isActive(item.path)
                  ? 'text-[#E1306C]'
                  : 'text-gray-600 hover:text-[#E1306C] hover:bg-gray-50'
              }`}
            >
              <Icon name={item.name} className="text-2xl" />
              {/* Active indicator dot */}
              {isActive(item.path) && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#E1306C] rounded-full" />
              )}
            </button>
          ))}
          
          {/* Profile Avatar with Instagram Gradient Ring */}
          <button
            onClick={() => navigate('/profile')}
            className="hover:opacity-90 transition-all duration-200 ml-2"
          >
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <img 
                  alt="User profile" 
                  src={userAvatar} 
                  className="w-8 h-8 rounded-full object-cover" 
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}