import { Icon, Avatar } from '../../components/shared';
import { NavLink, Link } from 'react-router-dom';

const conversations = [
  { username: 'Julian Vane', message: 'The gallery shoot looks incredible!', time: '2m', active: true, src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt0CJirTR2GhFRyZRB_ndNTJTK8HD3Q9D1qSugcVvYV9dccX3gnMiwjexyfWmvxY0AktfzknLeVQHcMhl_KdHa-IOqI1G5yj0-50kPWFIXupoZxNbp3ASDJpXkXZjn-qdQm5Q8BqoG09lsbTIkAqI-Znmm-03tXbyE-AVTBrrMg1hD5ZQOEHEF7t81H_JVxdRO1oWdYflQvXjtEsXrPHXy7TdsQHPCRnwxtIObCae-YVcYhmckIO5O_3S5-CmV4w_2crPiSYMU-3tC' },
  { username: 'Elena Rossi', message: 'Shared a reel', time: '1h', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARAMV3gY8Gs9HgWvc11r9P3geWCADBh5Nk-aTpYuDvn-d4Zj3uCF90g7a6E7Lb6JnnoIFLy23E2fvkvA4PPYpaQcPzydyZ4909NMZc5lp27ssdLvYrfCNVqesO3PuSOlB7bUP4LVWCDR6djM5aYuTdApfgCLIB_bcl4fvtAnl7BBehg6qThuRGuWDYgvWMtrHGIQ80vdMwsypgAOKJSN79vz2RY7m8oA81eEPiH_uuo6BXOdmQRYURra4o1tZG1HJn-aM7RqlP0bSX' },
  { username: 'Marcus Thorne', message: 'Sent a photo', time: '4h', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbTegkJuaiBJIZT5Lnf6YULvL3nNiirdTh9cTTnZQgNLcj0Ysq8FyIbSP2_H-KGDfj9JSjgjS5eGeKrtJcq30HYheIeoeJZIEPzlyd96f8kBULppENsvKgW8KNhZP0KOkK9renmRd1TrDeO5vM9UpggcmGOzQiYTM8LTzuV7jPBN30iHXIfa9PNnood5MckNG4uUXIKs0tCzhpQHFnGtIkULJJjwLccMTMzJZMrm6zqOsCzJ-zCmELwMfNTEW-ZwIAComZqx3DK0mP' },
  { username: 'Sophia Chen', message: 'See you at the opening!', time: 'Yesterday', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkm363GdT_yM61mMDpJIGGq2yrU4Cs2k-HE1XAMF8-VzLVvBeoFfmveSYBbQOa222640nj-FQxWOgrxagGBNhqmU5jsbmb045Z21Xy5mARzqNtpoQUCCv7v-YfIHbfweMkNgDIRsz1qD4LeQbYpo8i3AbfAfR5IFFk_nZg1qvOXygwR8C44eGjYXnAvVtFHZRav8366sfip4RHlBq_C39PKQUUHkfGsTBRRoQ__T0OKo77O5fITRZUPpxtO6ui59bAONDBCgBD_XM' },
];

const messages = [
  { type: 'incoming', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_Uaa3Gtu_Zac6fV38tXBhWSByv4DrzSKPep7AtKl58qQsJiT2xNHVdGh_Jz7Wlg1lph-rXrTN8Qy_dLaNo43bifjSJTMQQ34xd5jivbMt4S4Gbf1WSd3pTqEA-AXQkEDyEG23BHdos8oo2yvvWmvCDmZQA2zWw-oMHDCLeel8GWKfRnVv3vve-J0-JsAhn-qdv4oTJqMyTSxaIucefg7oqOvd2Xd7MhXbv6QfBZ98TgenQowbamv4tjXx7rl53wdjfVqVExdrLhKi', text: "Hey! Did you see the final edits for the editorial series?", time: '10:42 AM' },
  { type: 'outgoing', text: 'Just checked them now. The tonal balance on the third shot is perfection. Really captures that "Editorial Lens" vibe we discussed.', time: '10:45 AM' },
  { type: 'incoming-image', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjNgwNAJFHRNfhEeuSKrbZzlRrsKfWy6rZ-XX4y7RYPMKLiKv90yvKhUI5TKuBhH-lD5MTfayfRl6yVA3tPMbCX1bd6lYVjhsWQDXRKLnjVj5ICSZsxxaxxN5qU-lj4uA6dowUA3cazwi69JZX3Xv_ObCar34KXMlJRYZeg_vmsnkmEV-u9gBRXOdDzPARW0yUg6MBfIGmFVD7okSi_E_z8R5EWoS9qdXxAxBUI0i5zSAcOjdVPej1vLrKHtb5GddmbBKtj05Ml15c', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzM_UUxEX3SSk-UcDbYH9sLUETored2KGiwdZjcCqGEauXHWwfh-dlvqRa2rpPzCnRQIANn2u_B2lRQFsHHHj7NiTvx1ZkbamlQUKf9DH6mvfZY0SQuXFagELXDwpaznHCWn3Rys2UKCDhs1WENcTVehXC9PnDcehBBs4zNaEULzecruYpiW4oY-rOfj1zZ7PyABGPOGW24GVthTwtGI_YP2OctALHBmbJucmBYbDQjwyEmQyjZpRA8YWWh-nIzsVs9zOJYJmP5KyL', text: 'The gallery shoot looks incredible! I think we should use this for the cover page.', time: '10:48 AM' },
  { type: 'outgoing', text: 'Agreed. Let\'s lock it in.', time: '10:50 AM' },
];

const navItems = [
  { name: 'home', label: 'Home', to: '/home' },
  { name: 'search', label: 'Search', to: '/explore' },
  { name: 'explore', label: 'Explore', to: '/explore' },
  { name: 'movie', label: 'Reels', to: '/explore' },
  { name: 'chat_bubble', label: 'Messages', to: '/messages', active: true },
  { name: 'favorite_border', label: 'Notifications', to: '/notifications' },
  { name: 'add_box', label: 'Create', to: '/create' },
];

export function MessagesPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans antialiased">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 flex flex-col h-full p-4 w-64 border-r border-outline-variant/30 bg-surface z-50">
        <div className="text-2xl font-bold tracking-tighter text-primary mb-8 px-4">Editorial</div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 font-medium tracking-tight rounded-xl transition-all scale-95 active:opacity-80 ${
                  isActive
                    ? 'text-primary font-bold bg-surface-container-low'
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`
              }
            >
              <Icon name={item.name} filled={item.active} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto space-y-1">
          <Link className="flex items-center gap-4 px-4 py-3 text-on-surface-variant font-medium tracking-tight rounded-xl hover:bg-surface-container-low transition-all scale-95 active:opacity-80" to="/settings/account">
            <Icon name="settings" />
            <span>Settings</span>
          </Link>
          <div className="px-4 py-3 flex items-center gap-3">
            <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWVFANGHLTrFgMOzokseH7ENOwjOXwE52qcBa9eCeZIge0LtDexnLlb11DW0qEre4HmpX8hVzo5-_FEfqXIu5LzOBGqeOwUZ-W-kpzJRYHKUpSV0sRT57k_4PSxCrftQj7s0IvKLhoKGKbPIgB07DGyOO7cdfYzUpgmdho_k3c0pQu5IQZjpqPDl7hBZQgBvxlfqwjBQX4cr8PAWrT3CxPU9c9QKu7RtySSvLfZHa42BsBpEQ5GIixkFKcktvZEK7RAXGKaGN48r7Q" alt="Profile" size="sm" />
            <span className="text-sm font-semibold">Profile</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 h-screen flex overflow-hidden">
        {/* Conversations List */}
        <section className="w-[400px] flex flex-col bg-surface-lowest border-r border-outline-variant/20">
          <header className="p-6 flex justify-between items-center">
            <h1 className="text-xl font-black tracking-tight">Messages</h1>
            <Icon name="edit_square" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
          </header>
          <div className="px-6 mb-4">
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" />
              <input
                className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-10 text-sm focus:ring-1 focus:ring-primary"
                placeholder="Search messages"
                type="text"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv, i) => (
              <div
                key={i}
                className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-colors ${conv.active ? 'bg-surface-container-low' : 'hover:bg-surface-container-low'}`}
              >
                <div className={`${conv.active ? 'p-[2px] rounded-full bg-gradient-to-tr from-primary via-secondary to-tertiary' : ''}`}>
                  <div className={conv.active ? 'p-[1.5px] bg-white rounded-full' : ''}>
                    <Avatar src={conv.src} alt={conv.username} size="md" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className={`text-sm ${conv.active ? 'font-bold' : 'font-medium'} truncate`}>{conv.username}</h3>
                    <span className="text-[10px] text-on-surface-variant">{conv.time}</span>
                  </div>
                  <p className={`text-sm truncate ${conv.active ? 'font-semibold' : 'text-on-surface-variant'}`}>{conv.message}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chat Window */}
        <section className="flex-1 flex flex-col bg-surface-lowest">
          {/* Chat Header */}
          <header className="h-[72px] px-8 flex justify-between items-center border-b border-outline-variant/10">
            <div className="flex items-center gap-4">
              <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcVPpuLtC2h1aLg1Snq1sgCN6fQ4h7uVjQSyZvkFGNOxpIw-32KiXiF-vwt6iCMYymLWLq4QRQGBdqKtlXI_-_F7-woeEBnSk46tI-cYhr3P4OfwZRngfDd5l7LTNxgLux76rHAiOjVZOAAtS815uuOBeXHHsXt8LZyK3NW4EeROlBx121EUNa6MJBp2zY2tnaavQGTifJCkSPcvCYYivp4FfXetrgATR9At4wHIgVTwAUJu4eQ_YL9_HsisF1b6zRfU1bJWUcp4wl" alt="Julian Vane" size="md" />
              <div>
                <h2 className="text-sm font-bold">Julian Vane</h2>
                <span className="text-[11px] text-primary flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Active now
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5 text-on-surface-variant">
              <Icon name="call" className="hover:text-on-surface cursor-pointer transition-colors" />
              <Icon name="videocam" className="hover:text-on-surface cursor-pointer transition-colors" />
              <Icon name="info" className="hover:text-on-surface cursor-pointer transition-colors" />
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
            <div className="flex justify-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full">Today</span>
            </div>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 max-w-[70%] ${msg.type === 'outgoing' ? 'self-end flex-col items-end' : ''}`}>
                {msg.type === 'incoming' && (
                  <Avatar src={msg.avatar} alt="Avatar" size="sm" className="self-end mb-1" />
                )}
                <div className="flex flex-col gap-1">
                  {msg.image && (
                    <img src={msg.image} alt="Shared" className="rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm max-w-[300px]" />
                  )}
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === 'outgoing' ? 'bg-gradient-to-r from-primary via-secondary to-tertiary text-white rounded-br-none shadow-md' : 'bg-surface-container-highest rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                  <span className={`text-[10px] text-on-surface-variant ${msg.type === 'outgoing' ? 'mr-1' : 'ml-1'}`}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <footer className="p-6">
            <div className="flex items-center gap-4 bg-surface-container-low rounded-3xl px-5 py-2 group focus-within:ring-1 focus-within:ring-primary/30 transition-all">
              <Icon name="sentiment_satisfied" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
              <textarea className="flex-1 bg-transparent border-none focus:ring-0 text-sm resize-none h-10 py-2.5" placeholder="Message..." rows="1" />
              <div className="flex items-center gap-3">
                <Icon name="image" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
                <Icon name="mic" className="text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
                <button className="text-primary font-bold text-sm px-2 hover:opacity-70 transition-opacity">Send</button>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
