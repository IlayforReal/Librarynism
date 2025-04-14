import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth } from '../../firebase';
import { getDatabase, ref as dbRef, get } from 'firebase/database';

const RootLayout = () => {
  const router = useRouter();

  const checkSession = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        const db = getDatabase();
        const snapshot = await get(dbRef(db, "users/" + user.uid));
        const userData = snapshot.val();

        if (!userData) {
          Alert.alert("Error", "User data not found.");
          return;
        }

        const role = userData.role;

        if (role === 'admin') {
          router.replace('/admin/dashboard');
        } else {
          router.replace('/dashboard');
        }
      } 
      // No need to do anything if user is not logged in, stays on index
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack screenOptions={{ animation: 'none' }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ title: 'Registration' }} />
          <Stack.Screen name="recover" options={{ title: 'Forgot Password?' }} />
          <Stack.Screen name="dashboard" options={{ headerShown: false }} />
          <Stack.Screen name="admin/dashboard" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;