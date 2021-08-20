import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard/Dashboard';
import configureStore from './redux/store';
import Header from './components/Header/Header';
import Myprofile from './pages/myprofile/Myprofile';
import Register from './components/Register/Register';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={Myprofile} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
