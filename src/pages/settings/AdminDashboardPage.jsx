import { Icon, Avatar } from '../../components/shared';
import { NavLink } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const sidebarItems = [
  { name: 'dashboard', label: 'Dashboard', active: true },
  { name: 'auto_awesome_motion', label: 'Content' },
  { name: 'analytics', label: 'Analytics' },
  { name: 'group', label: 'Audience' },
  { name: 'settings', label: 'Settings' },
];

const stats = [
  { label: 'Total Views', value: '1.2M', change: '+12%', positive: true, icon: 'visibility' },
  { label: 'Engagement', value: '84.2K', change: '+5.4%', positive: true, icon: 'favorite' },
  { label: 'Conversions', value: '2.4K', change: '0.0%', icon: 'shopping_bag' },
  { label: 'Subscribers', value: '15.8K', change: '-2.1%', positive: false, icon: 'star' },
];

const activity = [
  { name: 'Julianna D.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNOACG32wcfoffsIe8DghWsi8mXEJHen3J4Or9fnIIZ1XD_V59z8XgNdnW2LkQz9F_im2KSO0FCGv_14SJq3QYovACfPyCDjtyFoQI4eeUKnZYXA6aODtTYvvHgq9HaS8Zk0sAI0A1D9Q2l4-1v7nl517vuq-JR2O_Yr-Np3gPwjojjDCik9N8hal8wbIHs0BXid-s97zA1IRsfH2nelJlf71sQvcOqJUbTGmSBv_sN5t1hCT2XcHZWbRvgak_EQrWtb9mNJP2WAAW', action: 'Published Post', entity: '"The Future of Minimal UI"', status: 'success', time: '2 mins ago' },
  { name: 'Marcus T.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5qUMU9lXzqAPqTribvwPzlrJHmDwjQjZVNd8HBeC5g6a56C8C2XHsogBODgeJM4lcFtgXEtJXfWoZ7TqWrAZIWFysyCBEAxTzn0U0QP9alLNjrJ1k3SttxVGu7IKVBJ5zG5LwGZETWYFhinjDZHgb0JNfjvrrlMtLIqJqAv6TQ1pxGcUrfsW7ew4YhO_6tKTsgShUDRNzzC7jrwILe0t5jmJL0IlVZyA8uQCkAL_pI-9zE56CzkASlgR7UPwSDPkWQaH-SjQIfQO', action: 'Modified Analytics', entity: 'Dashboard Customization', status: 'pending', time: '14 mins ago' },
  { name: 'Sarah K.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYNimbsSqU8LIhYdswjUbzG02-SjsVagdWskw8wLEPY8jKKQA10uLfg9OU3MNV4hkpbL_a9JtUznucE7wpal7bgHptvgvFBPdW5etXp6Dz7xSVu91gU3LOz2YJm1DFoxK9aOFqVF8nta4Qvz3k4hp47S12amfhGfmZie--unCNqTAMRp1BwirTFVWuifl6QSuYZeiSAmn4AYW8zMg9LKHIuEOMTGeZBVw7C94wmS8G1PVh1e2x_UossliLzFojdVnydJbpNmtyXU-j', action: 'Deleted Content', entity: 'Draft_Asset_v04.png', status: 'alert', time: '1 hour ago' },
];

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0R_OQQxd1prUg0IKsVr2TwXQ0xdkEvmvt3a_UiYLfa6whAE8K9bXTT2N3MO8YC21b16yyx2ZIIrgMpmDPVX9CQAi_rkfpBFgV_U33ao6xYEjsGJOLtXNv-gOVj-Z4jsGAn5EhfwesPzvICP5wRQ5stsiTfheKgd9TGtW0_szr7rV7VzVViaHPP_02PXAqZgsVwY-FmyooHkrV7Ks2Nj7ggEhZ8L8Quwqn9shXYNN5c84JCBNXYCxNtGvM4VYnyMQwC4U_OWtgHVwu';

export function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] antialiased">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Sidebar - Instagram Style */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 w-64 bg-white/95 backdrop-blur-sm border-r border-gray-100 shadow-xl z-50">
        <div className="mb-8 px-2">
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
            <h1 className={`text-xl font-extrabold tracking-tight ${brandGradient}`}>NEXUS</h1>
          </div>
          <p className="text-[10px] text-gray-400 font-medium mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                  isActive || item.active
                    ? 'bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]'
                }`
              }
            >
              <Icon name={item.name} className="text-xl" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-4">
          {/* <button className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 hover:shadow-lg">
            <Icon name="add" className="text-sm" />
            Create Post
          </button> */}
          <div className="mt-6 flex items-center gap-3 px-2 pt-4 border-t border-gray-100">
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ir0ie2tY-jJsficSIcwK7Ctz-DeYkLmhnvbAiOAEUFj1tAXng0lvrjfCvOWOQo6F3_2svTYUWo_xSQ9MiGNCwQTPHjCtQRofYS9jDxERvTbmppRUXOO4VjHICQmNFR67ooHTBjVJKSi7YOkoL0NmF3AkkJfYgipbrWO84OL_l8jkdcaLP6imDSLWBQ7sFL5SUERdGRJwzCXxcZcyAzNOquJTTVd60zmH6fbdNSiRDLrR-79TJuddOOAjIGiGZYJKjCE7DaLdYpPf" alt="Admin" size="sm" className="w-8 h-8 rounded-full" />
              </div>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-gray-800 truncate">Admin Workspace</p>
              <p className="text-[10px] text-gray-400 truncate">Premium Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen relative z-10">
        {/* Top Bar - Instagram Style */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-white/80 backdrop-blur-md flex justify-between items-center px-8 h-16 border-b border-gray-100">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md group">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 placeholder:text-gray-400"
                placeholder="Search insights, content, or users..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 text-gray-600">
              <button className="hover:text-[#E1306C] transition-colors"><Icon name="notifications" className="text-2xl" /></button>
              <button className="hover:text-[#E1306C] transition-colors"><Icon name="chat_bubble_outline" className="text-2xl" /></button>
              <button className="hover:text-[#E1306C] transition-colors"><Icon name="account_circle" className="text-2xl" /></button>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <Avatar src={userAvatar} alt="User Profile" size="sm" className="w-8 h-8 rounded-full" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Grid - Instagram Style */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-xs font-bold tracking-wider uppercase">{stat.label}</span>
                  <Icon name={stat.icon} className="text-[#E1306C] text-2xl" />
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                  <span className={`text-xs font-semibold ${stat.positive ? 'text-green-500' : stat.positive === false ? 'text-[#E1306C]' : 'text-gray-400'}`}>{stat.change}</span>
                </div>
                <div className="mt-4 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737]`} style={{ width: `${50 + i * 10}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Growth Trends */}
            <div className="lg:col-span-2 bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">Growth Trends</h2>
                  <p className="text-sm text-gray-500">Daily performance across all channels</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-xl">
                  <button className="px-4 py-1 text-xs font-semibold bg-white rounded-lg shadow-sm text-gray-800">Week</button>
                  <button className="px-4 py-1 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors">Month</button>
                </div>
              </div>
              <div className="flex-1 min-h-[300px] relative">
                <div className="absolute inset-0 flex items-end justify-between gap-2 px-4">
                  {[40, 65, 55, 85, 70, 95, 80].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-lg bg-gradient-to-t from-[#833AB4] via-[#E1306C] to-[#F77737]"
                      style={{ height: `${h}%`, opacity: 0.3 + i * 0.1 }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="border-b border-gray-100 w-full h-0" />
                  ))}
                </div>
              </div>
            </div>

            {/* Access Points */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-gray-800">Access Points</h2>
                <p className="text-sm text-gray-500">Global traffic distribution</p>
              </div>
              <div className="aspect-square bg-gray-50 rounded-xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-semibold shadow-sm text-gray-700">Live Now: 1,402</div>
              </div>
              <div className="space-y-4">
                {[
                  { country: 'United States', percent: '42%', color: 'bg-[#833AB4]' },
                  { country: 'United Kingdom', percent: '18%', color: 'bg-[#E1306C]' },
                  { country: 'Germany', percent: '12%', color: 'bg-[#F77737]' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium text-gray-700">{item.country}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">{item.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Table - Instagram Style */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="px-8 py-6 flex justify-between items-center border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
              <button className="text-sm font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors">View All Logs</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 text-[10px] uppercase tracking-wider font-semibold">
                    <th className="px-8 py-4">Author</th>
                    <th className="px-8 py-4">Action</th>
                    <th className="px-8 py-4">Entity</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {activity.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
                            <div className="bg-white rounded-full p-[1px]">
                              <Avatar src={item.avatar} alt={item.name} size="sm" className="w-8 h-8 rounded-full" />
                            </div>
                          </div>
                          <span className="font-semibold text-gray-800">{item.name}</span>
                        </div>
                       </td>
                      <td className="px-8 py-4 text-gray-600">{item.action}</td>
                      <td className="px-8 py-4 font-medium italic text-gray-700">{item.entity}</td>
                      <td className="px-8 py-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase ${
                          item.status === 'success' ? 'bg-green-100 text-green-700' :
                          item.status === 'pending' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </span>
                       </td>
                      <td className="px-8 py-4 text-gray-400 text-xs">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* FAB - Instagram Style */}
      <button className="md:flex fixed bottom-8 right-8 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] w-14 h-14 rounded-full items-center justify-center shadow-lg text-white hover:scale-110 active:scale-95 transition-all duration-200 z-50 hover:shadow-xl">
        <Icon name="add" className="text-2xl" filled />
      </button>
    </div>
  );
}