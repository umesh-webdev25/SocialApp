import { Avatar, Icon } from '../../components/shared';
import { Link } from 'react-router-dom';

const followers = Array.from({ length: 8 }).map((_, i) => ({
  username: `follower_${i + 1}`,
  src: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop',
}));

export function FollowersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#833AB4]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E1306C]/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Followers</h1>
          <p className="text-sm text-gray-500">People who follow you</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow grid grid-cols-1 sm:grid-cols-2 gap-4">
          {followers.map((f) => (
            <div key={f.username} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[2px]">
                <div className="bg-white rounded-full p-[1px]"><Avatar src={f.src} alt={f.username} className="w-12 h-12 rounded-full" /></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{f.username}</p>
                    <p className="text-xs text-gray-400">Recommended</p>
                  </div>
                  <button className="text-sm text-[#E1306C] font-semibold">Follow</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
