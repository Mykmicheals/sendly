
import { View, TextInput, StyleSheet, Text ,Image,Animated, ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { fs, sh } from '../exports'
const circle = require('../../assets/circles.png');
const chip = require('../../assets/chip.png');
import React, { useState } from 'react';

const data = [50, 40, 70, 60, 90];

const IndexScreen = () => {
    const [barHeight, setBarHeight] = useState(new Animated.Value(0));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.backgroundStyle}>
      <MaterialIcons name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search here"
       // value={term}
       // onChangeText={onTermChange}
       // onEndEditing={onTermSubmit}
      />
    </View>

    <View style={styles.atmCard}>
        <Text style={styles.cwrd}>Sendly</Text>
      <Image style={styles.msc} source={circle} />
      <Image style={styles.chip} source={chip} />
      
      <View style={styles.chipbtm}>
      <Text style={styles.cnum}>**** **** **** 2246</Text>
      <Text style={styles.name}>Taylor Phillips</Text>

      </View>


      
      </View>

      <View style={styles.expen}>
        <Text style={styles.exb}>Expenditure Breakdown</Text>
        <Text style={styles.exb}>+ N24,000</Text>
      </View>

      <View style={styles.expen}>
        <Text>This Week</Text>
       
        <View style={styles.tme}>
            <Text style={styles.wk}>Wk</Text>
            <Text style={styles.mon}>Mn</Text>
            <Text style={styles.mon}>yr</Text>
        </View>

      </View>

        <View style={styles.grow}>
            
        
        <View style={styles.graph}>
        <View></View>
        <Text>Mon</Text>
        </View>

        <View style={[styles.graph2, {left:'15%', height:sh*.23,}]}>
        <View></View>
        <Text>Mon</Text>
        </View>


        <View style={[styles.graph2, {left:'30%', height:sh*.14,}]}>
        <View></View>
        <Text>Mon</Text>
        </View>

        <View style={[styles.graph2, {left:'45%', height:sh*.19,}]}>
        <View></View>
        <Text>Mon</Text>
        </View>

        <View style={[styles.graph2, {left:'59%', height:sh*.11,}]}>
        <View></View>
        <Text>Mon</Text>
        </View>

        <View style={[styles.graph2, {left:'73%', height:sh*.3,}]}>
        <View></View>
        <Text>Mon</Text>
        </View>

        <View style={[styles.graph2, {left:'88%', height:sh*.25,}]}>
        <View></View>
        <Text>Mon</Text>
        </View>
    
        
        </View>



    </ScrollView>
  )
}

export default IndexScreen

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

    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
      },
      inputStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 10,
      },
      iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
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
      },
      expen:{
        marginTop:'14%',
        flexDirection:'row',
        justifyContent: 'space-between'
      },
      exb:{
        fontSize:fs*.86,
        fontWeight:'bold'
      },
      tme:{
        flexDirection:'row',
        justifyContent:'space-between'
      },
      wk:{
        backgroundColor:'#2F80ED',
        paddingVertical:2,
        paddingHorizontal:4,
        color:'white',
        borderRadius:4,
        marginRight:'3%',
        fontSize:fs*.72
      },
      mon:{
        backgroundColor:'#E8F1FD',
        paddingVertical:2,
        paddingHorizontal:4,
        color:'#738AA9',
        borderRadius:4,
        marginRight:'3%',
        fontSize:fs*.72
      },
      grow:{
        position:'relative'
      },

      graph:{
        height:sh*.3,
        backgroundColor:'blue',
        width:'12%',
        borderTopRightRadius:5,
        borderTopStartRadius:5
      },

      graph2:{
        height:sh*.2,
        backgroundColor:'blue',
        width:'12%',
        position:'absolute',
        bottom:0,
        
        borderTopRightRadius:5,
        borderTopStartRadius:5
      },
      grow:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'7%'
      },
  
  })
  