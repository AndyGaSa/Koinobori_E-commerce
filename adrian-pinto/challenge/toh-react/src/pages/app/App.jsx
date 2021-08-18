/* eslint-disable no-unused-vars */
import React, { ReactDOM } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import List from '../list/list';

const App = () => (
  <Router>
    <nav>
      <button type="button">
        <Link to="/">Dashboard</Link>
      </button>
      <button type="button">
        <Link to="/list">List</Link>
      </button>
    </nav>

    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/list">
        <List />
      </Route>
    </Switch>
  </Router>
);

export default App;
