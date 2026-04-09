import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';
import { useState } from 'react';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const settingsNav = [
  { name: 'person', label: 'Edit Profile', to: '/profile/edit', icon: 'person' },
  { name: 'verified_user', label: 'Privacy & Security', to: '/settings/privacy', icon: 'verified_user', active: true },
  { name: 'palette', label: 'Appearance', to: '/settings/theme', icon: 'palette' },
  { name: 'work', label: 'Professional Account', to: '/settings/professional-account', icon: 'work' },
  { name: 'help', label: 'Help Center', to: '/settings/help', icon: 'help' },
];

const blockedUsers = [
  { id: 1, name: 'shadow_walker', date: 'Nov 12, 2023', reason: 'Spam', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHwOlu6I8uysW7Bh7IkUI0jk3Rqlzov2arYyKGQkWN_qsHJV6q47h2gGhcmMvnUvtLSNlIprHGVA3yz-o_NXWhAegMUccF7eaBao_IFb2-oM8IxXKy9ua9C5MFrdccfu9UKLUDyb7AyTuKMGXon91iPZNCQ75CcbSBxV6s9V1UMbOFOLCVzzxZV2jOp8OZOUKJCd9wKeFV4sYMp_p64LyU8beCT-5R4xZZE14HzvNSotncPLsSbRiwKaOTXzrR85vWdpKmEFheSnPQ' },
  { id: 2, name: 'urban_legend_99', date: 'Oct 05, 2023', reason: 'Harassment', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBomfgcl_xP2ycPnxnmtGZ9MCOfNOrAT5AYUEdFgFAlFekKX_efKEh26F-JhBBm4I4rxK80sU7fLqy-w_zuyUBpDz-zStqtqIvEsef8ZvnLPLTjpXFsrenyFZPXhZaY6WrLxtxIj06zWywYcrC3N-ucElGECJJ1gvj8mKrEWV0R919ppnctFBTMyM5WitNOetNubKTc7sebUOAF-DUZU7807YTplCZ0qj63mYAtqSbtZIhSzCHUgF6acKpVamU4qZ2F0nxQ-axLErDg' },
];

export function SettingsPrivacyPage() {
  const [isPrivate, setIsPrivate] = useState(true);
  const [showActivity, setShowActivity] = useState(false);
  const [showStorySharing, setShowStorySharing] = useState(true);
  const [showCommentFilter, setShowCommentFilter] = useState(true);

  return (
    <MainLayout activeTab="settings" showSearch={false}>
      <div className="max-w-[1200px] mx-auto p-4 md:p-6 -mt-12  ">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Privacy & Security</h1>
          <p className="text-gray-500 text-sm mt-1">Control your privacy settings and security preferences</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
          
          {/* Left Settings Nav - Improved Sidebar */}
          <nav className="w-full md:w-80 p-6 border-b md:border-b-0 md:border-r border-gray-100 bg-gradient-to-br from-gray-50/50 to-white">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
                <h2 className="text-xl font-bold text-gray-800">Settings</h2>
              </div>
              <p className="text-xs text-gray-400 ml-3">Customize your experience</p>
            </div>
            
            <div className="flex flex-row md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {settingsNav.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 whitespace-nowrap md:whitespace-normal group ${
                      isActive
                        ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                    }`
                  }
                >
                  <Icon name={item.icon} className="text-xl" />
                  <span className="text-sm font-medium flex-1">{item.label}</span>
                  {item.active && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E1306C]" />
                  )}
                </NavLink>
              ))}
            </div>

            {/* Support Section in Sidebar */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Support</p>
              <NavLink to="/settings/help" className="flex items-center gap-3 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#E1306C] transition-all duration-200">
                <Icon name="help_outline" className="text-xl" />
                <span className="text-sm font-medium">Help Center</span>
              </NavLink>
              <NavLink to="/settings/report" className="flex items-center gap-3 px-4 py-2 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#E1306C] transition-all duration-200">
                <Icon name="report" className="text-xl" />
                <span className="text-sm font-medium">Report a Problem</span>
              </NavLink>
            </div>
          </nav>

          {/* Content Section */}
          <section className="flex-1 p-6 md:p-10">
            <div className="max-w-[700px] mx-auto md:mx-0">
              <header className="mb-8 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="verified_user" className="text-2xl text-[#E1306C]" />
                  <h1 className="text-2xl font-bold text-gray-800">Privacy and safety</h1>
                </div>
                <p className="text-gray-500 text-sm ml-9">Manage who can see your content and how people can interact with you.</p>
              </header>

              <div className="space-y-10">
                {/* Account Privacy */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Account Privacy</h3>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Icon name="lock" className="text-[#E1306C] text-xl" />
                          <p className="font-semibold text-gray-800">Private Account</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 max-w-md leading-relaxed">When your account is private, only people you approve can see your photos, videos, and stories. Your existing followers won't be affected.</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input 
                          checked={isPrivate} 
                          onChange={(e) => setIsPrivate(e.target.checked)}
                          className="sr-only peer" 
                          type="checkbox" 
                        />
                        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                      </label>
                    </div>
                  </div>
                </div>

                {/* Interactions */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Interactions</h3>
                  </div>

                  <div className="space-y-3">
                    {/* Activity Status */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Icon name="history" className="text-[#E1306C] text-xl" />
                            <p className="font-semibold text-gray-800">Activity Status</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2 max-w-md leading-relaxed">Allow accounts you follow and anyone you message to see when you were last active.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                          <input 
                            checked={showActivity} 
                            onChange={(e) => setShowActivity(e.target.checked)}
                            className="sr-only peer" 
                            type="checkbox" 
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                        </label>
                      </div>
                    </div>

                    {/* Story Sharing */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Icon name="auto_stories" className="text-[#E1306C] text-xl" />
                            <p className="font-semibold text-gray-800">Story Sharing</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2 max-w-md leading-relaxed">Allow people to share your stories to their own stories or as messages.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                          <input 
                            checked={showStorySharing} 
                            onChange={(e) => setShowStorySharing(e.target.checked)}
                            className="sr-only peer" 
                            type="checkbox" 
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                        </label>
                      </div>
                    </div>

                    {/* Comment Filtering */}
                    <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <Icon name="chat_bubble" className="text-[#E1306C] text-xl" />
                            <p className="font-semibold text-gray-800">Comment Filtering</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2 max-w-md leading-relaxed">Hide offensive comments and set manual keyword filters.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer ml-4">
                          <input 
                            checked={showCommentFilter} 
                            onChange={(e) => setShowCommentFilter(e.target.checked)}
                            className="sr-only peer" 
                            type="checkbox" 
                          />
                          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Blocked Accounts */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">Blocked Accounts</h3>
                  </div>

                  <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-white/50">
                      <div>
                        <h4 className="font-semibold text-gray-800">Manage blocked users</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Blocked accounts cannot interact with you</p>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-xs font-semibold rounded-xl hover:shadow-md transition-all duration-200">
                        + Add New
                      </button>
                    </div>
                    
                    <div className="divide-y divide-gray-100">
                      {blockedUsers.length === 0 ? (
                        <div className="text-center py-12">
                          <Icon name="block" className="text-5xl text-gray-300 mx-auto mb-3" />
                          <p className="text-gray-500 text-sm">No blocked accounts</p>
                          <p className="text-xs text-gray-400 mt-1">When you block someone, they'll appear here</p>
                        </div>
                      ) : (
                        blockedUsers.map((user) => (
                          <div key={user.id} className="flex items-center justify-between p-4 hover:bg-white/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                                <div className="bg-white rounded-full p-[1px]">
                                  <img alt={user.name} src={user.avatar} className="w-10 h-10 rounded-full object-cover" />
                                </div>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <p className="text-[10px] text-gray-400">Blocked {user.date}</p>
                                  {user.reason && (
                                    <span className="text-[10px] px-1.5 py-0.5 bg-red-100 text-red-600 rounded-full">{user.reason}</span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <button className="px-4 py-1.5 text-xs font-semibold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200">
                              Unblock
                            </button>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Data Download Section */}
                <div className="pt-4">
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name="download" className="text-amber-600 text-2xl" />
                      <h4 className="font-semibold text-gray-800">Download Your Data</h4>
                    </div>
                    <p className="text-xs text-gray-600 mb-4">Get a copy of your information on NEXUS. You can download your photos, videos, comments, profile info, and more.</p>
                    <button className="px-5 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200">
                      Request Download
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="pt-8 mt-6 border-t border-gray-100">
                <button className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold rounded-xl active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-xl">
                  Save All Changes
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}