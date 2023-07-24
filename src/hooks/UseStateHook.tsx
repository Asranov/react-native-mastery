import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Text, View } from 'react-native'

function UseStateHook() {
  const [randomNumber, setRandomNumber] = useState(0)

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100)
    setRandomNumber(random)
  }

  return (
    <View>
      <Text>{randomNumber}</Text>
      <Button title='Generate random' onPress={generateRandomNumber} />
    </View>
  )
}

export default UseStateHook