import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Transactions from '../components/Transactions'
import { Modal } from 'react-native-paper'

const TransactionModal = ({showModal,hideModal}) => {
  return (
    <Modal
  visible={showModal}
  onDismiss={hideModal}
      contentContainerStyle = {{backgroundColor: 'white',width:'80%',height:'60%', marginHorizontal:'10%'}}
  >
    <View style={{
         height:'100%', borderRadius:10,
         shadowOpacity: 0.8,paddingHorizontal:'7%',paddingVertical:'6%',
        position:'absolute',width:'100%',top:0,
         
         }}>
     <Transactions />
    </View>
  </Modal>  
  )
}

export default TransactionModal