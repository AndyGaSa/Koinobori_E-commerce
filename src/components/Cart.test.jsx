import React from 'react';

import { screen, render, fireEvent } from '../utils/test.utils';
import Cart from './Cart';

const fakeLocalStorage = (function () {
  let store = [{ name: 'Hola' }];

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
}());

describe('Given a Cart component', () => {
  const LocalStorage = [{ name: 'Hola' }];
  fakeLocalStorage.setItem('cart', JSON.stringify(LocalStorage));
  beforeEach(() => {
    render(
      <Cart />
    );
  });

  describe('When the localStorage is not empty', () => {
    test('A li element must be created', () => {
      expect(screen.getByTestId('cart-li')).toBeInTheDocument();
    });

    test('A delete button must be created', () => {
      expect(screen.getByTestId('cart-button')).toBeInTheDocument();
    });

    describe('And delete button is clicked', () => {
      describe('And the element quantity is equal to one', () => {
        test('Then the associated element should disappear of the document', () => {
          const deleteButton = screen.getByTestId('cart-button');
          fireEvent.click(deleteButton);
          expect(screen.queryByTestId('cart-li')).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('When the localStorage is null or empty', () => {
    test('Shopping cart will display COOL', () => {
      fakeLocalStorage.clear();
      render(
        <Cart />
      );
      expect(screen.getByText(/COOL/i)).toBeInTheDocument();
    });
  });
});
