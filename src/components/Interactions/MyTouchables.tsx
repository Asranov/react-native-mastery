import React from 'react'
import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

function MyTouchables() {
  return (
    <View>
      <TouchableOpacity>
        <Text>Touchable opacity</Text>
      </TouchableOpacity>

      <TouchableHighlight>
        <Text>Touchable highlight</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback>
        <Text>Tap me</Text>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default MyTouchables