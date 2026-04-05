import { Icon } from '../../components/shared/Icon';
import { Link, useNavigate } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent';

const footerLinks = ['Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms'];

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      {/* Top Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 py-4 max-w-md mx-auto">
          <h1 className={`text-2xl font-bold tracking-tight ${brandGradient}`}>SocialApp</h1>
          <Icon name="help_outline" className="text-on-surface-variant cursor-pointer hover:opacity-90 transition-opacity" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pt-20 pb-12">
        <div className="w-full max-w-[420px] bg-white rounded-2xl border border-outline-variant/20 flex flex-col items-center p-8 space-y-6 shadow-soft-md">
          {/* Lock Icon */}
          <div className="w-24 h-24 rounded-full bg-surface flex items-center justify-center">
            <Icon name="lock" className="text-4xl text-primary" />
          </div>

          {/* Content */}
          <div className="text-center space-y-3">
            <h2 className="text-lg font-bold tracking-tight text-on-surface">Trouble Logging In?</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Enter your email, phone, or username and we'll send you a link to get back into your account.
            </p>
          </div>

          {/* Form */}
          <form
            className="w-full space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              // simulate sending link and redirect back to login
              navigate('/login');
            }}
          >
            <input
              className="input-clean"
              placeholder="Email, Phone, or Username"
              type="text"
            />
            <button
              type="submit"
              className="w-full btn-gradient text-white font-semibold py-3 rounded-2xl active:scale-[0.98] transition-transform duration-200"
            >
              Send Login Link
            </button>
          </form>

          {/* Separator */}
          <div className="w-full flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-surface-container-highest" />
            <span className="text-xs font-bold text-on-surface-variant tracking-widest">OR</span>
            <div className="h-[1px] flex-grow bg-surface-container-highest" />
          </div>

          <Link className="text-sm font-semibold text-primary hover:underline" to="/register">
            Create New Account
          </Link>
        </div>

        {/* Back to Login */}
        <div className="mt-4 w-full max-w-[420px] bg-white border border-outline-variant/20 rounded-2xl py-4 flex justify-center items-center shadow-sm">
          <Link className="text-sm font-semibold text-primary hover:underline" to="/login">
            Back to Login
          </Link>
        </div>
      </main>

      {/* Visual Accent */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-instagram opacity-5 blur-[100px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-instagram opacity-4 blur-[100px]" />
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-6">
          {footerLinks.map((link) => (
            <a key={link} className="text-[10px] uppercase tracking-wider text-on-surface-variant font-medium hover:underline" href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="text-[10px] text-on-surface-variant/60">
          © 2024 SOCIALAPP FROM META
        </div>
      </footer>
    </div>
  );
}
