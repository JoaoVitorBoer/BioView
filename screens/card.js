import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';



const Cards = ()=>(
  <Card style={styles.box}>
    
    <Card.Content>
      <Title style={styles.title}> ÁRVORE 1</Title>
      
    </Card.Content>
    
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  title: {
      padding: 5,
      textAlign: "center",
  },
   
  box: {
      display: 'flex',
      
      width: 150,
      height: 300.24,
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'absolute',
      alignItems: "center",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 6,
      shadowOpacity: 0.26,
      elevation: 8,
      backgroundColor: 'white',
      padding: 100, 
      borderRadius: 10

  
    }



})

export default Cards;