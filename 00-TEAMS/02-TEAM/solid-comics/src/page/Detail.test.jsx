import React from 'react';
import Detail from './Detail';
import { render, screen } from '../utils/test-utils';

describe('given a Detail component', () => {
  describe('When there are no Detail', () => {
    beforeEach(() => {
      // act
      render(<Detail />);
    });

    test('Then create img should be in the document', () => {
      // assert
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
