import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';


const image = require('./Homepage.png');

export default function Home(){
    return (
        <View style={style.viewback}> 
        <ImageBackground source={ image } style={style.background}>
          
        </ImageBackground>
    </View>
    );

}

const style = StyleSheet.create({              
        viewback:{

        flex: 1,
        flexDirection: "column",
    
    },
    
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    
    },
    
    
    
    });
    
