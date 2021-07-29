import React from 'react';
import { Provider } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import configureStore from '../redux/store';
import './index.css';

export default function Index() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}
