import { View, Text,Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const TransferModal = ({showModal,hideModal}) => {
  return (
    <Modal
    animationType="slide"
    transparent={false}
    visible={showModal}
    onRequestClose={hideModal}
  >
    <View style={{
         backgroundColor:'#fff',height:'100%',shadowOffset: { width: 0, height: 2 }, borderRadius:10,
         shadowOpacity: 0.8,paddingHorizontal:'7%',paddingVertical:'6%',
         elevation: 5,position:'absolute',width:'100%',top:0,justifyContent:'center',alignItems:'center'
         
         }}>
     <View>
        <TouchableOpacity style={{
            borderWidth:1,paddingVertical:'2%',paddingHorizontal:'25%',borderRadius:4,borderColor:'gray',marginBottom:'10%'
        }}>
        <Text>To sendly Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth:1,paddingVertical:'2%',paddingHorizontal:'25%',borderRadius:4,borderColor:'gray',marginBottom:'10%'
        }}>
        <Text>To My Bank Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth:1,paddingVertical:'2%',paddingHorizontal:'25%',borderRadius:4,borderColor:'gray',marginBottom:'10%'
        }}>
        <Text>Other bank Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth:1,paddingVertical:'2%',paddingHorizontal:'25%',borderRadius:4,borderColor:'gray',marginBottom:'10%'
        }}>
        <Text>To sendly Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
            borderWidth:1,paddingVertical:'2%',paddingHorizontal:'25%',borderRadius:4,borderColor:'gray',marginBottom:'10%'
        }}>
        <Text>To sendly Wallet</Text>
        </TouchableOpacity>
       
     </View>
    </View>
  </Modal>  
  )
}

export default TransferModal