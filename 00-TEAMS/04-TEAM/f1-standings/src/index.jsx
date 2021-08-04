import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Redirect, Switch
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import GetDrivers from './pages/Drivers';
import DetailsConstructor from './components/Details-constructor/Details.constructor';
import DetailsDriver from './components/Details-drivers/Details.drivers';
import ListDriver from './components/List/List-driver';
import ListConstructor from './components/List/List-constructor';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <GetDrivers />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ListDriver} />
          <Redirect path="/listdriver" to="/" />
          <Route path="/detailsDriver/:driverId" component={DetailsDriver} />
          <Route path="/detailsConstructor/:constructorId" component={DetailsConstructor} />
          <ListConstructor />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
