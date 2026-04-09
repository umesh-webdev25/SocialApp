import { Avatar } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

const requests = Array.from({ length: 5 }).map((_, i) => ({ username: `requester_${i+1}` }));

export function MessageRequestsPage() {
  return (
    <MainLayout activeTab="messages" showSearch={false}>
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Message requests</h1>
          <p className="text-sm text-gray-500">Messages from people you don't follow</p>
        </header>
        <div className="bg-white/95 rounded-2xl border border-gray-100 p-4 shadow">
          <div className="space-y-3">
            {requests.map((r) => (
              <div key={r.username} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">{r.username}</p>
                    <p className="text-xs text-gray-400">Sent a message</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 rounded-lg bg-[#E1306C] text-white text-sm">Accept</button>
                  <button className="px-3 py-1 rounded-lg border border-gray-200 text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
