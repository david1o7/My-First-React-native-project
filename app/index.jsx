import { View, Text , StyleSheet , ImageBackground , Pressable} from 'react-native'
import React from 'react'

import Basketballer1 from "@/assets/images/bb1.jpg"
import { Link } from 'expo-router'

const app  = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground 
      source={Basketballer1}
      resizeMode='cover'
      style={styles.image}
          >

        <Text style = {styles.text}> Basket ball</Text>
        <Text style = {[styles.lilText , { color : "#0d3970"}]}> Stars</Text>
        <Link href="/explore" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style ={styles.button}>
          <Text style = {styles.buttontext}>Contact Us</Text>
        </Pressable>
        </Link>

        <Link href="/menu" style = {{ marginHorizontal : 'auto'}} asChild>
        <Pressable style ={styles.button}>
          <Text style = {styles.buttontext}>Merch</Text>
        </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app 

const styles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
  },
  text : {
    color : '#000',
    fontSize : 42,
    fontWeight : 'bold',
    textAlign : 'center',
  },
   lilText : {
    fontSize : 42,
    fontWeight : 'bold',
    textAlign : 'center',
    marginBottom : 120,
  },
  image : {
    width : '100%',
    height : '100%',
    flex : 1,
    resizeMode : 'cover',
    justifyContent : 'center',
  },
  link : {
    color : '#333',
    width : "50%",
    fontSize : 42,
    fontWeight : 'bold',
    textAlign : 'center',
    backgroundColor : "white",
    borderWidth : 1,
    borderRadius : "15px",
    borderColor : "#333" ,
  },
  button : {
    height : 60,
    width : 150,
    borderRadius : 20,
    backgroundColor : 'rgab(0,0,0,0.75)',
    padding : "10px",
    borderWidth : 2,
    borderColor : "#ccc",
    backgroundColor : "#fff",
    justifyContent : "center",
    marginBottom : 50,
  },
  buttontext: {
    fontSize : 16,
    fontWeight : 'bold',
    textAlign : 'center',
  },
})