import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';




export default function Header(){
    return(
        <SafeAreaView>
            <View style={styles.header}>
        
            </View>
        </SafeAreaView>

    );
}
 

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#fff'

    }
});


