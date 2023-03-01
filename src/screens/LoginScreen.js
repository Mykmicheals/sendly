import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import sendly from '../../assets/sendly.png'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
    
  <View style={{ alignItems:'center',
        justifyContent:'center', marginBottom:'30%' }}>
       <Image source={sendly}/>  
  </View>

      <View style={styles.inputView}>
        <Feather name="mail" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <Feather name="lock" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('tabs')} style={styles.button}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.signup}>Don't have an account? Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
     height: 50,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  icon: {
    padding: 10,
  },
  inputText: {
    height: 50,
    color: '#003f5c',
    flex: 1,
    paddingLeft: 5,
  },
  forgot: {
    color: '#346D27',
    fontSize: 12,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#437939',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  signup: {
    color: '#003f5c',
    fontSize: 12,
  },
});

export default LoginScreen;
