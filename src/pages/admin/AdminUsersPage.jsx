import { Avatar } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

const users = Array.from({ length: 8 }).map((_, i) => ({ username: `user_${i+1}` }));

export function AdminUsersPage() {
  return (
    <MainLayout activeTab="admin" showSearch={false}>
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-gray-500">Search, review, and take actions on user accounts.</p>
        </header>
        <div className="bg-white/95 rounded-2xl border border-gray-100 p-4 shadow">
          <div className="space-y-3">
            {users.map((u) => (
              <div key={u.username} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-medium">{u.username}</p>
                    <p className="text-xs text-gray-400">Last active 2d</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-lg">Suspend</button>
                  <button className="px-3 py-1 bg-red-50 text-red-600 rounded-lg">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
