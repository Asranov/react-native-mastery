import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleRefreshControl from './src/components/SimpleRefreshControl';
import SimpleScrollView from './src/components/SimpleScrollView';
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
