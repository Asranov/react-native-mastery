import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function SimpleView() {

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
    justifyContent: "center"
  }
})

export default SimpleView