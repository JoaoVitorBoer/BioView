import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Header from './header';
import List from '../ScrollList/list'





const image = require('./Homepage.png');

export default function Home(){
    return (

<List>  
  <View style={style.viewback}> 
     <ImageBackground source={ image } style={style.background}>
       
     </ImageBackground>  
  </View>
</List>  
  
  

 

   
    );

}







const style = StyleSheet.create({              
        viewback:{

        flex: 1,
        flexDirection: "column",
<<<<<<< HEAD
        marginBottom: 2
=======
        marginBottom: 1

>>>>>>> CardBranch
    
    },
    
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        
        
    
    },
    
    
    
    });
    
