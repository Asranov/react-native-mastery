import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ArrowFunctionComponent = () => {
  const handleClick = () => {
    console.log('Arrow function clicked');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.text}>Click me (Arrow Function)</Text>
        <Text>This is a Arrow Function</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default ArrowFunctionComponent;
