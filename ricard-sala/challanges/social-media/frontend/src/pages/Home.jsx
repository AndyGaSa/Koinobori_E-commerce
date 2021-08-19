import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Dashboard from '../components/dashboard/Dashboard';
import FriendsList from '../components/friendsList/FriendsList';

export default function Home() {
  return (
    <Provider store={configureStore()}>
      <Dashboard />
      <FriendsList />
    </Provider>
  );
}
