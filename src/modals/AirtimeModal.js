import { View, Text,Modal, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker'


const networkList = ['Mtn','Glo','Airtel','9mobile']

const AirtimeModal = ({showModal,hideModal}) => {
    const [network, selectNetwork] = useState(networkList[0]);
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
     
     <Picker
        selectedValue={network}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => selectNetwork(itemValue)}
      >
        {networkList.map((state, index) => (
          <Picker.Item label={networkList} value={networkList} key={index} />
        ))}
      </Picker>

      <Text>Hi</Text>

    </View>
  </Modal>  
  )
}

export default AirtimeModal