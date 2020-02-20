import { View, Text, Image,StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import { fs } from '../exports'
import { Ionicons } from '@expo/vector-icons';

const Transactions = () => {
  return (
    <View>

    <View style={styles.trans}>

      <View style={styles.icn}> 
        <Ionicons name="ios-arrow-up" size={24} color="#f15d6f" />
      </View>

      <View>
        <Text style={styles.wtxt}>Debit</Text>
        <Text style={styles.wnum}>**4458</Text>
      </View>

      <View>
        <Text style={styles.mony}>$423.43</Text>
        <Text style={styles.wnum}>10 oct 21</Text>
      </View>

    </View>

    
    <View style={styles.trans}>

<View style={[styles.icn,styles.icnc]}> 
<Ionicons name="ios-arrow-down" size={24} color="#5d9cf1" />
</View>

<View>
<Text style={styles.wtxt}>Credit</Text>
<Text style={styles.wnum}>**4458</Text>
</View>

<View>
<Text style={styles.cmony}>$423.43</Text>
<Text style={styles.wnum}>10 oct 21</Text>
</View>

    </View>


    <View style={styles.trans}>

<View style={styles.icn}> 
<Ionicons name="ios-arrow-up" size={24} color="#f15d6f" />
</View>

<View>
<Text style={styles.wtxt}>Debit</Text>
<Text style={styles.wnum}>**4458</Text>
</View>

<View>
<Text style={styles.mony}>$423.43</Text>
<Text style={styles.wnum}>10 oct 21</Text>
</View>

    </View>

    <View style={styles.trans}>

<View style={[styles.icn,styles.icnc]}> 
<Ionicons name="ios-arrow-down" size={24} color="#5d9cf1" />
</View>

<View>
<Text style={styles.wtxt}>Credit</Text>
<Text style={styles.wnum}>**4458</Text>
</View>

<View>
<Text style={styles.cmony}>$423.43</Text>
<Text style={styles.wnum}>10 oct 21</Text>
</View>

    </View>


  </View>
  )
}

export default Transactions



const styles = StyleSheet.create({
    trans:{
      paddingTop:30,
      flexDirection: 'row',
      justifyContent: 'space-between',
     // alignItems: 'center',
    },
    icn:{
      width: 50,
      height: 50,
      borderRadius: 50,
      backgroundColor: '#fde8ea',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icnc:{
      backgroundColor: '#e8f1fd',
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
    cre:{
  
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