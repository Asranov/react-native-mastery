import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

function PlatformModule() {
  if (Platform.OS === 'ios') {
    console.log("Running on iOS");
  } else if (Platform.OS === "android") {
    console.log("Running os Android")
  }
  return (
    <View style={styles.container}>
      <Text>TEST</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        backgroundColor: "green"
      },
      android: {
        backgroundColor: "red"
      }
    })
  }
})

export default PlatformModule