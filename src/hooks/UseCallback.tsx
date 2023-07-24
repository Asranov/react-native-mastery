import React, { useCallback, useEffect, useState } from 'react'
import { Button, Text } from 'react-native'

function UseCallback() {
  const [count, setCount] = useState(0)
  const [isTest, setIsTest] = useState(false)

  const increment = useCallback(() => {
    setCount(count + 1)
  }, [isTest])

  const toggle = useCallback(() => {
    setIsTest(!isTest)
  }, [isTest])

  useEffect(() => {
    console.log("useEffect worked")
  }, [count, isTest])

  console.log(isTest)
  return (
    <>
      <Text>{count}</Text>
      <Button title='Click' onPress={increment} />
      <Button title='Toggle' onPress={toggle} />

    </>
  )
}

export default UseCallback