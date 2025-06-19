import { View, Text, StyleSheet , ImageBackground } from 'react-native'
import React from 'react'

import Basketballer2 from "@/assets/images/bb2.jpg"

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
            source={Basketballer2}
            resizeMode='cover'
            style={styles.image}
                >
              <View style = {{ marginBottom : 120}}>
                <Text style = {styles.text}> YOU CAN CONTACT US THROUGH THE FOLLOWING WAYS... </Text>
              </View>
                <View style={styles.contain}>
              <View style = {styles.infoContain}>
                <Text style = {{ textAlign : "center"}}>
                  Phone : +234 90 567 010 67
                </Text>
              </View>
              <View style = {styles.infoContain}>
                <Text style={{ textAlign: "center"}}>
                  Email : nbaBasketBallStars@gmail.com
                </Text>
              </View>
                </View>
            </ImageBackground>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
    container : {
    flex : 1,
    flexDirection : 'column',
    position : "relative",
  },
  contain :{
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
  },
  text : {
    height : "auto",
    width: "100%",
    position: "absolute",
    backgroundColor: "#333",
    color : '#fff',
    fontSize : 15,
    fontWeight : 'bold',
    textAlign : 'center',
    justifyContent : "center",
    top : '20px',

  },
  image : {
    width : '100%',
    height : '100%',
    flex : 1,
    resizeMode : 'cover',
    justifyContent : 'center',
  },
  infoContain : {
    height : "20%",
    width: "100%", 
    textAlign:"center",
    padding: "5%" ,
    justifyContent : "center",
    borderWidth : 2 ,
    borderColor : "#333",
    backgroundColor: "#fff",
    borderRadius : "20px",
    marginBottom : 10,
  },

})