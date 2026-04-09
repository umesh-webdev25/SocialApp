import { Icon } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

export function AdminContentPage() {
  return (
    <MainLayout activeTab="admin" showSearch={false}>
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Content Management</h1>
          <p className="text-sm text-gray-500">Moderate posts, filter and perform bulk actions.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-4 shadow">
          <div className="flex items-center gap-3 mb-4">
            <input className="flex-1 bg-gray-50 rounded-xl p-3" placeholder="Search posts" />
            <button className="px-4 py-2 bg-[#E1306C] text-white rounded-lg">Filter</button>
          </div>
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-3 border rounded-lg flex items-center justify-between">
                <div>
                  <p className="font-semibold">Post title #{i+1}</p>
                  <p className="text-xs text-gray-400">By user_{i+1}</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-red-50 text-red-600 rounded-lg">Remove</button>
                  <button className="px-3 py-1 bg-gray-50 rounded-lg">Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
