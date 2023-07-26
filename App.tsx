import React from 'react';
import { TextInput, Text, View } from "react-native"
import { useInput } from './src/hooks/CustomHooks/useInput';


function App(): JSX.Element {
  const { value, handleChange, sum } = useInput({ a: 2, b: 3 })

  return (
    <View>
      <Text>Value: {value}</Text>
      <TextInput
        value={value}
        onChangeText={(value) => handleChange(value)}
      />
      <Text>Sum of a and b: {sum()}</Text>
    </View>
  );
}

export default App;
