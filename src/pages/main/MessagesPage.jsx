import { Icon, Avatar } from '../../components/shared';
import { NavLink, Link } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const conversations = [
  { username: 'Julian Vane', message: 'The gallery shoot looks incredible!', time: '2m', active: true, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt0CJirTR2GhFRyZRB_ndNTJTK8HD3Q9D1qSugcVvYV9dccX3gnMiwjexyfWmvxY0AktfzknLeVQHcMhl_KdHa-IOqI1G5yj0-50kPWFIXupoZxNbp3ASDJpXkXZjn-qdQm5Q8BqoG09lsbTIkAqI-Znmm-03tXbyE-AVTBrrMg1hD5ZQOEHEF7t81H_JVxdRO1oWdYflQvXjtEsXrPHXy7TdsQHPCRnwxtIObCae-YVcYhmckIO5O_3S5-CmV4w_2crPiSYMU-3tC' },
  { username: 'Elena Rossi', message: 'Shared a reel', time: '1h', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARAMV3gY8Gs9HgWvc11r9P3geWCADBh5Nk-aTpYuDvn-d4Zj3uCF90g7a6E7Lb6JnnoIFLy23E2fvkvA4PPYpaQcPzydyZ4909NMZc5lp27ssdLvYrfCNVqesO3PuSOlB7bUP4LVWCDR6djM5aYuTdApfgCLIB_bcl4fvtAnl7BBehg6qThuRGuWDYgvWMtrHGIQ80vdMwsypgAOKJSN79vz2RY7m8oA81eEPiH_uuo6BXOdmQRYURra4o1tZG1HJn-aM7RqlP0bSX' },
  { username: 'Marcus Thorne', message: 'Sent a photo', time: '4h', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbTegkJuaiBJIZT5Lnf6YULvL3nNiirdTh9cTTnZQgNLcj0Ysq8FyIbSP2_H-KGDfj9JSjgjS5eGeKrtJcq30HYheIeoeJZIEPzlyd96f8kBULppENsvKgW8KNhZP0KOkK9renmRd1TrDeO5vM9UpggcmGOzQiYTM8LTzuV7jPBN30iHXIfa9PNnood5MckNG4uUXIKs0tCzhpQHFnGtIkULJJjwLccMTMzJZMrm6zqOsCzJ-zCmELwMfNTEW-ZwIAComZqx3DK0mP' },
  { username: 'Sophia Chen', message: 'See you at the opening!', time: 'Yesterday', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkm363GdT_yM61mMDpJIGGq2yrU4Cs2k-HE1XAMF8-VzLVvBeoFfmveSYBbQOa222640nj-FQxWOgrxagGBNhqmU5jsbmb045Z21Xy5mARzqNtpoQUCCv7v-YfIHbfweMkNgDIRsz1qD4LeQbYpo8i3AbfAfR5IFFk_nZg1qvOXygwR8C44eGjYXnAvVtFHZRav8366sfip4RHlBq_C39PKQUUHkfGsTBRRoQ__T0OKo77O5fITRZUPpxtO6ui59bAONDBCgBD_XM' },
];

const messages = [
  { type: 'incoming', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Uaa3Gtu_Zac6fV38tXBhWSByv4DrzSKPep7AtKl58qQsJiT2xNHVdGh_Jz7Wlg1lph-rXrTN8Qy_dLaNo43bifjSJTMQQ34xd5jivbMt4S4Gbf1WSd3pTqEA-AXQkEDyEG23BHdos8oo2yvvWmvCDmZQA2zWw-oMHDCLeel8GWKfRnVv3vve-J0-JsAhn-qdv4oTJqMyTSxaIucefg7oqOvd2Xd7MhXbv6QfBZ98TgenQowbamv4tjXx7rl53wdjfVqVExdrLhKi', text: "Hey! Did you see the final edits for the editorial series?", time: '10:42 AM' },
  { type: 'outgoing', text: 'Just checked them now. The tonal balance on the third shot is perfection. Really captures that "Editorial Lens" vibe we discussed.', time: '10:45 AM' },
  { type: 'incoming-image', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjNgwNAJFHRNfhEeuSKrbZzlRrsKfWy6rZ-XX4y7RYPMKLiKv90yvKhUI5TKuBhH-lD5MTfayfRl6yVA3tPMbCX1bd6lYVjhsWQDXRKLnjVj5ICSZsxxaxxN5qU-lj4uA6dowUA3cazwi69JZX3Xv_ObCar34KXMlJRYZeg_vmsnkmEV-u9gBRXOdDzPARW0yUg6MBfIGmFVD7okSi_E_z8R5EWoS9qdXxAxBUI0i5zSAcOjdVPej1vLrKHtb5GddmbBKtj05Ml15c', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', text: 'The gallery shoot looks incredible! I think we should use this for the cover page.', time: '10:48 AM' },
  { type: 'outgoing', text: "Agreed. Let's lock it in.", time: '10:50 AM' },
];

const navItems = [
  { name: 'home', label: 'Home', to: '/home' },
  { name: 'search', label: 'Search', to: '/explore' },
  { name: 'explore', label: 'Explore', to: '/explore' },
  { name: 'movie', label: 'Reels', to: '/explore' },
  { name: 'chat_bubble', label: 'Messages', to: '/messages', active: true },
  { name: 'favorite_border', label: 'Notifications', to: '/notifications' },
];

export function MessagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] font-sans antialiased">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Sidebar - Instagram Style */}
      <aside className="fixed left-0 top-0 flex flex-col h-full p-4 w-64 bg-white/95 backdrop-blur-sm border-r border-gray-100 shadow-xl z-50">
        <div className="flex items-center gap-2 mb-8 px-4">
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
          <div className={`text-2xl font-extrabold tracking-tight ${brandGradient}`}>
            NEXUS
          </div>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 font-medium tracking-tight rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                }`
              }
            >
              <Icon name={item.name} filled={item.active} className="text-xl" />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-auto space-y-1">
          <Link className="flex items-center gap-3 px-4 py-3 text-gray-600 font-medium tracking-tight rounded-xl hover:bg-gray-50 hover:text-[#E1306C] transition-all duration-200" to="/settings/account">
            <Icon name="settings" className="text-xl" />
            <span className="text-sm">Settings</span>
          </Link>
          <div className="px-4 py-3 flex items-center gap-3 border-t border-gray-100 pt-4">
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWVFANGHLTrFgMOzokseH7ENOwjOXwE52qcBa9eCeZIge0LtDexnLlb11DW0qEre4HmpX8hVzo5-_FEfqXIu5LzOBGqeOwUZ-W-kpzJRYHKUpSV0sRT57k_4PSxCrftQj7s0IvKLhoKGKbPIgB07DGyOO7cdfYzUpgmdho_k3c0pQu5IQZjpqPDl7hBZQgBvxlfqwjBQX4cr8PAWrT3CxPU9c9QKu7RtySSvLfZHa42BsBpEQ5GIixkFKcktvZEK7RAXGKaGN48r7Q" alt="Profile" size="sm" className="w-8 h-8 rounded-full" />
              </div>
            </div>
            <span className="text-sm font-semibold text-gray-800">Profile</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 h-screen flex overflow-hidden relative z-10">
        
        {/* Conversations List - Instagram Style */}
        <section className="w-[400px] flex flex-col bg-white/95 backdrop-blur-sm border-r border-gray-100">
          <header className="p-6 flex justify-between items-center border-b border-gray-100">
            <h1 className="text-xl font-bold tracking-tight text-gray-800">Messages</h1>
            <Icon name="edit_square" className="text-gray-500 hover:text-[#E1306C] cursor-pointer transition-colors text-2xl" />
          </header>
          
          <div className="px-6 mb-4">
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 placeholder:text-gray-400"
                placeholder="Search messages"
                type="text"
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv, i) => (
              <div
                key={i}
                className={`px-4 py-3 mx-2 rounded-xl flex items-center gap-3 cursor-pointer transition-all duration-200 ${
                  conv.active 
                    ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="relative">
                  <div className={`${conv.active ? 'p-[2px] rounded-full bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737]' : ''}`}>
                    <div className={conv.active ? 'p-[1.5px] bg-white rounded-full' : ''}>
                      <Avatar src={conv.src} alt={conv.username} size="md" className="w-12 h-12 rounded-full" />
                    </div>
                  </div>
                  {conv.active && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className={`text-sm truncate ${conv.active ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {conv.username}
                    </h3>
                    <span className="text-[10px] text-gray-400">{conv.time}</span>
                  </div>
                  <p className={`text-sm truncate ${conv.active ? 'font-semibold text-[#E1306C]' : 'text-gray-500'}`}>
                    {conv.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chat Window - Instagram Style */}
        <section className="flex-1 flex flex-col bg-white/95 backdrop-blur-sm">
          {/* Chat Header */}
          <header className="h-[72px] px-8 flex justify-between items-center border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                <div className="bg-white rounded-full p-[1px]">
                  <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcVPpuLtC2h1aLg1Snq1sgCN6fQ4h7uVjQSyZvkFGNOxpIw-32KiXiF-vwt6iCMYymLWLq4QRQGBdqKtlXI_-_F7-woeEBnSk46tI-cYhr3P4OfwZRngfDd5l7LTNxgLux76rHAiOjVZOAAtS815uuOBeXHHsXt8LZyK3NW4EeROlBx121EUNa6MJBp2zY2tnaavQGTifJCkSPcvCYYivp4FfXetrgATR9At4wHIgVTwAUJu4eQ_YL9_HsisF1b6zRfU1bJWUcp4wl" alt="Julian Vane" size="md" className="w-10 h-10 rounded-full" />
                </div>
              </div>
              <div>
                <h2 className="text-sm font-bold text-gray-900">Julian Vane</h2>
                <span className="text-[11px] text-[#E1306C] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#E1306C] rounded-full animate-pulse"></span> Active now
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 text-gray-500">
              <Icon name="call" className="hover:text-[#E1306C] cursor-pointer transition-colors text-xl" />
              <Icon name="videocam" className="hover:text-[#E1306C] cursor-pointer transition-colors text-xl" />
              <Icon name="info" className="hover:text-[#E1306C] cursor-pointer transition-colors text-xl" />
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
            <div className="flex justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today</span>
            </div>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 max-w-[70%] ${msg.type === 'outgoing' ? 'self-end flex-col items-end' : ''}`}>
                {msg.type === 'incoming' && (
                  <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1px] self-end mb-1">
                    <div className="bg-white rounded-full p-[1px]">
                      <Avatar src={msg.avatar} alt="Avatar" size="sm" className="w-8 h-8 rounded-full" />
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  {msg.image && (
                    <img src={msg.image} alt="Shared" className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm max-w-[300px] rounded-br-none" />
                  )}
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.type === 'outgoing' 
                      ? 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                  <span className={`text-[10px] text-gray-400 ${msg.type === 'outgoing' ? 'mr-1' : 'ml-1'}`}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input - Instagram Style */}
          <footer className="p-6 border-t border-gray-100">
            <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-5 py-2 focus-within:ring-2 focus-within:ring-[#E1306C]/30 transition-all duration-200">
              <Icon name="sentiment_satisfied" className="text-gray-500 hover:text-[#E1306C] cursor-pointer transition-colors text-2xl" />
              <textarea 
                className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-sm resize-none h-10 py-2.5 text-gray-800 placeholder:text-gray-400" 
                placeholder="Message..." 
                rows="1" 
              />
              <div className="flex items-center gap-3">
                <Icon name="image" className="text-gray-500 hover:text-[#E1306C] cursor-pointer transition-colors text-2xl" />
                <Icon name="mic" className="text-gray-500 hover:text-[#E1306C] cursor-pointer transition-colors text-2xl" />
                <button className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold text-sm px-4 py-1.5 rounded-xl hover:shadow-lg transition-all duration-200">
                  Send
                </button>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}