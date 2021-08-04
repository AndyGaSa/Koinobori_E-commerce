import React from 'react';
import NotFound from './NotFound';
import { screen, render } from '../utils/test.utils';

describe('Given a NotFound component', () => {
  describe('When there are no NotFound', () => {
    beforeEach(() => {
      // act
      render(<NotFound />);
    });

    test('Then 404 message should be in the document', () => {
      // assert
      expect(screen.queryByText(/404 - Page not found/i)).toBeInTheDocument();
    });
  });
});
