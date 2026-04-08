import { Icon, Avatar } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const newNotifications = [
  {
    type: 'follow',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwpsqf4oB1zEBrUpQuuuq1vJM5igt6CPLjkud1WvpAGloUqhUkd7nKbmvN0nNldyybm_-8iDom3bQyULWTWprjHI76ipQXGS86K11pNM6oru53qouCX8AEGznwEemoqZ5eZMsvouMRL6LE7Q6YR-8c3gLTExifqknGl5TBbSm5bNI08KcBeW9vAFNh4N-0vsGQAxQ3cxUbBDiyNkQYvC_vxB2asoWa7Dz-VSGEMmkjb-Y-3cDPA_6A_MKCP3NdheHuRk96U8O7XEGq',
    username: 'julian_voss',
    action: 'started following you.',
    time: '2m',
    button: 'Follow',
  },
  {
    type: 'mention',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs9sMH2aeY9Ww8J1REig8TXCAwOrugerQV_peoJ9gIRqOM1xKhOKnMh7ZacVu7NhOIQwWmD3cd0kpU3mXarAv-AV5t4GdWXGo7662OEu79v_ZW2qLn4Lb3vfHB3G-oLZtCcUzdcUbj7H7Epm1DrvV1lZhgZve2xWPgcPtkzez8T18IhYOLlg29v6Kd67Mr2BxntTv_OcGiwh22rYMQ6IAjV2xrKVrt4EGgj7S14SALT1PIo4y29JIZLKFk-QTRYpj_439LlkEbCEPS',
    username: 'elena.style',
    action: 'mentioned you in a comment:',
    mention: '@TheCurator',
    quote: '"This palette is incredible! ✨"',
    time: '15m',
  },
];

const earlierNotifications = [
  {
    type: 'like',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFO54n6y_1OjkW6U3TN5Vuc1LhFrdt7nCIpujsJ05McxTiW3DlRz-_2akpF9M6-Gm9LpBMCaCzX0svbcQCfxb1CcDq4Jxv3V9NjRzHlhGKYsPNkMAWLXs4MFD5MEbsb0tP9WERHyZ5YgNu9m6B3S4srLVz51hiQhjJzHfWi1xSc-Sol91OwKPvWGvgKDYdIqkwI3Xt_pYhNoWCJSKgpUWgTjr8iiKarmJ4Aet-aNrjUgNB1Tb2feR1LdKiryulG0w_dL_PkyjFe_Bk',
    username: 'marcus_xyz',
    action: 'liked your post.',
    time: '2h',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
  },
  {
    type: 'story',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9NTmRrqaxPlaHQ5PdIjCI1h49ah6_bk9OdVWn3spbXS-adNuC5Z8TfSmEhRNlISX6g77zrctVywiOXkaViXN0rNzkEbplayE1nWyfDmGYenBe5Oh_bCxDnhKZ8NUsSiUfUagPgd50BFfzV1qw4ivrAv8HBehAgi0tZ7GUM6yPlxz7M4OT1nyDbaTHCaZPt8D7w2GKp0YBR0O02VtKqr6Uq4RkriVKo1oMB1XhSEuf7qKfLD-mGnaV7i3ic-udOe2DhoCOZInHgbN9',
    username: 'sophia_vibe',
    action: 'reacted to your story:',
    reaction: '🔥',
    time: '5h',
    storyThumbnail: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=100&h=100&fit=crop',
  },
  {
    type: 'multiple',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBS2jzlHpG0iQlK2c-RF2ritFk4ftDepWUKZ7EkzQuqeNxeIu7sRyY1akR6cWaxTXLJ7fVBF8u1ABYKRkggL4WTD5NK4V3l7RWH5g2FGTBcZiaengXyFcVO17wIyHKsS6XuKUDbET753wzPWncyvwk9Leemmi6WTNknUSOaxQmtHutiTW8yWnZSx2MPu0XixxUtEsLs3kbK4nwXNIU5BWNIAOxcDmCFZ7hy92CAON7PUF82S2xdr76pY7P9XhCVDj2ZHTKhBe152oqg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBO5ft3pKS2xmInstAjKBsVjQG-n0HHiQA90aJOn309rxlywmMja-3yydgIMBzQ7ZOSu0YOddkT7UQvyz9lnn4hmneeMIvdOHJuoVKI4JgyqH_tJ5WpHACpbC2Q-fvDi3ThHPWFXabJkvWbddjqH2otF3FMV2GOKgmMUmByuiJz8iqsOywOUCaIOD7Sc-pCztykgSQKY5l_q4N_7OoZSRDEbkJGUzOpqj669HpvFcdCuH0gjuC71N1ZkhT0LxZbtx9HWnUX2LYI8Geb',
    ],
    usernames: 'derek_k, alina.m',
    action: 'and 4 others liked your photo.',
    time: '1d',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
  },
];

export function NotificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] font-sans">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Navigation (Mobile) - Instagram Style */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 h-16 lg:hidden border-b border-gray-100">
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
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform">
            <Icon name="settings" className="text-gray-600 text-2xl" />
          </button>
          <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
            <div className="bg-white rounded-full p-[1px]">
              <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRteRDLeWFeCT2QBqnzgdsqUWBA-Sx_piuCstqcs03sMRhAb3bytfUeVks8_Y_mPaDiNPaSSi4C-ErjQMzPcIP2P3oGhVuF4hxPUc7CPBCc8QOyw4sYxDQd4xQVvEVtkzOBkLjWGuajEuMTTujpIQTEjYpBdtYhyBR5UBZM8e6wSAAgEqh1Vk5YXHoRxm06vQTFqixccHEvPalLo4ceKsdsSwr1-lTqFri9GKHu58X4oYMVjgOEENTjnrhuzSLEZwmEF_8879D31E1" className="w-8 h-8 rounded-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Side Navigation (Desktop) - Instagram Style */}
        <nav className="hidden lg:flex flex-col p-4 fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm border-r border-gray-100 shadow-xl space-y-2 z-40">
          <div className="flex items-center gap-2 mb-8 px-2 py-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="instaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#833AB4" />
                  <stop offset="50%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#F77737" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaGrad2)" />
              <circle cx="12" cy="12" r="4.5" fill="white" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
            </svg>
            <span className={`text-2xl font-extrabold tracking-tight ${brandGradient}`}>NEXUS</span>
          </div>
          <div className="space-y-1">
            {[
              { name: 'home', label: 'Home', to: '/home' },
              { name: 'explore', label: 'Explore', to: '/explore' },
              { name: 'notifications', label: 'Notifications', to: '/notifications', active: true },
              { name: 'chat', label: 'Messages', to: '/messages' },
              { name: 'person', label: 'Profile', to: '/profile' },
            ].map((item) => (
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
                <Icon name={item.name} filled={item.active} className="text-xl" />
                <span className="text-sm font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 px-2 py-3">
              <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                <div className="bg-white rounded-full p-[1px]">
                  <img alt="Editorial Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEa8LcMr46VkPDC2sen8j5lWZO7qhsql3QXcflA2F9q2aL6Q_o6-Khw441Q4fcjepIF2Huyg4B05o-vZMlsHm-FEukty3nw-C2PU1WYvi841Ub9FtNtEAFYyewOidonTOmZhZyoVvDYmshcs_brkyalhL99jeRAbPjBGciCyZDb1UnQQ-NEyX54-XdQ_WOwCpeEjWg3JXsJbZxH0jdnnsBG-d2m3MLu9BBIqa32WFwIOuMu04mGEhT8aVTO2XIHjX1w-ydcjs6GXj0" className="w-10 h-10 rounded-full object-cover" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">The Curator</span>
                <span className="text-xs text-gray-500">Premium Member</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-20 lg:pt-8 pb-20 lg:pb-8 flex justify-center relative z-10">
          <div className="w-full max-w-[600px] px-4 md:px-6">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
              <button className="text-[#E1306C] text-sm font-semibold hover:text-[#833AB4] transition-colors">
                Clear All
              </button>
            </div>

            {/* New Notifications */}
            <div className="mb-10">
              <h2 className="text-sm font-bold text-gray-500 mb-4 px-1 uppercase tracking-wider">New</h2>
              <div className="space-y-1">
                {newNotifications.map((notif, i) => (
                  <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm">
                    <div className="flex items-center gap-4">
                      {notif.type === 'follow' ? (
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] p-[2px]">
                            <img alt="User" src={notif.avatar} className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full object-cover border-2 border-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                          <div className="bg-white rounded-full p-[1px]">
                            <Avatar src={notif.avatar} alt={notif.username} size="md" className="w-10 h-10 rounded-full" />
                          </div>
                        </div>
                      )}
                      <div className="text-sm leading-snug">
                        <span className="font-bold text-gray-800">{notif.username}</span>
                        <span className="text-gray-600"> {notif.action}</span>
                        {notif.mention && (
                          <>
                            <span className="text-[#E1306C] font-medium"> {notif.mention}</span>
                            <span className="text-gray-600 italic"> {notif.quote}</span>
                          </>
                        )}
                        <span className="text-gray-400 ml-1">{notif.time}</span>
                      </div>
                    </div>
                    {notif.button && (
                      <button className="bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white text-xs font-bold px-5 py-2 rounded-lg active:scale-95 transition-all duration-200 hover:shadow-md">
                        {notif.button}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Earlier Notifications */}
            <div>
              <h2 className="text-sm font-bold text-gray-500 mb-4 px-1 uppercase tracking-wider">Earlier</h2>
              <div className="space-y-1">
                {earlierNotifications.map((notif, i) => (
                  <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm">
                    <div className="flex items-center gap-4">
                      {notif.type === 'multiple' ? (
                        <div className="flex -space-x-3">
                          {notif.avatars.map((avatar, j) => (
                            <div key={j} className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1px]">
                              <div className="bg-white rounded-full p-[1px]">
                                <img alt="User" src={avatar} className="w-8 h-8 rounded-full border border-white object-cover" />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : notif.type === 'story' ? (
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] p-[2px]">
                            <img alt="User" src={notif.avatar} className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full object-cover border-2 border-white" />
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                          <div className="bg-white rounded-full p-[1px]">
                            <Avatar src={notif.avatar} alt={notif.username} size="md" className="w-10 h-10 rounded-full" />
                          </div>
                        </div>
                      )}
                      <div className="text-sm leading-snug">
                        <span className="font-bold text-gray-800">{notif.type === 'multiple' ? notif.usernames : notif.username}</span>
                        <span className="text-gray-600"> {notif.action}</span>
                        {notif.reaction && <span className="text-xl ml-1">{notif.reaction}</span>}
                        <span className="text-gray-400 ml-1">{notif.time}</span>
                      </div>
                    </div>
                    {(notif.thumbnail || notif.storyThumbnail) && (
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img alt="Thumbnail" src={notif.thumbnail || notif.storyThumbnail} className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile) - Instagram Style */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md flex justify-around items-center px-4 border-t border-gray-100 z-50">
        {['home', 'explore', 'notifications', 'chat', 'person'].map((name, i) => {
          const isActive = name === 'notifications';
          return (
            <NavLink 
              key={i} 
              to={name === 'home' ? '/home' : name === 'explore' ? '/explore' : name === 'notifications' ? '/notifications' : name === 'chat' ? '/messages' : '/profile'}
              className={`flex flex-col items-center transition-colors duration-200 ${isActive ? 'text-[#E1306C]' : 'text-gray-500'}`}
            >
              <Icon name={name} filled={isActive} className="text-2xl" />
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}