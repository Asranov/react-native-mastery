import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SimpleFetch from './src/components/Networking/SimpleFetch';
import SimpleStatusBar from './src/components/SimpleStatusBar';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleStatusBar />
      <SimpleFetch />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
