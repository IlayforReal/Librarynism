import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useRouter } from 'expo-router'

const Settings = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Settings</Text>
      <Button mode="contained" onPress={() => router.replace('/')}>Logout</Button>
    </View>
  )
}

export default Settings