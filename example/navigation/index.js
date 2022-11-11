import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import { useAuth } from '../auth/AuthContext';

const linking = {
  enabled: true,
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Profile: 'profile',
      Home: 'home',
      Login: 'login',
    },
  },
};

export default function Navigation() {
  const { user } = useAuth();

  return (
    <NavigationContainer independent linking={linking}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
