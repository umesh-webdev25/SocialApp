import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavigationProvider } from './NavigationContext';
import { routes } from './routes';
import { ErrorBoundary } from '../components/ErrorBoundary';

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-on-surface-variant text-sm">Loading...</p>
      </div>
    </div>
  );
}

function PageRoute({ route }) {
  if (!route.element) return null;
  
  const Page = route.element;
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Page />
    </Suspense>
  );
}

function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.redirect ? (
              <Navigate to={route.redirect} replace />
            ) : (
              <ErrorBoundary>
                <PageRoute route={route} />
              </ErrorBoundary>
            )
          }
        />
      ))}
    </Routes>
  );
}

export function AppRouter() {
  return (
    <NavigationProvider>
      <AppRoutes />
    </NavigationProvider>
  );
}
