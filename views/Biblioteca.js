import React from 'react';
import {ImageBackground, View,Text} from "react-native";
import { css } from '../assets/css/Css';



const image = require('../assets/img/Homepage.png');

export default function Biblioteca(){

    return(
        <View style={css.viewback}>
           <ImageBackground source={ image } style={css.background}>
           </ImageBackground>
           <Text>testando</Text>
        </View>
    );

};
