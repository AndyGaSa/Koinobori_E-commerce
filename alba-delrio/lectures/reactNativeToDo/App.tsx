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
import { Provider } from 'react-redux';
import Header from './src/components/Header/Header';
import ListToDo from './src/components/ListToDo/ListTodo';
import configureStore from './src/redux/store';

const App = () => (
  <Provider store={configureStore()}>
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Header />
          <ListToDo />
        </View>
      </ScrollView>
    </SafeAreaView>
  </Provider>
);

export default App;
