import React from 'react';
import { ImageBackground, StyleSheet, View } from "react-native";
import Cards from './screens/card';


const image = require('./Images/homepage.png');


export default function App() {
  return (
     
 <ImageBackground source={ image } style={styles.image}>
  <View style={styles.container}>
    <Cards>  
      
      
      
    </Cards>
  </View>
</ImageBackground>
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



