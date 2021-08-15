/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import { fetchUserAccount } from '../redux/actions';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import FavSites from './FavSites';

function MainPage() {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  if (isAuthenticated) {
    console.log(`Usuario ${user.name} autentificado`);
    useEffect(() => {
      dispatch(fetchUserAccount(user));
    }, []);
    console.log('Contenido de user en store');
  }

  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Redirect path="/main" to="/" />
        <Route path="/favsites" component={FavSites} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default MainPage;
