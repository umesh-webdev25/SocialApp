import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

export function MainLayout({ children, activeTab = 'home', showSearch = true, sidebar = true }) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      {showSearch && <TopNav showSearch={showSearch} />}
      {sidebar && <Sidebar activeTab={activeTab} />}
      <main className={`
        ${sidebar ? 'lg:pl-64' : ''} 
        pt-24 pb-24 lg:pb-8 transition-all duration-200
      `}>
        {children}
      </main>
      <BottomNav activeTab={activeTab} />
    </div>
  );
}
