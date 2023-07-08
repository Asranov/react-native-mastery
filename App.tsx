import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SimpleStatusBar from './src/components/SimpleStatusBar';
import Header from './src/components/WritingPlatformSpecificCode/Headers/Header.android';
import PlatformModule from './src/components/WritingPlatformSpecificCode/PlatformModule';
import stylesGlobal from "./src/styles/styles.native"

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <SimpleStatusBar />
      <Text style={stylesGlobal.globalText}>Global text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
