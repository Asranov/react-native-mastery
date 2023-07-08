import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SimpleStatusBar from './src/components/SimpleStatusBar';
import SimpleStyling from './src/components/Styling/SimpleStyling';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleStatusBar />
      <SimpleStyling />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
