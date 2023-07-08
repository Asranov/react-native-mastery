/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleTextInput from './src/components/SimpleTextInput';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleTextInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
