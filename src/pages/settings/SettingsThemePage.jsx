import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const settingsNav = [
  { name: 'person', label: 'Edit Profile' },
  { name: 'notifications', label: 'Notifications' },
  { name: 'lock', label: 'Privacy & Security' },
  { name: 'palette', label: 'Appearance', active: true },
  { name: 'account_circle', label: 'Account Center' },
];

const themes = [
  { name: 'Light Mode', selected: true },
  { name: 'Dark Mode', selected: false },
  { name: 'System', selected: false },
];

const accentColors = [
  { color: 'from-[#833AB4] via-[#E1306C] to-[#F77737]', selected: true },
  { color: 'bg-blue-500', selected: false },
  { color: 'bg-emerald-500', selected: false },
  { color: 'bg-amber-500', selected: false },
  { color: 'bg-rose-500', selected: false },
];

export function SettingsThemePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] text-gray-800">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Nav - Instagram Style */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 h-16 border-b border-gray-100">
        <div className="flex items-center gap-8">
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
            <span className={`text-2xl font-extrabold tracking-tight ${brandGradient}`}>NEXUS</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Icon name="favorite_border" className="text-gray-600 hover:text-[#E1306C] p-2 rounded-full cursor-pointer transition-colors text-2xl" />
          <Icon name="chat_bubble" className="text-gray-600 hover:text-[#E1306C] p-2 rounded-full cursor-pointer transition-colors text-2xl" />
          <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
            <div className="bg-white rounded-full p-[1px]">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyb_awGAWsXMdXAmuIuRcloJwzNNOaHGOKZi0c-sul0o3QI2kfw4TkKhgsRUAoVrV7U1WcK2AvK-XQzx3Am1YdUTz2vSjhlp9A1eflJWLv9wfkzOxVgneAp1RKDpW2Q3_cnBvheeCNwlJciH1SgAKaAYVRsAvzR6inf570FDXxBqe6h44mfAsAJlHA4Od0EzmnPXL5ZtfxVO_rBYNU3LWn_SKwm9b17Sh98h8IUZmja72DcTc93mbBuFpX5TYxg2E6lpspz0EHHvtf" className="w-8 h-8 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12 flex justify-center px-4 relative z-10">
        <main className="w-full max-w-[935px] flex flex-col md:flex-row gap-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Side Nav - Instagram Style */}
          <aside className="w-full md:w-64 bg-gradient-to-br from-gray-50 to-white md:bg-white border-b md:border-b-0 md:border-r border-gray-100 flex flex-col py-6">
            <div className="px-6 mb-6">
              <h1 className="text-xl font-bold text-gray-800">Settings</h1>
              <p className="text-xs text-gray-400 mt-1">Customize your experience</p>
            </div>
            <nav className="flex flex-col gap-y-1 px-3">
              {settingsNav.map((item) => {
                const to = item.label === 'Appearance' ? '/settings/theme' : item.label === 'Edit Profile' ? '/settings/account' : item.label === 'Privacy & Security' ? '/settings/privacy' : '/settings/account';
                return (
                  <NavLink
                    key={item.name}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                      }`
                    }
                  >
                    <Icon name={item.name} className="text-xl" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </NavLink>
                );
              })}
              <div className="mt-8 pt-6 border-t border-gray-100 px-4">
                <span className="text-[10px] font-semibold text-[#E1306C] uppercase tracking-wider">Support</span>
                <NavLink className="flex items-center gap-3 py-3 text-gray-600 hover:text-[#E1306C] transition-colors mt-2" to="/settings/account">
                  <span className="text-sm font-medium">Help Center</span>
                </NavLink>
              </div>
            </nav>
          </aside>

          {/* Content - Instagram Style */}
          <section className="flex-1 p-8 md:p-12">
            <header className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Appearance</h2>
              <p className="text-gray-500 text-sm">Customize how NEXUS looks on your device. Choose a theme that fits your mood.</p>
            </header>

            {/* Theme Selection - Instagram Style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {themes.map((theme, i) => (
                <label key={i} className="relative cursor-pointer group">
                  <input defaultChecked={theme.selected} className="peer sr-only" name="theme" type="radio" />
                  <div className={`w-full aspect-[4/5] rounded-xl overflow-hidden mb-3 transition-all duration-200 ${
                    theme.name === 'Light Mode'
                      ? 'bg-white border-2 border-[#E1306C] shadow-lg'
                      : theme.name === 'Dark Mode'
                      ? 'bg-[#1a1a1a] border-2 border-gray-700 group-hover:border-gray-500'
                      : 'bg-gradient-to-r from-white to-[#1a1a1a] border-2 border-gray-200 group-hover:border-gray-300'
                  }`}>
                    {theme.name === 'Light Mode' && (
                      <div className="p-4">
                        <div className="h-3 bg-gray-100 rounded w-1/3 mb-3" />
                        <div className="space-y-2">
                          <div className="h-16 bg-gray-50 rounded-lg shadow-sm" />
                          <div className="h-16 bg-gray-50 rounded-lg shadow-sm" />
                        </div>
                      </div>
                    )}
                    {theme.name === 'Dark Mode' && (
                      <div className="p-4">
                        <div className="h-3 bg-gray-800 rounded w-1/3 mb-3" />
                        <div className="space-y-2">
                          <div className="h-16 bg-gray-800/50 rounded-lg" />
                          <div className="h-16 bg-gray-800/50 rounded-lg" />
                        </div>
                      </div>
                    )}
                    {theme.name === 'System' && (
                      <div className="flex h-full">
                        <div className="w-1/2 bg-white p-4">
                          <div className="h-3 bg-gray-100 rounded w-1/2 mb-3" />
                          <div className="h-14 bg-gray-50 rounded shadow-sm" />
                        </div>
                        <div className="w-1/2 bg-[#1a1a1a] p-4">
                          <div className="h-3 bg-gray-800 rounded w-1/2 mb-3" />
                          <div className="h-14 bg-gray-800/50 rounded" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme.selected ? 'font-semibold text-[#E1306C]' : 'font-medium text-gray-600 group-hover:text-gray-800'}`}>
                      {theme.name}
                    </span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      theme.selected ? 'border-[#E1306C]' : 'border-gray-300'
                    }`}>
                      {theme.selected && <div className="w-2.5 h-2.5 rounded-full bg-[#E1306C]" />}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {/* Accent Color - Instagram Style */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">Primary Accent</h3>
              <div className="flex flex-wrap gap-4">
                {accentColors.map((accent, i) => (
                  <button
                    key={i}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 ${
                      accent.selected
                        ? `bg-gradient-to-r ${accent.color} ring-4 ring-[#E1306C]/30 shadow-lg`
                        : accent.color === 'bg-blue-500'
                        ? 'bg-blue-500 hover:scale-110 shadow-sm hover:shadow-md'
                        : accent.color === 'bg-emerald-500'
                        ? 'bg-emerald-500 hover:scale-110 shadow-sm hover:shadow-md'
                        : accent.color === 'bg-amber-500'
                        ? 'bg-amber-500 hover:scale-110 shadow-sm hover:shadow-md'
                        : 'bg-rose-500 hover:scale-110 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {accent.selected && <Icon name="check" className="text-white text-lg" filled />}
                  </button>
                ))}
                <button className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-200">
                  <Icon name="add" className="text-xl" />
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                The selected accent will be applied to buttons, active states, and focus indicators across the app.
              </p>
            </div>

            {/* Actions - Instagram Style */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex justify-end gap-4">
              <button className="px-6 py-2.5 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
                Discard
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200">
                Save Changes
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}