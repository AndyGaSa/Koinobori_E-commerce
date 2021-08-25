import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import configureStore from './redux/store';
import ListOfGnomes from './components/List/ListOfGnomes';
import GnomeDetail from './components/GnomeDetail/GnomeDetail';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <Provider store={configureStore()}>
      <h1>The Gnome Network</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ListOfGnomes} />
          <Redirect path="/gnomes" to="/" />
          <Route path="/details/:gnome_id" component={GnomeDetail} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
