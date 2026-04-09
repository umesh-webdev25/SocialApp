import { MainLayout } from '../../components/layout/MainLayout';
import { useEffect, useState } from 'react';
import { apiGet } from '../../services/api';

export function LikesPage() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    apiGet('/api/profile/likes')
      .then((res) => mounted && setPosts(res || []))
      .catch((err) => mounted && setError(err.message || 'Failed to load'))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <MainLayout activeTab="profile" showSearch={false}>
      <div className="max-w-8xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Liked posts</h1>
          <p className="text-sm text-gray-500">Posts you've liked</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          {loading && <div className="text-sm text-gray-400">Loading...</div>}
          {error && <div className="text-sm text-red-500">{error}</div>}
          {!loading && !error && (!posts || posts.length === 0) && (
            <div className="text-sm text-gray-500">You haven't liked any posts yet.</div>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-3 gap-1 md:gap-2 pb-20 mt-4 md:mt-8">
              {posts.map((post, i) => (
                <div key={post.id || i} className="relative aspect-square group overflow-hidden bg-gray-100 rounded-sm md:rounded-xl cursor-pointer">
                  <img alt={post.caption || 'Post'} src={post.image || post.src} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
