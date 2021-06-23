import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Header from './header';
import List from '../ScrollList/list'





const image = require('./Homepage.png');

export default function Home(){
    return (

    <List>  
 <Header> 
 <View style={style.viewback}> 
   <ImageBackground source={ image } style={style.background}>
   
    </ImageBackground>  
   </View>
  </Header>
  </List>  
  
  

 

   
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
    
