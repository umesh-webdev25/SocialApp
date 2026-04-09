import { Avatar } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';
import { useEffect, useState } from 'react';
import { apiGet } from '../../services/api';

export function FollowingPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    apiGet('/api/profile/following')
      .then((res) => {
        if (!mounted) return;
        setData(res || []);
      })
      .catch((err) => mounted && setError(err.message || 'Failed to load'))
      .finally(() => mounted && setLoading(false));
    return () => (mounted = false);
  }, []);

  return (
    <MainLayout activeTab="profile" showSearch={false}>
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Following</h1>
          <p className="text-sm text-gray-500">Accounts you follow</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow space-y-3">
          {loading && <div className="text-sm text-gray-400">Loading...</div>}
          {error && <div className="text-sm text-red-500">{error}</div>}
          {!loading && !error && (!data || data.length === 0) && (
            <div className="text-sm text-gray-500">No accounts followed yet.</div>
          )}

          {!loading && !error && data?.map((f) => (
            <div key={f.username} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[2px]">
                <div className="bg-white rounded-full p-[1px]"><Avatar src={f.avatar || f.src} alt={f.username} className="w-12 h-12 rounded-full" /></div>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{f.username}</p>
                <p className="text-xs text-gray-400">{f.bio || f.followedBy}</p>
              </div>
              <button type="button" className="text-sm text-gray-600 border border-gray-200 rounded-lg px-3 py-1">Unfollow</button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
