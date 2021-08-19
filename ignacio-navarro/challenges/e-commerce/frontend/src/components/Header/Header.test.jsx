/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Header from './Header';

describe('Given a Header component', () => {
  describe('When Header is loaded', () => {
    test('Header should contain copyright', () => {
      render(<Header />);
      expect(screen.getByText('BEERLY')).toBeInTheDocument();
    });
  });
});
