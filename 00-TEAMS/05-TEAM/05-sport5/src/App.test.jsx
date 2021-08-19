import React from 'react';
import { render } from './utils/test.utils';
import App from './App';

describe('Given an App component', () => {
  test('Then it renders without crashing', () => {
    render(<App />);
  });
});
