import React from 'react'
import { Pressable, Text } from 'react-native'

function SimplePressable() {
  return (
    <Pressable onPress={() => console.log("Pressed!")}>
      <Text>Press me</Text>
    </Pressable>
  )
}

export default SimplePressable