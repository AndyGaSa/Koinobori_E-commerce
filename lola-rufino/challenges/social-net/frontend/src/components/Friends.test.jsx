import React from 'react';
import { render, screen } from '../utils/testUtils';
import Friends from './Friends';

describe('Given a Friends component', () => {
  describe('When is rendered', () => {
    test('Should render Ignacio', () => {
      render(<Friends />);
      expect(screen.getByText('Ignacio Navarro')).toBeInTheDocument();
    });
  });
});
