import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
  isAuthenticated: false,
  onAuthChanged() {
    return AsyncStorage.getItem('user');
  },
  login(user, callback) {
    fakeAuthProvider.isAuthenticated = true;
    AsyncStorage.setItem('user', user);
    setTimeout(callback, 100); // fake async
  },
  logout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    AsyncStorage.removeItem('user');
    setTimeout(callback, 100);
  },
};

export { fakeAuthProvider };
