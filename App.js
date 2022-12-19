import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Start} from './src/screens';
const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Start size="32" onChangeSize={() => {}} />
    </SafeAreaView>
  );
};

export default App;
