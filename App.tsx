/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="red" />
      <Text>App</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
