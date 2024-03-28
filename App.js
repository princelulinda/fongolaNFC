import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import NavigationScreen from './src/navigation/NavigationScreen';
import Onbording from './src/screens/Onbording/Onbording';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import NFCScreen from './src/component/test';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';



// NfcManager.start();
const Stack = createStackNavigator()
function App() {
  return (

<NavigationScreen/>
  );
}
export default App;




// 