import { View, Image, Text, Alert } from 'react-native' 
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer' 
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context' 
import { useRouter } from 'expo-router'


export default function DrawerContent(props) {

    const user = userStore(state => state.user);
    const router = useRouter();
    const year = new Date().getFullYear();  

    const handleLogout = async () => {
        try{
            const { error } = await supabase.auth.signOut();
         
            if(!error){
                router.replace('/');
            }else{
                throw error;
            }

        }catch(error){
            Alert.alert('Error', error.message, [{text: 'OK'}]);
        }     
    }

    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                scrollEnabled={true}
                contentContainerStyle={{ paddingTop: top }}
            >
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: 20 + top,
                        paddingBottom: 20
                    }}
                > 
                    <Image source={require('../../assets/logo.png')} style={{ alignSelf: 'center', height: 150, width: 150 }} /> 
                    <Text variant='titleLarge'>{user?.name ?? ''}</Text>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Logout"
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name='logout' color={color} size={size} />
                    )} 
                    onPress={handleLogout}
                />
            </DrawerContentScrollView>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: 20 + bottom
                }}
            >
                <Text>
                    Copyright &copy; {year}. All rights reserved
                </Text>
            </View> 
        </View>
    )
}