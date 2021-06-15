import React from 'react';
import { ImageBackground, StyleSheet, View } from "react-native";
import { Button } from 'react-native-paper';



const image = require('./Images/homepage.png');



export default function App() {
  return (
     
  <View style={styles.container}>
    <ImageBackground source={ image } style={styles.image}> 
    <Button icon='camera' mode='contained' onPress={()=>{}} >
      
    </Button>
    
    </ImageBackground>
  </View>
         
);
}

















const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "column"
   },
   
   image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
    
    },

         
});



