import React from 'react';
import EmptyCart from './EmptyCart';
import { screen, render } from '../utils/test.utils';

describe('Given a Footer component', () => {
  describe('When there are no Footer', () => {
    beforeEach(() => {
      // act
      render(<EmptyCart />);
    });

    test('Thenp SHOPPING CART should be in the document', () => {
      // assert
      expect(screen.queryByText(/SHOPPING CART/i)).toBeInTheDocument();
    });
  });
});
