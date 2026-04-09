import { Avatar } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';
import { useEffect, useState } from 'react';
import { apiGet } from '../../services/api';

export function SavedPostsPage() {
  const [saved, setSaved] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    apiGet('/api/profile/saved')
      .then((res) => mounted && setSaved(res || []))
      .catch((err) => mounted && setError(err.message || 'Failed to load'))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <MainLayout activeTab="profile" showSearch={false}>
      <div className="max-w-8xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Saved posts</h1>
          <p className="text-sm text-gray-500">Your saved posts and collections</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          {loading && <div className="text-sm text-gray-400">Loading...</div>}
          {error && <div className="text-sm text-red-500">{error}</div>}
          {!loading && !error && (!saved || saved.length === 0) && (
            <div className="text-sm text-gray-500">No saved posts yet.</div>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-3 gap-3">
              {saved.map((s) => (
                <div key={s.id} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img src={s.image || s.src} alt={s.caption || 'saved'} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
