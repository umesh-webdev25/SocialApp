import { Avatar } from '../components/shared';
import { MainLayout } from '../components/layout/MainLayout';

import { useEffect, useState } from 'react';
import { apiGet } from '../services/api';
import { useParams } from 'react-router-dom';

export function PostLikesPage() {
  const { id } = useParams();
  const [likes, setLikes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    apiGet(`/api/posts/${id}/likes`)
      .then((res) => mounted && setLikes(res || []))
      .catch((err) => mounted && setError(err.message || 'Failed to load'))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, [id]);

  return (
    <MainLayout activeTab="home" showSearch={false}>
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Likes</h1>
          <p className="text-sm text-gray-500">People who liked this post</p>
        </header>
        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          {loading && <div className="text-sm text-gray-400">Loading...</div>}
          {error && <div className="text-sm text-red-500">{error}</div>}
          {!loading && !error && (!likes || likes.length === 0) && (
            <div className="text-sm text-gray-500">No likes yet.</div>
          )}
          {!loading && !error && (
            <div className="space-y-3">
              {likes.map((l) => (
                <div key={l.username || l.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full p-[2px] bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737]">
                      <div className="bg-white rounded-full p-[1px]"><Avatar src={l.avatar || l.src} className="w-10 h-10 rounded-full" /></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{l.username}</p>
                      <p className="text-xs text-gray-400">{l.subtitle || 'Followed by someone'}</p>
                    </div>
                  </div>
                  <button type="button" className="text-sm text-[#E1306C] font-semibold">Follow</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
