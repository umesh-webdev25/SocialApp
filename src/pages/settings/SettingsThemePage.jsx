import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';

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
  { color: 'from-primary via-secondary to-tertiary', selected: true },
  { color: 'bg-blue-500', selected: false },
  { color: 'bg-emerald-500', selected: false },
  { color: 'bg-amber-500', selected: false },
  { color: 'bg-rose-500', selected: false },
];

export function SettingsThemePage() {
  return (
    <div className="min-h-screen bg-background text-on-background min-h-screen">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[rgba(252,249,248,0.8)] backdrop-blur-xl flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Editorial</span>
        </div>
        <div className="flex items-center gap-6">
          <Icon name="favorite_border" className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full cursor-pointer transition-colors" />
          <Icon name="chat_bubble" className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full cursor-pointer transition-colors" />
          <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyb_awGAWsXMdXAmuIuRcloJwzNNOaHGOKZi0c-sul0o3QI2kfw4TkKhgsRUAoVrV7U1WcK2AvK-XQzx3Am1YdUTz2vSjhlp9A1eflJWLv9wfkzOxVgneAp1RKDpW2Q3_cnBvheeCNwlJciH1SgAKaAYVRsAvzR6inf570FDXxBqe6h44mfAsAJlHA4Od0EzmnPXL5ZtfxVO_rBYNU3LWn_SKwm9b17Sh98h8IUZmja72DcTc93mbBuFpX5TYxg2E6lpspz0EHHvtf" className="w-8 h-8 rounded-full object-cover border border-outline-variant/15" />
        </div>
      </nav>

      <div className="pt-24 pb-12 flex justify-center px-4">
        <main className="w-full max-w-[935px] flex flex-col md:flex-row gap-0 bg-surface-lowest rounded-xl overflow-hidden shadow-[0_12px_32px_rgba(27,28,28,0.06)] ring-1 ring-outline-variant/15">
          {/* Side Nav */}
          <aside className="w-full md:w-64 bg-surface-container-low md:bg-surface-lowest border-b md:border-b-0 md:border-r border-outline-variant/15 flex flex-col py-6">
            <div className="px-6 mb-6">
              <h1 className="text-xl font-bold text-on-surface">Settings</h1>
            </div>
            <nav className="flex flex-col gap-y-1 px-3">
              {settingsNav.map((item) => {
                const to = item.label === 'Appearance' ? '/settings/theme' : item.label === 'Edit Profile' ? '/settings/account' : item.label === 'Privacy & Security' ? '/settings/privacy' : '/settings/account';
                return (
                  <NavLink
                    key={item.name}
                    to={to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-primary font-bold bg-surface-container-low'
                          : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`
                    }
                  >
                    <Icon name={item.name} className="text-[22px]" />
                    <span className="text-sm">{item.label}</span>
                  </NavLink>
                );
              })}
              <div className="mt-8 pt-8 border-t border-outline-variant/15 px-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Support</span>
                <NavLink className="flex items-center gap-3 py-3 text-on-surface-variant hover:text-on-surface transition-colors mt-2" to="/settings/account">
                  <span className="text-sm font-medium">Help Center</span>
                </NavLink>
              </div>
            </nav>
          </aside>

          {/* Content */}
          <section className="flex-1 p-8 md:p-12">
            <header className="mb-10">
              <h2 className="text-2xl font-semibold mb-2">Appearance</h2>
              <p className="text-on-surface-variant text-sm">Customize how Editorial looks on your device. Choose a theme that fits your mood.</p>
            </header>

            {/* Theme Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {themes.map((theme, i) => (
                <label key={i} className="relative cursor-pointer group">
                  <input defaultChecked={theme.selected} className="peer sr-only" name="theme" type="radio" />
                  <div className={`w-full aspect-[4/5] rounded-xl overflow-hidden mb-3 transition-all ${
                    theme.name === 'Light Mode'
                      ? 'bg-background border-2 border-primary ring-4 ring-primary/10'
                      : theme.name === 'Dark Mode'
                      ? 'bg-[#303030] border-2 border-transparent'
                      : 'bg-gradient-to-r from-background to-[#303030] border-2 border-transparent'
                  }`}>
                    {theme.name === 'Light Mode' && (
                      <div className="h-4 bg-surface-container-highest/30 mb-2 mt-4 mx-4 rounded w-1/2" />
                    )}
                    {theme.name === 'Dark Mode' && (
                      <div className="h-4 bg-white/10 mb-2 mt-4 mx-4 rounded w-1/2" />
                    )}
                    <div className={`space-y-2 px-4 ${theme.name === 'Dark Mode' ? '' : ''}`}>
                      <div className={`h-20 rounded-lg shadow-sm ${theme.name === 'Dark Mode' ? 'bg-white/5' : 'bg-surface-lowest'}`} />
                      <div className={`h-20 rounded-lg shadow-sm ${theme.name === 'Dark Mode' ? 'bg-white/5' : 'bg-surface-lowest'}`} />
                    </div>
                    {theme.name === 'System' && (
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-background h-full p-4">
                          <div className="h-3 bg-surface-container-highest/30 mb-2 rounded" />
                          <div className="h-16 bg-surface-lowest rounded shadow-sm" />
                        </div>
                        <div className="w-1/2 bg-[#303030] h-full p-4">
                          <div className="h-3 bg-white/10 mb-2 rounded" />
                          <div className="h-16 bg-white/5 rounded" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-sm ${theme.selected ? 'font-semibold' : 'font-medium group-hover:text-on-surface'}`}>
                      {theme.name}
                    </span>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      theme.selected ? 'border-primary' : 'border-outline-variant'
                    }`}>
                      {theme.selected && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                    </div>
                  </div>
                </label>
              ))}
            </div>

            {/* Accent Color */}
            <div className="pt-8 border-t border-outline-variant/15">
              <h3 className="text-lg font-semibold mb-6">Primary Accent</h3>
              <div className="flex flex-wrap gap-4">
                {accentColors.map((accent, i) => (
                  <button
                    key={i}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform active:scale-95 duration-200 ${
                      accent.selected
                        ? `bg-gradient-to-r ${accent.color} ring-4 ring-primary/20`
                        : accent.color === 'bg-blue-500'
                        ? 'bg-blue-500 hover:scale-105 shadow-sm'
                        : accent.color === 'bg-emerald-500'
                        ? 'bg-emerald-500 hover:scale-105 shadow-sm'
                        : accent.color === 'bg-amber-500'
                        ? 'bg-amber-500 hover:scale-105 shadow-sm'
                        : 'bg-rose-500 hover:scale-105 shadow-sm'
                    }`}
                  >
                    {accent.selected && <Icon name="check" className="text-white text-lg" filled />}
                  </button>
                ))}
                <button className="w-12 h-12 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
                  <Icon name="add" className="text-xl" />
                </button>
              </div>
              <p className="mt-4 text-xs text-on-surface-variant italic">
                The selected accent will be applied to buttons, active states, and focus indicators across the app.
              </p>
            </div>

            {/* Actions */}
            <div className="mt-12 pt-8 border-t border-outline-variant/15 flex justify-end gap-4">
              <button className="px-6 py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-medium hover:bg-surface-container-high transition-colors">Discard</button>
              <button className="px-8 py-2.5 rounded-lg bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">Save Changes</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
