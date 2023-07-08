import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native';


function MyButton() {
  return (
    <TouchableWithoutFeedback onPress={() => console.log('Button pressed')}>
      <Text>Press me!</Text>
    </TouchableWithoutFeedback>
  )
}

export default MyButton