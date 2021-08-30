import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';

import configureStore from './redux/store';
import Lista from './components/Lista';
import Details from './components/Detail';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Lista} />
          <Redirect path="/lista" to="/" />
          <Route path="/details/:gnomoId" component={Details} />
        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
