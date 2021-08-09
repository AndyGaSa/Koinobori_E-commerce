import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Cameras from './pages/Cameras';
import Details from './pages/Details';
import Notfound from './pages/NotFound';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Redirect path="/dashboard" to="/" />
          <Route path="/cameras" component={Cameras} />
          <Route path="/details/:cameraId" component={Details} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
