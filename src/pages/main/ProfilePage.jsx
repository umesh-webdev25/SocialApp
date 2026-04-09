import { Icon, Avatar } from "../../components/shared";
import { NavLink, Link } from "react-router-dom";

const brandGradient =
  "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent";

const userAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAKD_kktICh8k7EuZ3yj0GY2szBScc6NniSqhmBGniSn-oecujGRTSreCE8Cjo0JU8ewI9NbikWOn6is_wnlYHCPHsiY32UlImm5KSGdslwec_XD7JApvIQIYLXQ8sDeDEpsX0ftb04_-vU2eXU9-8tcfSJvWoFaAog9FQfISKfH6UHK99ewuE-jEagV_W4NbnSi-r2uu7mvmsfbxaAp0YCWHtQSsgULqPdsSjGltEBQUryTJc4dVwV5dg62O3aaagOGcLs9WnxnxP7";

const highlights = [
  {
    name: "Moments",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUax-ZNbe65O7Wtw0GkFG2l6leo-MVGOaq22ebAlLeowUxrHKf09L4wPhOyxzXqMSRoqwpy5BPshLIwtyUOTG8oLhgVDIAJmRuUeyHyBkdCgGEWWglQYdr3WWSSt8fwukCK-F8Z-IuZtO7APe6zVavMj0NC5n_G8Cx6t4R92Mibpjfs1WfJNvS0t6mcjAK_pKBrIyif_HP0js-f6GP1SrkfGsQAlPv9QuuuJ8sISqS8LyS4IUF7s2SMzSRrHWR1sWF_C1fBJVeRW1o",
  },
  {
    name: "Spaces",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI3wmnL2wBa4uYd1sVzrX4zKccx99Zx12mXiM4ToP2VvACx4RMJZUtkA6SfuVDXKpw-pWWqLU0ZjT3X05oxptWypWjXY0uuCHTaMp8uqOaK3WiTYuB18GWQGOlnE-mhL0TQn3VdbsTR3owgA54Ufo2YuTSpi11dMQTZFG1UPJjo18pzMBSr3tb5FsIkn0mPwuG5Sm7bjHjLttoVFrIEWhYjM8JQdGBEA7RRHcSo-EL1YahDoMWcdKxxLvaYkaDpBwPZp9toqZw_p9L",
  },
  {
    name: "Visuals",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVv_dQDY4w4PXf4TEGqaYcge1U_zFs8F7O7ZI6OowC4x_Za5S6IijP_F2xPYSJj4irHbhywiU8K882ai6FSqbnASwbZUqJmPydBZ3LVaYo5emyFT736C_QGVwVdi5mApkIuIT65r_Hnf5kCMx07SQuKC_AnMaIpwYaZptwad4dkmqrLV48rHCMqOPKN29leMI_OQV4tELSiDD_ly_xgJsEOKbSJ0obYLa4Acc5fnMeCwVMn6eBUyk08geCW52Rp3FNcdSqUJlKqQW",
  },
];

const posts = [
  {
    likes: "1.2k",
    comments: "48",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
  },
  {
    likes: "890",
    comments: "22",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop",
  },
  {
    likes: "2.4k",
    comments: "115",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
  },
  {
    likes: "1.5k",
    comments: "36",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop",
  },
  {
    likes: "940",
    comments: "18",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
  },
  {
    likes: "3.1k",
    comments: "92",
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop",
  },
];

const navItems = [
  { name: "home", label: "Home", to: "/home" },
  { name: "search", label: "Search", to: "/explore" },
  { name: "explore", label: "Explore", to: "/explore" },
  { name: "movie", label: "Reels", to: "/explore" },
  { name: "chat", label: "Messages", to: "/messages" },
  { name: "person", label: "Profile", to: "/profile", active: true },
];

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Navigation (Mobile) - Instagram Style */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-between items-center px-6 py-3 md:hidden border-b border-gray-100">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient
                id="instaGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#833AB4" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="100%" stopColor="#F77737" />
              </linearGradient>
            </defs>
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="6"
              fill="url(#instaGrad)"
            />
            <circle cx="12" cy="12" r="4.5" fill="white" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          </svg>
          <div
            className={`text-xl font-extrabold tracking-tight ${brandGradient}`}
          >
            NEXUS
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600">
          <Icon name="add_box" className="text-2xl" />
          <Icon name="favorite_border" className="text-2xl" />
          <Icon name="send" className="text-2xl" />
        </div>
      </header>

      {/* Side Navigation (Desktop) - Instagram Style */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full py-8 gap-4 bg-white/95 backdrop-blur-sm w-64 border-r border-gray-100 shadow-xl z-40">
        <div className="flex items-center gap-2 px-6 mb-6">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient
                id="instaGrad2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#833AB4" />
                <stop offset="50%" stopColor="#E1306C" />
                <stop offset="100%" stopColor="#F77737" />
              </linearGradient>
            </defs>
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="6"
              fill="url(#instaGrad2)"
            />
            <circle cx="12" cy="12" r="4.5" fill="white" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
          </svg>
          <div
            className={`text-2xl font-extrabold tracking-tight ${brandGradient}`}
          >
            NEXUS
          </div>
        </div>

        <div className="flex flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#833AB4]/10 via-[#E1306C]/10 to-[#F77737]/10 text-[#E1306C] font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#E1306C]"
                }`
              }
            >
              <Icon name={item.name} filled={item.active} className="text-xl" />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="mt-6 px-3">
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `w-full py-3 px-4 rounded-xl font-semibold text-sm shadow-md active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 ${
                isActive
                  ? "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white shadow-lg"
                  : "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:shadow-lg transform hover:scale-[1.02]"
              }`
            }
          >
            <Icon name="add_box" className="text-xl" />
            Create Post
          </NavLink>
        </div>

        <div className="flex flex-col gap-1 px-3 mt-4 pt-4 border-t border-gray-100">
          <Link
            className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-[#E1306C] rounded-xl transition-all duration-200"
            to="/settings/account"
          >
            <Icon name="settings" className="text-xl" />
            <span className="text-sm font-medium">Settings</span>
          </Link>
          <Link
            className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-[#E1306C] rounded-xl transition-all duration-200"
            to="/notifications"
          >
            <Icon name="history" className="text-xl" />
            <span className="text-sm font-medium">Activity</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="md:ml-64 pt-16 md:pt-8 min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Profile Header - Instagram Style */}
          <section className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
            <div className="relative shrink-0 mx-auto md:mx-0">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737]">
                <div className="bg-white rounded-full p-[2px]">
                  <Avatar
                    src={userAvatar}
                    alt="User Avatar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-2xl font-light text-gray-800">
                  curator_ethos
                </h1>
                <div className="flex gap-2">
                  <button className="px-5 py-1.5 bg-gray-100 text-gray-800 font-semibold text-sm rounded-lg hover:bg-gray-200 transition-colors">
                    <Link
                      to="/profile/edit"
                      className="flex items-center gap-1"
                    >
                      <Icon name="edit" className="text-gray-600" />
                      <span>Edit Profile</span>
                    </Link>
                  </button>

                  <Link
                    to="/settings/account"
                    className="p-1.5 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors">
                      <Icon name="settings" className="text-gray-600" />
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex gap-8 text-sm md:text-base text-gray-700">
                <span>
                  <strong className="font-bold text-gray-900">124</strong> posts
                </span>
                <span>
                  <strong className="font-bold text-gray-900">12.5k</strong>{" "}
                  followers
                </span>
                <span>
                  <strong className="font-bold text-gray-900">842</strong>{" "}
                  following
                </span>
              </div>

              <div className="space-y-1">
                <p className="font-bold text-gray-900">Editorial Lens</p>
                <p className="text-gray-500 text-sm">Digital Creator</p>
                <p className="text-gray-700 max-w-md leading-relaxed text-sm">
                  Visual Storyteller & Creative Director.
                  <br />
                  Capturing the world through an editorial perspective.
                  <br />
                  Tokyo | Paris | New York
                </p>
                <Link
                  className="inline-block text-[#E1306C] font-semibold text-sm hover:text-[#833AB4] transition-colors"
                  to="/profile/links"
                >
                  editorial.lens/links
                </Link>
              </div>
            </div>
          </section>

          {/* Highlights - Instagram Style */}
          <section className="mb-12 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {highlights.map((highlight, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[1.5px] bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] group-hover:scale-105 transition-transform duration-200">
                  <div className="bg-white rounded-full p-[1px]">
                    <Avatar
                      src={highlight.src}
                      alt={highlight.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-600">
                  {highlight.name}
                </span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-[#E1306C] transition-colors">
                <Icon
                  name="add"
                  className="text-gray-400 text-3xl group-hover:text-[#E1306C] transition-colors"
                />
              </div>
              <span className="text-xs font-medium text-gray-600">New</span>
            </div>
          </section>

          {/* Tabs - Instagram Style */}
          <div className="border-t border-gray-200">
            <div className="flex justify-center gap-12 -mt-px">
              {[
                { name: "grid_on", label: "Posts", to: "/profile" },
                {
                  name: "favorite_border",
                  label: "Likes",
                  to: "/profile/likes",
                },
                { name: "bookmark", label: "Saved", to: "/profile/saved" },
              ].map((tab, i) => (
                <NavLink
                  key={i}
                  to={tab.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 py-4 border-t-2 transition-all duration-200 ${
                      isActive
                        ? "border-[#E1306C] text-[#E1306C] font-semibold"
                        : "border-transparent text-gray-500 font-medium hover:text-gray-700"
                    } text-xs tracking-wider uppercase`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        name={tab.name}
                        filled={isActive}
                        className="text-sm"
                      />
                      {tab.label}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Post Grid - Instagram Style */}
          <section className="grid grid-cols-3 gap-1 md:gap-2 pb-20 mt-4 md:mt-8">
            {posts.map((post, i) => (
              <div
                key={i}
                className="relative aspect-square group overflow-hidden bg-gray-100 rounded-sm md:rounded-xl cursor-pointer"
              >
                <img
                  alt="Post Content"
                  src={post.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-6">
                  <div className="flex items-center gap-1.5">
                    <Icon name="favorite" className="text-lg" filled />
                    <span className="font-bold text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="chat_bubble" className="text-lg" filled />
                    <span className="font-bold text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) - Instagram Style */}
      <nav className="fixed bottom-0 w-full z-50 bg-white/80 backdrop-blur-md md:hidden border-t border-gray-100 flex justify-around items-center py-3">
        {["home", "search", "movie", "favorite_border", "account_circle"].map(
          (name, i) => {
            const to =
              name === "home"
                ? "/home"
                : name === "search"
                ? "/explore"
                : name === "movie"
                ? "/explore"
                : name === "favorite_border"
                ? "/notifications"
                : "/profile";
            return (
              <Link
                key={i}
                className="text-gray-600 hover:text-[#E1306C] transition-colors"
                to={to}
              >
                <Icon name={name} className="text-2xl" />
              </Link>
            );
          },
        )}
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] p-[1.5px]">
          <div className="bg-white rounded-full p-[1px]">
            <img
              alt="Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-z5ZoGw5F6wGpXmNP_RRHC7IdCfBQ9QiXYKvmzQPHepY_u0CfNKyR8HBApmJGg9RiCE8ZtUtc11KvdNMDCOY7DGIP2Oq__VWgJfsNEsxBoHpuEQEaWk_Wd3Ny4Z0pJuQGw0bBDlQILU5QnOyRM0UuFcoJK0L-tSt7vowXTqUEfHr_sRvJpCGWlLHXvVSMLH82hST_ud1b4SBeMJXxsFQSWr2TiyCiIGwQ8fQSBbEeBR81QDcVzeYoUEQJ5qedJrQqW8NCrM6x5yU"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
