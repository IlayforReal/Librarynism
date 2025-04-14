import { Image, View } from 'react-native'

const Avatar = (props) => {
  return (
    <View
        style={{    
            width: props.toggle ? 250 : 150, 
            height: props.toggle ? 250 : 150, 
            boxShadow: '#000',
            border: '15px solid #000', 
            padding: 5,
            borderRadius: 75, 
        }}
    >
        <Image 
                source={require('../../assets/logo.png')}
                style={{ 
                    width: '100%',
                    height: '100%',
                }} 
        />
    </View>
    
  )
}

export default Avatar