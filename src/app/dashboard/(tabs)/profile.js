import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Button, Card, TextInput, Text } from 'react-native-paper'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useDebouncedCallback } from 'use-debounce'
const Profile = () => {

  const user = userStore(state => state.user);
  const { setUser } = userStore();
  const [name, setName] = React.useState(user?.name ?? '');

  const handleNameChange = (text) => {
    setName(text);
    updateName(text);   
  }; 

  const updateName = useDebouncedCallback( async (text) => {
    const prevUser = user;
    await setUser({ ...prevUser, name: text });
  }, 500);

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 10, marginTop: 10, gap: 5}}>
      <Card style={{ alignItems: 'center', justifyContent: 'center', padding: 10}}>
        <Avatar.Image size={150} source={{ uri: 'https://avatars.githubusercontent.com/u/14052885?v=4' }} />
        <Button 
          mode="contained-tonal" 
          style={{marginTop: 10}}
          icon={() => <MaterialCommunityIcons name="camera" size={24} color="black" />}
        >
            Change Avatar    
        </Button>
      </Card>    
      <TextInput 
        value={name}
        label="Full name"
        onChangeText={text => handleNameChange(text)}
        mode="outlined"
        placeholder="Full name"
        left={<TextInput.Icon icon="account" />}
      />
       <TextInput 
        label="Date of Birth"
        mode="outlined"
        placeholder="Date of Birth"
        left={<TextInput.Icon icon="calendar" />}
      />
       <TextInput 
        label="Gender"
        mode="outlined"
        placeholder="Gender"
        left={<TextInput.Icon icon="gender-male-female" />}
      />
       <TextInput 
        label="Address"
        mode="outlined"
        placeholder="Address"
        left={<TextInput.Icon icon="map-marker" />}
      />
      <Button 
        mode="contained" 
        style={{marginTop: 10}}
        icon={() => <MaterialCommunityIcons name="content-save" size={24} color="white" />}
      >
          Save
      </Button>
    </SafeAreaView>
  )
}

export default Profile