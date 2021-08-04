import React from 'react';
import Details from './Details';
import { screen, render } from '../utils/test.utils';

describe('Given a Footer component', () => {
  describe('When there are no Footer', () => {
    beforeEach(() => {
      // act
      render(<Details />);
    });

    test('Thenp ADD TO CART should be in the document', () => {
      // assert
      expect(screen.getByRole(/btnAddToCart/i));
    });
    test('Thenp Tax included should be in the document', () => {
      // assert
      expect(screen.queryByText(/Tax included/i)).toBeInTheDocument();
    });
  });
});
