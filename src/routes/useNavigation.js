import { useContext } from 'react';
import { NavigationContext } from './NavigationContextInstance';

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
