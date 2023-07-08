import React from 'react'
import { StyleSheet, Text, View } from "react-native"

function SimpleStyling() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Container 1</Text>
      </View>
      <View>
        <Text>Container 2</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
})

export default SimpleStyling