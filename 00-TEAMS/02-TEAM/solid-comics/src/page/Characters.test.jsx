import React from 'react';
import { screen, render } from '../utils/test-utils';

import Characters from './Characters';

describe('Given a Characters component', () => {
  const initialState = {
    characters: [
      {
        id: 1010673,
        name: 'Amphibian (Earth-712)',
        description: '',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg'
        }
      },
      {
        id: 1010905,
        name: 'Amun',
        description: 'Amun is a ruthless teenage assassin, employed by the Sisterhood of the Wasp to serve under the mage Vincent after Araña interrupted the ritual to initiate the Wasp\'s new chosen one.',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg'
        }
      },
      {
        id: 1009152,
        name: 'Ancient One',
        description: '',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/b0/4ce59ea2103ac',
          extension: 'jpg'
        }
      }
    ]
  };
  describe('When is rendered', () => {
    test('Then a characters-container should be in the document', () => {
      render(<Characters />, { initialState });
      expect(screen.getByTestId('characters-container')).toBeInTheDocument();
    });
  });
});
