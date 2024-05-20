import { View, Text, StyleSheet,Image, Button, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
// import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreen({navigation}) {

    setTimeout(() => {
        navigation.navigate("Home")
    },100);

  return (
        <View style={styles.container}>
        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}} >
            <Text style={{fontSize:20, color:"white", textAlign:"center", fontWeight:"100"}}>Welcome in</Text>
            <View style={{flexDirection:"row", justifyContent:"center",gap:10}}>
                <View>
                </View>
                      <Image source={require("../../../assets/logo.png")} style={styles.image} />
            </View>
        </View>
        <View>
          <ActivityIndicator/>
        </View>
        <Text style={{color:"#ddd", fontSize:12, marginBottom:"-50%", fontWeight:"300"}}>
            created by FongoLab
        </Text>
        </View>
        // } 
        // />
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#1a2a3c"
    },
    image:{
        width:200,
        height:200,
        resizeMode:"contain",
        marginTop:-70,
        marginBottom:"100%"
    },
})