import React from 'react';
import Dashboard from '../dashboard/dashboard';
import Header from '../../modules/Header';
import Details from '../details/Details';

const App = () => (
  <>
    <Header />
    <Dashboard test="StringValue" />
    <Details />
  </>
);

export default App;
