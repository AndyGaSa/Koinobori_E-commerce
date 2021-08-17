import React from 'react';
import { render, screen } from '../utils/testUtils';
import Home from './Home';

describe('Given an Home page', () => {
  describe('When is rendered', () => {
    test('Should contain Lola Rufino', () => {
      render(<Home />);
      expect(screen.getByText('Lola Rufino')).toBeInTheDocument();
    });
  });
});
