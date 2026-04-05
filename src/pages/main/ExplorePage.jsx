import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components/shared';

const categories = ['For You', 'Photography', 'Travel', 'Architecture', 'Digital Art', 'Nature', 'Fashion'];

const recentSearches = ['#minimalism', '@arch_daily', 'tokyo street style'];

const gridItems = [
  { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC2j1r_oR0FIpK0gp2chXUFMuezPJG2SVvrKRKspf0JnhY1ITEJSZ-Tb1KdmW20_f4iaoYxUMH3rgmhXWMYNJlmhCXYjnk5m6xUJYvotbHWZVAvgP73ulN2X4tmIQPpEChcq18jrBqcFsjKje8tIW2txthQvTa110xKE49Ro4Rp7j53SlMMc19Z-hpU56kFbXjyOurPDOq_SabsSkzcg4U95bos_I5mPQCiDcHcoFAHBCCLYv8xRyU8GubAzkNhVnGIzq9NTTw-yJN', likes: '1.2k', comments: '42' },
  { type: 'video', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrIIVYJ7R_hmwKc61-cIXaxbre34bVv8mTJWmVYrxWfuNkH1fmI5JPYpWSY3Ea5kNEI-3iYzvKFA1URbj1fKxmuyEJWoFGmWPlPhK_4wdwGwRCe1yTrP3HioXD7d9l2TRcFHPVEZJZqpsyhtDKjFWsXXyZKi9XBU13ugPG2wfIeBIe4S0d8w1fuRVkrj5ZQyaiJYCkhiTkyaYhZkS3iVmhrG2Unuv-v-03szKRUZgcd-c8GbNyjl7MMe17Bskh5Udql4WdCk6uXZhK' },
  { type: 'tall', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ89bQLWvsndNjOV5GrIgMCmanStPQUBjpz0m_3nqjf9AqXeex0rN4xUhtCzMnKAeS8UOfr31HxsOb7hX0xkM9VQprwWnhUTKdzFbmjwTJ7iKQ9oSkCtipninJ9TMYnC-8JM238b2daclFiOR5Wi5n9R9qn8QrP-S-VehfI5GMuW0l670tBl03SxnZzdbgejpBuhfsVZFmHEuuObphRqoQ3eIGwYoNjUNttlI2JPDqsXH-Q5_Dv9NghQXZIxCOyZEbYntXzS93iugK', layer: true },
  { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz2IQ6z13N5eenwlhTecVGPIB3-u_OVigycz8KP4Hp97MAzkV5p9TBbxLFh1z4ozhqAP9VCCfU5f-E7gflyGS9uOZoR1lYwAN60GsetqxQZfD_QaMzzdZiTtIDs7T_Z3IY9PLJFHPzwlnxIk8Zk1K9DYK2LwekEJfbYQ65Hfi7NJQxLc6K5sBxxkO0tW8OQujSmsdXBSyK7oUxsP6LCtW4YUIks2XZoGYiP01f571NYnLZSocHY8kDnj1CkNK2tC4Llnw6UWwAQ7Co' },
  { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA8hGKttoemAZM_ChF2fD1BsyybvqiC8-m8XZwPQLIy9aI-14mQjv8jYyZcYtWwKRN8tm5bfFtO570tm3D4Ebho6CGEWEikgsVjm72QxP7yzu48Rhgy8AHllPtRlyranrcNVx3aQGBZQw8bUmDUTlWH9mK_7JmNsWv6w0cPM2bMAFEs3_hTCxKMSr99RC76575UMU5wWTUtjCJCPnNV0sHYCA96JH1lvisxALdjfpoBaP1hDC4P00kumRPXbAOzeCqruwUMhvaB_ad' },
  { type: 'wide', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANxrXbbrfx4VWfWDPXk8WboODImklT0O46pfZklDE-NbQkUnSrKrgnJjDa1ifRkJPgBZS7QruJlcsKkUuWzLy_272MKocDij-LCymPSjJjZXqQqEbwia6xdTlFUOOnpYZLquIYWmsjUlzI7fkcQlFVmnMTdT_3QgXd-MJIK4NqhGBxcpWcgTBHrTldvHO4hLpqHOMuIEho8JO_8mjt6VSrOEQNET6tTdOkP7X80zpFTt26YG1jqGrcTJGeEkkCQ24ivZTmM-Q01E13', caption: 'Breathtaking view of the Altai Mountains' },
  { type: 'image', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMdWX77Yx_-dWaQmmWnMJqdnK4ODOst8AuWJxCSLW8wCfEEle450lgdAo5Xh8TGPBJbMv78P3DzSA3lSAYT_VKkKk2lVYXt-jtLTk49mHHsSKzoYA2E9aS-l3KvLzLcGMSUzaqsagMFvTDHdEFQiNr_YZ82TOIXyeOUjBDiVyh6WPIqU6PyrPNvblROSWlIe0Vcfl5z7uy8VqN4QO1Id4e4HfL7TfnQsXEVdoF4nm5Vw8aYilfvcGGMcbZJmMPmE_pvZUfCQJytw7C' },
];

const reels = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1Id5n0jIJe9CefcNDQW_gKPXz7-hX8QDK-tBlO4SjAWqsHTGSxA8dHRNkpe5iJcUJ1asRCKCgjYqWi4H30JqrSq7MqTeBPdH50PVGY013FMv5vMZacAq6m_zEr_bZc_-_wEC1q97RlgFGU7jkxvnWF_L2CiMCaYYHAFjzi4zDlza7Gnq7HMz9ln3TXPxBPEYxzBzCTeFymhM6OdcvWkP5jK02-2xRhCQ8i7t9oki2V2X6GugwT1uXiW4-mPMmY7VJQAcJO-lYIPSE', views: '2.4M' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz_C6_0YV22u2HkpDQDtu0vVw6Uu6Pvq1IahrZyUBGdMHeEwRZqZ_FkltbeiHn8briHqZti_Tc2PzCF_N2aEHWC_sz3Llla8T8S6mmP8Vp7fLJ7Y8j74t9kHaTSaqoRgLSo1jhaKI-5dUgQ94mNz5B2VW7hNMQ_j4FkYs6cJ-Pb3K0ucE2_oukbPQ7DteXW_jX46sbC3COUojW6Lgoowbvn6V9QmzI0EF8T6BePzjFfc1_ViUtnByZl-6E9HbtsV5ZwTX-4baKypQT', views: '890k' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmvY9S6D-IIxnbcIRexd-owed-IyKSWP6i4Wo3Ca-Bem045OA1MvwNArSjsAknqGQZbXom5kh2EJ-iwV_4D5uMJuiDXCBbOoLZQyDDdQlvh_9xEoYSQm47P7PtxerbAkKiZj8T9ocJDGFNiVvTSSAKC9bliKrllN-VgCL-Sq-06uq-1JJrNWvhAfSDlo5_Y2zrDV7QSPL-3xeGfUeHbZaLAvGlNlzgx737DdXgkzMDdCLXQePrVUJ2mdIkRO_V9frx_UtWHEh44Qr', views: '1.1M' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7fRSzep17TEzo56uXg50e_FmCkYJ5j-ZAJjL9lpG89VIbSp1DH4CqNOtC5IouwwTahrVpaL83TDboRNZ7--NuTX6VG1yA-C2ZC9JSZVFgLWit-y3iIPxVTBPbfURqzOVhhJrGKHOd5JjWgMq9fI5R7Lz-02tJbd1SfAG9bqioFPYGaJTtYHc0JlRNNkRMQK_DBrtPuglOBX8j_hj0nvzB1vlpbJIdkiJS9JVB4kfc_TjmHVNciIDyMFC82KcH3Yhii1QVcncE8W-s', views: '544k' },
];

const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8thYX_hmOpAUeW205lu1o3TwQcdrlN1IWrjZCwVR1MrvuDWg9iR001ccitApd0EtCSlJqi7vlaMVtvbyfKuL_2KjyGm3V-b_sumWtte1yBfTo4nyiu0zkwBABuy9GxSeoDhe593P02EvttsUiVy4PKae1XyDqA_f-ICFQNkYkTDnnEBtKk2HitdO9N5n5Ns5V73LSOxQ4nz2YpdTcuGIUCFpKbH-DZO7O1Uk5MFbQDCr02H0R_EWLyaMWqhuZxSigd7b8434G4fw0';

export function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('For You');

  return (
    <div className="min-h-screen bg-background text-on-background">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-md">
        <div className="flex justify-between items-center px-4 py-2 w-full max-w-screen-xl mx-auto h-16">
          <div className="flex items-center gap-8 flex-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">Gallery</span>
            <div className="hidden md:flex items-center bg-surface-container-low rounded-lg px-4 py-2 w-full max-w-md group focus-within:ring-1 ring-primary/20 transition-all">
              <Icon name="search" className="text-on-surface-variant text-xl mr-2" />
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-on-surface-variant"
                placeholder="Search creators, trends, or reels"
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Icon name="camera_alt" className="text-on-surface-variant hover:bg-[#f6f3f2] p-2 rounded-full cursor-pointer transition-all" />
            <Icon name="send" className="text-on-surface-variant hover:bg-[#f6f3f2] p-2 rounded-full cursor-pointer transition-all" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary p-[2px]">
              <img alt="User profile" src={userAvatar} className="w-full h-full rounded-full object-cover border-2 border-surface" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-24 md:pb-12 max-w-screen-xl mx-auto px-4">
        {/* Category Chips */}
        <div className="flex gap-3 overflow-x-auto py-4 mb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white font-bold'
                  : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recent Searches */}
        <section className="hidden lg:block mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Recent Searches</h3>
            <button className="text-xs font-bold text-primary hover:opacity-80 transition-opacity">Clear All</button>
          </div>
          <div className="flex gap-4">
            {recentSearches.map((search, i) => (
              <div key={i} className="flex items-center bg-surface-lowest shadow-sm rounded-lg px-4 py-3 min-w-[200px]">
                <Icon name="history" className="text-on-surface-variant mr-3" />
                <span className="text-sm font-medium">{search}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Masonry Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-6">
          {gridItems.map((item, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-lg cursor-pointer ${
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
                  <Icon name="layers" className="text-white drop-shadow-md" />
                </div>
              )}
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="play_circle" className="text-3xl text-white" />
                </div>
              )}
              {item.layer && (
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                  <span className="flex items-center gap-1">
                    <Icon name="favorite" filled className="text-lg" /> {item.likes || '0'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="chat_bubble" filled className="text-lg" /> {item.comments || '0'}
                  </span>
                </div>
              )}
              {item.caption && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-medium">{item.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trending Reels */}
        <div className="col-span-3 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Icon name="movie_filter" className="text-primary text-3xl" />
            <h2 className="text-xl font-bold tracking-tight">Trending Reels</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
            {reels.map((reel, i) => (
              <div
                key={i}
                className="min-w-[160px] md:min-w-[240px] aspect-[9/16] relative rounded-xl overflow-hidden bg-surface-container-highest flex-shrink-0 cursor-pointer"
              >
                <img src={reel.src} alt="Reel" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white font-bold text-sm">
                  <Icon name="play_arrow" className="text-base" /> {reel.views}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fcf9f8]/80 backdrop-blur-md flex justify-around items-center px-4 py-3">
        {['home', 'search', 'movie_filter', 'favorite_border', 'account_circle'].map((name, i) => {
          const to = name === 'home' ? '/home' : name === 'search' ? '/explore' : name === 'movie_filter' ? '/explore' : name === 'favorite_border' ? '/notifications' : '/profile';
          return (
            <Link
              key={i}
              className={`flex flex-col items-center justify-center ${name === 'search' ? 'text-primary scale-110' : 'text-[#5a4045]'} hover:opacity-80 transition-opacity`}
              to={to}
            >
              <Icon name={name} />
            </Link>
          );
        })}
      </nav>

      {/* FAB */}
      <button className="fixed bottom-20 right-6 md:bottom-10 md:right-10 bg-gradient-to-r from-primary to-secondary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40">
        <Icon name="add" className="text-3xl" />
      </button>
    </div>
  );
}
