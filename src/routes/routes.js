import { lazy } from 'react';

const LoginPage = lazy(() => import('../pages/auth/LoginPage').then((mod) => ({ default: mod.LoginPage })));
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage').then((mod) => ({ default: mod.RegisterPage })));
const ForgotPasswordPage = lazy(() => import('../pages/auth/ForgotPasswordPage').then((mod) => ({ default: mod.ForgotPasswordPage })));
const HomeFeedPage = lazy(() => import('../pages/main/HomeFeedPage').then((mod) => ({ default: mod.HomeFeedPage })));
const ProfilePage = lazy(() => import('../pages/main/ProfilePage').then((mod) => ({ default: mod.ProfilePage })));
const ExplorePage = lazy(() => import('../pages/main/ExplorePage').then((mod) => ({ default: mod.ExplorePage })));
const MessagesPage = lazy(() => import('../pages/main/MessagesPage').then((mod) => ({ default: mod.MessagesPage })));
const NotificationsPage = lazy(() => import('../pages/main/NotificationsPage').then((mod) => ({ default: mod.NotificationsPage })));
const CreatePostPage = lazy(() => import('../pages/main/CreatePostPage').then((mod) => ({ default: mod.CreatePostPage })));
const AdminDashboardPage = lazy(() => import('../pages/settings/AdminDashboardPage').then((mod) => ({ default: mod.AdminDashboardPage })));
const SettingsAccountPage = lazy(() => import('../pages/settings/SettingsAccountPage').then((mod) => ({ default: mod.SettingsAccountPage })));
const SettingsPrivacyPage = lazy(() => import('../pages/settings/SettingsPrivacyPage').then((mod) => ({ default: mod.SettingsPrivacyPage })));
const SettingsThemePage = lazy(() => import('../pages/settings/SettingsThemePage').then((mod) => ({ default: mod.SettingsThemePage })));

export const routes = [
  {
    path: '/',
    element: null,
    redirect: '/login',
  },
  {
    path: '/login',
    element: LoginPage,
    title: 'Login',
  },
  {
    path: '/register',
    element: RegisterPage,
    title: 'Register',
  },
  {
    path: '/forgot-password',
    element: ForgotPasswordPage,
    title: 'Forgot Password',
  },
  {
    path: '/home',
    element: HomeFeedPage,
    title: 'Home',
  },
  {
    path: '/profile',
    element: ProfilePage,
    title: 'Profile',
  },
  {
    path: '/explore',
    element: ExplorePage,
    title: 'Explore',
  },
  {
    path: '/messages',
    element: MessagesPage,
    title: 'Messages',
  },
  {
    path: '/notifications',
    element: NotificationsPage,
    title: 'Notifications',
  },
  {
    path: '/create',
    element: CreatePostPage,
    title: 'Create Post',
  },
  {
    path: '/admin',
    element: AdminDashboardPage,
    title: 'Admin Dashboard',
  },
  {
    path: '/settings/account',
    element: SettingsAccountPage,
    title: 'Account Settings',
  },
  {
    path: '/settings/privacy',
    element: SettingsPrivacyPage,
    title: 'Privacy Settings',
  },
  {
    path: '/settings/theme',
    element: SettingsThemePage,
    title: 'Theme Settings',
  },
];

export const authRoutes = routes.filter((route) =>
  ['/login', '/register', '/forgot-password'].includes(route.path)
);

export const mainRoutes = routes.filter((route) =>
  ['/home', '/profile', '/explore', '/messages', '/notifications', '/create'].includes(route.path)
);

export const settingsRoutes = routes.filter((route) =>
  ['/admin', '/settings/account', '/settings/privacy', '/settings/theme'].includes(route.path)
);

export const routeList = routes.map((route) => ({
  path: route.path,
  title: route.title,
}));
