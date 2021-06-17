import React from 'react';
import {ImageBackground, View} from "react-native";
import {css} from '../assets/css/Css'

const image = require("../assets/Img/Homepage.png")

export default function Home(){
    return(
        
    <View style={css.viewback}> 
        <ImageBackground source={ image } style={css.background}>
          
        </ImageBackground>
    </View>
    );

};