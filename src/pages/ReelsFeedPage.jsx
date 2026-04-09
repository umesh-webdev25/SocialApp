import { MainLayout } from '../components/layout/MainLayout';
import { Icon } from '../components/shared';

const reels = Array.from({ length: 6 }).map((_, i) => ({ id: i, src: 'https://www.w3schools.com/html/mov_bbb.mp4' }));

export function ReelsFeedPage() {
  return (
    <MainLayout activeTab="explore">
      <div className="min-h-screen">
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">Reels</h1>
          <div className="space-y-6">
            {reels.map((r) => (
              <div key={r.id} className="bg-white/95 rounded-2xl border border-gray-100 overflow-hidden shadow">
                <video src={r.src} controls className="w-full h-96 object-cover bg-black" />
                <div className="p-4 flex items-center justify-between">
                  <div className="text-sm font-semibold">creator_name</div>
                  <div className="flex items-center gap-3">
                    <Icon name="favorite_border" className="text-2xl" />
                    <Icon name="chat_bubble" className="text-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
