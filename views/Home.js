import React from 'react';
import {ImageBackground, View, Image, TouchableOpacity} from "react-native";
import {css} from '../assets/css/Css'

const image = require('../assets/img/Homepage.png');

export default function Home(){
    return(
        
    <View style={css.viewback}> 
        <ImageBackground source={ image } style={css.background}>
          
        </ImageBackground>
    </View>
    );

};
