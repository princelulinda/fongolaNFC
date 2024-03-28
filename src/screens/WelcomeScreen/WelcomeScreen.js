import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreen({navigation}) {
  return (
      <LinearGradient
        colors={[  '#18329c',
        '#18329c',
        '#5c2cad',
        '#7724b3',
        '#9212b7']}
        style={[styles.background]} 
        start={{ x: 0.4, y: 0.4}} 
        end={{ x: 0, y: 0}} 
        children={
        <View style={styles.container}>
        <View style={styles.container}>
            <Text style={{fontSize:17, color:"white"}}>Welcome in</Text>
            <Image source={require("../../../assets/logo.png")} style={styles.image} />
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
                <Text style={{color:"white"}}>Get Started</Text>
            </TouchableOpacity>
        </View>
        </View>
        } 
        />
   
  )
}
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width:200,
        height:200,
        resizeMode:"contain",
        marginTop:-70
    },
    button:{
        borderRadius:10,
        padding:10,
        width:200,
        alignItems:"center",
        textAlign:"center",
        fontSize:15,
        color:"white",
        marginTop:10,
        borderStyle:"solid",
        borderColor:"white",
        borderWidth:1,
        marginBottom:20

    }
})