import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleModal from './src/components/SimpleModal';
import SimplePressable from './src/components/SimplePressable';
import SimpleStatusBar from './src/components/SimpleStatusBar';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleStatusBar />
      <SimpleModal />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
