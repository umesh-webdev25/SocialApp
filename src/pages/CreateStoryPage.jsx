import { useState } from 'react';
import { Avatar } from '../components/shared';
import { MainLayout } from '../components/layout/MainLayout';

export function CreateStoryPage() {
  const [text, setText] = useState('');
  return (
    <MainLayout activeTab="create" showSearch={false}>
      <div className="max-w-3xl mx-auto p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold">Create Story</h1>
          <p className="text-sm text-gray-500">Upload from camera or gallery. Add text or drawings.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          <div className="mb-4">
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">Camera / Upload preview</div>
          </div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3" placeholder="Add a caption or text" />
          <div className="mt-4 flex justify-end">
            <button className="px-5 py-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white rounded-xl">Share story</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
