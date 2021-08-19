import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/header/Header';
import MainContainer from './components/mainContainer/MainContainer';
import Footer from './components/footer/Footer';

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
