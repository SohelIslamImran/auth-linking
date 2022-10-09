import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import * as Linking from 'expo-linking';

import type { AuthLinkingContextType, AuthLinkingProviderProps } from './types';

const AuthLinkingContext = createContext<AuthLinkingContextType | null>(null);

const authChange = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(getAuth(), resolve, reject);
  });
};

const AuthLinkingProvider = ({
  children,
  onAuthChange = authChange,
}: AuthLinkingProviderProps) => {
  const deepLink = Linking.useURL();
  const [deepLinkURL, setURL] = useState<null | string>(null);

  useEffect(() => {
    if (!deepLink) return;
    onAuthChange().then((user) => {
      if (!user) setURL(deepLink);
    });
  }, [deepLink]);

  return (
    <AuthLinkingContext.Provider value={{ deepLinkURL, setURL }}>
      {children}
    </AuthLinkingContext.Provider>
  );
};

const useAutoRedirect = () => {
  // @ts-ignore
  const { deepLinkURL, setURL } = useContext(AuthLinkingContext);

  useEffect(() => {
    if (!deepLinkURL) return;
    Linking.openURL(deepLinkURL);
    setURL(null);
  }, [deepLinkURL]);
};

export { useAutoRedirect };
export default AuthLinkingProvider;
