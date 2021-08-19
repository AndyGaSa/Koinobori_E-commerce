/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Notification from './components/notification/Notification';
import Login from './components/login/Login';
import Header from './components/header/Header';
import MainContainer from './components/mainContainer/MainContainer';
import Details from './components/details/Details';
import NotFound from './components/notFound/NotFound';
import Footer from './components/footer/Footer';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Notification />
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={MainContainer} />
          <Route path="/details/:userId" component={Details} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
