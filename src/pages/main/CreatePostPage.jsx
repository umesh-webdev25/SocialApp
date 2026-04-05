import { Icon } from '../../components/shared';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { name: 'home', label: 'Home', to: '/home' },
  { name: 'explore', label: 'Explore', to: '/explore' },
  { name: 'add_box', label: 'Create', to: '/create', active: true },
  { name: 'mail', label: 'Messages', to: '/messages' },
  { name: 'person', label: 'Profile', to: '/profile' },
];

const bottomNav = ['home', 'search', 'add_circle', 'favorite_border', 'account_circle'];

export function CreatePostPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Sidebar (Desktop) */}
      <nav className="fixed left-0 top-0 hidden md:flex flex-col p-6 h-full bg-[#fcf9f8] w-64 border-r-0 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-xl font-bold text-primary">Editorial</h1>
          <p className="text-xs text-on-surface-variant opacity-70">The Lens</p>
        </div>
        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-lg transition-colors font-sans text-sm tracking-tight ${
                  isActive
                    ? 'text-primary font-semibold bg-white'
                    : 'text-[#5a4045] hover:bg-[#f6f3f2]'
                }`
              }
            >
              <Icon name={item.name} filled={item.active} />
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="mt-auto px-4">
          <button className="w-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-bold py-3 px-4 rounded-lg active:opacity-80 transition-opacity font-sans text-sm shadow-lg shadow-primary/20">
            New Post
          </button>
        </div>
      </nav>

      {/* Main Canvas */}
      <main className="md:ml-64 min-h-screen flex items-center justify-center p-4 md:p-8">
        {/* Post Creation Card */}
        <div className="bg-surface-lowest w-full max-w-[960px] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_12px_32px_rgba(27,28,28,0.06)] border border-outline-variant/10">
          {/* Left Column - Media Upload */}
          <div className="w-full md:w-3/5 bg-surface-container-low aspect-square md:aspect-auto flex flex-col items-center justify-center relative p-8 border-r border-outline-variant/5">
            <div className="w-full h-full border-2 border-dashed border-outline-variant/30 rounded-xl flex flex-col items-center justify-center gap-4 hover:bg-surface-container-high transition-colors cursor-pointer group">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:scale-110 transition-transform">
                <Icon name="photo_library" className="text-4xl" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-on-surface">Drag photos and videos here</p>
                <p className="text-sm text-on-surface-variant mt-1">High-resolution editorial content preferred</p>
              </div>
              <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg text-sm hover:opacity-90 active:scale-95 transition-all">
                Select from computer
              </button>
            </div>
          </div>

          {/* Right Column - Metadata */}
          <div className="w-full md:w-2/5 flex flex-col h-full bg-surface-lowest">
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-outline-variant/5">
              <h2 className="text-sm font-bold tracking-tight uppercase text-on-surface-variant/80">Create New Post</h2>
              <button className="text-primary font-bold text-sm hover:opacity-70 transition-opacity">Drafts</button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {/* User Profile */}
              <div className="p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary p-[2px]">
                  <img
                    alt="User Avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAomtc7Xyo-KS9BGkHPJhvwCHpS08sw7Wyh62a_VBPVjA1RxFYqsBQpHkllZivAJdfEBMyifeAonodbutXdvak3xyZGWq6JnpKrC1oMLzggYmwU509SLBnLKGXTE8mNrEMwE7V7LOJTWn07zj05ru6gSw5xpZiW48mcyobxd_2geglSH1svq-7qzZd3HMJtn0x1qetGZcfidS7HbRyOnyaa4aWs1wnjXu3a7cq31B0h5-3MqD_9uTp-qTKA9kJLNnvFItJW8ypxwLrF"
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
                <span className="font-bold text-sm">alexandra_vogue</span>
              </div>

              {/* Caption */}
              <div className="px-4">
                <textarea className="w-full h-40 bg-transparent border-none focus:ring-0 resize-none text-sm placeholder:text-on-surface-variant/50 p-0" placeholder="Write a caption..." />
              </div>

              {/* Interactions */}
              <div className="px-4 flex items-center justify-between py-2 mb-4">
                <Icon name="sentiment_satisfied" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
                <span className="text-[10px] text-on-surface-variant/40 font-medium">0/2200</span>
              </div>

              {/* Options */}
              <div className="flex flex-col">
                {[
                  { icon: 'location_on', placeholder: 'Add location', chevron: true },
                  { icon: 'person_add', placeholder: 'Tag people', chevron: true },
                  { icon: 'settings', label: 'Advanced settings', sublabel: 'Accessibility, Comments, Alt text', chevron: true },
                ].map((option, i) => (
                  <div key={i} className="px-4 py-3 flex items-center justify-between border-t border-outline-variant/5 hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3 flex-1">
                      <Icon name={option.icon} className="text-on-surface-variant group-hover:text-primary transition-colors" />
                      <span className="text-sm text-on-surface">{option.placeholder || option.label}</span>
                    </div>
                    {option.chevron && <Icon name="chevron_right" className="text-on-surface-variant/40" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 mt-auto">
              <button className="w-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white font-bold py-3.5 rounded-xl active:scale-[0.98] transition-all shadow-xl shadow-primary/20">
                Share Post
              </button>
              <p className="text-center text-[10px] text-on-surface-variant/40 mt-3 px-4">
                By sharing, you agree to our Editorial Content Guidelines and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Tip */}
        <div className="fixed bottom-10 right-10 hidden xl:block">
          <div className="bg-surface-lowest/40 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl max-w-[200px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Editorial Tip</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              High contrast and intentional whitespace help your content stand out in the feed.
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-2xl bg-[#fcf9f8]/80 backdrop-blur-md flex justify-around items-center px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] border-t border-outline-variant/10">
        {bottomNav.map((name, i) => {
          const to = name === 'home' ? '/home' : name === 'search' ? '/explore' : name === 'add_circle' ? '/create' : name === 'favorite_border' ? '/notifications' : '/profile';
          return (
            <Link
              key={i}
              className={`flex flex-col items-center justify-center text-[#5a4045] active:scale-90 transition-transform ${
                name === 'add_circle' ? 'text-primary' : ''
              }`}
              to={to}
            >
              <Icon name={name} filled={name === 'add_circle'} />
              <span className="text-[10px] uppercase tracking-widest font-bold mt-1">
                {name === 'add_circle' ? 'Add' : name === 'account_circle' ? 'Profile' : name === 'search' ? 'Search' : name === 'favorite_border' ? 'Activity' : 'Home'}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
