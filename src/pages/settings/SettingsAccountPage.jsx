import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const navItems = [
  { name: 'person', label: 'Edit Profile', to: '/settings/account', active: true },
  { name: 'lock', label: 'Change Password', to: '/settings/account' },
  { name: 'notifications', label: 'Email Notifications', to: '/settings/account' },
  { name: 'verified_user', label: 'Privacy and Security', to: '/settings/privacy' },
];

export function SettingsAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] antialiased">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Nav - Instagram Style */}
      <header className="bg-white/80 backdrop-blur-md fixed top-0 w-full z-50 border-b border-gray-100">
        <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
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
            <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-2 gap-2 border border-gray-100 focus-within:border-[#E1306C]/30 focus-within:ring-2 focus-within:ring-[#E1306C]/30 transition-all duration-200">
              <Icon name="search" className="text-gray-400 text-lg" />
              <input className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-64 text-gray-800 placeholder:text-gray-400" placeholder="Search" type="text" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Icon name="favorite_border" className="text-gray-600 hover:text-[#E1306C] cursor-pointer transition-colors text-2xl" />
            <div className="relative">
              <Icon name="chat_bubble" className="text-gray-600 hover:text-[#E1306C] cursor-pointer transition-colors text-2xl" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E1306C] rounded-full" />
            </div>
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj57_kcKIaQqupU6OchQ3RYjouOfYiAkKcKHcqjh9mdxeUmkDx5pYFouJfwswBXMk2ICK1SWGNdFVcKcYNTH7mTML5-1lETY0JUjt5RTX5OgwfSY9GU-pOG_oASrj0U1X6VwStkNe_kcdzTmH3SSMie1jkjHMAI23LKujUt4yTKfc7xjz4uUkGOh-XRMz9yquF657TMQOZykn8DrFR2-e_x8uHeEajTDk3yTbcu-wPap1Ljwu0t7QW7cnNbxwZcuvCuawlY0lrD_hm" className="w-8 h-8 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 min-h-screen px-4 md:px-6 relative z-10">
        <div className="max-w-[935px] mx-auto flex flex-col md:flex-row bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          
          {/* Side Nav - Instagram Style */}
          <nav className="w-full md:w-[240px] bg-gradient-to-br from-gray-50 to-white md:border-r border-gray-100 flex flex-col p-6 gap-y-1">
            <div className="mb-6 hidden md:block">
              <h2 className="text-xl font-bold text-gray-800">Settings</h2>
              <p className="text-xs text-gray-400 mt-1">Manage your account</p>
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
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
            ))}
            <div className="mt-auto pt-8">
              <NavLink className="flex items-center gap-3 px-4 py-3 text-[#E1306C] font-semibold hover:bg-[#E1306C]/5 rounded-xl transition-all duration-200" to="/settings/account">
                <span className="text-sm">Account Center</span>
              </NavLink>
            </div>
          </nav>

          {/* Content - Instagram Style */}
          <section className="flex-1 p-8 md:p-12">
            <div className="max-w-[500px]">
              {/* Profile Header */}
              <div className="flex items-center gap-6 mb-10">
                <div className="relative group">
                  <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[2px]">
                    <div className="bg-white rounded-full p-[1px]">
                      <img
                        alt="Profile"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNKWU1BE8umsSWTE-awKaKChtuZiX7pQTVq5mYycAQFlVT_jBsvNGBxpQDMXBVgC7eGeh31VBPRB-uuIX7ZHbkKAUo6h7GrT_g-sJWpeCRPPKsvOw0RZB8Tnr-lnFTEV6lRP9-LEqrluzxBno5hgh-sJPM6XRUvNeUrJN2FccJZxqS324ngqevevKt7x5nTZPoR2YH85PjKktYtKvoLfDVwgDcta_6-7LB8q26jGCmaJz90m_aIJWzp6CaOVO1LYf03aG-78oiWD3l"
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Icon name="photo_camera" className="text-white text-xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">sarah_creative</h3>
                  <button className="text-[#E1306C] text-sm font-semibold hover:text-[#833AB4] transition-colors">
                    Change profile photo
                  </button>
                </div>
              </div>

              {/* Form - Instagram Style */}
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Name</label>
                  <input 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" 
                    type="text" 
                    defaultValue="Sarah Jenkins" 
                  />
                  <p className="text-xs text-gray-400">Help people discover your account by using the name you're known by.</p>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Username</label>
                  <input 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" 
                    type="text" 
                    defaultValue="sarah_creative" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Website</label>
                  <input 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" 
                    type="url" 
                    defaultValue="https://editorial.lens/sarah" 
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Bio</label>
                  <textarea 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm resize-none" 
                    rows="3"
                  >Visual storyteller & Editorial director based in London. Exploring the intersection of digital art and heritage.</textarea>
                  <div className="flex justify-end">
                    <span className="text-xs text-gray-400">86 / 150</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-6">
                  <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-4">Personal Information</h4>
                    <p className="text-xs text-gray-400 mb-6">Provide your personal information, even if the account is used for a business.</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <input 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" 
                      type="email" 
                      defaultValue="sarah.jenkins@example.com" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <input 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" 
                      type="tel" 
                      defaultValue="+44 20 7123 4567" 
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#E1306C]/20 active:scale-95 transition-all duration-200" 
                    type="submit"
                  >
                    Submit Changes
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Nav (Mobile) - Instagram Style */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md z-50 px-6 h-16 flex justify-between items-center border-t border-gray-100">
        <NavLink to="/home" className="text-gray-500 hover:text-[#E1306C] transition-colors">
          <Icon name="home" className="text-2xl" />
        </NavLink>
        <NavLink to="/explore" className="text-gray-500 hover:text-[#E1306C] transition-colors">
          <Icon name="search" className="text-2xl" />
        </NavLink>
        <NavLink to="/explore" className="text-gray-500 hover:text-[#E1306C] transition-colors">
          <Icon name="movie" className="text-2xl" />
        </NavLink>
        <NavLink to="/create" className="text-gray-500 hover:text-[#E1306C] transition-colors">
          <Icon name="add_box" className="text-2xl" />
        </NavLink>
        <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
          <div className="bg-white rounded-full p-[1px]">
            <img alt="User" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZPBoiyBhzG0xqBMrxJFtfjeU_qefkZ4z9Wc05AGWR1HbKkq6VS0IhevIS8pypigbOeEUAgjQOetw53OIzn-Rg8evaLqBVKmi1yl-OmZiBCXYWBv4KmKcUG03tEkZoYJGwN5gfcYhjcF5kgJ5hvRaaC0c8sUt722a-rSmBNnFD2nOxYtzAvFlZ-KspTMY-F4Zq_QxZptMGgw8J8QJ4_iQLS11Cf6HkSmf-GCGSCDLr3lhPQt5ZHqNIwxzlvWpJcZTpo559wK9mR9eL" className="w-6 h-6 rounded-full object-cover" />
          </div>
        </div>
      </nav>
    </div>
  );
}