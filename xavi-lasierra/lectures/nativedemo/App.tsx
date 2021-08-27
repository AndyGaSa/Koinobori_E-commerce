/* eslint-disable max-len */
import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

import { Provider } from 'react-redux';

import TopBar from './src/components/TopBar/TopBar';
import ToDosList from './src/pages/ToDosList/ToDosList';

import configureStore from './src/redux/store';

export default function App() {
  return (
    <Provider store={configureStore()}>
      <SafeAreaView>
        <StatusBar barStyle="light-content" />
        <TopBar />
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={0.5}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders
          style={{
            backgroundColor: 'red',
            minHeight: 1000
          }}
        >

          <ToDosList />
        </ReactNativeZoomableView>

      </SafeAreaView>
    </Provider>
  );
}
