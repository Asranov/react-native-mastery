import React from 'react'
import { StatusBar, View } from "react-native"

function SimpleStatusBar() {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} backgroundColor="#F0F0F0" />
    </View>
  )
}

export default SimpleStatusBar