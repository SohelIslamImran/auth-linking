import { createContext, useState, useContext, useLayoutEffect } from 'react';

import { fakeAuthProvider } from './fakeAuth';

const AuthContext = createContext({ user: null });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    fakeAuthProvider.onAuthChanged().then(setUser);
  }, []);

  const login = (newUser) => {
    return fakeAuthProvider.login(newUser, () => {
      setUser(newUser);
    });
  };

  const logout = () => {
    return fakeAuthProvider.logout(() => {
      setUser(null);
    });
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
