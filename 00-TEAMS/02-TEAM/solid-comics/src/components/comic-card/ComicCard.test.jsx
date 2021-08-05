import React from 'react';
import ComicCard from './ComicCard';
import { render, screen } from '../../utils/test-utils';

describe('given a ComicCard component', () => {
  describe('When there are no ComicCards', () => {
    beforeEach(() => {
      // act
      render(<ComicCard />);
    });

    test('Then create img should be in the document', () => {
      // assert
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
