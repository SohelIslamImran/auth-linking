import { useState } from 'react';
import { Platform, View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

import { useAuth } from '../auth/AuthContext';

export default function LoginScreen() {
  const { login } = useAuth();
  const [user, setUser] = useState(null);

  return (
    <View
      style={[
        { flex: 1, alignSelf: 'center', justifyContent: 'center' },
        Platform.select({ native: { width: '90%' } }),
      ]}>
      <Text style={{ textAlign: 'center', fontSize: 24 }}>Please login</Text>
      <TextInput
        mode="outlined"
        label="Username"
        onChangeText={setUser}
        style={{ marginVertical: 30 }}
        placeholder="Enter your username"
      />
      <Button icon="login" mode="contained" onPress={() => login(user)}>
        Login
      </Button>
    </View>
  );
}
