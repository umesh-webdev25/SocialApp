import { Avatar } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

const thread = [
  { type: 'incoming', text: 'Hey, are you available for a shoot next week?', time: '11:10 AM' },
  { type: 'outgoing', text: 'Yes — let’s plan for Tuesday!', time: '11:12 AM' },
];

export function MessageDetailsPage() {
  return (
    <MainLayout activeTab="messages" showSearch={false}>
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-4 flex items-center gap-4">
          <Avatar className="w-12 h-12 rounded-full" />
          <div>
            <h2 className="font-semibold">Conversation</h2>
            <p className="text-xs text-gray-400">Active now</p>
          </div>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow flex flex-col gap-4">
          <div className="flex-1 space-y-3 max-h-[60vh] overflow-y-auto">
            {thread.map((m, i) => (
              <div key={i} className={`flex ${m.type === 'outgoing' ? 'justify-end' : ''}`}>
                <div className={`${m.type === 'outgoing' ? 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white' : 'bg-gray-100 text-gray-800'} rounded-2xl p-3 max-w-[70%]`}>
                  {m.text}
                  <div className="text-[10px] text-gray-300 mt-1 text-right">{m.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <input className="flex-1 bg-gray-50 rounded-xl py-2 px-3" placeholder="Message..." />
              <button className="px-4 py-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-xl">Send</button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
