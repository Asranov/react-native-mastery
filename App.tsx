import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MyAnimatedComponent from './src/components/Interactions/MyAnimatedComponent';
import MyAnimation from './src/components/Interactions/MyAnimation';
import SimpleStatusBar from './src/components/SimpleStatusBar';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleStatusBar />
      <MyAnimation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
