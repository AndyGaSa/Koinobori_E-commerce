// import React, { useEffect } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';
import Test01 from './page/test1';

import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Test01 />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
