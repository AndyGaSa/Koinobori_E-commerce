import React from 'react';
import { fireEvent, render, screen } from '../../utils/test.utils';

import { addProductToCart } from '../../redux/actions/cart.creator';

import ProductList from './ProductList';

jest.mock('../../redux/actions/cart.creator');

describe('Given a ProductList component', () => {
  describe('When there are products in the array', () => {
    beforeEach(() => {
      const initialState = {
        products: [{
          name: 'Destornillador',
          price: 5,
          stock: 3,
        }],
        cartProducts: [],
      };

      render(<ProductList />, { initialState });
    });

    test('Then list-item-Destornillador shold be in the documet', () => {
      expect(screen.getByTestId('list-item-Destornillador')).toBeInTheDocument();
    });

    describe('And the add to cart button is clicked', () => {
      test('Then addProductToCart should have been called', () => {
        const addButton = screen.getByTestId('add-button');

        addProductToCart.mockReturnValue({ type: '' });
        fireEvent.click(addButton);

        expect(addProductToCart).toHaveBeenCalled();
      });
    });
  });
});
