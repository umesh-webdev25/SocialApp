import { MainLayout } from '../../components/layout/MainLayout';
import { Icon, Avatar, StoryRing } from '../../components/shared';

const stories = [
  { id: 1, username: 'Your Story', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjt_XCq6sDZYY3Y3a65Cns5KeoSHoCOppbvfWw0t4JDI4IBzWjH4YFU5E-7ZqvPsBm4O23aJz2j6sIHJ8dInd8hG8TktcM82dXGK9NNRJYrPveovdMSIFn2YO9WF2yQ8KzltYjifk83nn2u1wwyNsFFh2yQXkvUBh9UJbj3B7yFGxWl6ye9JlnBeEP_lkfaqlEFI4LAfDfXtpxnJ_yH9S762Z-B1FN3beFdvw6F2QBDXxmjOPYxG1D3OKtLEx9ec6sQXC2oBgxEJr3' },
  { id: 2, username: 'elara_v', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQP1d9r19V5TVUKxPiqQb83BmPsFUkAAY8EzHNf9g0KhqSdd41OOpQ4WL-D9p9ykTGLCnbiEn_5xzywEUsmU6nfBVoYPOoV4PZkFnjrfgDe1Ht-uQDxgwigWFWiFwNbJrcZvoP5PPzs1qXnH5u114XYuI5I-ScqNr8ZIu2MONM7JxclJ2RAFT_ZC-qF4omfqx4M6vEui61GvEdrY9w-EroqK9klvXr62T3XR72f3EnfYyJpCrrDWGMV1TzfKRYrbTdrskfMk8vI8MC' },
  { id: 3, username: 'jaxon_d', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlvyTdEXSwKVCsCRnK8JU5XFZNxGyp76zJjmBHt8WqxOebqIFkU6I5D2rPM5t75JNjYo-PzAYyduzpw4rXCZMsYNz0n6L6aJL5Ohgbvqkxb8Y6C77QFDowmiev2VmQXOCJd5V3LC1ojQGbpXJhf4D0Pe1kOCMZX8192deHI3L-WrS75-X-RYQqParwBmPPP-5Wpq71-5IbJNLqHBurK7P1dHi42VKnG5wmpNr-wfqglZl29IPC13-QfIv1KvqKn6E_NAoOgpLT97H-' },
  { id: 4, username: 'mira_style', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgR_60HAv9TltV1uupYGkoBOVKmcbD8EjjlV3Ugk6LyV2jhWB5-no6I6PsYOO2SNODXWdnZbhNXextww2rmuYj7xsg6xu0tXNsWX5LWIPF6PGs3002-Iq9cE-RAE7znEqE8ILN2pPOCT3u7nLQj5tv-Kj_y-PDgTQBN3ZSvZcgqPgN2Zu3BJin8jcKZGTfCbtYV-ve3BA5SH3yMnUxuF4k9MnKmkb_r1vQB9cJ8GOt2Bt62yeH2AdrdfbTftT0JCaH3bRH2jUD1ria' },
  { id: 5, username: 'lucas.raw', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBrseMpS3P6Yf9EKxbacl2Sp-mg-UkZ9SCbyss69-fdXu5l9JBr1uW-JWVRaR6a-MhbYsbbRKyvmZjolLdjXTG7Q94ghtFYQZ4HWbtqunfy1rvP9LhLIiJyDA8G7sSc2flvP7tHW2ouiRHyrHJPImIqXgV2iHOVvIwMektdQLSwCuVTBPqJ3KR3uFdOcTg8AXY3iXUdg4JKymeCEpeRbzTl7yCh5_lTyda8MQVw9N-B4x-que4StaYq5RnQo3QFJJIRls-o8rTrMAf' },
  { id: 6, username: 'sophia.ai', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX56kaPNEG3BinrB9ghfvOud9kGmbjPBY7g1ARO9RhmDGNl4hAGtcKoE_AgIWbdEgKvVnhEcE0eojAaynzLqKEaVzAXUgDDL3mDnz7JRv4sr0JitS5IMU7VGr9r2LRtKWEN-71Fme5foxBfeI3KNQJK8hITc-aaH87gmyZX4NazfCbI1J0deT4Sb3YlErcs2t1QQeWF7DZNohop1bkllwTCX_J2SxujQ1MbaSJd3ZDWl9PbrjQTHzXbr7q3J4--xecA7uBLycf7rUG' },
];

const posts = [
  {
    id: 1,
    user: { username: 'elara_v', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5apdUYSWRbu8-wHnpgvFcMDW7LEVXEm7qBBeMnI8000tWHCUKJi0VI2YMS6a-i6Miif2MPRSKHou8eW4OW-YDR6J1M79S7MVdiBhZxgzxRjjdgmUtOGRCUOxcub-rhSa3ogZ_8h2xM9WleayZI5h3SihWwHh3oWNgOuyrfIAOSNAqYuouJ20QW8yHkU86doZcqv3RwD5VjphRw5iw4OIBXinxRiU0rV-9sCnDpEjSozDsKDbLDc1RdG-rcbqonqBnEMWdhWVitB_Q' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpQGoCyXuNa3fKaQA3CdNv-hhvgfQf5Yw-MXNj88vGemZ2M_krvpo1ESOtSooUL4sBgFyBUNTu_Taxwd_niiSetcKBTRr5A1va67KQzh0o4ICM3LWyISQuYniZ6CN6j1n2P0r7rMHDl75lTscRI3t97szFdKgaC82frZVcib23J6_KtMMnubdZbxy2A2FznOKmYDphJVNYkbcJBuskJ0qH8Srzc3kwDHKvS_y1LjTcEImTrA61d-qn4qBApUab8JcQBT09oy2_7s0A',
    likes: '1,482',
    caption: 'The morning light in the Alps is something else. Pure magic. ✨ #adventure #alps #mountains',
    time: '2h',
    liked: false,
  },
  {
    id: 2,
    user: { username: 'sophia.ai', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbLIqrZyIK6PohBtUDIgSQyhvjVXQ0FHXBAOXRMYqVX936NDVyYNYSQIcK-rft1PWYPn64woTl0f3v7sHql3SIMm15Tpw6npxZbV1Qio1TCds-6qpq-LUQUM5i_WNxyu3JF7QdvzATMhLNdabRmObkOCwAxUTxg4SAIo4UvvFGm7dWMjGvfiPxX0Gm7nT9vgO-Mje9CXb52DlEZucDwxy0JJ13wc35FrYv4IpOayAQ8opgrkNKVRFC-vvk6hVBFO4Ig32oD0t8mxBp' },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCklgXzYvrVmgSkiJ96aE8UXRYBS6eVHe47id5KSEkCSTaLbbPV_cs-UQwN5kEYusGdW2aLjKHaRvucMJlJFYIuFKrRVMuVsUbA8WAiKv8SeCE7ZAi6aIjemKw0UXZUmupjxDShKIpJ5vBX9xnaU3nag-0asHXGjKJEUK0fRHSe-tUZu7jOsN6D8u6--HulbvmVVqoefz4DEc7yVtDc-K9bh_NnjuyMt70zgb-wAPeyTVWoKrQPLWFOcZ3AtCpHT2nt6ywOXuIatTsu',
    likes: '9,203',
    caption: 'Sunday indulgence. Who else is a chocolate lover? 🍫☕️ #foodie #dessert #bakery',
    time: '5h',
    liked: true,
    comments: [
      { username: 'jaxon_d', text: 'Need this recipe ASAP!' },
      { username: 'mira_style', text: 'The lighting is perfection.' },
    ],
  },
];

const suggestions = [
  { username: 'mark.creates', followedBy: 'elara_v + 12 more', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcJXAyVFdmG-i_Dme6yRVVyOYGKPUOV8_yEWorNQB3H8_Xzv4t_XCbtoRxCjrkFjTUfewaaUlGr6ItF-UXteqeUD75VPgF_MuoL-u-d2nMGSUvq61owXvK962oVdy56JHvvH8MgXCY5MpEVbuHTeX_Lp5an_SbfXhQCkrJQHq0AEZXA-85YYXocWZkp8EmB3mWxaX2wKTzKLJqn0PNkdlq_WsA8pOHK_Dxw4li2VzI_-JLVQ1NKc6dLDs4hNXyhjCh6Ei4kBtUjLSH' },
  { username: 'chloe_pixels', followedBy: 'Suggested for you', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg1A76hM9BCalvl-vR8joS3UT_5Y_RWjDLQfHm8CL1FEBhuEpBQ7FFb25PJ4m3HTPYMmSZghgzkuYoFBl073zsN8sBPomM_QjWeUXrlahJvRkQ5EOSvpGiJWo0eXGqF_qy37aWin7FCCZhrRaIXCSawRAIsP8mXqQL_N8MzhfriIQoB8QJN1jzTz_j9TWx6Bj5PFrpz8leoADbQmnFMLOzFTbdrFfv03lT6UT_oi4XGJfyiwMDTpzG4fvxMJ_-57A6AfgrfCriuUQx' },
  { username: 'urban_eye', followedBy: 'Followed by jaxon_d', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjNvluqNAoM_sNywam4U20J8GdYMosZirGWnkGzQp9TuhmNcEs8T_myZRUi1yNJ1wlSgtKtBAFKIZ9uc2Id-NDhIGhn5VJMh_3Xe5PbVBk3Z13MDGrGqjLw9jP4FooJQmVJ1mbrOAV035IbLNTY2mjImc5PPNWZg40a2y_QuZpCy1ZKlm6erlX3TfplmRyhYY_RaKzc_OctTkU4nnaKgxLCjnrN9OKE62cajwanerGuc0VKLVH7LaztjlpgJFODX1--zkPlOXu5-KZ' },
];

const trends = [
  { category: 'Photography • Trending', tag: '#GoldenHourVibes', posts: '15.4k' },
  { category: 'Travel • Trending', tag: '#SecretEscapes', posts: '8.2k' },
  { category: 'Design • Trending', tag: '#Glassmorphism2024', posts: '2.1k' },
];

export function HomeFeedPage() {
  return (
    <MainLayout activeTab="home">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
        {/* Feed Section */}
        <div className="md:col-span-8 lg:col-span-7 space-y-6">
          {/* Stories */}
          <section className="bg-surface-lowest border border-outline-variant/30 rounded-xl p-4 flex space-x-4 overflow-x-auto scrollbar-hide">
            {stories.map((story) => (
              <div key={story.id} className="flex-shrink-0 flex flex-col items-center space-y-1 cursor-pointer">
                <StoryRing>
                  <Avatar src={story.src} alt={story.username} className="w-14 h-14 rounded-full object-cover" />
                </StoryRing>
                <span className="text-[10px] text-on-surface-variant font-medium">{story.username}</span>
              </div>
            ))}
          </section>

          {/* Posts */}
          {posts.map((post) => (
            <article key={post.id} className="bg-surface-lowest border border-outline-variant/30 rounded-xl overflow-hidden">
              <header className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-3">
                  <StoryRing>
                    <Avatar src={post.user.src} alt={post.user.username} className="w-8 h-8" />
                  </StoryRing>
                  <span className="text-sm font-semibold hover:text-primary cursor-pointer">{post.user.username}</span>
                  <span className="text-xs text-on-surface-variant">• {post.time}</span>
                </div>
                <Icon name="more_horiz" className="text-on-surface-variant cursor-pointer" />
              </header>

              <div className="aspect-square bg-stone-100 overflow-hidden">
                <img alt="Post content" src={post.image} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Icon name={post.liked ? 'favorite' : 'favorite_border'} className={`text-2xl cursor-pointer transition-colors ${post.liked ? 'text-red-500' : 'hover:text-red-500'}`} filled={post.liked} />
                    <Icon name="chat_bubble" className="text-2xl hover:text-stone-400 transition-colors cursor-pointer" />
                    <Icon name="send" className="text-2xl hover:text-stone-400 transition-colors cursor-pointer" />
                  </div>
                  <Icon name="bookmark" className="text-2xl hover:text-stone-400 transition-colors cursor-pointer" />
                </div>

                <div className="text-sm">
                  <p className="font-bold mb-1">{post.likes} likes</p>
                  <p>
                    <span className="font-bold mr-2">{post.user.username}</span>
                    {post.caption}
                  </p>
                </div>

                {post.comments && (
                  <div className="space-y-1">
                    {post.comments.map((comment, i) => (
                      <p key={i} className="text-sm">
                        <span className="font-bold mr-2">{comment.username}</span>
                        {comment.text}
                      </p>
                    ))}
                  </div>
                )}

                <div className="text-xs text-on-surface-variant cursor-pointer hover:underline">
                  View all {post.id === 1 ? '24' : '156'} comments
                </div>

                <div className="flex items-center space-x-2">
                  <Icon name="mood" className="text-sm text-on-surface-variant" />
                  <input className="flex-grow bg-transparent border-none focus:ring-0 text-sm p-0" placeholder="Add a comment..." type="text" />
                  <button className="text-sm font-semibold text-primary/60 hover:text-primary">Post</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="hidden md:block md:col-span-4 lg:col-span-5 space-y-8 sticky top-20 h-fit">
          {/* User Profile */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_-jai7o6N62GGSB0NagEzEWaS9E29PDb91xwalt_xTiRnxcOn-Rt2BfKvvzhVEdICarn8m2m4XJJxgXMrq3pPBM9CBRBajL1Yy-Wa6cjmIqR3pp_-_ZXYYISzrdXCln6QC75b960YhiGvztyjXYHFBJg2ZXNgOlP9cUMO241-PHk1W518TU6DTv1ax23TXWjYHA1NZN-ZVdMBCEbUtgZWh8wuMPZENLxQb--pkHtP9qm4G9NtS1kdWTt_EpveT9Kbmmgz5dG8z6It" alt="Current User" size="lg" />
              <div>
                <p className="text-sm font-bold">alex_designer</p>
                <p className="text-sm text-on-surface-variant">Alex Rivera</p>
              </div>
            </div>
            <button className="text-xs font-bold text-primary hover:text-secondary">Switch</button>
          </div>

          {/* Suggestions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-on-surface-variant">Suggestions for you</span>
              <button className="text-xs font-bold hover:text-on-surface-variant">See All</button>
            </div>
            <div className="space-y-3">
              {suggestions.map((suggestion, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar src={suggestion.src} alt={suggestion.username} className="w-8 h-8" />
                    <div>
                      <p className="text-xs font-bold">{suggestion.username}</p>
                      <p className="text-[10px] text-on-surface-variant">{suggestion.followedBy}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-primary hover:text-secondary">Follow</button>
                </div>
              ))}
            </div>
          </div>

          {/* Trending */}
          <div className="bg-surface-container-low rounded-xl p-4 space-y-4">
            <span className="text-sm font-bold text-on-surface-variant block">Trending Topics</span>
            <div className="space-y-3">
              {trends.map((trend, i) => (
                <div key={i}>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">{trend.category}</p>
                  <p className="text-sm font-bold">{trend.tag}</p>
                  <p className="text-[10px] text-on-surface-variant">{trend.posts} posts</p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="text-[11px] text-on-surface-variant/60 leading-relaxed">
            <nav className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
              {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language'].map((link) => (
                <a key={link} className="hover:underline" href="#">{link}</a>
              ))}
            </nav>
            <p>© 2024 EDITORIAL FROM META</p>
          </footer>
        </div>
      </div>
    </MainLayout>
  );
}
