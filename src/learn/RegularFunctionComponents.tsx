import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function RegularFunctionComponent() {
  const handleClick = function () {
    console.log('Regular function clicked');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick} style={styles.button}>
        <Text style={styles.text}>Click me (Regular Function)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default RegularFunctionComponent;
