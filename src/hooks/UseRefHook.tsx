import React, { useRef } from 'react'
import { Button, TextInput } from 'react-native'

function UseRefHook() {
  const inputRef: any = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <TextInput ref={inputRef} />
      <Button title='Focus Input' onPress={handleFocus} />
    </>
  )
}

export default UseRefHook