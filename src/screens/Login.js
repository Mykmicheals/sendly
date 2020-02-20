import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const [formOpacity, setFormOpacity] = useState(new Animated.Value(0));

  const animate = () => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();

    Animated.timing(formOpacity, {
      toValue: 1,
      duration: 1000,
      delay: 500,
      useNativeDriver: true
    }).start();
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1495020689067-958852a7765e'
      }}
      style={styles.backgroundImage}
      onLoad={animate}
    >
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: logoOpacity,
              transform: [
                {
                  translateY: logoOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [screenHeight / 2 - 100, 0]
                  })
                }
              ]
            }
          ]}
        >
          <Text style={styles.logoText}>Welcome</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.formContainer,
            {
              opacity: formOpacity,
              transform: [
                {
                  translateY: formOpacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [screenHeight / 2, 0]
                  })
                }
              ]
            }
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#9C9C9C"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9C9C9C"
            secureTextEntry
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.button}
          onPress={()=>navigation.navigate('tabs')}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </KeyboardAvoidingView>
      </ImageBackground >
  )}


  export default Login


  const styles = StyleSheet.create({
    backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
    },
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple',
 //   background: 'linear-gradient(to right, #7e57c2, #5e35b1, #7e57c2)',
    background: 'linear-gradient(to bottom, #800080, #b366b3)'

    },
    logoContainer: {
    alignItems: 'center'
    },
    logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
    },
    formContainer: {
    width: screenWidth - 50,
    alignItems: 'center'
    },
    input: {
    backgroundColor: 'white',
    width: screenWidth - 50,
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
    fontSize: 16
    },
    button: {
    backgroundColor: '#00BFFF',
    width: screenWidth - 50,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
    },
    buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
    }
    });
    
    
    
    
    