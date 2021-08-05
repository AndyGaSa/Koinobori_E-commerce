import React from 'react';

import { screen, render } from '../utils/test.utils';
import Cart from './Cart';

describe('Given a Cart component', () => {
  const LocalStorage = [{ name: 'Hola' }];
  localStorage.setItem('cart', JSON.stringify(LocalStorage));
  beforeEach(() => {
    render(
      <Cart />
    );
  });
  describe('When the localStorage is not empty', () => {
    test('A li element must be created', () => {
      expect(screen.getByTestId('cart-li')).toBeInTheDocument();
    });
    test('A button must be created', () => {
      expect(screen.getByTestId('cart-button')).toBeInTheDocument();
    });
  });
  describe('When the LocalStorage is null or empty', () => {
    test('Shopping cart will display COOL', () => {
      localStorage.clear();
      render(
        <Cart />
      );
      expect(screen.getByText(/COOL/i)).toBeInTheDocument();
    });
  });
});
