import { View, Text, ScrollView,StyleSheet, SafeAreaView,Image, TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import {sh,fs} from '../exports'
import profileImg from '../../assets/profile.jpeg'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TransactionModal from '../modals/TransactionModal';
import TransferModal from '../modals/TransferModal';
import AirtimeModal from '../modals/AirtimeModal';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FundWalletModal from '../modals/FundWalletModal';


const HomeScreen = ({navigation}) => {
    const [transactModal,setTransact] = useState(false)
    const [transferModal,setTransfer] = useState(false)
    const [airtimeModal,setAirtime] = useState(false)
    const [fundWallet,setWallet] = useState(false)


  return (
      <SafeAreaView>
    <ScrollView >
      
        <View style={styles.top}>
         <Text style={styles.logo}>Sendly</Text>
        <View style={styles.img}>
        <Image style={styles.image} source={profileImg} />
        </View>
        

        <View style={styles.container}>
        <Text style={styles.wel}>Welcome back</Text>
        <Text style={styles.name}>John Doe</Text>
        </View>
        
        <View style={styles.bal}>
            <Text style={styles.balt}>Your ballance</Text>
            <Text style={styles.csh}>N35,000</Text>
        </View>

        </View>

        <View style={styles.cbtm}>

        <View style={styles.cbtmin}>
           
        <TouchableOpacity onPress={()=>setTransact(true)} style={styles.card}>
            <Ionicons name="ios-card-outline" size={24} color="#7F70E9" />
                <View style={styles.ts}>
                <Text style={styles.tw}>Transactions</Text>
                <Text style={styles.tm}>23,000</Text>
                </View>
                
            </TouchableOpacity>

            <View style={styles.card}>
            <Ionicons name="ios-card-outline" size={24} color="#FE9C59" />
                <View style={styles.ts}>
                <Text style={[styles.tw,{color:'#FE9C59'}]}>Expenses</Text>
                <Text style={styles.tm}>14,600</Text>
                </View>
                
            </View>

            </View>

        <View style={styles.ocrd}>

        <TouchableOpacity style={styles.tcard}
        onPress={()=>setWallet(true)}
        >
           <MaterialCommunityIcons name="credit-card" size={24} color="#6767D9" />
            <Text style={styles.tf}>Fund Wallet</Text>
        </TouchableOpacity>


         
        <TouchableOpacity style={styles.tcard}
        onPress={()=>setTransfer(true)}
        >
           <MaterialIcons name="compare-arrows" size={36} color="#FE9C59" />
            <Text style={styles.tf}>Transfer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tcard}
        onPress={()=>setAirtime(true)}
        >
            <AntDesign name="mobile1" size={24} color="#344352" />
            <Text style={styles.tf}>Airtime</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tcard}
        onPress={()=>navigation.navigate('settings')}
        >
            <Feather name="settings" size={28} color="brown" />
            <Text style={styles.tf}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tcard}
        onPress={()=>navigation.navigate('settings')}
        >
            <Feather name="settings" size={28} color="#9D79F9" />
            <Text style={styles.tf}>Settings</Text>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.tcard}
        onPress={()=>navigation.navigate('settings')}
        >
            <Feather name="settings" size={28} color="#FFD054" />
            <Text style={styles.tf}>Settings</Text>
        </TouchableOpacity>

        </View>

       
        </View>

        <TransactionModal 
            showModal={transactModal}
            hideModal = {()=>setTransact(false)}
        />

        <TransferModal
        showModal={transferModal}
        hideModal = {()=>setTransfer(false)}
        />

        <AirtimeModal 
            showModal={airtimeModal}
            hideModal = {()=>setAirtime(false)}
        
        />

        <FundWalletModal
        showModal={fundWallet}
     hideModal={()=>setWallet(false)}
        />
   
    </ScrollView>
     </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    top: {
        backgroundColor:'#6767D9',
        width:'100%',
       // height:'55%'
       height:sh*.39,
       borderBottomLeftRadius:20,
       borderBottomRightRadius:20
    },
    container:{
        marginTop:'20%',
        marginHorizontal:'5%'
    },
    wel:{
        color:'#D0CDFD',
        fontSize:fs*1.2,
        marginTop:'15%',
        marginLeft:'2%'
    },
    name:{
        marginLeft:'2%',
        marginTop:'1%',
        fontSize:fs*.9, 
        color:'white'
    },
    img:{
       position:'absolute',
       right:'14%',
       top:'28%',
       width: 50,
       height: 50,
       borderRadius: 50,
       overflow: 'hidden',
    },
    image:{
        width:'100%',
        height:'100%'
    },
    bal:{
        position:'absolute',
        bottom:'9%',
        right:'8%'
    },
    balt:{
        color:'white',
      //  fontWeight:'bold'
    },
    csh:{
        color:'white',
        fontSize:fs*1.1,
        fontWeight:'bold'
    },
    logo:{
        position:'absolute',
        top:'24%',
        left:'8%',
        color:'white',
        fontSize:fs*1.2,
        fontWeight:'600'
       // fontFamily: 'Quicksand',

    },
    cbtm:{
        marginHorizontal:'10%',
        marginTop:'7%'
    },

    cbtmin:{
    flexDirection:'row',
    justifyContent:'space-between',

},

    card:{
        backgroundColor:'white',
        paddingHorizontal:'3%',
        paddingVertical:'4%',
        borderRadius:9,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 5,
        width:'48%',
        flexDirection:'row',
       // justifyContent:'space-between'
    },
    ts:{
        marginLeft:'8%'
    },
    tw:{
        color:'#7F70E9',
        fontWeight:'700',
        fontSize:fs*.83
    },
    tm:{
      fontWeight:'500',
      fontSize:fs*.86,
      marginTop:'1%'  
    },
    ocrd:{
    marginTop:'14%',
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap: 'wrap'
   
},
    tcard:{
    backgroundColor:'white',
    width:'48%',
    height:sh*.14,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:'6%'
    },

    tf:{
        fontSize:fs*.8,
        marginTop:'4%'
    }
  });
  