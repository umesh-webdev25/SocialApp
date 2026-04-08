import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const brandGradient =
  "bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] bg-clip-text text-transparent";

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] via-[#FAFAFB] to-[#F0F2F5] flex items-center justify-center p-4">
      <div className="w-full max-w-[935px] relative">
        
        {/* Decorative background elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F77737]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#405DE6]/5 via-[#E1306C]/5 to-[#F56040]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#833AB4]/[0.02] via-[#E1306C]/[0.02] to-[#F77737]/[0.02] rounded-full blur-3xl" />

        {/* Instagram-style phone mockup decoration */}
        <div className="hidden lg:block absolute -left-32 top-1/2 -translate-y-1/2 w-80 opacity-40 pointer-events-none">
          <div className="relative transform -rotate-6">
            <div className="w-64 h-[500px] bg-gradient-to-b from-[#833AB4] to-[#F77737] rounded-3xl shadow-2xl">
              <div className="absolute inset-[3px] bg-white rounded-2xl overflow-hidden">
                <div className="h-12 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] flex items-center justify-center">
                  <div className="w-24 h-1 bg-white/30 rounded-full" />
                </div>
                <div className="p-4 space-y-4">
                  {/* Mock profile */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#833AB4] to-[#E1306C]" />
                    <div className="flex-1 space-y-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full" />
                      <div className="w-16 h-2 bg-gray-200 rounded-full" />
                    </div>
                  </div>
                  {/* Mock post */}
                  <div className="w-full h-40 bg-gradient-to-br from-[#833AB4]/10 to-[#E1306C]/10 rounded-lg" />
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-200 rounded-full" />
                    <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-2xl relative z-10 transition-all duration-300 hover:shadow-3xl">

          {/* LEFT SIDE - Enhanced Branding */}
          <div className="hidden lg:flex flex-1 flex-col justify-center p-12 bg-gradient-to-br from-[#833AB4]/5 via-[#E1306C]/5 to-[#F56040]/5 border-r border-gray-100 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#833AB4] to-[#E1306C] opacity-10 rounded-full blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[#F56040] to-[#F77737] opacity-10 rounded-full blur-2xl" />
            
            <div className="relative z-10 text-center space-y-8">
              {/* Logo with icon */}
              <div className="flex items-center justify-center gap-3 mb-4">
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
                <span className={`text-4xl font-extrabold tracking-tight ${brandGradient}`}>
                  NEXUS
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800 leading-tight">
                  Join the
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040]">
                    Creative Community
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Create your account and start sharing your ideas with the world.
                </p>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#E1306C]">12K+</div>
                  <div className="text-xs text-gray-500">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#833AB4]">1M+</div>
                  <div className="text-xs text-gray-500">Posts Shared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#F56040]">24/7</div>
                  <div className="text-xs text-gray-500">Community</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM - Enhanced */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="max-w-[350px] mx-auto w-full">

              {/* Mobile logo */}
              <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instaGrad)" />
                  <circle cx="12" cy="12" r="4.5" fill="white" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                </svg>
                <span className={`text-3xl font-extrabold tracking-tight ${brandGradient}`}>
                  NEXUS
                </span>
              </div>

              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Create your account
                </h2>
                <p className="text-gray-500 text-sm">
                  Start your creative journey today
                </p>
              </div>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                {/* Email input with icon */}
                <div className="relative group">
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 hover:bg-white hover:border-gray-300"
                    placeholder="Email address"
                    type="email"
                  />
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#E1306C] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input className="pl-10" style={{ display: 'none' }} />
                </div>

                {/* Full Name */}
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 hover:bg-white hover:border-gray-300"
                  placeholder="Full name"
                  type="text"
                />

                {/* Username */}
                <input
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 hover:bg-white hover:border-gray-300"
                  placeholder="Username"
                  type="text"
                />

                {/* Password with toggle */}
                <div className="relative">
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 hover:bg-white hover:border-gray-300 pr-16"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="relative">
                  <input
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 px-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1306C]/30 focus:border-[#E1306C]/30 transition-all duration-200 hover:bg-white hover:border-gray-300 pr-16"
                    placeholder="Confirm password"
                    type={showConfirmPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#E1306C] hover:text-[#833AB4] transition-colors"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {/* Terms agreement */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-[#E1306C] border-gray-300 rounded focus:ring-[#E1306C] focus:ring-2"
                    defaultChecked
                  />
                  <label className="text-xs text-gray-500 leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-[#E1306C] hover:text-[#833AB4] font-medium">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#E1306C] hover:text-[#833AB4] font-medium">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F56040] text-white text-sm font-semibold py-3 rounded-xl mt-2 hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                >
                  Sign Up
                </button>
              </form>

              {/* Divider */}
              <div className="relative flex items-center my-6">
                <div className="flex-grow border-t border-gray-200" />
                <span className="mx-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  OR
                </span>
                <div className="flex-grow border-t border-gray-200" />
              </div>

              {/* Google Sign Up */}
              <button className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-[#385185] hover:text-[#2a426b] transition-colors bg-white border border-gray-200 rounded-xl py-2.5 shadow-sm hover:shadow-md transition-all duration-200 mb-6">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign up with Google
              </button>

              {/* Login redirect */}
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    className="text-[#E1306C] font-semibold hover:text-[#833AB4] transition-colors hover:underline underline-offset-4"
                    to="/login"
                  >
                    Log In
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