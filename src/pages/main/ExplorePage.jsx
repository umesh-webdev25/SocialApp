import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/shared';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const categories = ['For You', 'Photography', 'Travel', 'Architecture', 'Digital Art', 'Nature', 'Fashion'];

const recentSearches = ['#minimalism', '@arch_daily', 'tokyo street style'];

const gridItems = [
  { type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop', likes: '1.2k', comments: '42' },
  { type: 'video', src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop' },
  { type: 'tall', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop', layer: true, likes: '3.4k', comments: '128' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop' },
  { type: 'wide', src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=600&fit=crop', caption: 'Breathtaking view of the Altai Mountains' },
  { type: 'image', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop' },
];

const reels = [
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop', views: '2.4M' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=800&fit=crop', views: '890k' },
  { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=800&fit=crop', views: '1.1M' },
  { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=800&fit=crop', views: '544k' },
];

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8thYX_hmOpAUeW205lu1o3TwQcdrlN1IWrjZCwVR1MrvuDWg9iR001ccitApd0EtCSlJqi7vlaMVtvbyfKuL_2KjyGm3V-b_sumWtte1yBfTo4nyiu0zkwBABuy9GxSeoDhe593P02EvttsUiVy4PKae1XyDqA_f-ICFQNkYkTDnnEBtKk2HitdO9N5n5Ns5V73LSOxQ4nz2YpdTcuGIUCFpKbH-DZO7O1Uk5MFbQDCr02H0R_EWLyaMWqhuZxSigd7b8434G4fw0';

export function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('For You');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Navigation - Instagram Style */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center px-4 py-2 w-full max-w-screen-xl mx-auto h-16">
          <div className="flex items-center gap-8 flex-1">
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
            <div className="hidden md:flex items-center bg-gray-50 rounded-xl px-4 py-2 w-full max-w-md border border-gray-100 focus-within:border-[#E1306C]/30 focus-within:ring-2 focus-within:ring-[#E1306C]/30 transition-all duration-200">
              <Icon name="search" className="text-gray-400 text-xl mr-2" />
              <input
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-full placeholder:text-gray-400 text-gray-800"
                placeholder="Search creators, trends, or reels"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="camera_alt" className="text-gray-600 hover:text-[#E1306C] p-2 rounded-full cursor-pointer transition-all text-2xl" />
            <Icon name="send" className="text-gray-600 hover:text-[#E1306C] p-2 rounded-full cursor-pointer transition-all text-2xl" />
            <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[1.5px]">
              <div className="bg-white rounded-full p-[1px]">
                <img alt="User profile" src={userAvatar} className="w-8 h-8 rounded-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-24 md:pb-12 max-w-screen-xl mx-auto px-4 relative z-10">
        
        {/* Category Chips - Instagram Style */}
        <div className="flex gap-3 overflow-x-auto py-4 mb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recent Searches - Instagram Style */}
        <section className="hidden lg:block mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Recent Searches</h3>
            <button className="text-xs font-bold text-[#E1306C] hover:text-[#833AB4] transition-colors">Clear All</button>
          </div>
          <div className="flex gap-4">
            {recentSearches.map((search, i) => (
              <div key={i} className="flex items-center bg-white shadow-sm rounded-xl px-4 py-3 min-w-[200px] border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <Icon name="history" className="text-gray-400 mr-3 text-xl" />
                <span className="text-sm font-medium text-gray-700">{search}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Masonry Grid - Instagram Style */}
        <div className="grid grid-cols-3 gap-1 md:gap-4">
          {gridItems.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-lg cursor-pointer bg-gray-100 ${
                item.type === 'tall' ? 'row-span-2' : item.type === 'wide' ? 'col-span-2 aspect-video' : 'aspect-square'
              }`}
            >
              <img
                src={item.src}
                alt="Grid content"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {item.type === 'tall' && (
                <div className="absolute top-4 right-4">
                  <Icon name="layers" className="text-white drop-shadow-md text-2xl" />
                </div>
              )}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <Icon name="play_circle" className="text-5xl text-white drop-shadow-lg" />
                </div>
              )}
              {(item.layer || item.likes) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Icon name="favorite" filled className="text-lg" /> {item.likes || '0'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="chat_bubble" filled className="text-lg" /> {item.comments || '0'}
                    </span>
                  </div>
                </div>
              )}
              {item.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p className="text-white font-medium text-sm">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trending Reels - Instagram Style */}
        <div className="col-span-3 py-8 mt-4">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
            <h2 className="text-xl font-bold text-gray-800">Trending Reels</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
            {reels.map((reel, i) => (
              <div
                key={i}
                className="min-w-[160px] md:min-w-[240px] aspect-[9/16] relative rounded-xl overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer group"
              >
                <img src={reel.src} alt="Reel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white font-bold text-sm">
                  <Icon name="play_arrow" className="text-base" /> {reel.views}
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon name="play_circle" className="text-5xl text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation (Mobile) - Instagram Style */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md flex justify-around items-center px-4 py-3 border-t border-gray-100">
        {['home', 'search', 'movie_filter', 'favorite_border', 'account_circle'].map((name, i) => {
          const to = name === 'home' ? '/home' : name === 'search' ? '/explore' : name === 'movie_filter' ? '/explore' : name === 'favorite_border' ? '/notifications' : '/profile';
          const isActive = name === 'search';
          return (
            <Link
              key={i}
              className={`flex flex-col items-center justify-center transition-all duration-200 ${
                isActive ? 'text-[#E1306C]' : 'text-gray-500 hover:text-[#E1306C]'
              }`}
              to={to}
            >
              <Icon name={name} className="text-2xl" />
            </Link>
          );
        })}
      </nav>

      {/* FAB - Instagram Style */}
      <button className="fixed bottom-20 right-6 md:bottom-10 md:right-10 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 z-40 hover:shadow-xl">
        <Icon name="add" className="text-3xl" />
      </button>
    </div>
  );
}