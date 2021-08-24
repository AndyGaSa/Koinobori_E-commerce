import React from 'react';
import { render, screen } from './utils/testUtils';
import App from './App';

describe('Given an App page', () => {
  describe('When is rendered', () => {
    test('Should contain Fakebook', () => {
      render(<App />);
      expect(screen.getByText('Fakebook')).toBeInTheDocument();
    });
  });
});
