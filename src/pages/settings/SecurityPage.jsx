import { Icon } from '../../components/shared';

const devices = [
  { name: 'Chrome on Windows', location: 'London, UK', last: '2 hours ago' },
  { name: 'iPhone 13 Pro', location: 'Home', last: 'Yesterday' },
];

export function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#833AB4]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#E1306C]/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Security</h1>
          <p className="text-sm text-gray-500">Two-factor authentication and login activity.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-800">Two‑factor authentication</h3>
              <p className="text-xs text-gray-400">Use a security app or text messages to add an extra layer of security.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-gradient-to-r from-[#833AB4] to-[#E1306C] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
            </label>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Trusted devices</h4>
            <div className="space-y-3">
              {devices.map((d, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div>
                    <p className="font-medium text-gray-800">{d.name}</p>
                    <p className="text-xs text-gray-400">{d.location} • {d.last}</p>
                  </div>
                  <button className="text-xs text-[#E1306C] font-semibold">Remove</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
