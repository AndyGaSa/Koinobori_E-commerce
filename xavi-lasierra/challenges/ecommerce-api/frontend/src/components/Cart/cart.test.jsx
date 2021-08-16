import React from 'react';
import { render, screen, fireEvent } from '../../utils/test.utils';
import {
  getCart, submitCart, saveCart
} from '../../redux/actions/cart.creator';

import Cart from './Cart';

import actionTypes from '../../redux/actions/cart.actions';
import cartMock from '../../mocks/cart.mock';
import userMock from '../../mocks/user.mock';

jest.mock('../../redux/actions/cart.creator', () => ({
  ...jest.requireActual('../../redux/actions/cart.creator'),
  getCart: jest.fn(),
  submitCart: jest.fn(),
  saveCart: jest.fn()
}));

describe('Given a Cart component', () => {
  describe('When is rendered', () => {
    describe('And there is a logged in user', () => {
      describe('And there are items in the cart', () => {
        beforeEach(() => {
          getCart.mockReturnValue({
            type: actionTypes.LOAD_CART,
            data: cartMock
          });
          render(<Cart user={userMock} />);
        });

        test('Then should render a h2 with data-testid cart-title', () => {
          expect(screen.getByTestId('cart-title')).toBeInTheDocument();
        });

        ['cart-element-0', 'cart-element-1']
          .forEach((dataTestId) => {
            test(`Then should render a li element with data-testid ${dataTestId}`, () => {
              expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
            });
          });

        test('Then the element with data-testid cart should contain the class cart--closed ', () => {
          expect(screen.getByTestId('cart').className).toContain('cart--closed');
        });

        test('Then the element with data-testid element-0-amount should be 2', () => {
          expect(screen.getByTestId('element-0-amount').innerHTML).toBe('2');
        });

        describe('And you click the button with data-testid open-cart-button', () => {
          test('Then the element with data-testid cart should not contain the class cart--closed', () => {
            const openButton = screen.getByTestId('open-cart-button');
            fireEvent.click(openButton);
            expect(screen.getByTestId('cart').className).not.toContain('cart--closed');
          });
        });

        describe('And you click the button with data-testid open-cart-button again', () => {
          test('Then the element with data-testid cart should not contain the class cart--closed', () => {
            const openButton = screen.getByTestId('open-cart-button');
            fireEvent.click(openButton);
            fireEvent.click(openButton);
            expect(screen.getByTestId('cart').className).toContain('cart--closed');
          });
        });

        describe('And you click the button with data-testid clear-cart-button', () => {
          beforeEach(() => {
            const clearButton = screen.getByTestId('clear-cart-button');
            fireEvent.click(clearButton);
          });

          ['cart-element-0', 'cart-element-1']
            .forEach((dataTestId) => {
              test(`Then the element with data-testid ${dataTestId} should not be in the document`, () => {
                expect(screen.queryByTestId(dataTestId)).toBeNull();
              });
            });
        });

        describe('And you click pay button', () => {
          test('Then the function pay should have been called with {_id: 1, user:1, products: [{product: 1, amount: 2},{product: 2, amount: 1}]}', () => {
            submitCart.mockReturnValue({
              type: actionTypes.SAVE_CART,
              data: { ...cartMock, products: [] }
            });

            const payButton = screen.getByTestId('pay-button');
            fireEvent.click(payButton);

            expect(submitCart).toHaveBeenCalledWith({
              _id: '1',
              user: '1',
              products: [{ product: '1', amount: 2 }, { product: '2', amount: 1 }]
            });
          });
        });

        describe('And you click save button', () => {
          test('Then the function saveCart should have been called with {_id: 1, user:1, products: [{product: 1, amount: 2},{product: 2, amount: 1}]}', () => {
            saveCart.mockReturnValue({
              type: actionTypes.SAVE_CART,
              data: cartMock
            });

            const saveButton = screen.getByTestId('save-button');
            fireEvent.click(saveButton);

            expect(saveCart).toHaveBeenCalledWith({
              _id: '1',
              user: '1',
              products: [{ product: '1', amount: 2 }, { product: '2', amount: 1 }]
            });
          });
        });

        describe('And you click element-0-add-button', () => {
          test('Then the element with data-testid element-0-amount should be 3', () => {
            const addButton = screen.getByTestId('element-0-add-button');
            fireEvent.click(addButton);

            expect(screen.getByTestId('element-0-amount').innerHTML).toBe('3');
          });
          test('Then if you click again the element with data-testid element-0-amount should be 3 (max-stock)', () => {
            const addButton = screen.getByTestId('element-0-add-button');
            fireEvent.click(addButton);
            fireEvent.click(addButton);

            expect(screen.getByTestId('element-0-amount').innerHTML).toBe('3');
          });
        });

        describe('And you click element-0-substract-button', () => {
          test('Then the element with data-testid element-0-amount should be 3', () => {
            const substractButton = screen.getByTestId('element-0-substract-button');
            fireEvent.click(substractButton);

            expect(screen.getByTestId('element-0-amount').innerHTML).toBe('1');
          });
        });
      });

      describe('And there are not any items in the cart', () => {
        beforeEach(() => {
          getCart.mockReturnValue({
            type: actionTypes.LOAD_CART,
            data: { ...cartMock, products: [] }
          });
          render(<Cart user={userMock} />);
        });

        test('Then the button with data-testid pay-button should not be in the document', () => {
          expect(screen.queryByTestId('pay-button')).toBeNull();
        });

        test('Then Cart is empty should be in the document', () => {
          expect(screen.getByText('Cart is empty')).toBeInTheDocument();
        });
      });
    });

    describe('And there is not a logged in user', () => {
      test('Then should render Login to add products', () => {
        render(<Cart user={{}} />);

        expect(screen.getByText('Login to add products')).toBeInTheDocument();
      });
    });
  });
});
