import { Icon } from '../../components/shared/Icon';
import { Link, useNavigate } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const footerLinks = ['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Instagram Lite', 'Threads'];

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] text-gray-800 flex flex-col">
      
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-gradient-to-r from-[#833AB4]/[0.02] to-[#F77737]/[0.02] blur-[100px]" />
      </div>

      {/* Top Navigation - Instagram style */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="flex justify-between items-center px-6 py-3 max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <defs>
                <linearGradient id="instaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#833AB4" />
                  <stop offset="50%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#F77737" />
                </linearGradient>
              </defs>
              <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaGrad)" />
              <circle cx="12" cy="12" r="4.5" fill="white" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
            </svg>
            <h1 className={`text-xl font-bold tracking-tight ${brandGradient}`}>NEXUS</h1>
          </div>
          <button className="text-gray-600 hover:text-[#E1306C] transition-colors">
            <Icon name="help_outline" className="text-2xl" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="w-full max-w-[420px] relative">
          {/* Decorative card shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4]/10 to-[#E1306C]/10 rounded-3xl blur-xl transform translate-y-2" />
          
          {/* Main Card */}
          <div className="relative bg-white rounded-2xl border border-gray-100 flex flex-col items-center p-8 space-y-6 shadow-xl">
            
            {/* Lock Icon with Instagram gradient */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4] to-[#E1306C] rounded-full blur-md opacity-50" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F56040] flex items-center justify-center shadow-inner">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-3">
              <h2 className="text-xl font-bold tracking-tight text-gray-800">
                Trouble logging in?
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Enter your email, phone, or username and we'll send you a link to get back into your account.
              </p>
            </div>

            {/* Form */}
            <form
              className="w-full space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
            >
              <div className="relative group">
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 hover:bg-white hover:border-gray-300"
                  placeholder="Email, phone, or username"
                  type="text"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#E1306C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input className="pl-10" style={{ display: 'none' }} />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white text-sm font-semibold py-3 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
              >
                Send login link
              </button>
            </form>

            {/* Separator */}
            <div className="w-full flex items-center gap-4">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <span className="text-xs font-bold text-gray-400 tracking-wider">OR</span>
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>

            {/* Create new account link */}
            <Link 
              className="text-sm font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors hover:underline underline-offset-4" 
              to="/register"
            >
              Create new account
            </Link>
          </div>

          {/* Back to Login Card */}
          <div className="mt-4 bg-white border border-gray-100 rounded-2xl py-4 flex justify-center items-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <Link 
              className="text-sm font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors flex items-center gap-2" 
              to="/login"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to login
            </Link>
          </div>
        </div>

        {/* Help text */}
        <p className="text-xs text-gray-400 mt-8 text-center max-w-md">
          Didn't receive the link? Check your spam folder or try again with a different email address.
        </p>
      </main>

      {/* Footer - Instagram style */}
      <footer className="mt-auto py-8 text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 px-6">
          {footerLinks.map((link) => (
            <a 
              key={link} 
              className="text-[11px] uppercase tracking-wider text-gray-500 font-medium hover:text-[#E1306C] transition-colors" 
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-[10px] text-gray-400">
          © 2024 NEXUS FROM META
        </div>
      </footer>
    </div>
  );
}