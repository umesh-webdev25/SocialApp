import { Icon } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

export function AdminAnalyticsPage() {
  return (
    <MainLayout activeTab="admin" showSearch={false}>
      <div className="max-w-6xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="text-sm text-gray-500">Overview of platform metrics and trends.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-[#833AB4]/10 to-[#E1306C]/10 rounded-lg">Users: <strong>1.2M</strong></div>
            <div className="p-4 bg-gradient-to-br from-[#E1306C]/10 to-[#F77737]/10 rounded-lg">Posts: <strong>4.5M</strong></div>
            <div className="p-4 bg-gradient-to-br from-[#833AB4]/10 to-[#F77737]/10 rounded-lg">DAU: <strong>120K</strong></div>
          </div>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">Charts placeholder</div>
        </div>
      </div>
    </MainLayout>
  );
}
