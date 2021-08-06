import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';

import { Auth0Provider } from '@auth0/auth0-react';
import configureStore from './redux/store';
import Dashboard from './components/main/dashboard/Dashboard';
import Details from './components/main/details/Details';
import Profile from './components/main/profile/Profile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import notFound from './components/notFound/notFound';

function App() {
  return (
    <Provider store={configureStore()}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID}
        redirectUri={window.location.origin}
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Redirect path="/dashboard" to="/" />
            <Route path="/details/:track_id" component={Details} />
            <Route path="/profile" component={Profile} />
            <Route component={notFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
