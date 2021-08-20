import React from 'react';
import { render, screen } from '../../utils/test-utils';
import CharactersGroupA from './CharactersGroupA';

describe('given a CharacterCard component', () => {
  describe('When there are no CharacterCards', () => {
    test('Then create img should be in the document', () => {
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
      render(<CharactersGroupA />, { initialState });
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
describe('Given a CharactersGroupA Component', () => {
  describe('And an initial state', () => {
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

    test('Should not print Characters without image', () => {
      render(<CharactersGroupA />, { initialState });
      expect(screen.queryByAltText('Amphibian (Earth-712)')).not.toBeInTheDocument();
    });
    test('Should print Characters with image', () => {
      render(<CharactersGroupA />, { initialState });
      expect(screen.getByAltText('Ancient One')).toBeInTheDocument();
    });
  });
});
