import { View, Text, ScrollView,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { fs } from '../exports'
import { Ionicons } from '@expo/vector-icons';

const h = Dimensions.get('window').height


const SavingsScreen = () => {
  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    style={styles.container}>
    <Text style={styles.h1}>Saving Plans</Text>
    <Text style={styles.p1}>Create a new plan and save towards that big goal</Text>

   <View style={styles.sv}>

   <View style={styles.svcard}>

          <View style={styles.icn}> 
            <Ionicons name="ios-arrow-up" size={20} color="#ffffff" />
          </View>
        <Text style={styles.ctxt}>Febuary goals</Text>
        <Text style={styles.tsm}>$4000/12000</Text>
        
        <View style={styles.bar1}>
          <View style={styles.bar2}></View>
        </View>

    
    </View>


    <View style={styles.svcard}>

<View style={styles.icn}> 
  <Ionicons name="ios-arrow-up" size={20} color="#ffffff" />
</View>
<Text style={styles.ctxt}>Febuary goals</Text>
<Text style={styles.tsm}>$4000/12000</Text>

<View style={styles.bar1}>
<View style={styles.bar2}></View>
</View>


</View>


<View style={styles.svcard}>

<View style={styles.icn}> 
  <Ionicons name="ios-arrow-up" size={20} color="#ffffff" />
</View>
<Text style={styles.ctxt}>Febuary goals</Text>
<Text style={styles.tsm}>$4000/12000</Text>

<View style={styles.bar1}>
<View style={styles.bar2}></View>
</View>


</View>


<View style={styles.svcard}>

<View style={styles.icn}> 
  <Ionicons name="ios-arrow-up" size={20} color="#ffffff" />
</View>
<Text style={styles.ctxt}>Febuary goals</Text>
<Text style={styles.tsm}>$4000/12000</Text>

<View style={styles.bar1}>
<View style={styles.bar2}></View>
</View>


</View>


<View style={styles.svcard}>

<View style={styles.icn}> 
  <Ionicons name="ios-arrow-up" size={20} color="#ffffff" />
</View>
<Text style={styles.ctxt}>Febuary goals</Text>
<Text style={styles.tsm}>$4000/12000</Text>

<View style={styles.bar1}>
<View style={styles.bar2}></View>
</View>


</View>


<View style={styles.svcard}>

<View style={styles.icn}> 
  <Ionicons name="ios-arrow-up" size={20} color="#ffffff" />
</View>
<Text style={styles.ctxt}>Febuary goals</Text>
<Text style={styles.tsm}>$4000/12000</Text>

<View style={styles.bar1}>
<View style={styles.bar2}></View>
</View>


</View>


  

   </View>


  

  </ScrollView>
  )
}

export default SavingsScreen


const styles = StyleSheet.create({
  container:{
    marginTop:'22%',
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
  sv:{
  marginTop:'8%',
  flexDirection:'row',
  flexWrap: 'wrap'
  
  },
  svcard:{
    backgroundColor:'#B9D4F9',
    height:h*0.24,
    width:'48%',
    marginRight:'2%',
    marginTop:'3%',
    paddingLeft:'4%',
    paddingRight:'4%',
    borderRadius:8
  },
  icn:{
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: '#2F80ED',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'10%',
    
  },
  ctxt:{
    marginTop:'16%',
    justifyContent: 'center',
    fontWeight:'bold',
    fontSize:fs*0.9,

    textAlignVertical: 'center'
    
  },
  tsm:{
    fontSize:fs*0.6,
    marginTop:'3%',
    
  },
  bar1:{
    width:'100%',
    height:h*0.014,
    backgroundColor:'blue',
    marginTop:'21%',
    borderRadius:23
  },
  bar2:{
    width:'80%',
 //   height:h*0.015,
    backgroundColor:'red',
    marginTop:'5%',
    zIndex:10
  }

})