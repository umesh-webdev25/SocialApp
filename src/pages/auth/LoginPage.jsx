import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../components/shared/Icon';

const brandGradient = 'bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent';

const avatars = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuD787boKSiWGQu4SV5FETPsuwtp8IpxzkPfyY3ToXQtyeL-x1EKVqSlS4BOwZiD77OoAsbI5_SPlN5gJ_UiYGkp3QbXZAy9VFLIS9VKO6h2_YpJ1u8-uUj9ZGoZZ4Md_FlCrXhOuICebJ4mCr1OBSY94tsZFmQv4Du6yQVRq_kBKiOo0Mc_Ifb6WrCgzC72D8CC-diVr4pWr48aLlNity9Dk8EyElJeyjLrn3mru5uDwICYjWUPxd9AFZ2CRNFEGss2k7G1PHKuf5Zs',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMpSqRS3QBLyqFQMNlfkvGcO-AiUbTzljE5ZQRK5hZWeWkx-7UBEaRoi-bPXAN_ARLdbPRRDuPBWs2EpnBKwwNXavSpmhbKu2on3MZCZgMcYUjeHwqoT5KROxNlbE1YoZt1M219teb3lIpeivHUq9EVMeP-OrqD99wOmxUNF7gRO5i6qtdf-YXIW09bVXkQiKWZ76LsDsGcO_4NDXDWjdvPst_ITcNEBeuHKrQUVcVPSm8VHmMcTmmiPPY5esIcX5pHprcXH7g_VvS',
];

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[935px] bg-white border border-outline-variant rounded-2xl overflow-hidden flex flex-col lg:flex-row shadow-soft-md">
        {/* Left Column - Branding */}
        <div className="hidden lg:flex flex-1 flex-col justify-center p-12 bg-gradient-to-tr from-primary/10 via-secondary/8 to-tertiary/8 overflow-hidden border-r border-outline-variant relative rounded-l-2xl">
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-2">
              <span className={`text-3xl font-extrabold tracking-tight ${brandGradient}`}>NEXUS</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-on-surface leading-tight">
                Curating the <br />
                <span className="text-transparent bg-clip-text bg-instagram">
                  Digital Frontier.
                </span>
              </h1>
              <p className="text-on-surface-variant text-lg max-w-sm leading-relaxed">
                The premiere destination for architectural insight and digital design excellence.
              </p>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img key={i} alt="User" src={src} className="h-8 w-8 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <span className="text-xs font-semibold text-on-surface-variant">Trusted by 12,000+ creators</span>
            </div>
          </div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-instagram opacity-5 rounded-full blur-3xl" />
        </div>

        {/* Right Column - Login Form */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-[350px] mx-auto w-full">
            <div className="text-center mb-10">
              <span className={`text-4xl font-extrabold tracking-tight lg:hidden block mb-8 ${brandGradient}`}>NEXUS</span>
              <h2 className="text-xl font-bold text-on-surface mb-2">Welcome Back</h2>
              <p className="text-on-surface-variant text-sm">Enter your credentials to continue</p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate('/home');
              }}
            >
              <input
                className="w-full bg-surface border border-outline-variant rounded-xl py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all shadow-sm"
                placeholder="Email Address"
                type="email"
              />
              <div className="relative">
                <input
                  className="w-full bg-surface border border-outline-variant rounded-xl py-3 px-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all pr-16 shadow-sm"
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-on-surface hover:text-on-surface-variant transition-colors"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
              <button
                type="submit"
                className="w-full btn-gradient text-sm font-bold mt-2"
              >
                Log In
              </button>
            </form>

            <div className="relative flex items-center my-8">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="flex-shrink mx-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Or</span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <div className="space-y-4">
              <button className="w-full flex items-center justify-center gap-2 text-sm font-bold text-[#385185] hover:opacity-80 transition-opacity bg-white border border-outline-variant rounded-xl py-2 shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                </svg>
                Log in with Google
              </button>
              <div className="text-center">
                <Link className="text-xs text-secondary hover:underline" to="/forgot-password">Forgot password?</Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-outline-variant text-center">
              <p className="text-on-surface text-sm">
                Don't have an account?{' '}
                <Link className="text-primary font-bold ml-1 hover:underline underline-offset-4" to="/register">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
