import { createContext, useContext } from 'react';

interface UserContextType {
  userEmail: string;
}

export const UserContext = createContext<UserContextType>({ userEmail: '' });

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
