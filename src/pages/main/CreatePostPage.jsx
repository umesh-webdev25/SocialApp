import { Icon } from '../../components/shared';
import { NavLink, Link } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const navItems = [
  { name: 'home', label: 'Home', to: '/home' },
  { name: 'explore', label: 'Explore', to: '/explore' },
  { name: 'add_box', label: 'Create', to: '/create', active: true },
  { name: 'chat', label: 'Messages', to: '/messages' },
  { name: 'person', label: 'Profile', to: '/profile' },
];

const bottomNav = ['home', 'search', 'add_circle', 'favorite_border', 'account_circle'];

export function CreatePostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Sidebar (Desktop) - Instagram Style */}
      <nav className="fixed left-0 top-0 hidden md:flex flex-col p-6 h-full bg-white/95 backdrop-blur-sm w-64 border-r border-gray-100 z-50 shadow-xl">
        <div className="mb-10 px-4">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
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
            <h1 className={`text-2xl font-extrabold tracking-tight ${brandGradient}`}>NEXUS</h1>
          </div>
          <p className="text-xs text-gray-400 mt-1">Share your story</p>
        </div>
        
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                }`
              }
            >
              <Icon name={item.name} filled={item.active} className="text-xl" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
        
        <div className="mt-auto px-4">
          <button className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-bold py-3 px-4 rounded-xl active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
            New Post
          </button>
        </div>
      </nav>

      {/* Main Canvas */}
      <main className="md:ml-64 min-h-screen flex items-center justify-center p-4 md:p-8 relative z-10">
        {/* Post Creation Card */}
        <div className="bg-white/95 backdrop-blur-sm w-full max-w-[960px] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-gray-100">
          
          {/* Left Column - Media Upload */}
          <div className="w-full md:w-3/5 bg-gradient-to-br from-gray-50 to-white aspect-square md:aspect-auto flex flex-col items-center justify-center relative p-8 border-r border-gray-100">
            <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#E1306C]/30 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon name="photo_library" className="text-4xl text-[#E1306C]" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">Drag photos and videos here</p>
                <p className="text-sm text-gray-400 mt-1">High-resolution content preferred</p>
              </div>
              <button className="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold rounded-xl text-sm hover:shadow-lg active:scale-95 transition-all duration-200">
                Select from computer
              </button>
            </div>
          </div>

          {/* Right Column - Metadata */}
          <div className="w-full md:w-2/5 flex flex-col h-full bg-white">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-sm font-bold tracking-tight uppercase text-gray-500">Create New Post</h2>
              <button className="text-[#E1306C] font-semibold text-sm hover:text-[#833AB4] transition-colors">
                Drafts
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* User Profile */}
              <div className="p-4 flex items-center gap-3 border-b border-gray-100">
                <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[2px]">
                  <div className="bg-white rounded-full p-[1px]">
                    <img
                      alt="User Avatar"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAomtc7Xyo-KS9BGkHPJhvwCHpS08sw7Wyh62a_VBPVjA1RxFYqsBQpHkllZivAJdfEBMyifeAonodbutXdvak3xyZGWq6JnpKrC1oMLzggYmwU509SLBnLKGXTE8mNrEMwE7V7LOJTWn07zj05ru6gSw5xpZiW48mcyobxd_2geglSH1svq-7qzZd3HMJtn0x1qetGZcfidS7HbRyOnyaa4aWs1wnjXu3a7cq31B0h5-3MqD_9uTp-qTKA9kJLNnvFItJW8ypxwLrF"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                </div>
                <span className="font-semibold text-sm text-gray-900">alexandra_vogue</span>
              </div>

              {/* Caption */}
              <div className="p-4">
                <textarea 
                  className="w-full h-32 bg-transparent border-none focus:outline-none focus:ring-0 resize-none text-sm placeholder:text-gray-400 text-gray-800 p-0" 
                  placeholder="Write a caption..." 
                />
              </div>

              {/* Interactions */}
              <div className="px-4 flex items-center justify-between py-2 mb-2">
                <Icon name="sentiment_satisfied" className="text-gray-400 hover:text-[#E1306C] cursor-pointer transition-colors text-xl" />
                <span className="text-[10px] text-gray-400 font-medium">0/2200</span>
              </div>

              {/* Options */}
              <div className="flex flex-col">
                {[
                  { icon: 'location_on', placeholder: 'Add location', chevron: true },
                  { icon: 'person_add', placeholder: 'Tag people', chevron: true },
                  { icon: 'settings', label: 'Advanced settings', sublabel: 'Accessibility, Comments, Alt text', chevron: true },
                ].map((option, i) => (
                  <div key={i} className="px-4 py-3 flex items-center justify-between border-t border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3 flex-1">
                      <Icon name={option.icon} className="text-gray-400 group-hover:text-[#E1306C] transition-colors text-xl" />
                      <div>
                        <span className="text-sm text-gray-800">{option.placeholder || option.label}</span>
                        {option.sublabel && (
                          <p className="text-[10px] text-gray-400 mt-0.5">{option.sublabel}</p>
                        )}
                      </div>
                    </div>
                    {option.chevron && <Icon name="chevron_right" className="text-gray-300 text-lg" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 mt-auto border-t border-gray-100">
              <button className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold py-3.5 rounded-xl active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
                Share Post
              </button>
              <p className="text-center text-[10px] text-gray-400 mt-3 px-4">
                By sharing, you agree to our Content Guidelines and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Tip - Instagram Style */}
        <div className="fixed bottom-10 right-10 hidden xl:block">
          <div className="bg-white/80 backdrop-blur-xl p-5 rounded-2xl border border-gray-100 shadow-2xl max-w-[220px]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#E1306C]">Pro Tip</p>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              High contrast and intentional whitespace help your content stand out in the feed.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Nav (Mobile) - Instagram Style */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 bg-white/95 backdrop-blur-md flex justify-around items-center px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border-t border-gray-100">
        {bottomNav.map((name, i) => {
          const to = name === 'home' ? '/home' : name === 'search' ? '/explore' : name === 'add_circle' ? '/create' : name === 'favorite_border' ? '/notifications' : '/profile';
          const isActive = name === 'add_circle';
          return (
            <Link
              key={i}
              className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 ${
                isActive ? 'text-[#E1306C]' : 'text-gray-500 hover:text-[#E1306C]'
              }`}
              to={to}
            >
              <Icon name={name} filled={isActive} className="text-2xl" />
              <span className="text-[9px] uppercase tracking-wider font-semibold mt-1">
                {name === 'add_circle' ? 'Create' : name === 'account_circle' ? 'Profile' : name === 'search' ? 'Search' : name === 'favorite_border' ? 'Activity' : 'Home'}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}