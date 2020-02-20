import { View, Text, Image,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import { fs } from '../exports'
import { Ionicons } from '@expo/vector-icons';
import Transactions from '../components/Transactions';



const circle = require('../../assets/circles.png');
const chip = require('../../assets/chip.png');

const CardScreen = ({navigation}) => {
  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>My Cards</Text>
      <Text style={styles.p1}>Create a new plan and save towards that big goal</Text>

      <View style={styles.atmCard}>
        <Text style={styles.cwrd}>Sendly</Text>
      <Image style={styles.msc} source={circle} />
      <Image style={styles.chip} source={chip} />
      
      <View style={styles.chipbtm}>
      <Text style={styles.cnum}>**** **** **** 2246</Text>
      <Text style={styles.name}>Taylor Phillips</Text>

      </View>
      
      </View>

      <Text style={styles.hst}>History</Text>
   <Transactions />

    </SafeAreaView>
  )
}

export default CardScreen


const styles = StyleSheet.create({
  container:{
    marginTop:'15%',
    marginLeft:'6%',
    marginRight:'8%',
  },
  h1:{
    fontSize:fs,
    fontWeight:'bold'
  },
  p1:{
    marginTop:'2%',
    fontSize:fs*0.85,
    width:'80%',
    color:'gray',
    lineHeight:25
  },
  atmCard:{
    marginTop:'10%',
    width:'100%',
    backgroundColor:'#344352',
    borderRadius:10,
    height:200,
    paddingLeft:'8%',
    paddingTop:'4%'
  },
  hst:{
    paddingTop:40,
    fontSize:fs*0.97,
    color:'#d4d4e2',
    fontWeight:'bold'
  },
 
  wtxt:{
    fontWeight:'900',
    fontSize:fs*0.88,
  },
  wnum:{
    color:'gray',
    marginTop:4
  },
  mony:{
   color:'red',
   fontSize:fs,
   fontWeight:'bold' 
  },
  cmony:{
    color:'#3c88ee',
    fontSize:fs,
   fontWeight:'bold' 
  },
  msc:{
    position:'absolute',
    bottom:2,
    right:8,
    width:'23%',
    height:'40%'
  },
  chip:{
    width:'23%',
    height:'49%',
    marginTop:'2%',
  },
  // chipbtm:{
  // position:'absolute',
  // top:'60%'
  // },
  cwrd:{
    color:'white',
    fontSize:fs,
    fontWeight:'bold',
  },
  cnum:{
    color:'white',
    fontSize:fs
  },
  name:{
    fontSize:fs*0.8,
    color:'white'
  }
})
