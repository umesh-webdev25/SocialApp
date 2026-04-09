import { Avatar } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

export function EditProfilePage() {
  return (
    <MainLayout activeTab="profile" showSearch={false}>
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Edit profile</h1>
          <p className="text-sm text-gray-500">Update your profile photo and bio.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-24 h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737]">
              <div className="bg-white rounded-full p-[2px]"><Avatar src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop" className="w-20 h-20 rounded-full" /></div>
            </div>
            <div>
              <button className="px-4 py-2 bg-gray-100 rounded-lg">Change photo</button>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4" defaultValue="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4" rows={3} defaultValue="Your bio here." />
            </div>
            <div className="pt-4 border-t border-gray-100">
              <button className="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-xl">Save</button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
