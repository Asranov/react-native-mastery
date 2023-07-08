import React, { useState } from 'react'
import { View, Switch, Text } from "react-native"

function SimpleSwitch() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false)

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }

  return (
    <View>
      <Text>Enable Feature:</Text>
      <Switch
        trackColor={{ false: "#7767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  )
}

export default SimpleSwitch