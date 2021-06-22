import React from 'react';
import { View, SafeAreaView, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';



export default function Header(){
    return(
        <SafeAreaView>
            <View style={styles.header}>
                <Image
                source={require('./Header.png')}
                style={{width: 200, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 115, marginTop: 10}}
                />

            </View>
        </SafeAreaView>

    );
}
 

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fff'

    }
});

