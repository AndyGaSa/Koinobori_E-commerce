import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Dashboard from '../components/dashboard/Dashboard';

export default function Home() {
  return (
    <Provider store={configureStore()}>
      <Dashboard />
    </Provider>
  );
}
