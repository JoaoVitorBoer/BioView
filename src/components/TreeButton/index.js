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
        ? ['#fff', '#fff' ]
        : [ '#2CB039','#97DC25']
  }
      
     start={[1, 0.2]}
    >
      <FontAwesome5 
      name="tree" 
      size={35} 
      color={focused ? '#2CB039' : '#fff'}
      
       />
     

    </Button>
  </TouchableWithoutFeedback>
 
  );
}