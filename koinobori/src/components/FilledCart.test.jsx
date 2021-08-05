import React from 'react';
import FilledCart from './FilledCart';
import { screen, render } from '../utils/test.utils';

describe('Given a FilledCart component', () => {
  describe('When there is FilledCart', () => {
    beforeEach(() => {
      // act
      render(<FilledCart />);
    });

    test('Thenp X should be in the document', () => {
      // assert
      expect(screen.queryByText(/X/i)).toBeInTheDocument();
    });
  });
});
