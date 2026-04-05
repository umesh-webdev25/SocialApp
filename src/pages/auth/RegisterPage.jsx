import { Icon } from '../../components/shared/Icon';
import { Link, useNavigate } from 'react-router-dom';

const brandGradient = 'bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent';

const appStoreBadge = 'https://lh3.googleusercontent.com/aida-public/AB6AXuABnDe0Df44agfJPK6q9mHHqNTNsQqSZ0yDqXOSlnRAfL_8cHtwReQVSJWIBOou1mr6fPNpdxoCHyypbpqUqqQxArHxPgraMzP291Ux68qWkAM5DsUeTEpbDvkBdcJ8532yCfvKM7HYhn1YqxmUr7G2R_lnsjwIIVV_uRH6393iW-cqJpx-fQ369f9A5hHR1Wgj_ldwNsmmLH97odmV7DHULjLY3axoqkKREOWChGGOXI0fZtyEramQMeZkBZO-qScHqfO2WS776_aV';
const googlePlayBadge = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMemRG4rsAMvoxe2bR5ADInVvXJkrL0imP_dFgsb4qRFsixoiW2EU-IVty0xQH7JlGuuRZR8RJu-8pZKGUFpV6Rx890IoqHqitAY-9CoASqa492AaWPbQZ7S7d--PKETyVa90M2QcYGIU_-sP160SSYKCOHJ26_I2kGRsjk7BliRW_YqlDDleBP-x1mv__khrnxEel3atCde-OdPrVaMQgrlPdniLj4g93aMEEHuj92I1W_HiSQJMu5ewMY0XFPMacFml12mw-IE4U';

const footerLinks = [
  'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Top Accounts', 'Locations', 'SocialApp Lite', 'Contact Uploading & Non-Users'
];

export function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-[380px] flex flex-col gap-4">
        {/* Registration Card */}
        <section className="bg-white border border-outline-variant rounded-2xl p-8 flex flex-col items-center shadow-soft-md">
          <h1 className={`text-2xl font-bold tracking-tight ${brandGradient} mb-3`}>
            SocialApp
          </h1>
          <p className="text-on-surface-variant font-semibold text-center text-sm mb-5 leading-tight">
            Sign up to see photos and videos from your friends.
          </p>

          <button className="w-full py-3 px-4 bg-instagram text-white rounded-2xl font-semibold flex items-center justify-center gap-2 mb-6 shadow-soft-md hover:shadow-soft-lg transition-all active:scale-95">
            <Icon name="group" className="text-lg" filled />
            <span className="text-sm">Log in with Facebook</span>
          </button>

          <div className="w-full flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-1 bg-surface-container-highest" />
            <span className="text-[12px] font-bold text-on-surface-variant uppercase tracking-wider">OR</span>
            <div className="h-[1px] flex-1 bg-surface-container-highest" />
          </div>

          <form
            className="w-full flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              navigate('/login');
            }}
          >
            <input
              className="input-clean"
              placeholder="Email"
              type="email"
            />
            <input
              className="input-clean"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="input-clean"
              placeholder="Username"
              type="text"
            />
            <input
              className="input-clean"
              placeholder="Password"
              type="password"
            />

            <div className="mt-2 text-[12px] text-on-surface-variant text-center leading-4 px-2">
              People who use our service may have uploaded your contact information to SocialApp.{' '}
              <a className="font-semibold text-primary hover:underline" href="#">Learn More</a>
            </div>
            <div className="mt-4 text-[12px] text-on-surface-variant text-center leading-4 px-2">
              By signing up, you agree to our{' '}
              <a className="font-semibold text-primary hover:underline" href="#">Terms</a>,{' '}
              <a className="font-semibold text-primary hover:underline" href="#">Privacy Policy</a> and{' '}
              <a className="font-semibold text-primary hover:underline" href="#">Cookies Policy</a>.
            </div>
            <button
              type="submit"
              className="w-full btn-gradient text-sm font-semibold mt-2"
            >
              Sign Up
            </button>
          </form>
        </section>

        {/* Login Redirect Card */}
        <section className="bg-white border border-outline-variant rounded-2xl py-4 flex items-center justify-center shadow-sm">
          <p className="text-sm text-on-surface">
            Have an account? <Link className="text-primary font-semibold" to="/login">Log In</Link>
          </p>
        </section>

        {/* App Store Badges */}
        <section className="flex flex-col items-center gap-4 mt-2">
          <p className="text-sm text-on-surface">Get the app.</p>
          <div className="flex gap-2">
            <img alt="App Store" src={appStoreBadge} className="h-10" />
            <img alt="Google Play" src={googlePlayBadge} className="h-10" />
          </div>
        </section>
      </main>

      {/* Footer Links */}
      <footer className="mt-12 w-full max-w-4xl px-4 flex flex-wrap justify-center gap-x-4 gap-y-2 pb-8">
        {footerLinks.map((link) => (
          <a key={link} className="text-[12px] text-on-surface-variant hover:underline" href="#">
            {link}
          </a>
        ))}
        <div className="w-full flex justify-center gap-4 mt-4">
          <span className="text-[12px] text-on-surface-variant">English</span>
          <span className="text-[12px] text-on-surface-variant">© 2024 SocialApp from Meta</span>
        </div>
      </footer>
    </div>
  );
}
