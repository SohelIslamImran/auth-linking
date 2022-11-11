import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { useAuth } from '../auth/AuthContext';

export default function HomeScreen({ navigation }) {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        variant="headlineMedium"
        style={{ textAlign: 'center', fontSize: 18 }}>
        Welcome to Auth Linking
      </Text>
      <Button
        style={{ marginVertical: 20 }}
        mode="contained"
        onPress={() => navigation.navigate('Profile')}>
        Go to Profile
      </Button>
      <Button icon="logout" mode="outlined" onPress={() => logout()}>
        Logout
      </Button>
    </View>
  );
}
