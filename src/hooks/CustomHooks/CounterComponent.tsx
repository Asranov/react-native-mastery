import React from 'react'
import { Button, Text, View } from 'react-native';
import UseCounter from './UseCounter'


const CounterComponent: React.FC = () => {
  const { count, increment, decrement } = UseCounter();

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title='Inc' onPress={increment} />
      <Button title='Dec' onPress={decrement} />
    </View>
  )
}

export default CounterComponent