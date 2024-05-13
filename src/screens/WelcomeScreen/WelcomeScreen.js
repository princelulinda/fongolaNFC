import { View, Text, StyleSheet,Image, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreen({navigation}) {
  return (
    //   <LinearGradient
    //     colors={[  '#18329c',
    //     '#18329c',
    //     '#5c2cad',
    //     '#7724b3',
    //     '#9212b7']}
    //     style={[styles.background]} 
    //     start={{ x: 0.4, y: 0.4}} 
    //     end={{ x: 0, y: 0}} 
    //     children={
        <View style={styles.container}>
        <View style={{width:"100%", justifyContent:"center", alignItems:"center"}} >
            <Text style={{fontSize:20, color:"white", textAlign:"center", fontWeight:"100"}}>Welcome in</Text>
            <View style={{flexDirection:"row", justifyContent:"center",gap:10}}>
                <View>
                     <Image source={require("../../../assets/card.png")} style={styles.icon}/>
                </View>
                      <Image source={require("../../../assets/logo.png")} style={styles.image} />
            </View>
        </View>
        <View>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Home")}>
                <Text style={{color:"white", fontWeight:"bold"}}>Get Started</Text>
            </TouchableOpacity>
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
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container:{
        flex:1,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:200,
        height:200,
        resizeMode:"contain",
        marginTop:-70
    },
    button:{
        borderRadius:10,
        padding:15,
        width:240,
        alignItems:"center",
        textAlign:"center",
        fontSize:15,
        // color:"white",
        marginTop:10,
        borderStyle:"solid",
        borderColor:"white",
        borderWidth:1,
        marginBottom:"100%",

    },
    icon:{
        height:50,
        width:50,
        marginTop:10,
    }
})