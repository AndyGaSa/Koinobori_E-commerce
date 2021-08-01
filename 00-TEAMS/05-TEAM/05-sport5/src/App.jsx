import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './redux/store';
import Header from './components/Header';
import LeaguesList from './pages/LeaguesList/LeaguesList';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={LeaguesList} />

        </Switch>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
