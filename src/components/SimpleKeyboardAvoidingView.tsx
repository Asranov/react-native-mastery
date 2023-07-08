import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native'

function SimpleKeyboardAvoidingView() {
  const [value, setValue] = useState<string>("")

  const handleChange = () => {
    setValue(value)
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      style={styles.container}
    >
      <TextInput
        placeholder='Type something here'
        value={value}
        style={styles.textInput}
        onChangeText={text => setValue(text)}
      />
      <Text>{value}</Text>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 20,
  },
})
export default SimpleKeyboardAvoidingView