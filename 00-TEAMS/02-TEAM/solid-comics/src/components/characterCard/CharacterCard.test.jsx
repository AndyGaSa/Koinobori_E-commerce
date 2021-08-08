import React from 'react';
import CharacterCard from './CharacterCard';
import { render, screen } from '../../utils/test-utils';

describe('given a CharacterCard component', () => {
  describe('When there are no CharacterCards', () => {
    beforeEach(() => {
      // act
      render(<CharacterCard />);
    });

    test('Then create img should be in the document', () => {
      // assert
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
