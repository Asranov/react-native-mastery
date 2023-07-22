import React, { useEffect, useState } from 'react'
import { Text, Button } from "react-native"

function Test() {
  const [someValue, setSomeValue] = useState(20)
  const [count, setCount] = useState(0);

  useEffect(() => {
    (() => {
      console.log("Some value:", someValue);
    })()
  }, [count])

  const handleInc = () => {
    setCount(count + 1)
  }


  useEffect(() => {
    console.log('Component mounted.');
    setSomeValue(10)
  }, [count]);

  console.log(count)

  return (
    <>
      <Text>{someValue}</Text>
      <Button title="Inc" onPress={handleInc} />
    </>
  )
}

export default Test