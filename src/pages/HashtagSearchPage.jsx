import { MainLayout } from '../components/layout/MainLayout';

export function HashtagSearchPage() {
  return (
    <MainLayout activeTab="explore">
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <header className="mb-4">
            <h1 className="text-2xl font-bold">#CreativeCommunity</h1>
            <p className="text-sm text-gray-500">Trending • 24.5K posts</p>
          </header>

          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
