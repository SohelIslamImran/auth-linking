import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../components/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
       {/* Your others Stack */}
    </Stack.Navigator>
  );
}
