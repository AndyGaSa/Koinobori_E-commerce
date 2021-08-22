import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';

import configureStore from './redux/store';
import Lista from './components/Lista';
import Details from './components/Detail';
import Header from './components/Header';
import loadGnomos from './redux/accions/actionCreator';

function App() {
  const [searchGnomo, setSearchGnomo] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGnomos());
  }, []);

  console.log(`appppppp${searchGnomo}`);

  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header setSearchGnomo={() => setSearchGnomo()} />
        <Switch>
          <Route path="/" exact component={() => <Lista searchGnomo={searchGnomo} />} />
          <Redirect path="/lista" to="/" />
          <Route path="/details/:gnomoId" component={Details} />
        </Switch>
      </BrowserRouter>

    </Provider>
  );
}

export default App;
