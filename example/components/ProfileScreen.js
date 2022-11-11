import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { useAuth } from '../auth/AuthContext';

export default function ProfileScreen({ navigation }) {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        variant="headlineMedium"
        style={{ textAlign: 'center', fontSize: 18, marginBottom: 20 }}>
        Username: {user}
      </Text>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Home')}>
        Back to Home
      </Button>
    </View>
  );
}
