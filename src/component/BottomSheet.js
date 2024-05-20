import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import RBSheet from 'react-native-raw-bottom-sheet'
import LottieView from 'lottie-react-native'
// import Lottie from 'react-lottie-player'
// import LinearGradient from 'react-native-linear-gradient'
import NFCScanner from './test'


const BottomSheet = ({refRBSheet}) => {
  return (
    <RBSheet
    ref={refRBSheet}
    useNativeDriver={true}
    customStyles={{
      wrapper: {
        backgroundColor: 'transparent',
      },
      draggableIcon: {
        backgroundColor: '#000',
      },
      container:{
        backgroundColor:"#1a2a3c",
        borderTopEndRadius:20,
        borderTopStartRadius:20,
        height:"40%"
      }
    }}
    customModalProps={{
      animationType: 'slide',
      statusBarTranslucent: true,
    }}
    customAvoidingViewProps={{
      enabled: false,
    }}
    children={
      <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
              <LottieView source={require("../../assets/lottie/scanAnimation.json")} style={{height:200, width:200}}
              autoPlay
              loop
              />
              <Text style={styles.title}>Placer la carte derrier télephone pour scanner...</Text>
      <Pressable style={styles.button}>
           <Text>Cancel</Text>
      </Pressable>
      <NFCScanner/>
      </View>
    }
>
  </RBSheet>
  )
}
const styles = StyleSheet.create({
    scanAnimation: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#18329c',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
    }
    ,
    title: {
      fontSize: 12,
      marginBottom: 20,
      width:200,
      textAlign:"center"
    },
    button:{
        borderStyle:"solid", borderWidth:1  , borderColor:"#ddd",
     borderRadius:10, padding:10, alignItems: 'center', justifyContent: 'center',
     width: 150, color: '#ddd', marginTop: 10,
    },
    contener: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
     image: {
       width: 350,
       height: 400,
       resizeMode: 'contain',
       marginTop: -70
     }
    });
export default BottomSheet