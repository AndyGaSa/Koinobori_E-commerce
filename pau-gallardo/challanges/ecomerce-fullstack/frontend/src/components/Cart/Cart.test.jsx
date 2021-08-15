import React from 'react';

import { fireEvent, render, screen } from '../../utils/test.utils';

import { removeAllProductsFromCart, removeProductFromCart } from '../../redux/actions/cart.creator';

import Cart from './Cart';

jest.mock('../../redux/actions/cart.creator');

describe('Given a Cart component', () => {
  describe('When there are products in the array', () => {
    beforeEach(() => {
      const initialState = {
        products: [],
        cartProducts: [{
          name: 'Destornillador',
          price: 5,
          stock: 3,
        }],
      };

      render(<Cart />, { initialState });
    });

    test('Then list-item-Destornillador shold be in the documet', () => {
      expect(screen.getByTestId('list-item-Destornillador')).toBeInTheDocument();
    });

    describe('And the remove product from cart button is clicked', () => {
      test('Then removeProductFromCart should have been called', () => {
        const removebutton = screen.getByTestId('remove-button');

        removeProductFromCart.mockReturnValue({ type: '' });
        fireEvent.click(removebutton);

        expect(removeProductFromCart).toHaveBeenCalled();
      });
    });

    describe('And the remove all products from cart button is clicked', () => {
      test('Then removeAllProductsFromCart should have been called', () => {
        const removeAllbutton = screen.getByTestId('remove-all-button');

        removeAllProductsFromCart.mockReturnValue({ type: '' });
        fireEvent.click(removeAllbutton);

        expect(removeAllProductsFromCart).toHaveBeenCalled();
      });
    });
  });
});
