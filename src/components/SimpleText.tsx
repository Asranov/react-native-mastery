import React from 'react'
import { Text, StyleSheet, Alert } from "react-native"


interface SimpleTextProps {
  text?: string
}

function SimpleText({ text }: SimpleTextProps) {
  text = text || "This is an example of a Text component in React Native.Tap on me!"
  return (
    <Text style={styles.text} numberOfLines={1} onPress={() => Alert.alert('Hello')}>
      {text}
    </Text >
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "blue",
    textAlign: "center",
    margin: 10,
    fontFamily: "Arial"
  }
})

export default SimpleText