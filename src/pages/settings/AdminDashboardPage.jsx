import { Icon, Avatar } from '../../components/shared';
import { NavLink } from 'react-router-dom';

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
    <div className="min-h-screen bg-surface text-on-surface antialiased">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 w-64 border-r border-outline-variant/15 bg-[#fcf9f8] z-50">
        <div className="mb-8 px-2">
          <h1 className="text-xl font-black bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Editorial Studio</h1>
          <p className="text-xs text-on-surface-variant font-medium mt-1">Admin Dashboard</p>
        </div>
        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to="/admin"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-transform active:scale-[0.98] ${
                  isActive || item.active
                    ? 'text-primary font-semibold bg-[#f6f3f2]'
                    : 'text-[#5a4045] hover:text-primary hover:bg-[#f6f3f2]'
                }`
              }
            >
              <Icon name={item.name} />
              <span className="text-sm">{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-4">
          <button className="w-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white py-2.5 rounded-lg font-bold text-sm shadow-sm transition-transform active:scale-[0.95] flex items-center justify-center gap-2">
            <Icon name="add" className="text-sm" />
            Create Post
          </button>
          <div className="mt-6 flex items-center gap-3 px-2">
            <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2ir0ie2tY-jJsficSIcwK7Ctz-DeYkLmhnvbAiOAEUFj1tAXng0lvrjfCvOWOQo6F3_2svTYUWo_xSQ9MiGNCwQTPHjCtQRofYS9jDxERvTbmppRUXOO4VjHICQmNFR67ooHTBjVJKSi7YOkoL0NmF3AkkJfYgipbrWO84OL_l8jkdcaLP6imDSLWBQ7sFL5SUERdGRJwzCXxcZcyAzNOquJTTVd60zmH6fbdNSiRDLrR-79TJuddOOAjIGiGZYJKjCE7DaLdYpPf" alt="Admin" size="sm" />
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate">Admin Workspace</p>
              <p className="text-[10px] text-on-surface-variant truncate">Premium Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* Top Bar */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-[#fcf9f8]/80 backdrop-blur-md flex justify-between items-center px-8 h-16 border-b border-[#e2bec3]/15">
          <div className="flex items-center flex-1">
            <div className="relative w-full max-w-md group">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg" />
              <input
                className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#b7004f]/30 transition-all"
                placeholder="Search insights, content, or users..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <button className="hover:text-primary transition-colors"><Icon name="notifications" /></button>
              <button className="hover:text-primary transition-colors"><Icon name="chat_bubble_outline" /></button>
              <button className="hover:text-primary transition-colors"><Icon name="account_circle" /></button>
            </div>
            <div className="h-8 w-[1px] bg-outline-variant/30" />
            <Avatar src={userAvatar} alt="User Profile" size="sm" className="ring-2 ring-primary/20" />
          </div>
        </header>

        {/* Content */}
        <div className="pt-24 pb-12 px-8 max-w-7xl mx-auto space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-surface-lowest p-6 rounded-xl border border-outline-variant/10 transition-all hover:border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-on-surface-variant text-xs font-bold tracking-wider uppercase">{stat.label}</span>
                  <Icon name={stat.icon} className="text-primary" />
                </div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-2xl font-black">{stat.value}</h3>
                  <span className={`text-xs font-bold ${stat.positive ? 'text-green-600' : stat.positive === false ? 'text-primary' : 'text-on-surface-variant'}`}>{stat.change}</span>
                </div>
                <div className="mt-4 h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${stat.positive ? 'bg-gradient-to-r from-primary via-secondary to-tertiary' : 'bg-on-surface-variant'} w-[${50 + i * 10}%]`} />
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Growth Trends */}
            <div className="lg:col-span-2 bg-surface-lowest rounded-xl border border-outline-variant/10 p-8 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-lg font-bold">Growth Trends</h2>
                  <p className="text-sm text-on-surface-variant">Daily performance across all channels</p>
                </div>
                <div className="flex bg-surface-container-low p-1 rounded-lg">
                  <button className="px-4 py-1 text-xs font-bold bg-surface-container-lowest rounded-md shadow-sm">Week</button>
                  <button className="px-4 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface transition-colors">Month</button>
                </div>
              </div>
              <div className="flex-1 min-h-[300px] relative">
                <div className="absolute inset-0 flex items-end justify-between gap-2 px-4">
                  {[40, 65, 55, 85, 70, 95, 80].map((h, i) => (
                    <div
                      key={i}
                      className="w-full rounded-t-lg bg-gradient-to-t from-primary via-secondary to-tertiary opacity-[${0.1 + i * 0.15}]"
                      style={{ height: `${h}%`, opacity: 0.1 + i * 0.15 }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="border-b border-outline-variant/10 w-full h-0" />
                  ))}
                </div>
              </div>
            </div>

            {/* Access Points */}
            <div className="bg-surface-lowest rounded-xl border border-outline-variant/10 p-8">
              <div className="mb-6">
                <h2 className="text-lg font-bold">Access Points</h2>
                <p className="text-sm text-on-surface-variant">Global traffic distribution</p>
              </div>
              <div className="aspect-square bg-surface-container-low rounded-lg mb-6 overflow-hidden relative">
                <img alt="Global Heatmap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrblLn9vmh3shse0d3DWCa-kTlE93xYy1FE29DOFHnOB4yEwLodt4CEx6BdOdznJQdXQ2RNSC-TTZ_Gg-jvGGnh-5i6Hy1LpEGq9GtUDQ6F9rJjA6y5T5A3owsFUNkYVtyIA1wgKBTpzUxnAts9sFEmi5AEVFsJyfQoXhpUD-v6_1AnV_zqbjIwisXdUcLiEu9zcrj4-mlxkdPaRVFdqfhuBT3cMAks5Rhr_jnbqChSkF_lMj8Vsd0UUxhedmtlT6A0HQ-uyq1zUBq" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all" />
                <div className="absolute top-4 right-4 bg-surface-lowest/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm">Live Now: 1,402</div>
              </div>
              <div className="space-y-4">
                {[
                  { country: 'United States', percent: '42%', color: 'bg-primary' },
                  { country: 'United Kingdom', percent: '18%', color: 'bg-secondary' },
                  { country: 'Germany', percent: '12%', color: 'bg-tertiary' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      <span className="text-sm font-medium">{item.country}</span>
                    </div>
                    <span className="text-sm font-bold">{item.percent}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Table */}
          <div className="bg-surface-lowest rounded-xl border border-outline-variant/10 overflow-hidden">
            <div className="px-8 py-6 flex justify-between items-center border-b border-outline-variant/10">
              <h2 className="text-lg font-bold">Recent Activity</h2>
              <button className="text-sm font-bold text-primary hover:text-secondary transition-colors">View All Logs</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-surface-container-low/50 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
                    <th className="px-8 py-4">Author</th>
                    <th className="px-8 py-4">Action</th>
                    <th className="px-8 py-4">Entity</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4">Timestamp</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-outline-variant/5">
                  {activity.map((item, i) => (
                    <tr key={i} className="hover:bg-surface-container-low/30 transition-colors">
                      <td className="px-8 py-4 flex items-center gap-3">
                        <Avatar src={item.avatar} alt={item.name} size="sm" />
                        <span className="font-semibold">{item.name}</span>
                      </td>
                      <td className="px-8 py-4 text-on-surface-variant">{item.action}</td>
                      <td className="px-8 py-4 font-medium italic">{item.entity}</td>
                      <td className="px-8 py-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full uppercase ${
                          item.status === 'success' ? 'bg-green-100 text-green-700' :
                          item.status === 'pending' ? 'bg-blue-100 text-blue-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-8 py-4 text-on-surface-variant text-xs">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="md:flex fixed bottom-8 right-8 bg-gradient-to-r from-primary via-secondary to-tertiary w-14 h-14 rounded-full items-center justify-center shadow-lg text-white hover:scale-110 active:scale-95 transition-all z-50">
        <Icon name="add" className="text-xl" filled />
      </button>
    </div>
  );
}
