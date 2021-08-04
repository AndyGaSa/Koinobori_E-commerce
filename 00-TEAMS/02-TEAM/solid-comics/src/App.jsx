// import React, { useEffect } from 'react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import configureStore from './redux/store';
import ComicList from './page/ComicList';
import Header from './components/header/Header';
import NotFound from './page/NotFound';
import Profile from './page/Profile';
import Battle from './page/Battle';
import Login from './page/Login';
import Footer from './components/footer/Footer';
import Detail from './page/Detail';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route render={() => (
            <>
              <Header />
              <Switch>
                <Route path="/comic-list" component={ComicList} />
                <Route path="/profile" component={Profile} />
                <Route path="/battle" component={Battle} />
                <Route path="/login" component={Login} />
                <Route path="/details/:comic" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </>
          )}
          />

        </Switch>
        <Footer />
      </BrowserRouter>

    </Provider>

  );
}

export default App;
