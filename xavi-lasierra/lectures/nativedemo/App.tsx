import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      />
    </SafeAreaView>
  );
}
