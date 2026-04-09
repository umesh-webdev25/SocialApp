import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';
import { apiGet } from '../../services/api';

export function TaggedPostsPage() {
  const [tagged, setTagged] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    apiGet('/api/profile/tagged')
      .then((res) => mounted && setTagged(res || []))
      .catch((err) => mounted && setError(err.message || 'Failed to load'))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <MainLayout activeTab="profile" showSearch={false}>
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Tagged</h1>
          <p className="text-sm text-gray-500">Photos you were tagged in</p>
        </header>
        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          {loading && <div className="text-sm text-gray-400">Loading...</div>}
          {error && <div className="text-sm text-red-500">{error}</div>}
          {!loading && !error && (!tagged || tagged.length === 0) && (
            <div className="text-sm text-gray-500">No tagged posts found.</div>
          )}
          {!loading && !error && (
            <div className="grid grid-cols-3 gap-3">
              {tagged.map((t) => (
                <div key={t.id} className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img src={t.image || t.src} alt={t.caption || 'tagged'} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
