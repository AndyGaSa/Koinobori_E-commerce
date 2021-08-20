/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Cart from './Cart';

describe('Given a Cart component', () => {
  describe('When Cart is loaded', () => {
    test('Card should contain buy', () => {
      render(<Cart />);
      expect(screen.getByText('buy')).toBeInTheDocument();
    });
  });
});
