import { View, Text,ImageBackground,Image,Animated } from 'react-native'
import React,{useRef,useEffect} from 'react'
import splash from '../../assets/splash2.jpg'
import sendly from '../../assets/sendly.png'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
     const navigation = useNavigation();
  let slideAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 3000,
      useNativeDriver: true,
    }).start();

      const timeoutId = setTimeout(() => {
      navigation.navigate('login');
    }, 5000);

    return () => clearTimeout(timeoutId);
  

  }, [slideAnimation,navigation]);


let imageTransform = [
  {
    translateY: slideAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -200],
    }),
  },
];

let textTransform = [
  {
    translateY: slideAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0],
    }),
  },
];

  return (
    <View source={splash} 
    style={{ flex: 1,}}>
      <View style={{ alignItems:'center',
        justifyContent:'center',  flex:1}}>
       <Animated.Image style={{transform:imageTransform}} source={sendly}/>
     

        
       <Animated.Text style={{ transform: textTransform }}>
        Send Cash Easily
      </Animated.Text>

       </View>
      
    </View>
  )
}

export default SplashScreen