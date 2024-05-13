import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
// import Onbording from '../screens/Onbording/Onbording'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const NavigationScreen = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      {/* <Stack.Screen name="Onbording" component={Onbording} options={{headerShown:false}}/> */}
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default NavigationScreen

