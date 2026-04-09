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
const ChangePasswordPage = lazy(() => import('../pages/settings/ChangePasswordPage').then((mod) => ({ default: mod.ChangePasswordPage })));
const EmailNotificationsPage = lazy(() => import('../pages/settings/EmailNotificationsPage').then((mod) => ({ default: mod.EmailNotificationsPage })));
const SecurityPage = lazy(() => import('../pages/settings/SecurityPage').then((mod) => ({ default: mod.SecurityPage })));
const ProfessionalAccountPage = lazy(() => import('../pages/settings/ProfessionalAccountPage').then((mod) => ({ default: mod.ProfessionalAccountPage })));
const AdsPreferencesPage = lazy(() => import('../pages/settings/AdsPreferencesPage').then((mod) => ({ default: mod.AdsPreferencesPage })));
const HelpCenterPage = lazy(() => import('../pages/settings/HelpCenterPage').then((mod) => ({ default: mod.HelpCenterPage })));

// Profile pages
const EditProfilePage = lazy(() => import('../pages/profile/EditProfilePage').then((mod) => ({ default: mod.EditProfilePage })));
const FollowersPage = lazy(() => import('../pages/profile/FollowersPage').then((mod) => ({ default: mod.FollowersPage })));
const FollowingPage = lazy(() => import('../pages/profile/FollowingPage').then((mod) => ({ default: mod.FollowingPage })));
const SavedPostsPage = lazy(() => import('../pages/profile/SavedPostsPage').then((mod) => ({ default: mod.SavedPostsPage })));
const TaggedPostsPage = lazy(() => import('../pages/profile/TaggedPostsPage').then((mod) => ({ default: mod.TaggedPostsPage })));
const LikesPage = lazy(() => import('../pages/profile/LikesPage').then((mod) => ({ default: mod.LikesPage })));

// Content pages
const SinglePostPage = lazy(() => import('../pages/SinglePostPage').then((mod) => ({ default: mod.SinglePostPage })));
const PostLikesPage = lazy(() => import('../pages/PostLikesPage').then((mod) => ({ default: mod.PostLikesPage })));
const ReelsFeedPage = lazy(() => import('../pages/ReelsFeedPage').then((mod) => ({ default: mod.ReelsFeedPage })));
const HashtagSearchPage = lazy(() => import('../pages/HashtagSearchPage').then((mod) => ({ default: mod.HashtagSearchPage })));
const CreateStoryPage = lazy(() => import('../pages/CreateStoryPage').then((mod) => ({ default: mod.CreateStoryPage })));

// Messaging pages
const NewMessagePage = lazy(() => import('../pages/messages/NewMessagePage').then((mod) => ({ default: mod.NewMessagePage })));
const MessageRequestsPage = lazy(() => import('../pages/messages/MessageRequestsPage').then((mod) => ({ default: mod.MessageRequestsPage })));
const MessageDetailsPage = lazy(() => import('../pages/messages/MessageDetailsPage').then((mod) => ({ default: mod.MessageDetailsPage })));

// Admin sub-pages
const AdminContentPage = lazy(() => import('../pages/admin/AdminContentPage').then((mod) => ({ default: mod.AdminContentPage })));
const AdminAnalyticsPage = lazy(() => import('../pages/admin/AdminAnalyticsPage').then((mod) => ({ default: mod.AdminAnalyticsPage })));
const AdminUsersPage = lazy(() => import('../pages/admin/AdminUsersPage').then((mod) => ({ default: mod.AdminUsersPage })));

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
    path: '/admin/content',
    element: AdminContentPage,
    title: 'Admin - Content',
  },
  {
    path: '/admin/analytics',
    element: AdminAnalyticsPage,
    title: 'Admin - Analytics',
  },
  {
    path: '/admin/users',
    element: AdminUsersPage,
    title: 'Admin - Users',
  },
  {
    path: '/settings/account',
    element: SettingsAccountPage,
    title: 'Account Settings',
  },
  {
    path: '/settings/change-password',
    element: ChangePasswordPage,
    title: 'Change Password',
  },
  {
    path: '/settings/email-notifications',
    element: EmailNotificationsPage,
    title: 'Email Notifications',
  },
  {
    path: '/settings/security',
    element: SecurityPage,
    title: 'Security',
  },
  {
    path: '/settings/professional',
    element: ProfessionalAccountPage,
    title: 'Professional Account',
  },
  {
    path: '/settings/ads',
    element: AdsPreferencesPage,
    title: 'Ads Preferences',
  },
  {
    path: '/settings/help',
    element: HelpCenterPage,
    title: 'Help Center',
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
  // Profile routes
  {
    path: '/profile/edit',
    element: EditProfilePage,
    title: 'Edit Profile',
  },
  {
    path: '/profile/followers',
    element: FollowersPage,
    title: 'Followers',
  },
  {
    path: '/profile/following',
    element: FollowingPage,
    title: 'Following',
  },
  {
    path: '/profile/likes',
    element: LikesPage,
    title: 'Liked Posts',
  },
  {
    path: '/profile/saved',
    element: SavedPostsPage,
    title: 'Saved Posts',
  },
  {
    path: '/profile/tagged',
    element: TaggedPostsPage,
    title: 'Tagged Posts',
  },
  // Content routes
  {
    path: '/post/:id',
    element: SinglePostPage,
    title: 'Post',
  },
  {
    path: '/post/:id/likes',
    element: PostLikesPage,
    title: 'Post Likes',
  },
  {
    path: '/reels',
    element: ReelsFeedPage,
    title: 'Reels',
  },
  {
    path: '/hashtag/:tag',
    element: HashtagSearchPage,
    title: 'Hashtag',
  },
  {
    path: '/create/story',
    element: CreateStoryPage,
    title: 'Create Story',
  },
  // Messaging
  {
    path: '/messages/new',
    element: NewMessagePage,
    title: 'New Message',
  },
  {
    path: '/messages/requests',
    element: MessageRequestsPage,
    title: 'Message Requests',
  },
  {
    path: '/messages/:id',
    element: MessageDetailsPage,
    title: 'Message Details',
  },
];

export const authRoutes = routes.filter((route) =>
  ['/login', '/register', '/forgot-password'].includes(route.path)
);

export const mainRoutes = routes.filter((route) =>
  ['/home', '/profile', '/explore', '/reels', '/messages', '/notifications', '/create'].includes(route.path)
);

export const settingsRoutes = routes.filter((route) =>
  [
    '/admin',
    '/admin/content',
    '/admin/analytics',
    '/admin/users',
    '/settings/account',
    '/settings/change-password',
    '/settings/email-notifications',
    '/settings/security',
    '/settings/professional',
    '/settings/ads',
    '/settings/help',
    '/settings/privacy',
    '/settings/theme',
  ].includes(route.path)
);

export const routeList = routes.map((route) => ({
  path: route.path,
  title: route.title,
}));
