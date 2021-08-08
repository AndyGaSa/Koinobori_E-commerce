import React from 'react';
import ComicCard from './ComicCard';
import { render, screen } from '../../utils/test-utils';

describe('given a CharacterCard component', () => {
  const comic = {
    id: 1010673,
    title: 'Amphibian (Earth-712)',
    description: '',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg'
    }
  };

  describe('When there are no CharacterCards', () => {
    test('Then create img should be in the document', () => {
      render(<ComicCard comic={comic} />);
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
