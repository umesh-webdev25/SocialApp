import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/shared/Icon';

const brandGradient = 'bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent';

const avatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD787boKSiWGQu4SV5FETPsuwtp8IpxzkPfyY3ToXQtyeL-x1EKVqSlS4BOwZiD77OoAsbI5_SPlN5gJ_UiYGkp3QbXZAy9VFLIS9VKO6h2_YpJ1u8-uUj9ZGoZZ4Md_FlCrXhOuICebJ4mCr1OBSY94tsZFmQv4Du6yQVRq_kBKiOo0Mc_Ifb6WrCgzC72D8CC-diVr4pWr48aLlNity9Dk8EyElJeyjLrn3mru5uDwICYjWUPxd9AFZ2CRNFEGss2k7G1PHKuf5Zs',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMpSqRS3QBLyqFQMNlfkvGcO-AiUbTzljE5ZQRK5hZWeWkx-7UBEaRoi-bPXAN_ARLdbPRRDuPBWs2EpnBKwwNXavSpmhbKu2on3MZCZgMcYUjeHwqoT5KROxNlbE1YoZt1M219teb3lIpeivHUq9EVMeP-OrqD99wOmxUNF7gRO5i6qtdf-YXIW09bVXkQiKWZ76LsDsGcO_4NDXDWjdvPst_ITcNEBeuHKrQUVcVPSm8VHmMcTmmiPPY5esIcX5pHprcXH7g_VvS',
];

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] flex items-center justify-center p-4">
      <div className="w-full max-w-[935px] relative">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 rounded-full blur-3xl" />
        
        {/* Phone mockup decoration - Instagram style */}
        <div className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 w-80 opacity-30 pointer-events-none">
          <div className="relative">
            <div className="w-64 h-[500px] bg-gradient-to-b from-[#833AB4] to-[#F77737] rounded-3xl shadow-2xl" />
            <div className="absolute inset-[3px] bg-white rounded-2xl overflow-hidden">
              <div className="h-8 bg-gradient-to-r from-[#833AB4] to-[#F56040]" />
              <div className="p-4 space-y-4">
                <div className="w-full h-32 bg-gradient-to-br from-[#833AB4]/20 to-[#E1306C]/20 rounded-lg" />
                <div className="w-full h-2 bg-gray-200 rounded-full" />
                <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
                <div className="flex gap-2 mt-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                  <div className="flex-1 space-y-2">
                    <div className="w-3/4 h-2 bg-gray-200 rounded-full" />
                    <div className="w-1/2 h-2 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative z-10 backdrop-blur-sm bg-white/95">
          {/* Left Column - Branding */}
          <div className="hidden lg:flex flex-1 flex-col justify-center p-12 bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F56040]/5 overflow-hidden border-r border-gray-100 relative rounded-l-2xl">
            <div className="relative z-10 space-y-8">
              {/* Instagram-style logo with gradient */}
              <div className="flex items-center gap-2 justify-center">
                <div className="relative">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
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
                </div>
                <span className={`text-4xl font-extrabold tracking-tight ${brandGradient} font-['Helvetica Neue',Arial,sans-serif]`}>
                  NEXUS
                </span>
              </div>
              
              <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-800 leading-tight">
                  Welcome to the
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040]">
                    Creative Community
                  </span>
                </h1>
                <p className="text-gray-600 text-lg max-w-sm leading-relaxed mx-auto">
                  Connect with designers, share your work, and find inspiration from the world's best creators.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <img 
                      key={i} 
                      alt="User" 
                      src={src} 
                      className="h-10 w-10 rounded-full border-2 border-white object-cover ring-2 ring-[#E1306C]/20" 
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-500">Join 12,000+ creators today</span>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-[#833AB4] to-[#E1306C] opacity-5 rounded-full blur-2xl" />
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-bl from-[#F56040] to-[#F77737] opacity-5 rounded-full blur-2xl" />
          </div>

          {/* Right Column - Login Form */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-[350px] mx-auto w-full">
              {/* Mobile logo */}
              <div className="text-center mb-10">
                <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaGrad)" />
                    <circle cx="12" cy="12" r="4.5" fill="white" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                  </svg>
                  <span className={`text-3xl font-extrabold tracking-tight ${brandGradient}`}>NEXUS</span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Log in to NEXUS</h2>
                <p className="text-gray-500 text-sm">Share your creative journey</p>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate('/home');
                }}
              >
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all shadow-sm hover:bg-white"
                  placeholder="Email address or username"
                  type="email"
                />
                <div className="relative">
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all pr-16 shadow-sm hover:bg-white"
                    placeholder="Password"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white text-sm font-semibold py-3 rounded-xl mt-2 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
                >
                  Log In
                </button>
              </form>

              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-200" />
                <span className="flex-shrink mx-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">OR</span>
                <div className="flex-grow border-t border-gray-200" />
              </div>

              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-[#385185] hover:text-[#2a426b] transition-colors bg-white border border-gray-200 rounded-xl py-2.5 shadow-sm hover:shadow-md transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Log in with Google
                </button>
                
                <div className="text-center">
                  <Link className="text-xs text-[#E1306C] hover:text-[#833AB4] transition-colors font-medium" to="/forgot-password">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-gray-600 text-sm">
                  Don't have an account?{' '}
                  <Link className="text-[#E1306C] font-bold hover:text-[#833AB4] transition-colors" to="/register">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}