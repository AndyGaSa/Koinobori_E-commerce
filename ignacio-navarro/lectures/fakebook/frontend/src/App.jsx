import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import Header from './components/Header';
import configureStore from './redux/store';
import Login from './pages/Login';
import People from './pages/People';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          {isAuthenticated
            ? (
              <Route render={() => (
                <div className="App">
                  <Header />
                  <main>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/home" component={Home} />
                      <Route path="/people" component={People} />
                    </Switch>
                  </main>
                </div>
              )}
              />
            )
            : <Route path="/" exact component={Login} />}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
