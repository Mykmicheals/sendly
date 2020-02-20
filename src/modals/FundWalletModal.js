import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import paystack from '../../assets/paystack.png'
import flutter from '../../assets/flutter.png'
import { Modal } from 'react-native-paper'


const FundWalletModal = ({showModal,hideModal}) => {
  return (
    <Modal
    visible={showModal} 
    onDismiss={hideModal}
    contentContainerStyle = {{backgroundColor: 'white',width:'80%',height:'60%', marginHorizontal:'10%'}}

   // style={{backgroundColor:'red'}}
    >

    <TouchableOpacity>

    <View style={{flexDirection:'row',alignItems:'center',alignContent:'flex-start', marginBottom:'4%'}}>

<Image resizeMode='contain' style= {{height:60,width:100, alignContent:'flex-start'}} source={paystack}/>
      <Text>Paypal</Text>

</View>

    </TouchableOpacity>
      


 <TouchableOpacity>
 <View style={{flexDirection:'row',alignItems:'center',alignContent:'flex-start', marginBottom:'4%'}}>

<Image resizeMode='contain' style= {{height:60,width:100, alignContent:'flex-start'}} source={flutter}/>
      <Text>Paypal</Text>

</View>
  </TouchableOpacity>   

   <TouchableOpacity>
 <View style={{flexDirection:'row',alignItems:'center',alignContent:'flex-start', marginBottom:'4%'}}>

<Image resizeMode='contain' style= {{height:60,width:100, alignContent:'flex-start'}} source={paystack}/>
      <Text>Paypal</Text>

</View>
  </TouchableOpacity>    


    </Modal>
  )
}

export default FundWalletModal