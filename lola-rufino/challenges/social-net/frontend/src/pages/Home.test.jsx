import React from 'react';
import { render, screen } from '../utils/testUtils';
import Home from './Home';

describe('Given a Home component', () => {
  describe('When is rendered', () => {
    test('Should render Lola Rufino', () => {
      render(<Home />);
      expect(screen.getByText('Lola Rufino')).toBeInTheDocument();
    });
  });
});
