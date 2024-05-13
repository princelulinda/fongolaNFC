// import { LinearGradient } from 'expo-linear-gradient';
// import LottieView from 'lottie-react-native';
import React, {useEffect, useRef, useState} from 'react';
import {View, Button, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native';
// import BottomSheet from '../../component/BottomSheet';
// import Sound from '../../component/Sounds';
// import { Audio } from 'expo-av';

const HomeScreen= () => {
  // const refRBSheet = useRef();
  // const [sound, setSound] = useState();
  // async function playSound() {

  //   const { sound } = await Audio.Sound.createAsync( require('../../../assets/sounds/short-success-sound.mp3')
  //   );
  //   setSound(sound);
  //   await sound.playAsync();
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    <View style={styles.contener}>
        <Image source={require('../../../assets/homescan.png')} style={styles.image}/>
      <TouchableOpacity 
        style={styles.button}
        // onPress={() =>{
        //   /
        // }}
      >
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>scan card</Text>
      </TouchableOpacity>
      {/* <BottomSheet refRBSheet={refRBSheet} /> */}
    </View>
  );

};

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
button:{
    borderStyle:"solid", borderWidth:1  , borderColor:"#0b22e6",
 borderRadius:10, padding:10, alignItems: 'center', justifyContent: 'center',
 width: 150, color: '#0b22e6', marginTop: 60,
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

export default HomeScreen;