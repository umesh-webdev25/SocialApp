import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';

export function MainLayout({ children, activeTab = 'home', showSearch = true, sidebar = true }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5]">
      
      {/* Background decorative elements matching login page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Navigation */}
      {showSearch && <TopNav showSearch={showSearch} />}
      {sidebar && <Sidebar activeTab={activeTab} />}
      
      {/* Main Content */}
      <main className={`
        ${sidebar ? 'lg:pl-64' : ''} 
        pt-20 pb-24 lg:pb-8 transition-all duration-200 relative z-10
      `}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      
      {/* Bottom Navigation for Mobile */}
      <BottomNav activeTab={activeTab} />
    </div>
  );
}