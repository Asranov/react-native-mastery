import React, { useState } from 'react'
import { TextInput, View, Button, Alert } from "react-native"

function SimpleTextInput() {
  const [text, setText] = useState<string>("")

  const handleSubmit = () => {
    Alert.alert(`You entered: ${text}`)
  }

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Enter text here"
      />
      <Button
        title='Submit'
        onPress={handleSubmit}
      />
    </View>
  )
}

export default SimpleTextInput