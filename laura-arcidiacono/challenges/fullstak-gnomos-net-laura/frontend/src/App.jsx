/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import MainContainer from './components/mainContainer/MainContainer';
import Footer from './components/footer/Footer';
import configureStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <MainContainer />
      <Footer />
    </Provider>
  );
}

export default App;
