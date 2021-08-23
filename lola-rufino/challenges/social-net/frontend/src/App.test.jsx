import React from 'react';
import { render, screen } from './utils/testUtils';
import App from './App';

describe('Given a App component', () => {
  describe('When is rendered', () => {
    test('Should render Social Network', () => {
      render(<App />);
      expect(screen.getByText('Social Network')).toBeInTheDocument();
    });
  });
});
