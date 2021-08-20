import React from 'react';
import CharacterCard from './CharacterCard';
import { render, screen } from '../../utils/test-utils';

describe('given a CharacterCard component', () => {
  const character = {
    id: 1010673,
    name: 'Amphibian (Earth-712)',
    description: '',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
      extension: 'jpg'
    }
  };

  describe('When there are no CharacterCards', () => {
    test('Then create img should be in the document', () => {
      render(<CharacterCard character={character} />);
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
