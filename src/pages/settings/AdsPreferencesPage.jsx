import { Icon } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

const interests = ['Fashion', 'Travel', 'Photography', 'Design', 'Food', 'Technology'];

export function AdsPreferencesPage() {
  return (
    <MainLayout activeTab="settings" showSearch={false}>
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Ads preferences</h1>
          <p className="text-sm text-gray-500">Control ad personalization and interests.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">Personalization</p>
                <p className="text-xs text-gray-400">Allow ads tailored to your interests.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
              </label>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Interests</h4>
              <div className="flex flex-wrap gap-3">
                {interests.map((i) => (
                  <button key={i} className="px-3 py-1.5 text-sm rounded-lg bg-gray-50 border border-gray-200">{i}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
