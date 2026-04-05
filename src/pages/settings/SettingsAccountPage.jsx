import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'person', label: 'Edit Profile', to: '/settings/account', active: true },
  { name: 'lock', label: 'Change Password', to: '/settings/account' },
  { name: 'notifications', label: 'Email Notifications', to: '/settings/account' },
  { name: 'verified_user', label: 'Privacy and Security', to: '/settings/privacy' },
];

export function SettingsAccountPage() {
  return (
    <div className="min-h-screen bg-background text-on-background antialiased">
      {/* Top Nav */}
      <header className="bg-[#fcf9f8]/80 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Editorial</span>
            <div className="hidden md:flex items-center bg-surface-container-highest px-4 py-2 rounded-lg gap-2">
              <Icon name="search" className="text-on-surface-variant text-lg" />
              <input className="bg-transparent border-none focus:ring-0 text-sm w-64 text-on-surface" placeholder="Search" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Icon name="favorite_border" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
            <div className="relative">
              <Icon name="chat_bubble" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
            </div>
            <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj57_kcKIaQqupU6OchQ3RYjouOfYiAkKcKHcqjh9mdxeUmkDx5pYFouJfwswBXMk2ICK1SWGNdFVcKcYNTH7mTML5-1lETY0JUjt5RTX5OgwfSY9GU-pOG_oASrj0U1X6VwStkNe_kcdzTmH3SSMie1jkjHMAI23LKujUt4yTKfc7xjz4uUkGOh-XRMz9yquF657TMQOZykn8DrFR2-e_x8uHeEajTDk3yTbcu-wPap1Ljwu0t7QW7cnNbxwZcuvCuawlY0lrD_hm" className="w-8 h-8 rounded-full object-cover ring-2 ring-outline-variant/20 cursor-pointer" />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 min-h-screen px-4 md:px-6">
        <div className="max-w-[935px] mx-auto flex flex-col md:flex-row bg-surface-lowest rounded-xl overflow-hidden shadow-sm ring-1 ring-outline-variant/10">
          {/* Side Nav */}
          <nav className="w-full md:w-[240px] bg-surface-container-low/30 md:border-r border-outline-variant/20 flex flex-col p-6 gap-y-1">
            <div className="mb-6 hidden md:block">
              <h2 className="text-lg font-bold">Settings</h2>
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-primary font-bold bg-[#f6f3f2]'
                      : 'text-on-surface-variant hover:bg-[#f6f3f2]'
                  }`
                }
              >
                <Icon name={item.name} />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            ))}
            <div className="mt-auto pt-8">
              <NavLink className="flex items-center gap-3 px-4 py-3 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-all duration-200" to="/settings/account">
                <span className="text-sm">Account Center</span>
              </NavLink>
            </div>
          </nav>

          {/* Content */}
          <section className="flex-1 p-8 md:p-12">
            <div className="max-w-[500px]">
              {/* Profile Header */}
              <div className="flex items-center gap-6 mb-10">
                <div className="relative group">
                  <img
                    alt="Profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNKWU1BE8umsSWTE-awKaKChtuZiX7pQTVq5mYycAQFlVT_jBsvNGBxpQDMXBVgC7eGeh31VBPRB-uuIX7ZHbkKAUo6h7GrT_g-sJWpeCRPPKsvOw0RZB8Tnr-lnFTEV6lRP9-LEqrluzxBno5hgh-sJPM6XRUvNeUrJN2FccJZxqS324ngqevevKt7x5nTZPoR2YH85PjKktYtKvoLfDVwgDcta_6-7LB8q26jGCmaJz90m_aIJWzp6CaOVO1LYf03aG-78oiWD3l"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Icon name="photo_camera" className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">sarah_creative</h3>
                  <button className="text-primary text-sm font-bold hover:text-secondary transition-colors">Change profile photo</button>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Name</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm" type="text" defaultValue="Sarah Jenkins" />
                  <p className="text-xs text-on-surface-variant">Help people discover your account by using the name you're known by.</p>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Username</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm" type="text" defaultValue="sarah_creative" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Website</label>
                  <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm" type="url" defaultValue="https://editorial.lens/sarah" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold">Bio</label>
                  <textarea className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm resize-none" rows="3">Visual storyteller & Editorial director based in London. Exploring the intersection of digital art and heritage.</textarea>
                  <div className="flex justify-end"><span className="text-xs text-on-surface-variant">86 / 150</span></div>
                </div>

                <div className="pt-6 border-t border-outline-variant/10 space-y-6">
                  <div>
                    <h4 className="text-on-surface-variant font-bold text-xs uppercase tracking-wider mb-4">Personal Information</h4>
                    <p className="text-xs text-on-surface-variant mb-6">Provide your personal information, even if the account is used for a business.</p>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold">Email</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm" type="email" defaultValue="sarah.jenkins@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold">Phone Number</label>
                    <input className="w-full bg-surface-container-low border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm" type="tel" defaultValue="+44 20 7123 4567" />
                  </div>
                </div>

                <div className="pt-6">
                  <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary/20 active:scale-95 transition-all" type="submit">
                    Submit Changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface/80 backdrop-blur-md z-50 px-6 h-16 flex justify-between items-center border-t border-outline-variant/10">
        <Icon name="home" className="text-on-surface-variant" filled />
        <Icon name="search" className="text-on-surface-variant" />
        <Icon name="movie" className="text-on-surface-variant" />
        <Icon name="add_box" className="text-on-surface-variant" />
        <div className="p-0.5 rounded-full ring-2 ring-primary">
          <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZPBoiyBhzG0xqBMrxJFtfjeU_qefkZ4z9Wc05AGWR1HbKkq6VS0IhevIS8pypigbOeEUAgjQOetw53OIzn-Rg8evaLqBVKmi1yl-OmZiBCXYWBv4KmKcUG03tEkZoYJGwN5gfcYhjcF5kgJ5hvRaaC0c8sUt722a-rSmBNnFD2nOxYtzAvFlZ-KspTMY-F4Zq_QxZptMGgw8J8QJ4_iQLS11Cf6HkSmf-GCGSCDLr3lhPQt5ZHqNIwxzlvWpJcZTpo559wK9mR9eL" className="w-6 h-6 rounded-full object-cover" />
        </div>
      </nav>
    </div>
  );
}
