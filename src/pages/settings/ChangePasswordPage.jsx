import { Icon } from '../../components/shared';
import { NavLink } from 'react-router-dom';
import { MainLayout } from '../../components/layout/MainLayout';

const sidebarNav = [
  { label: 'Edit Profile', to: '/settings/account' },
  { label: 'Change Password', to: '/settings/change-password', active: true },
  { label: 'Email Notifications', to: '/settings/email-notifications' },
  { label: 'Privacy and safety', to: '/settings/privacy' },
];

export function ChangePasswordPage() {
  return (
    <MainLayout activeTab="settings" showSearch={false}>
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Change Password</h1>
          <p className="text-sm text-gray-500">Update your account password securely.</p>
        </header>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-100 p-6 shadow-lg">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Current password</label>
              <input type="password" className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New password</label>
              <input type="password" className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30" />
              <div className="h-2 bg-gray-100 rounded-full mt-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] w-1/3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm new password</label>
              <input type="password" className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30" />
            </div>
            <div className="pt-4 border-t border-gray-100">
              <button className="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-xl font-semibold">Change password</button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
