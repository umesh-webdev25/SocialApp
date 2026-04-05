import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const sidebarNav = [
  { label: 'Edit Profile', to: '/settings/account' },
  { label: 'Professional account', to: '/settings/account' },
  { label: 'Privacy and safety', to: '/settings/privacy', active: true },
  { label: 'Security', to: '/settings/privacy' },
  { label: 'Notifications', to: '/settings/account' },
  { label: 'Ads', to: '/settings/account' },
  { label: 'Help', to: '/settings/account' },
];

const blockedUsers = [
  { name: 'shadow_walker', date: 'Nov 12, 2023', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHwOlu6I8uysW7Bh7IkUI0jk3Rqlzov2arYyKGQkWN_qsHJV6q47h2gGhcmMvnUvtLSNlIprHGVA3yz-o_NXWhAegMUccF7eaBao_IFb2-oM8IxXKy9ua9C5MFrdccfu9UKLUDyb7AyTuKMGXon91iPZNCQ75CcbSBxV6s9V1UMbOFOLCVzzxZV2jOp8OZOUKJCd9wKeFV4sYMp_p64LyU8beCT-5R4xZZE14HzvNSotncPLsSbRiwKaOTXzrR85vWdpKmEFheSnPQ' },
  { name: 'urban_legend_99', date: 'Oct 05, 2023', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBomfgcl_xP2ycPnxnmtGZ9MCOfNOrAT5AYUEdFgFAlFekKX_efKEh26F-JhBBm4I4rxK80sU7fLqy-w_zuyUBpDz-zStqtqIvEsef8ZvnLPLTjpXFsrenyFZPXhZaY6WrLxtxIj06zWywYcrC3N-ucElGECJJ1gvj8mKrEWV0R919ppnctFBTMyM5WitNOetNubKTc7sebUOAF-DUZU7807YTplCZ0qj63mYAtqSbtZIhSzCHUgF6acKpVamU4qZ2F0nxQ-axLErDg' },
];

export function SettingsPrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-sans antialiased">
      {/* Top Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-md flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Editorial</span>
          <div className="hidden md:flex items-center bg-surface-container-highest px-4 py-1.5 rounded-lg">
            <Icon name="search" className="text-on-surface-variant text-sm mr-2" />
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-on-surface-variant" placeholder="Search" type="text" />
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Icon name="favorite_border" className="text-[#5a4045] hover:bg-[#f6f3f2] p-2 rounded-full cursor-pointer transition-colors" />
          <Icon name="chat_bubble" className="text-[#5a4045] hover:bg-[#f6f3f2] p-2 rounded-full cursor-pointer transition-colors" />
          <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary">
            <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUKAw0PgWhzfgWd9g9328S_YVlV_iS37XgCeUnMNNiuY5mznY4BOGaaBByzJbbqIIKN8kKG5Tb3zKGBx0aoywAoBcnBu9Et1MGiW9755dEVcYfRg_KSBsjc0KyHIBouMlSVuFQ18L1uMYfwlUWgTeTEO1KlwinJpQTCxtupGfDDUpAeGEF4yNHOengtUuawDbk_j7nTYwXbmOq3HO3rsvYAZ64K94wGLUjW4XgG_cSX0oSM5HRDwqy7DxfoA25IdKauU6eCD1HrmQr" className="w-full h-full object-cover" />
          </div>
        </nav>
      </header>

      <div className="flex min-h-screen">
        {/* Side Nav (Desktop) */}
        <aside className="hidden md:flex fixed left-0 h-full w-64 border-r border-[#e4e2e1] bg-[#fcf9f8] flex-col p-6 gap-y-2 mt-16">
          <nav className="flex flex-col gap-1">
            {sidebarNav.map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `px-8 py-3 text-sm transition-colors ${
                    isActive
                      ? 'font-bold text-primary border-l-2 border-primary bg-surface-container-low'
                      : 'font-medium text-on-surface-variant hover:bg-surface-container-low'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:pl-64 pt-24 pb-12 px-4 flex justify-center min-h-screen w-full">
          <div className="w-full max-w-[900px] flex gap-0 bg-surface-lowest rounded-xl overflow-hidden shadow-sm ring-1 ring-outline-variant/20">
            {/* Settings Sub-Nav (Mobile) */}
            <aside className="hidden lg:flex flex-col w-72 border-r border-outline-variant/10 py-6">
              <h2 className="px-8 text-xl font-bold mb-6">Settings</h2>
              <nav className="flex flex-col">
                {sidebarNav.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-8 py-3 text-sm transition-colors ${
                        isActive
                          ? 'font-bold text-primary border-l-2 border-primary bg-surface-container-low'
                          : 'font-medium text-on-surface-variant hover:bg-surface-container-low'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <section className="flex-1 p-8 md:p-12">
              <header className="mb-10">
                <h1 className="text-2xl font-bold tracking-tight mb-2">Privacy and safety</h1>
                <p className="text-on-surface-variant text-sm">Manage who can see your content and how people can interact with you.</p>
              </header>

              <div className="space-y-12">
                {/* Account Privacy */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant/70">Account Privacy</h3>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-semibold">Private Account</p>
                      <p className="text-xs text-on-surface-variant mt-1 max-w-sm leading-relaxed">When your account is private, only people you approve can see your photos and videos.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                    </label>
                  </div>
                </div>

                {/* Interactions */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant/70">Interactions</h3>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-semibold">Activity Status</p>
                      <p className="text-xs text-on-surface-variant mt-1 max-w-sm leading-relaxed">Allow accounts you follow and anyone you message to see when you were last active.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
                    </label>
                  </div>
                  <NavLink to="/settings/privacy#story-sharing" className="flex items-center justify-between py-2 group">
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">Story Sharing</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Choose who can share your stories as a message.</p>
                    </div>
                    <Icon name="chevron_right" className="text-on-surface-variant" />
                  </NavLink>
                  <NavLink to="/settings/privacy#comment-filtering" className="flex items-center justify-between py-2 group">
                    <div>
                      <p className="font-semibold group-hover:text-primary transition-colors">Comment Filtering</p>
                      <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">Hide offensive comments and set manual keyword filters.</p>
                    </div>
                    <Icon name="chevron_right" className="text-on-surface-variant" />
                  </NavLink>
                </div>

                {/* Blocked Accounts */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-on-surface-variant/70">Connections</h3>
                  <div className="bg-surface-container-low rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold">Blocked Accounts</h4>
                      <span className="text-xs font-bold text-primary cursor-pointer hover:underline">Add New</span>
                    </div>
                    <div className="space-y-4">
                      {blockedUsers.map((user, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img alt={user.name} src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                              <p className="text-sm font-bold">{user.name}</p>
                              <p className="text-[10px] text-on-surface-variant">Blocked {user.date}</p>
                            </div>
                          </div>
                          <button className="px-4 py-1.5 text-xs font-bold text-on-surface-variant bg-surface-container-highest rounded-lg hover:bg-outline-variant/30 transition-colors">Unblock</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 border-t border-outline-variant/10">
                <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl active:scale-[0.98] transition-all shadow-lg shadow-primary/20">
                  Save All Changes
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#fcf9f8]/80 backdrop-blur-md flex justify-around items-center h-16 z-50">
        {['home', 'search', 'add_box', 'movie', 'settings'].map((name, i) => (
          <Icon key={i} name={name} className={name === 'settings' ? 'text-primary font-semibold' : 'text-[#5a4045]'} />
        ))}
      </nav>
    </div>
  );
}
