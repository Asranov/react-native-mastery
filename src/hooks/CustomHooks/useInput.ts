import { useState } from 'react';

interface UseInput {
  a: number,
  b: number
}

export const useInput = (props: UseInput) => {
  const [value, setValue] = useState("")

  const handleChange = (value: string) => {
    setValue(value)
  }

  const sum = () => {
    return props.a + props.b
  }

  return { value, handleChange, sum }
}