import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import ListOfGnomes from './components/ListOfGnomes';

function App() {
  return (
    <Provider store={configureStore()}>
      <ListOfGnomes />
    </Provider>
  );
}

export default App;
