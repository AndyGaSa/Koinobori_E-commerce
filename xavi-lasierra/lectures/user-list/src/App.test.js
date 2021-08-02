/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Given an App component', () => {
  test('Then should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
