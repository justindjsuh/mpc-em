import type { EventsApiResponse } from '@/app/lib/definitions';
import { createContext, useContext } from 'react';

interface UserContextType {
  userEmail: string;
  loading: boolean;
  events: EventsApiResponse[];
  setEvents: (events: EventsApiResponse[]) => void;
}

export const UserContext = createContext<UserContextType>({ userEmail: '', loading: false, events: [], setEvents: () => {} });

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
