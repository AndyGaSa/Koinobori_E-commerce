import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/header/Header';
import MainContainer from './components/mainContainer/MainContainer';

function App() {
  return (
    <Provider store={configureStore()}>
      <Header />
      <MainContainer />
    </Provider>

  );
}

export default App;
