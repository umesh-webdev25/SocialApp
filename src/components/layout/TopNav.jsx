import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../shared/Icon';

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8W0AFzwopEGTAJsRuAMn8H4vWEDtdPOGTBPkBSpq11Ct7DgPxtwZh5m9mAIPfOr75HF1ahgigacuowdd-b3NCftr1RAKxu_fbWnCnD7mVIUgn_8ZHDeR079xYkxBg83Mw48sFVB70EOu894eO2vsKZRGnm5z86gBB5thyksL9gZJVrv_Uwrux3oIs7v-4W4vSZsTMSRUBoKn457SKMs6D9TnJTR_sHAWPf4ld1cGm46Yt50o7GLD4gS23WelxGxH9DzenBwN9bBE5';

export function TopNav({ title = 'Editorial', showSearch = true, brandClickable = true }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'home', path: '/home' },
    { name: 'chat_bubble', path: '/messages' },
    { name: 'add_box', path: '/create' },
    { name: 'explore', path: '/explore' },
    { name: 'favorite_border', path: '/notifications' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/10 h-16 shadow-sm">
      <div className="flex items-center justify-between px-6 h-16 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          {brandClickable ? (
            <button
              onClick={() => navigate('/home')}
              className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent hover:opacity-90 hover:scale-105 transition-all duration-200"
            >
              {title}
            </button>
          ) : (
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              {title}
            </span>
          )}
          
          {showSearch && (
            <div className="hidden md:flex items-center bg-surface rounded-xl px-3 py-2 w-72 shadow-sm">
              <Icon name="search" className="text-on-surface-variant text-lg mr-2" />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full p-0 placeholder:text-on-surface-variant"
                placeholder="Search"
                type="text"
              />
            </div>
          )}
        </div>

        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`p-2 rounded-lg cursor-pointer transition-all ${
                isActive(item.path)
                  ? 'text-primary scale-110 bg-primary/5'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <Icon name={item.name} className="text-2xl" />
            </button>
          ))}
          <button
            onClick={() => navigate('/profile')}
            className="hover:opacity-90 transition-all"
          >
            <img alt="User profile" src={userAvatar} className="w-7 h-7 rounded-full object-cover border border-outline-variant" />
          </button>
        </div>
      </div>
    </nav>
  );
}
