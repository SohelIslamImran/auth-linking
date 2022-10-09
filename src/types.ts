import type React from 'react';
import type { User } from 'firebase/auth';

export interface AuthLinkingProviderProps {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode;
  /**
   * A function that should return a promise with the user or null (if the user is not logged in)
   * @example
      const onAuthChange = () => {
        return new Promise((resolve, reject) => {
          onAuthStateChanged(auth, resolve, reject);
        });
      };
   };
   */
  onAuthChange: () => Promise<unknown> | Promise<User>;
}

export type AuthLinkingContextType = {
  deepLinkURL: string | null;
  setURL: React.Dispatch<React.SetStateAction<string | null>>;
};
