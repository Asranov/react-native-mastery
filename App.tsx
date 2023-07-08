import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleStatusBar from './src/components/SimpleStatusBar';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleStatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
