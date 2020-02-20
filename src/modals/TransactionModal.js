import { View, Text,Modal,TouchableOpacity } from 'react-native'
import React from 'react'
import Transactions from '../components/Transactions'

const TransactionModal = ({showModal,hideModal}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={showModal}
    onRequestClose={hideModal}
  >
    <View style={{
         backgroundColor:'#D3D3D3',height:'100%',shadowOffset: { width: 0, height: 2 }, borderRadius:10,
         shadowOpacity: 0.8,paddingHorizontal:'7%',paddingVertical:'6%',
         elevation: 5,position:'absolute',width:'100%',top:0,
         
         }}>
     <Transactions />
    </View>
  </Modal>  
  )
}

export default TransactionModal