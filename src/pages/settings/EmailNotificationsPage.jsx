import { Icon } from '../../components/shared';

const preferences = [
  { label: 'New followers', key: 'followers', on: true },
  { label: 'Likes and comments', key: 'likes', on: true },
  { label: 'Mentions', key: 'mentions', on: false },
  { label: 'Messages', key: 'messages', on: true },
  { label: 'Product updates', key: 'updates', on: false },
];

export function EmailNotificationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#833AB4]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E1306C]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F77737]/3 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Email notifications</h1>
          <p className="text-sm text-gray-500">Control which email notifications you receive.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          <div className="space-y-4">
            {preferences.map((p) => (
              <div key={p.key} className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{p.label}</p>
                  <p className="text-xs text-gray-400">Receive emails about {p.label.toLowerCase()}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked={p.on} className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
