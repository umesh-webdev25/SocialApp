import { Icon } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

export function ProfessionalAccountPage() {
  return (
    <MainLayout activeTab="settings" showSearch={false}>
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Professional account</h1>
          <p className="text-sm text-gray-500">Switch to a Creator or Business account and pick a category.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Account type</label>
              <div className="mt-3 flex gap-3">
                <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white font-semibold">Personal</button>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white font-semibold">Creator</button>
                <button className="px-4 py-2 rounded-xl border border-gray-200 bg-white font-semibold">Business</button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Category</label>
              <select className="mt-2 w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4">
                <option>Art & Design</option>
                <option>Photography</option>
                <option>Fashion</option>
                <option>Food</option>
              </select>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <button className="px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-xl font-semibold">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
