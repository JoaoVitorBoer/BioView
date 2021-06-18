import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Header from './header';



const image = require('./Homepage.png');

export default function Home(){
    return (
    
 <ImageBackground source={ image } style={style.background}>
   <View style={style.viewback}>    
    <Header>                  
    </Header>
  </View>
 </ImageBackground>

   
    );

}







const style = StyleSheet.create({              
        viewback:{

        flex: 1,
        flexDirection: "column",
        marginBottom: 1

    
    },
    
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        
        
    
    },
    
    
    
    });
    
