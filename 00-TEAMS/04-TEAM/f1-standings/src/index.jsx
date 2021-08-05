import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/store';
import GetDrivers from './pages/Drivers';
import DetailsDriver from './components/Details-drivers/Details.drivers';
import ListDriver from './components/List/List-driver';
import ListConstructor from './components/List-constructor/List-constructor';
import DetailsConstructor from './components/Details-constructor/Details.constructor';
import ChartContainer from './components/Charts/Chart';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH0_CLIENTID}
        redirectUri={window.location.origin}
      >
        <GetDrivers />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ListDriver} />
            <Route path="/constructorList" component={ListConstructor} />
            <Route path="/driverDetails/:driverId" component={DetailsDriver} />
            <Route path="/constructorDetails/:constructorId" component={DetailsConstructor} />
            <Route path="/ChartContainer" component={ChartContainer} />
          </Switch>
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
