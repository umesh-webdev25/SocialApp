import { useState, useCallback } from 'react';
import { routeList } from './routes';
import { NavigationContext } from './NavigationContextInstance';

export function NavigationProvider({ children }) {
  const [history, setHistory] = useState(['/login']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useCallback((path) => {
    setHistory((prev) => [...prev.slice(0, currentIndex + 1), path]);
    setCurrentIndex((prev) => prev + 1);
  }, [currentIndex]);

  const goBack = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const goForward = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, history.length]);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < history.length - 1;
  const currentPath = history[currentIndex];

  const value = {
    navigate,
    goBack,
    goForward,
    canGoBack,
    canGoForward,
    currentPath,
    history,
    routeList,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}
