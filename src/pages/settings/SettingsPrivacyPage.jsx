import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

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
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] font-sans antialiased">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Bar - Instagram Style */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 h-16 border-b border-gray-100">
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
          <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-1.5 border border-gray-100 focus-within:border-[#E1306C]/30 focus-within:ring-2 focus-within:ring-[#E1306C]/30 transition-all duration-200">
            <Icon name="search" className="text-gray-400 text-sm mr-2" />
            <input className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-48 placeholder:text-gray-400 text-gray-800" placeholder="Search" type="text" />
          </div>
        </div>
        <nav className="flex items-center gap-5">
          <Icon name="favorite_border" className="text-gray-600 hover:text-[#E1306C] p-2 rounded-full cursor-pointer transition-colors text-2xl" />
          <Icon name="chat_bubble" className="text-gray-600 hover:text-[#E1306C] p-2 rounded-full cursor-pointer transition-colors text-2xl" />
          <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
            <div className="bg-white rounded-full p-[1px]">
              <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUKAw0PgWhzfgWd9g9328S_YVlV_iS37XgCeUnMNNiuY5mznY4BOGaaBByzJbbqIIKN8kKG5Tb3zKGBx0aoywAoBcnBu9Et1MGiW9755dEVcYfRg_KSBsjc0KyHIBouMlSVuFQ18L1uMYfwlUWgTeTEO1KlwinJpQTCxtupGfDDUpAeGEF4yNHOengtUuawDbk_j7nTYwXbmOq3HO3rsvYAZ64K94wGLUjW4XgG_cSX0oSM5HRDwqy7DxfoA25IdKauU6eCD1HrmQr" className="w-8 h-8 rounded-full object-cover" />
            </div>
          </div>
        </nav>
      </header>

      <div className="flex min-h-screen">
        {/* Side Nav (Desktop) - Instagram Style */}
        <aside className="hidden md:flex fixed left-0 h-full w-64 border-r border-gray-100 bg-white/95 backdrop-blur-sm flex-col p-6 gap-y-2 mt-16 shadow-xl">
          <nav className="flex flex-col gap-1">
            {sidebarNav.map((item, i) => (
              <NavLink
                key={i}
                to={item.to}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                      : 'font-medium text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:pl-64 pt-24 pb-12 px-4 flex justify-center min-h-screen w-full relative z-10">
          <div className="w-full max-w-[900px] flex gap-0 bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            
            {/* Settings Sub-Nav (Desktop) - Instagram Style */}
            <aside className="hidden lg:flex flex-col w-72 border-r border-gray-100 py-6">
              <h2 className="px-6 text-xl font-bold text-gray-800 mb-6">Settings</h2>
              <nav className="flex flex-col">
                {sidebarNav.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-6 py-3 text-sm rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                          : 'font-medium text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </aside>

            {/* Content Section - Instagram Style */}
            <section className="flex-1 p-8 md:p-12">
              <header className="mb-10">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Privacy and safety</h1>
                <p className="text-gray-500 text-sm">Manage who can see your content and how people can interact with you.</p>
              </header>

              <div className="space-y-12">
                {/* Account Privacy */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Account Privacy</h3>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-semibold text-gray-800">Private Account</p>
                      <p className="text-xs text-gray-500 mt-1 max-w-sm leading-relaxed">When your account is private, only people you approve can see your photos and videos.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input defaultChecked className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                    </label>
                  </div>
                </div>

                {/* Interactions */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Interactions</h3>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-semibold text-gray-800">Activity Status</p>
                      <p className="text-xs text-gray-500 mt-1 max-w-sm leading-relaxed">Allow accounts you follow and anyone you message to see when you were last active.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                    </label>
                  </div>
                  
                  <NavLink to="/settings/privacy#story-sharing" className="flex items-center justify-between py-3 group border-t border-gray-100">
                    <div>
                      <p className="font-semibold text-gray-800 group-hover:text-[#E1306C] transition-colors">Story Sharing</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Choose who can share your stories as a message.</p>
                    </div>
                    <Icon name="chevron_right" className="text-gray-400 text-xl" />
                  </NavLink>
                  
                  <NavLink to="/settings/privacy#comment-filtering" className="flex items-center justify-between py-3 group border-t border-gray-100">
                    <div>
                      <p className="font-semibold text-gray-800 group-hover:text-[#E1306C] transition-colors">Comment Filtering</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">Hide offensive comments and set manual keyword filters.</p>
                    </div>
                    <Icon name="chevron_right" className="text-gray-400 text-xl" />
                  </NavLink>
                </div>

                {/* Blocked Accounts */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Connections</h3>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold text-gray-800">Blocked Accounts</h4>
                      <span className="text-xs font-bold text-[#E1306C] cursor-pointer hover:text-[#833AB4] transition-colors">Add New</span>
                    </div>
                    <div className="space-y-4">
                      {blockedUsers.map((user, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                              <div className="bg-white rounded-full p-[1px]">
                                <img alt={user.name} src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
                              </div>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                              <p className="text-[10px] text-gray-400">Blocked {user.date}</p>
                            </div>
                          </div>
                          <button className="px-4 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-[#E1306C] transition-colors">
                            Unblock
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-6 border-t border-gray-100 mt-8">
                <button className="w-full py-3.5 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold rounded-xl active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
                  Save All Changes
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Bottom Nav (Mobile) - Instagram Style */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-md flex justify-around items-center h-16 z-50 border-t border-gray-100">
        {[
          { name: 'home', to: '/home' },
          { name: 'search', to: '/explore' },
          { name: 'add_box', to: '/create' },
          { name: 'movie', to: '/explore' },
          { name: 'settings', to: '/settings/account' }
        ].map((item, i) => (
          <NavLink 
            key={i} 
            to={item.to}
            className={({ isActive }) => 
              `transition-colors ${isActive || item.name === 'settings' ? 'text-[#E1306C]' : 'text-gray-500 hover:text-[#E1306C]'}`
            }
          >
            <Icon name={item.name} className="text-2xl" />
          </NavLink>
        ))}
      </nav>
    </div>
  );
}