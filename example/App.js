import AuthLinkingProvider from 'auth-linking';

import { AuthProvider } from './auth/AuthContext';
import Navigation from './navigation';

import { fakeAuthProvider } from './auth/fakeAuth';

export default function App() {
  return (
    <AuthLinkingProvider onAuthChange={fakeAuthProvider.onAuthChanged}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </AuthLinkingProvider>
  );
}
