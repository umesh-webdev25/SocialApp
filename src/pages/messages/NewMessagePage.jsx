import { Avatar, Icon } from '../../components/shared';
import { useState } from 'react';
import { MainLayout } from '../../components/layout/MainLayout';

const sample = Array.from({ length: 8 }).map((_, i) => ({ username: `user_${i+1}` }));

export function NewMessagePage() {
  const [query, setQuery] = useState('');
  return (
    <MainLayout activeTab="messages" showSearch={false}>
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">New Message</h1>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-4 shadow">
          <div className="mb-4">
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3" placeholder="Search users" />
          </div>
          <div className="space-y-2">
            {sample.map((s) => (
              <div key={s.username} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="rounded-full p-[2px] bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737]"><div className="bg-white rounded-full p-[1px]"><Avatar className="w-10 h-10 rounded-full" /></div></div>
                  <div>
                    <p className="font-medium">{s.username}</p>
                    <p className="text-xs text-gray-400">Tap to message</p>
                  </div>
                </div>
                <button className="text-sm text-[#E1306C] font-semibold">Message</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
