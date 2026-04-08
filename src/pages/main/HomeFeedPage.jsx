import { MainLayout } from "../../components/layout/MainLayout";
import { Icon, Avatar, StoryRing } from "../../components/shared";
import { useState } from "react";

const brandGradient =
  "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent";

const stories = [
  {
    id: 1,
    username: "Your Story",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjt_XCq6sDZYY3Y3a65Cns5KeoSHoCOppbvfWw0t4JDI4IBzWjH4YFU5E-7ZqvPsBm4O23aJz2j6sIHJ8dInd8hG8TktcM82dXGK9NNRJYrPveovdMSIFn2YO9WF2yQ8KzltYjifk83nn2u1wwyNsFFh2yQXkvUBh9UJbj3B7yFGxWl6ye9JlnBeEP_lkfaqlEFI4LAfDfXtpxnJ_yH9S762Z-B1FN3beFdvw6F2QBDXxmjOPYxG1D3OKtLEx9ec6sQXC2oBgxEJr3",
    isViewed: false,
  },
  {
    id: 2,
    username: "elara_v",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQP1d9r19V5TVUKxPiqQb83BmPsFUkAAY8EzHNf9g0KhqSdd41OOpQ4WL-D9p9ykTGLCnbiEn_5xzywEUsmU6nfBVoYPOoV4PZkFnjrfgDe1Ht-uQDxgwigWFWiFwNbJrcZvoP5PPzs1qXnH5u114XYuI5I-ScqNr8ZIu2MONM7JxclJ2RAFT_ZC-qF4omfqx4M6vEui61GvEdrY9w-EroqK9klvXr62T3XR72f3EnfYyJpCrrDWGMV1TzfKRYrbTdrskfMk8vI8MC",
    isViewed: false,
  },
  {
    id: 3,
    username: "jaxon_d",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlvyTdEXSwKVCsCRnK8JU5XFZNxGyp76zJjmBHt8WqxOebqIFkU6I5D2rPM5t75JNjYo-PzAYyduzpw4rXCZMsYNz0n6L6aJL5Ohgbvqkxb8Y6C77QFDowmiev2VmQXOCJd5V3LC1ojQGbpXJhf4D0Pe1kOCMZX8192deHI3L-WrS75-X-RYQqParwBmPPP-5Wpq71-5IbJNLqHBurK7P1dHi42VKnG5wmpNr-wfqglZl29IPC13-QfIv1KvqKn6E_NAoOgpLT97H-",
    isViewed: true,
  },
  {
    id: 4,
    username: "mira_style",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgR_60HAv9TltV1uupYGkoBOVKmcbD8EjjlV3Ugk6LyV2jhWB5-no6I6PsYOO2SNODXWdnZbhNXextww2rmuYj7xsg6xu0tXNsWX5LWIPF6PGs3002-Iq9cE-RAE7znEqE8ILN2pPOCT3u7nLQj5tv-Kj_y-PDgTQBN3ZSvZcgqPgN2Zu3BJin8jcKZGTfCbtYV-ve3BA5SH3yMnUxuF4k9MnKmkb_r1vQB9cJ8GOt2Bt62yeH2AdrdfbTftT0JCaH3bRH2jUD1ria",
    isViewed: false,
  },
  {
    id: 5,
    username: "lucas.raw",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBrseMpS3P6Yf9EKxbacl2Sp-mg-UkZ9SCbyss69-fdXu5l9JBr1uW-JWVRaR6a-MhbYsbbRKyvmZjolLdjXTG7Q94ghtFYQZ4HWbtqunfy1rvP9LhLIiJyDA8G7sSc2flvP7tHW2ouiRHyrHJPImIqXgV2iHOVvIwMektdQLSwCuVTBPqJ3KR3uFdOcTg8AXY3iXUdg4JKymeCEpeRbzTl7yCh5_lTyda8MQVw9N-B4x-que4StaYq5RnQo3QFJJIRls-o8rTrMAf",
    isViewed: false,
  },
  {
    id: 6,
    username: "sophia.ai",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCX56kaPNEG3BinrB9ghfvOud9kGmbjPBY7g1ARO9RhmDGNl4hAGtcKoE_AgIWbdEgKvVnhEcE0eojAaynzLqKEaVzAXUgDDL3mDnz7JRv4sr0JitS5IMU7VGr9r2LRtKWEN-71Fme5foxBfeI3KNQJK8hITc-aaH87gmyZX4NazfCbI1J0deT4Sb3YlErcs2t1QQeWF7DZNohop1bkllwTCX_J2SxujQ1MbaSJd3ZDWl9PbrjQTHzXbr7q3J4--xecA7uBLycf7rUG",
    isViewed: false,
  },
];

const posts = [
  {
    id: 1,
    user: {
      username: "elara_v",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5apdUYSWRbu8-wHnpgvFcMDW7LEVXEm7qBBeMnI8000tWHCUKJi0VI2YMS6a-i6Miif2MPRSKHou8eW4OW-YDR6J1M79S7MVdiBhZxgzxRjjdgmUtOGRCUOxcub-rhSa3ogZ_8h2xM9WleayZI5h3SihWwHh3oWNgOuyrfIAOSNAqYuouJ20QW8yHkU86doZcqv3RwD5VjphRw5iw4OIBXinxRiU0rV-9sCnDpEjSozDsKDbLDc1RdG-rcbqonqBnEMWdhWVitB_Q",
    },
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop",
    likes: "1,482",
    caption:
      "The morning light in the Alps is something else. Pure magic. ✨ #adventure #alps #mountains",
    time: "2 hours ago",
    liked: false,
  },
  {
    id: 2,
    user: {
      username: "sophia.ai",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbLIqrZyIK6PohBtUDIgSQyhvjVXQ0FHXBAOXRMYqVX936NDVyYNYSQIcK-rft1PWYPn64woTl0f3v7sHql3SIMm15Tpw6npxZbV1Qio1TCds-6qpq-LUQUM5i_WNxyu3JF7QdvzATMhLNdabRmObkOCwAxUTxg4SAIo4UvvFGm7dWMjGvfiPxX0Gm7nT9vgO-Mje9CXb52DlEZucDwxy0JJ13wc35FrYv4IpOayAQ8opgrkNKVRFC-vvk6hVBFO4Ig32oD0t8mxBp",
    },
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=800&fit=crop",
    likes: "9,203",
    caption:
      "Sunday indulgence. Who else is a chocolate lover? 🍫☕️ #foodie #dessert #bakery",
    time: "5 hours ago",
    liked: true,
    comments: [
      { username: "jaxon_d", text: "Need this recipe ASAP! 😍" },
      { username: "mira_style", text: "The lighting is perfection. ✨" },
    ],
  },
];

const suggestions = [
  {
    username: "mark.creates",
    followedBy: "elara_v + 12 more",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcJXAyVFdmG-i_Dme6yRVVyOYGKPUOV8_yEWorNQB3H8_Xzv4t_XCbtoRxCjrkFjTUfewaaUlGr6ItF-UXteqeUD75VPgF_MuoL-u-d2nMGSUvq61owXvK962oVdy56JHvvH8MgXCY5MpEVbuHTeX_Lp5an_SbfXhQCkrJQHq0AEZXA-85YYXocWZkp8EmB3mWxaX2wKTzKLJqn0PNkdlq_WsA8pOHK_Dxw4li2VzI_-JLVQ1NKc6dLDs4hNXyhjCh6Ei4kBtUjLSH",
  },
  {
    username: "chloe_pixels",
    followedBy: "Suggested for you",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDg1A76hM9BCalvl-vR8joS3UT_5Y_RWjDLQfHm8CL1FEBhuEpBQ7FFb25PJ4m3HTPYMmSZghgzkuYoFBl073zsN8sBPomM_QjWeUXrlahJvRkQ5EOSvpGiJWo0eXGqF_qy37aWin7FCCZhrRaIXCSawRAIsP8mXqQL_N8MzhfriIQoB8QJN1jzTz_j9TWx6Bj5PFrpz8leoADbQmnFMLOzFTbdrFfv03lT6UT_oi4XGJfyiwMDTpzG4fvxMJ_-57A6AfgrfCriuUQx",
  },
  {
    username: "urban_eye",
    followedBy: "Followed by jaxon_d",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjNvluqNAoM_sNywam4U20J8GdYMosZirGWnkGzQp9TuhmNcEs8T_myZRUi1yNJ1wlSgtKtBAFKIZ9uc2Id-NDhIGhn5VJMh_3Xe5PbVBk3Z13MDGrGqjLw9jP4FooJQmVJ1mbrOAV035IbLNTY2mjImc5PPNWZg40a2y_QuZpCy1ZKlm6erlX3TfplmRyhYY_RaKzc_OctTkU4nnaKgxLCjnrN9OKE62cajwanerGuc0VKLVH7LaztjlpgJFODX1--zkPlOXu5-KZ",
  },
];

const trends = [
  {
    category: "Photography • Trending",
    tag: "#GoldenHourVibes",
    posts: "15.4K posts",
  },
  { category: "Travel • Trending", tag: "#SecretEscapes", posts: "8.2K posts" },
  {
    category: "Design • Trending",
    tag: "#Glassmorphism2024",
    posts: "2.1K posts",
  },
];

export function HomeFeedPage() {
  const [localPosts, setLocalPosts] = useState(posts);
  const [commentText, setCommentText] = useState({});

  const handleLike = (postId) => {
    setLocalPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: !post.liked
                ? (parseInt(post.likes.replace(/,/g, "")) + 1).toLocaleString()
                : (parseInt(post.likes.replace(/,/g, "")) - 1).toLocaleString(),
            }
          : post,
      ),
    );
  };

  const handleComment = (postId) => {
    if (!commentText[postId]?.trim()) return;
    setLocalPosts((prev) =>
      prev.map((post) => {
        if (post.id === postId) {
          const newComment = {
            username: "alex_designer",
            text: commentText[postId],
          };
          const updatedComments = post.comments
            ? [...post.comments, newComment]
            : [newComment];
          return { ...post, comments: updatedComments };
        }
        return post;
      }),
    );
    setCommentText((prev) => ({ ...prev, [postId]: "" }));
  };

  return (
    <MainLayout activeTab="home">
      <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
        {/* Background decorative elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        </div>

       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 px-3 py-6 md:py-8 -mt-8 md:-mt-10 relative z-10">
          <div className="md:col-span-8 lg:col-span-7 space-y-6">
            {/* Stories Section - Fixed Instagram Style */}
            <section className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm p-4">
              <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
                {stories.map((story) => (
                  <div
                    key={story.id}
                    className="flex-shrink-0 flex flex-col items-center gap-1 group cursor-pointer"
                  >
                    <div className="relative">
                      {/* Gradient or Gray Ring based on viewed status */}
                      <div
                        className={`w-16 h-16 rounded-full p-[2px] ${
                          story.isViewed
                            ? "bg-gray-200"
                            : "bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F56040]"
                        }`}
                      >
                        <div className="bg-white rounded-full p-[2px] w-full h-full">
                          <Avatar
                            src={story.src}
                            alt={story.username}
                            className="w-full h-full rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Add Story Button - Only for "Your Story" */}
                      {story.username === "Your Story" && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                          <Icon name="add" className="text-white text-xs" />
                        </div>
                      )}
                    </div>

                    {/* Username - Clean typography */}
                    <span className="text-[11px] font-medium text-gray-700 text-center max-w-[68px] truncate">
                      {story.username === "Your Story"
                        ? "Your story"
                        : story.username}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Posts - Instagram Style */}
            {localPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-md"
              >
                {/* Post Header */}
                <header className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F56040] rounded-full p-[1.5px]">
                      <div className="bg-white rounded-full p-[1px]">
                        <Avatar
                          src={post.user.src}
                          alt={post.user.username}
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-baseline space-x-1.5">
                      <span className="text-sm font-semibold text-gray-900 hover:text-[#E1306C] cursor-pointer transition-colors">
                        {post.user.username}
                      </span>
                      <span className="text-xs text-gray-400">
                        • {post.time}
                      </span>
                    </div>
                  </div>
                  <Icon
                    name="more_horiz"
                    className="text-gray-500 cursor-pointer hover:text-[#E1306C] transition-colors"
                  />
                </header>

                {/* Post Image */}
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <img
                    alt="Post content"
                    src={post.image}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Post Actions */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="transform transition-transform active:scale-90"
                      >
                        <Icon
                          name={post.liked ? "favorite" : "favorite_border"}
                          className={`text-2xl transition-all duration-200 ${
                            post.liked
                              ? "text-red-500 fill-current"
                              : "text-gray-700 hover:text-red-500"
                          }`}
                          filled={post.liked}
                        />
                      </button>
                      <button className="transform transition-transform active:scale-90">
                        <Icon
                          name="chat_bubble"
                          className="text-2xl text-gray-700 hover:text-[#E1306C] transition-colors"
                        />
                      </button>
                      <button className="transform transition-transform active:scale-90">
                        <Icon
                          name="send"
                          className="text-2xl text-gray-700 hover:text-[#E1306C] transition-colors"
                        />
                      </button>
                    </div>
                    <button className="transform transition-transform active:scale-90">
                      <Icon
                        name="bookmark"
                        className="text-2xl text-gray-700 hover:text-[#E1306C] transition-colors"
                      />
                    </button>
                  </div>

                  {/* Likes */}
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      {post.likes} likes
                    </p>
                  </div>

                  {/* Caption */}
                  <div className="text-sm leading-relaxed">
                    <span className="font-semibold mr-2 text-gray-900">
                      {post.user.username}
                    </span>
                    <span className="text-gray-700">{post.caption}</span>
                  </div>

                  {/* Comments */}
                  {post.comments && post.comments.length > 0 && (
                    <div className="space-y-1.5">
                      {post.comments.slice(0, 2).map((comment, i) => (
                        <p key={i} className="text-sm leading-relaxed">
                          <span className="font-semibold mr-2 text-gray-900">
                            {comment.username}
                          </span>
                          <span className="text-gray-700">{comment.text}</span>
                        </p>
                      ))}
                      {post.comments.length > 2 && (
                        <div className="text-xs text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">
                          View all {post.comments.length} comments
                        </div>
                      )}
                    </div>
                  )}

                  {/* Add Comment */}
                  <div className="flex items-center space-x-3 pt-2 border-t border-gray-100">
                    <Icon
                      name="mood"
                      className="text-xl text-gray-400 cursor-pointer hover:text-[#E1306C] transition-colors"
                    />
                    <input
                      className="flex-grow bg-transparent border-none focus:outline-none focus:ring-0 text-sm text-gray-900 placeholder:text-gray-400 p-0"
                      placeholder="Add a comment..."
                      type="text"
                      value={commentText[post.id] || ""}
                      onChange={(e) =>
                        setCommentText((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleComment(post.id)
                      }
                    />
                    <button
                      onClick={() => handleComment(post.id)}
                      className="text-sm font-semibold text-[#E1306C]/60 hover:text-[#E1306C] transition-colors disabled:opacity-50"
                      disabled={!commentText[post.id]?.trim()}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar - Instagram Style */}
          <div className="hidden md:block md:col-span-4 lg:col-span-5 space-y-6 sticky top-20 h-fit">
            {/* User Profile Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F56040] rounded-full p-[1.5px]">
                    <div className="bg-white rounded-full p-[1px]">
                      <Avatar
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_-jai7o6N62GGSB0NagEzEWaS9E29PDb91xwalt_xTiRnxcOn-Rt2BfKvvzhVEdICarn8m2m4XJJxgXMrq3pPBM9CBRBajL1Yy-Wa6cjmIqR3pp_-_ZXYYISzrdXCln6QC75b960YhiGvztyjXYHFBJg2ZXNgOlP9cUMO241-PHk1W518TU6DTv1ax23TXWjYHA1NZN-ZVdMBCEbUtgZWh8wuMPZENLxQb--pkHtP9qm4G9NtS1kdWTt_EpveT9Kbmmgz5dG8z6It"
                        alt="Current User"
                        size="lg"
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      alex_designer
                    </p>
                    <p className="text-sm text-gray-500">Alex Rivera</p>
                  </div>
                </div>
                <button className="text-xs font-bold text-[#E1306C] hover:text-[#833AB4] transition-colors">
                  Switch
                </button>
              </div>
            </div>

            {/* Suggestions for you */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-gray-500">
                  Suggestions for you
                </span>
                <button className="text-xs font-semibold text-gray-900 hover:text-[#E1306C] transition-colors">
                  See All
                </button>
              </div>
              <div className="space-y-4">
                {suggestions.map((suggestion, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F56040] rounded-full p-[1px]">
                        <Avatar
                          src={suggestion.src}
                          alt={suggestion.username}
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-[#E1306C] transition-colors cursor-pointer">
                          {suggestion.username}
                        </p>
                        <p className="text-xs text-gray-500">
                          {suggestion.followedBy}
                        </p>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F56040]/5 backdrop-blur-sm rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 bg-gradient-to-b from-[#833AB4] to-[#E1306C] rounded-full" />
                <span className="text-sm font-bold text-gray-900">
                  Trending Topics
                </span>
              </div>
              <div className="space-y-4">
                {trends.map((trend, i) => (
                  <div key={i} className="group cursor-pointer">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                      {trend.category}
                    </p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-[#E1306C] transition-colors mt-0.5">
                      {trend.tag}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      {trend.posts}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <footer className="text-[11px] text-gray-400 leading-relaxed px-2">
              <nav className="flex flex-wrap gap-x-3 gap-y-1.5 mb-4">
                {[
                  "About",
                  "Help",
                  "Press",
                  "API",
                  "Jobs",
                  "Privacy",
                  "Terms",
                  "Locations",
                  "Language",
                  "Meta Verified",
                ].map((link) => (
                  <a
                    key={link}
                    className="hover:text-gray-600 hover:underline transition-colors"
                    href="#"
                  >
                    {link}
                  </a>
                ))}
              </nav>
              <p className="text-[10px]">© 2024 NEXUS FROM META</p>
            </footer>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
