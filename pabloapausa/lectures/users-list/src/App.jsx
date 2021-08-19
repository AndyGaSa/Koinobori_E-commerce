import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import Usernames from './pages/usernames/Usernames';
import Details from './pages/details/Details';

function App() {
  return (
    <Provider store={configureStore()}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Usernames} />
          <Route path="/Users" component={Usernames} />
          <Route path="/Details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
