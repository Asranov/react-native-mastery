import React from 'react'
import { Alert, Button } from "react-native"

function SimpleButton() {
  const onPressHandler = () => {
    Alert.alert("Button clicked")
  }
  return (
    <>
      <Button
        title='Click me'
        onPress={onPressHandler}
      />
    </>
  )
}

export default SimpleButton