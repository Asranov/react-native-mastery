import React, { useEffect, useState } from 'react'
import { Button, Text } from 'react-native'

function UseEffectHook() {
  const [count, setCount] = useState(0)
  const [isVissible, setIsVissible] = useState(false)

  const inc = () => {
    setCount(count + 1)
  }

  const toggle = () => {
    setIsVissible(!isVissible)
  }

  useEffect(() => {
    console.log("inc func worked");
  }, [isVissible])

  return (
    <>
      <Button title='Click' onPress={inc} />
      <Button title='Toggle' onPress={toggle} />
      <Text>{count}</Text>
      {isVissible ? (
        <>
          <Text>True</Text>
        </>
      ) :
        <>
          <Text>False</Text>
        </>
      }
    </>
  )
}

export default UseEffectHook