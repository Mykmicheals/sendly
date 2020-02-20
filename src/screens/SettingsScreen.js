import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { fs } from '../exports';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const SettingsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.h1}>SettingsScreen</Text>

      <View style={styles.cun}>
        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>

        <View style={styles.srow}>
          <View style={styles.icn}>
          <Entypo name="share" size={18} color="white" />
          </View>
        
        <Text style={styles.ctxt}>Change login pin</Text>
        <AntDesign name="arrowright" size={24} color="#2F80ED" />
        </View>

        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>

        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>

        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>

        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>

        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>

        <View style={styles.srow}>
        <Ionicons name="settings" color='#200E32' size={24} />
        <Text>Change login pin</Text>
        <Ionicons name="ios-arrow-up"color='#200E32' size={24} />
        </View>


      </View>

    </ScrollView>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container:{
    marginTop:'18%',
    marginLeft:'6%',
    marginRight:'8%',
  },
  h1:{
    fontSize:fs,
    fontWeight:'bold'
  },
  cun:{
    marginTop:'9%',

  },
  srow:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:'8%',
    backgroundColor:'white',
    paddingHorizontal:'3%',
    paddingVertical:'4%',
    borderRadius:9,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
   // shadowRadius: 2,
    elevation: 5,
  },
  icn:{
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#2F80ED',
    justifyContent: 'center',
    alignItems: 'center',
   // marginTop:'10%',
    
  },
  ctxt:{
    fontSize:fs*.85
  }
})