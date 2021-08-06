import React from 'react';
import ComicList from './ComicList';
import { render, screen } from '../utils/test-utils';

describe('given a ComicList component', () => {
  describe('When there are no ComicLists', () => {
    beforeEach(() => {
      // act
      render(<ComicList />);
    });

    test('Then create img should be in the document', () => {
      // assert
      expect(screen.getByTestId('comic-list')).toBeInTheDocument();
    });
  });
});
