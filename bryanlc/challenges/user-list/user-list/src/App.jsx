import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch
} from 'react-router-dom';

import configureStore from './redux/store';
import Lista from './components/dashboard/Lista';
import Detail from './components/detail/Detail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Lista} />
            <Redirect path="/Lista" to="/" />
            <Route path="/detail/:heroId" component={Detail} />
          </Switch>
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
