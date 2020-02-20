import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CardScreen from './src/screens/CardScreen';
import SavingsScreen from './src/screens/SavingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IndexScreen from './src/screens/IndexScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Login from './src/screens/Login';
import SettingsScreen from './src/screens/SettingsScreen';
import HomeScreen from './src/screens/HomeScreen';
//import './tailwind.css'

const Tab = createBottomTabNavigator();


export default function App() {

  
  const Stack = createNativeStackNavigator();

  function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBarOptions={{
        activeTintColor: 'blue',
      }}
      >

      <Tab.Screen name="home" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color='#200E32' size={24} />
          ),
        }}
        />
        <Tab.Screen name="card" component={CardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-card-outline" size={24} color="black" />
          ),
        }}
        />
        <Tab.Screen name="Settings" component={SavingsScreen}
         options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance-wallet" size={24} color="#200E32" />
          ),
        }}
        />
        <Tab.Screen name="index" component={IndexScreen} 
         options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="money" size={24} color="black" />
          ),
        }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: 'white' },
    }}>
      {/* <Stack.Screen name="login" component={Login} /> */}
    <Stack.Screen name="tabs" component={MyTabs} />
    <Stack.Screen name="settings" component={SettingsScreen} />
    
     
    
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
