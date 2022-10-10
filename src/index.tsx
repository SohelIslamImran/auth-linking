import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Linking from 'expo-linking';

import type { AuthLinkingContextType, AuthLinkingProviderProps } from './types';

const AuthLinkingContext = createContext<AuthLinkingContextType | null>(null);

const AuthLinkingProvider = ({
  children,
  onAuthChange,
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

/**
 * Call this hook inside a screen that will render after all auth flow is completed. So this hook will automatically redirect to the deep link through which the app is opened.
* @example
    import { useAutoRedirectToDeepLink } from "auth-linking";
    ...
    const Home = () => {
      useAutoRedirectToDeepLink()

      return (
        <View>{...}</View>
      );
    };
 */
const useAutoRedirectToDeepLink = () => {
  // @ts-ignore
  const { deepLinkURL, setURL } = useContext(AuthLinkingContext);

  useEffect(() => {
    if (!deepLinkURL) return;
    Linking.openURL(deepLinkURL);
    setURL(null);
  }, [deepLinkURL]);
};

export { useAutoRedirectToDeepLink };
export default AuthLinkingProvider;
