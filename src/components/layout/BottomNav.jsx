import { useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '../shared/Icon';

const navItems = [
  { name: 'home', path: '/home' },
  { name: 'search', path: '/explore' },
  { name: 'movie', path: '/explore' },
  { name: 'favorite_border', path: '/notifications' },
];

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8W0AFzwopEGTAJsRuAMn8H4vWEDtdPOGTBPkBSpq11Ct7DgPxtwZh5m9mAIPfOr75HF1ahgigacuowdd-b3NCftr1RAKxu_fbWnCnD7mVIUgn_8ZHDeR079xYkxBg83Mw48sFVB70EOu894eO2vsKZRGnm5z86gBB5thyksL9gZJVrv_Uwrux3oIs7v-4W4vSZsTMSRUBoKn457SKMs6D9TnJTR_sHAWPf4ld1cGm46Yt50o7GLD4gS23WelxGxH9DzenBwN9bBE5';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path || (path === '/explore' && location.pathname === '/explore');

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-outline-variant/20 z-50 shadow-lg rounded-t-2xl">
      <div className="flex items-center justify-around h-14 px-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all ${
              isActive(item.path) ? 'text-primary scale-110 bg-primary/5' : 'text-on-surface-variant hover:bg-surface-container-low'
            }`}
          >
            <Icon name={item.name} className="text-2xl" />
          </button>
        ))}
        <button
          onClick={() => navigate('/profile')}
          className="flex flex-col items-center justify-center p-2"
        >
          <img
            alt="User profile"
            src={userAvatar}
            className={`w-6 h-6 rounded-full object-cover border ${
              isActive('/profile') ? 'border-primary' : 'border-outline-variant'
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
