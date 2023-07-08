import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

function SimpleActivityIndicator() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Loading, please wait...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default SimpleActivityIndicator