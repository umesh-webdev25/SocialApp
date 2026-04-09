import { Icon } from '../../components/shared';
import { MainLayout } from '../../components/layout/MainLayout';

const sampleArticles = [
  { id: 1, title: 'Getting started with NEXUS', excerpt: 'Learn how to set up your profile and share posts.' },
  { id: 2, title: 'Managing privacy', excerpt: 'Tips on controlling who sees your content.' },
  { id: 3, title: 'Reporting content', excerpt: 'How to report posts or accounts that violate guidelines.' },
];

export function HelpCenterPage() {
  return (
    <MainLayout activeTab="settings" showSearch={false}>
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Help Center</h1>
          <p className="text-sm text-gray-500">Search help articles or contact support.</p>
        </header>

        <div className="bg-white/95 rounded-2xl border border-gray-100 p-6 shadow">
          <div className="mb-6">
            <div className="relative">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input className="w-full pl-10 py-3 rounded-xl bg-gray-50 border border-gray-200" placeholder="Search help articles" />
            </div>
          </div>

          <div className="space-y-4">
            {sampleArticles.map((a) => (
              <article key={a.id} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-800">{a.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{a.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
