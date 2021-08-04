import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import GetDrivers from './pages/Drivers';
import DetailsDriver from './components/Details-drivers/Details.drivers';
import ListDriver from './components/List/List-driver';
import ListConstructor from './components/List-constructor/List-constructor';
import DetailsConstructor from './components/Details-constructor/Details.constructor';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <GetDrivers />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ListDriver} />
          <Route path="/constructorList" component={ListConstructor} />
          <Route path="/driverDetails/:driverId" component={DetailsDriver} />
          <Route path="/constructorDetails/:constructorId" component={DetailsConstructor} />
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
