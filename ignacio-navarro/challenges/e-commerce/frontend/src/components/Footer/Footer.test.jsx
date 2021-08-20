/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Footer from './Footer';

describe('Given a Footer component', () => {
  describe('When Footer is loaded', () => {
    test('Footer should contain copyright', () => {
      render(<Footer />);
      expect(screen.getByText('copyright 2021')).toBeInTheDocument();
    });
  });
});
