import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const navItems = [
  { name: 'person', label: 'Edit Profile', to: '/profile/edit', active: true },
  { name: 'lock', label: 'Change Password', to: '/settings/change-password' },
  { name: 'verified_user', label: 'Privacy and Security', to: '/settings/privacy' },
];

export function SettingsAccountPage() {
  return (
    <MainLayout activeTab="settings" showSearch={false}>
      <div className="max-w-[1500px] mx-auto p-6 -mt-18">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex">
          {/* Left settings nav */}
          <nav className="w-64 p-6 border-r border-gray-100 hidden md:flex flex-col gap-2">
            <h2 className="text-xl font-bold text-gray-800">Settings</h2>
            <p className="text-xs text-gray-400">Manage your account</p>
            <div className="mt-4 flex flex-col gap-2">
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
            </div>
          </nav>

          {/* Content */}
          <section className="flex-1 p-8 md:p-12">
            <div className="max-w-[900px]">
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
                  <button className="text-[#E1306C] text-sm font-semibold hover:text-[#833AB4] transition-colors">Change profile photo</button>
                </div>
              </div>

              {/* Form - Instagram Style */}
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Name</label>
                  <input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" type="text" defaultValue="Sarah Jenkins" />
                  <p className="text-xs text-gray-400">Help people discover your account by using the name you're known by.</p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Username</label>
                  <input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" type="text" defaultValue="sarah_creative" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Website</label>
                  <input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" type="url" defaultValue="https://editorial.lens/sarah" />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Bio</label>
                  <textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm resize-none" rows="3">Visual storyteller & Editorial director based in London. Exploring the intersection of digital art and heritage.</textarea>
                  <div className="flex justify-end"><span className="text-xs text-gray-400">86 / 150</span></div>
                </div>

                <div className="pt-6 border-t border-gray-100 space-y-6">
                  <div>
                    <h4 className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-4">Personal Information</h4>
                    <p className="text-xs text-gray-400 mb-6">Provide your personal information, even if the account is used for a business.</p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" type="email" defaultValue="sarah.jenkins@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <input className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 text-gray-800 text-sm" type="tel" defaultValue="+44 20 7123 4567" />
                  </div>
                </div>

                <div className="pt-6">
                  <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#E1306C]/20 active:scale-95 transition-all duration-200" type="submit">Submit Changes</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}