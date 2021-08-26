/* eslint-disable react/prop-types */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
import Header from './src/components/Header/Header';

const App = () => (
  <SafeAreaView>
    <StatusBar />
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View>
        <Header />
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default App;
