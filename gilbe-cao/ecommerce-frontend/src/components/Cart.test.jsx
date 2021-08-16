import React from 'react';
import { payProducts } from '../redux/actions/actionCreator';
import actionTypes from '../redux/actions/actionTypes';
import { fireEvent, render, screen } from '../utils/testUtils';
import Cart from './Cart';

const preloadedState = {
  cart: {
    items: [{
      product: 'asdasdasd',
      amount: 2,
      price: 5,
      name: 'Leffe',
    }],
    totalPrice: 10,
  },
};

jest.mock('../redux/actions/actionCreator');

describe('Given Cart component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      payProducts.mockReturnValue({
        type: actionTypes.PAY_PRODUCTS,
        products: [],
      });
      render(<Cart />, { preloadedState });
    });

    test('should render total price equals 0', () => {
      expect(screen.getByTestId('total-price').textContent).toBe('Total price:10');
    });

    test('should render Leffe beer name', () => {
      expect(screen.getByText(/Leffe/i)).toBeInTheDocument();
    });

    test('should dispatch pay action', () => {
      const paybutton = screen.getByTestId('pay-button');
      fireEvent.click(paybutton);
      expect(payProducts().type).toBe('PAY_PRODUCTS');
    });
  });
});
