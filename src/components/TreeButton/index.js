import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native';

import { Button, Label } from './styles';


export default function TreeButton({ onPress, focused }) {
  return(
  <TouchableWithoutFeedback onPress={ onPress }>
    <Button
     colors={
      focused
        ? ['#fff', '#ccc']
        : ['#2CB039', '#123922']
  }
      
     start={[1, 0.2]}
    >
      <FontAwesome5 
      name="tree" 
      size={30} 
      color={focused ? '#000' : '#fff'}
       />
      <Label focused >Home</Label>

    </Button>
  </TouchableWithoutFeedback>
 
  );
}