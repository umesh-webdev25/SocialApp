import { Icon, Avatar } from '../../components/shared';
import { NavLink } from 'react-router-dom';

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
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANwcvZOoYg5II5rfoxtJFCUp5pUzFVSgxkzUuuOkOQ6ATXcrRTcVaFI_-MCFvsoiJFh8j8lWLvBjN3L5jROQz3TUWbXpdb_b0LFQDJf2mP1vPGEGxK-vjiLnz04UQUtjiBb_NoWIbh6iEZOV2wEcw9UEoSUli9XFxwjeGA9i_jnqkeSsWfhyCSjvT2QFLWyrE9P5wvDZoCexMnS1ccf02w5LsYhQVPCCdno5uwfzA3f2COYg3TzY7-plc0JYEowZUsTxKlFugFiVKE',
  },
  {
    type: 'story',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9NTmRrqaxPlaHQ5PdIjCI1h49ah6_bk9OdVWn3spbXS-adNuC5Z8TfSmEhRNlISX6g77zrctVywiOXkaViXN0rNzkEbplayE1nWyfDmGYenBe5Oh_bCxDnhKZ8NUsSiUfUagPgd50BFfzV1qw4ivrAv8HBehAgi0tZ7GUM6yPlxz7M4OT1nyDbaTHCaZPt8D7w2GKp0YBR0O02VtKqr6Uq4RkriVKo1oMB1XhSEuf7qKfLD-mGnaV7i3ic-udOe2DhoCOZInHgbN9',
    username: 'sophia_vibe',
    action: 'reacted to your story:',
    reaction: '🔥',
    time: '5h',
    storyThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzAkYlEvmKg6TqRhhyarOA3tFejOqHNhuSXU6D5TCifn8OkBbb5ujEjYsKU0hgsj3KEM5zPtb6Pu7R8CfcAxfKfozCrma5xB5ieAqryenFcydH80GOWdWIuXVVmgPCAnNtuqluOrxZR_9R8vMGJf5PhKc8XOY1btcnIjl3iwSXo_6K1PRsxObHDKH6AcF8HN4-p5vZQwKBYTTnv6t7YLKzRYeej99bMjGCxWWNo61RJNiWxlkGZ2Wi1Qw4Jgc9Nknz2OybUxF9pSdu',
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
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNAWcf3dWV6oiD5N4QUDbiN_yHLZ31oqDwqlB5tp7dOZIhPPtQzVxyL4julDUUa7yE4Pu9ncuAk8sNip6pQBn4Z1I4VXm1rnQv0vI-5awpj4UAKCVAnmCSnmAbp2xemuqyxHQZ2zEo1QPTURiTWyqfAUMsiGWZr6Rq5RTsOOkK7ss2YyR41s-Ev91EsdY9XaffWPiTXt4u4Thh4w5cVezyexMwj8QWOAGDkvRT8AppwEsm9Cda6r8FZBkmeqcEAH1pH0LNVpEmHnXG',
  },
];

export function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Top Navigation (Mobile) */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 h-16 lg:hidden">
        <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Ethos Minimal</span>
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform">
            <Icon name="settings" className="text-stone-500" />
          </button>
          <img alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRteRDLeWFeCT2QBqnzgdsqUWBA-Sx_piuCstqcs03sMRhAb3bytfUeVks8_Y_mPaDiNPaSSi4C-ErjQMzPcIP2P3oGhVuF4hxPUc7CPBCc8QOyw4sYxDQd4xQVvEVtkzOBkLjWGuajEuMTTujpIQTEjYpBdtYhyBR5UBZM8e6wSAAgEqh1Vk5YXHoRxm06vQTFqixccHEvPalLo4ceKsdsSwr1-lTqFri9GKHu58X4oYMVjgOEENTjnrhuzSLEZwmEF_8879D31E1" className="w-8 h-8 rounded-full object-cover" />
        </div>
      </header>

      <div className="flex min-h-screen">
        {/* Side Navigation (Desktop) */}
        <nav className="hidden lg:flex flex-col p-4 fixed left-0 top-0 h-full w-64 border-r border-[#e4e2e1]/30 bg-[#fcf9f8] space-y-2">
          <div className="mb-8 px-2 py-4">
            <span className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Ethos Minimal</span>
          </div>
          <div className="space-y-1">
            {[
              { name: 'home', label: 'Feed', to: '/home' },
              { name: 'explore', label: 'Discover', to: '/explore' },
              { name: 'notifications', label: 'Notifications', to: '/notifications', active: true },
              { name: 'mail', label: 'Messages', to: '/messages' },
              { name: 'person', label: 'Profile', to: '/profile' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-[#f6f3f2] text-primary border-r-4 border-primary'
                      : 'text-stone-600 hover:bg-[#f6f3f2]'
                  }`
                }
              >
                <Icon name={item.name} filled={item.active} />
                <span className={`text-sm ${item.active ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
              </NavLink>
            ))}
          </div>
          <div className="mt-auto pt-4 border-t border-[#e4e2e1]/30">
            <div className="flex items-center gap-3 px-2 py-3">
              <img alt="Editorial Profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEa8LcMr46VkPDC2sen8j5lWZO7qhsql3QXcflA2F9q2aL6Q_o6-Khw441Q4fcjepIF2Huyg4B05o-vZMlsHm-FEukty3nw-C2PU1WYvi841Ub9FtNtEAFYyewOidonTOmZhZyoVvDYmshcs_brkyalhL99jeRAbPjBGciCyZDb1UnQQ-NEyX54-XdQ_WOwCpeEjWg3JXsJbZxH0jdnnsBG-d2m3MLu9BBIqa32WFwIOuMu04mGEhT8aVTO2XIHjX1w-ydcjs6GXj0" className="w-10 h-10 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="text-sm font-bold">The Curator</span>
                <span className="text-xs text-on-surface-variant">Premium Member</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 pt-20 lg:pt-8 pb-20 lg:pb-8 flex justify-center">
          <div className="w-full max-w-[600px] px-4 md:px-6">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
              <button className="text-primary text-sm font-semibold hover:opacity-80 transition-opacity">
                Clear All
              </button>
            </div>

            {/* New Notifications */}
            <div className="mb-10">
              <h2 className="text-sm font-bold text-on-surface-variant mb-4 px-1">New</h2>
              <div className="space-y-1">
                {newNotifications.map((notif, i) => (
                  <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-surface-lowest hover:bg-surface-container-low transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      {notif.type === 'follow' ? (
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-tertiary p-[2px]">
                            <img alt="User" src={notif.avatar} className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full object-cover border-2 border-white" />
                          </div>
                        </div>
                      ) : (
                        <Avatar src={notif.avatar} alt={notif.username} size="md" className="flex-shrink-0" />
                      )}
                      <div className="text-sm leading-snug">
                        <span className="font-bold">{notif.username}</span>
                        <span className="text-on-surface-variant"> {notif.action}</span>
                        {notif.mention && (
                          <>
                            <span className="text-primary"> {notif.mention}</span>
                            <span className="text-on-surface-variant italic"> {notif.quote}</span>
                          </>
                        )}
                        <span className="text-[#8E8E8E] ml-1">{notif.time}</span>
                      </div>
                    </div>
                    {notif.button && (
                      <button className="bg-gradient-to-r from-primary via-secondary to-tertiary text-white text-xs font-bold px-5 py-2 rounded-lg active:scale-95 transition-transform">
                        {notif.button}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Earlier Notifications */}
            <div>
              <h2 className="text-sm font-bold text-on-surface-variant mb-4 px-1">Earlier</h2>
              <div className="space-y-1">
                {earlierNotifications.map((notif, i) => (
                  <div key={i} className="group flex items-center justify-between p-3 rounded-xl bg-surface-lowest hover:bg-surface-container-low transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      {notif.type === 'multiple' ? (
                        <div className="flex -space-x-4">
                          {notif.avatars.map((avatar, j) => (
                            <img key={j} alt="User" src={avatar} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                          ))}
                        </div>
                      ) : notif.type === 'story' ? (
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-tertiary p-[2px]">
                            <img alt="User" src={notif.avatar} className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-full object-cover border-2 border-white" />
                          </div>
                        </div>
                      ) : (
                        <Avatar src={notif.avatar} alt={notif.username} size="md" className="flex-shrink-0" />
                      )}
                      <div className="text-sm leading-snug">
                        <span className="font-bold">{notif.type === 'multiple' ? notif.usernames : notif.username}</span>
                        <span className="text-on-surface-variant"> {notif.action}</span>
                        {notif.reaction && <span> {notif.reaction}</span>}
                        <span className="text-[#8E8E8E] ml-1">{notif.time}</span>
                      </div>
                    </div>
                    {(notif.thumbnail || notif.storyThumbnail) && (
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden flex-shrink-0">
                        <img alt="Thumbnail" src={notif.thumbnail || notif.storyThumbnail} className="w-full h-full object-cover opacity-50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Navigation (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md flex justify-around items-center px-4 border-t border-[#e4e2e1]/30 z-50">
        {['home', 'explore', 'notifications', 'mail', 'person'].map((name, i) => (
          <button key={i} className={`flex flex-col items-center ${name === 'notifications' ? 'text-primary' : 'text-stone-500'}`}>
            <Icon name={name} filled={name === 'notifications'} />
          </button>
        ))}
      </nav>
    </div>
  );
}
