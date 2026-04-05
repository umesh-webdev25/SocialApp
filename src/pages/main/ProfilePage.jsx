import { Icon, Avatar } from '../../components/shared';
import { NavLink, Link } from 'react-router-dom';

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKD_kktICh8k7EuZ3yj0GY2szBScc6NniSqhmBGniSn-oecujGRTSreCE8Cjo0JU8ewI9NbikWOn6is_wnlYHCPHsiY32UlImm5KSGdslwec_XD7JApvIQIYLXQ8sDeDEpsX0ftb04_-vU2eXU9-8tcfSJvWoFaAog9FQfISKfH6UHK99ewuE-jEagV_W4NbnSi-r2uu7mvmsfbxaAp0YCWHtQSsgULqPdsSjGltEBQUryTJc4dVwV5dg62O3aaagOGcLs9WnxnxP7';

const highlights = [
  { name: 'Moments', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUax-ZNbe65O7Wtw0GkFG2l6leo-MVGOaq22ebAlLeowUxrHKf09L4wPhOyxzXqMSRoqwpy5BPshLIwtyUOTG8oLhgVDIAJmRuUeyHyBkdCgGEWWglQYdr3WWSSt8fwukCK-F8Z-IuZtO7APe6zVavMj0NC5n_G8Cx6t4R92Mibpjfs1WfJNvS0t6mcjAK_pKBrIyif_HP0js-f6GP1SrkfGsQAlPv9QuuuJ8sISqS8LyS4IUF7s2SMzSRrHWR1sWF_C1fBJVeRW1o' },
  { name: 'Spaces', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI3wmnL2wBa4uYd1sVzrX4zKccx99Zx12mXiM4ToP2VvACx4RMJZUtkA6SfuVDXKpw-pWWqLU0ZjT3X05oxptWypWjXY0uuCHTaMp8uqOaK3WiTYuB18GWQGOlnE-mhL0TQn3VdbsTR3owgA54Ufo2YuTSpi11dMQTZFG1UPJjo18pzMBSr3tb5FsIkn0mPwuG5Sm7bjHjLttoVFrIEWhYjM8JQdGBEA7RRHcSo-EL1YahDoMWcdKxxLvaYkaDpBwPZp9toqZw_p9L' },
  { name: 'Visuals', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjVv_dQDY4w4PXf4TEGqaYcge1U_zFs8F7O7ZI6OowC4x_Za5S6IijP_F2xPYSJj4irHbhywiU8K882ai6FSqbnASwbZUqJmPydBZ3LVaYo5emyFT736C_QGVwVdi5mApkIuIT65r_Hnf5kCMx07SQuKC_AnMaIpwYaZptwad4dkmqrLV48rHCMqOPKN29leMI_OQV4tELSiDD_ly_xgJsEOKbSJ0obYLa4Acc5fnMeCwVMn6eBUyk08geCW52Rp3FNcdSqUJlKqQW' },
];

const posts = [
  { likes: '1.2k', comments: '48', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzPIQy6ZDel5mKujj1XEeSr3RO5SMhRCUvvEuscM1yI7ff9ITVeyKFgqm0JT9uwvqtuQO9EsTNZwGAVEjFZpK8FP7DBWzyF7hJ6nDTs63Wru9LgbXi42PkZNH8rapO9fu0ltSX5VCeIB_1QxbgQgIdKTFmwwW4_4VVhy1ERq0iF5TYwHtTHN-oEoZOC1I33MuBpXTJSH0EfctRG_2s-5OxNzQcKWuQJsIOH8jKtQ6zdFjDtUCjmPRbmc9FxrdAeSokyfFefhSirzil' },
  { likes: '890', comments: '22', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGTQMVr84-UbDsECEMGdHCOdnMTCYnG6QbIhvvVrvXrzHUcCA6d577G2SCKVGGE6Y1_9rSclKUHCShs_S5Iy3-97f_HvHFPD8PLU8MpbtkdmPrLKkUhTgQmIJ4Bp5nLRxgMdIxEA1EzX04nXHJHB6C2Qkl0IE3CYdZrzpkoFhBfPCiNWU_jc1S7jmCXC40s73ir0hEHFpZh6hXfM1eB26lm4l5gFt1h2nLGqkKB-UNh-dclHvUFA0GjB7UYfERvYP_pfTZbVPsAa3O' },
  { likes: '2.4k', comments: '115', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATOl_WgikaEn0Xt1vNf9J3o7yVsQjXmQnyL7ynYDpez-tpk2A3ImokFOJy32Jol88HXS3_TzhkmlxgC1jRglRMXvcxGIDm8o_GAZo9bw3IHh_W2NoQDFUt91hjhF5m_XOubunkLmzIX2NJJtSX51j1mhDROHqyTU_qE8vUL_JXlJvVZS9I-tob1arfnx31zQr2Vil7dS7FRBX6UApuIf3x9LVQuWV1yf8nZbzWCr1BOyHeuzsrwK1ZBUD7KcA9oR5J91MimjrLu8vE' },
  { likes: '1.5k', comments: '36', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH2GsgN27Ba68omSNFPV3hAg65zs79YiwYWtqBUkI2YjV_NLws197GrN0AsBX6K8oncbPJTny0hgtmREam9EFyoPaD_7WlkzfXIOlZn8T2qIC3DRtwhRN_9L3WczOYE7DjDuoty0FiIw2YMfUJ_wOdy0EVRqjvyg3f4Z1-QYuZJ4rz4N_1pwnRc3wklx4I5kq26upsTWCy5zIzWuvzTTbv4rFdW-ZHamTLPqpyIc1637P2RSUnlg8yF9ek0azawG_GVMxk9kRQzxBu' },
  { likes: '940', comments: '18', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQN8lA-EW9egBY6gg5c8zNLjGR6476GPbCUB8dgRudg07lUwfNcyC6SaUz1Srv74g7ap6PFvWVlwYxlnriQOlz-HkbppGHaHvmfOq0cKUxfz5QveUIQ9VspCJZCqUtYe1RcOKffTIZ4WakCBvwvv6IK6ZOeuYqYdxWSzIRIt8hCZgfNV0SkwPg5s7LIJ0LLErv0BOSEah1-ApBp2AUwhH1fHsuSgRQ7nlUSxCNPb5KQhuQ30o2J_gVxFegmVaEZSUIr5U-s1wWrMHi' },
  { likes: '3.1k', comments: '92', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8xlgUaz8rdTDNOs2KuBqcwZG1HAL2PeNXPqwoLhOi50t3nM9EwIQpuH8MbhJYCwWU-Fg_RdmnjdVJ14iGQdPGfKRROXugDPOZRMS1rdBt8swTRSpXP4lxUlpmOJfnlLZAiEnscvbvVxodJafuRTG_qLfjMJyZQAfPqElWaCMMF86q2T9UkWCL6R_KyXpyVKNnqthvuuU_OzAjpWmGPdjglQGn8c-yQBz9UiGvCPcUqPeKMltm1ayEHTLdS1BdSvJHmwsDH3JuB6YM' },
];

const navItems = [
  { name: 'home', label: 'Home', to: '/home' },
  { name: 'search', label: 'Search', to: '/explore' },
  { name: 'explore', label: 'Explore', to: '/explore' },
  { name: 'movie', label: 'Reels', to: '/explore' },
  { name: 'chat', label: 'Messages', to: '/messages' },
  { name: 'person', label: 'Profile', to: '/profile', active: true },
];

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      {/* Top Navigation (Mobile) */}
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 md:hidden">
        <div className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
          Instagram Ethos
        </div>
        <div className="flex items-center gap-4 text-[#5a4045]">
          <Icon name="add_box" />
          <Icon name="favorite_border" />
          <Icon name="send" />
        </div>
      </header>

      {/* Side Navigation (Desktop) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full py-8 gap-4 bg-[#fcf9f8] w-64 border-r border-surface-container">
        <div className="text-2xl font-black mb-8 px-6 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
          Editorial Lens
        </div>
        <div className="flex flex-col gap-1 px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-primary font-bold border-l-4 border-primary pl-3 bg-[#f6f3f2]'
                    : 'text-[#5a4045] hover:bg-[#f6f3f2]'
                }`
              }
            >
              <Icon name={item.name} filled={item.active} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
        <div className="mt-auto px-6">
          <button className="w-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white py-3 rounded-xl font-bold shadow-sm active:scale-95 transition-transform">
            Create Post
          </button>
        </div>
        <div className="flex flex-col gap-1 px-2 mt-4 pt-4 border-t border-surface-container">
          <Link className="flex items-center gap-4 py-3 px-4 text-[#5a4045] hover:bg-[#f6f3f2] rounded-lg transition-all duration-200" to="/settings/account">
            <Icon name="settings" />
            <span>Settings</span>
          </Link>
          <Link className="flex items-center gap-4 py-3 px-4 text-[#5a4045] hover:bg-[#f6f3f2] rounded-lg transition-all duration-200" to="/notifications">
            <Icon name="history" />
            <span>Activity</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 pt-20 md:pt-12 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Profile Header */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-primary via-secondary to-tertiary">
                <Avatar src={userAvatar} alt="User Avatar" className="w-full h-full rounded-full object-cover bg-white" />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-2xl font-light">curator_ethos</h1>
                <div className="flex gap-2">
                  <button className="px-5 py-1.5 bg-surface-container-highest text-on-surface font-semibold text-sm rounded-lg hover:bg-surface-container-high transition-colors">
                    Edit Profile
                  </button>
                  <button className="p-1.5 hover:bg-surface-container-low rounded-full transition-colors">
                    <Icon name="settings" className="text-on-surface-variant" />
                  </button>
                </div>
              </div>

              <div className="flex gap-8 text-sm md:text-base">
                <span><strong className="font-bold">124</strong> posts</span>
                <span><strong className="font-bold">12.5k</strong> followers</span>
                <span><strong className="font-bold">842</strong> following</span>
              </div>

              <div className="space-y-1">
                <p className="font-bold">Editorial Lens</p>
                <p className="text-on-surface-variant text-sm">Digital Creator</p>
                <p className="text-on-surface max-w-md leading-relaxed">
                  Visual Storyteller & Creative Director.<br />
                  Capturing the world through an editorial perspective.<br />
                  Tokyo | Paris | New York
                </p>
                <Link className="inline-block text-primary font-semibold text-sm hover:underline" to="/profile/links">editorial.lens/links</Link>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="mb-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {highlights.map((highlight, i) => (
              <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-surface-container p-[2px] bg-white">
                  <Avatar src={highlight.src} alt={highlight.name} className="w-full h-full rounded-full" />
                </div>
                <span className="text-xs font-medium text-on-surface-variant">{highlight.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-surface-container flex items-center justify-center">
                <Icon name="add" className="text-surface-container-highest text-3xl" />
              </div>
              <span className="text-xs font-medium text-on-surface-variant">New</span>
            </div>
          </section>

          {/* Tabs */}
          <div className="border-t border-surface-container">
            <div className="flex justify-center gap-12 -mt-px">
              {[
                { name: 'grid_on', label: 'Posts', active: true },
                { name: 'favorite_border', label: 'Likes', active: false },
                { name: 'bookmark', label: 'Saved', active: false },
              ].map((tab, i) => (
                <button
                  key={i}
                  className={`flex items-center gap-2 py-4 border-t-2 ${
                    tab.active ? 'border-primary text-primary font-bold' : 'border-transparent text-on-surface-variant font-medium'
                  } text-xs tracking-widest uppercase hover:text-on-surface transition-colors`}
                >
                  <Icon name={tab.name} filled={tab.active} className="text-sm" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Post Grid */}
          <section className="grid grid-cols-3 gap-1 md:gap-2 pb-20 mt-4 md:mt-8">
            {posts.map((post, i) => (
              <div key={i} className="relative aspect-square group overflow-hidden bg-surface-container-low rounded-sm md:rounded-xl cursor-pointer">
                <img
                  alt="Post Content"
                  src={post.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-6">
                  <div className="flex items-center gap-1.5">
                    <Icon name="favorite" className="text-lg" filled />
                    <span className="font-bold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="chat_bubble" className="text-lg" filled />
                    <span className="font-bold">{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-xl md:hidden border-t border-surface-container flex justify-around items-center py-3">
        {['home', 'search', 'movie', 'favorite_border', 'account_circle'].map((name, i) => {
          const to = name === 'home' ? '/home' : name === 'search' ? '/explore' : name === 'movie' ? '/explore' : name === 'favorite_border' ? '/notifications' : '/profile';
          return (
            <Link key={i} className="text-[#5a4045]" to={to}>
              <Icon name={name} />
            </Link>
          );
        })}
        <div className="w-6 h-6 rounded-full border-2 border-primary p-[2px]">
          <img
            alt="Avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-z5ZoGw5F6wGpXmNP_RRHC7IdCfBQ9QiXYKvmzQPHepY_u0CfNKyR8HBApmJGg9RiCE8ZtUtc11KvdNMDCOY7DGIP2Oq__VWgJfsNEsxBoHpuEQEaWk_Wd3Ny4Z0pJuQGw0bBDlQILU5QnOyRM0UuFcoJK0L-tSt7vowXTqUEfHr_sRvJpCGWlLHXvVSMLH82hST_ud1b4SBeMJXxsFQSWr2TiyCiIGwQ8fQSBbEeBR81QDcVzeYoUEQJ5qedJrQqW8NCrM6x5yU"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </nav>
    </div>
  );
}
