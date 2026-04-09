import { MainLayout } from '../components/layout/MainLayout';
import { Icon, Avatar } from '../components/shared';
import { useState } from 'react';

export function SinglePostPage() {
  const [comment, setComment] = useState('');
  return (
    <MainLayout activeTab="home">
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto p-6">
          <div className="bg-white/95 rounded-2xl border border-gray-100 p-4 shadow">
            <div className="flex items-center gap-4 p-3">
              <div className="bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] rounded-full p-[2px]"><div className="bg-white rounded-full p-[1px]"><Avatar src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop" className="w-10 h-10 rounded-full" /></div></div>
              <div>
                <p className="font-semibold">author_name</p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
            <div className="aspect-square bg-gray-100">
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="font-semibold">1,234 likes</p>
              <p className="mt-2 text-gray-700">Nice view! <span className="text-sm text-gray-400">#adventure</span></p>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <input value={comment} onChange={(e) => setComment(e.target.value)} className="flex-1 bg-gray-50 rounded-xl py-2 px-3" placeholder="Add a comment..." />
                <button className="text-[#E1306C] font-semibold">Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
