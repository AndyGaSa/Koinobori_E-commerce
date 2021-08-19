import React from 'react';
import ComicList from './ComicList';
import { render, screen } from '../utils/test-utils';

describe('given a ComicList component', () => {
  describe('and initialState is []', () => {
    const initialState = { comics: [] };
    test('Then "Strange Academy" should not be in the document', () => {
      render(<ComicList />, { initialState });
      // assert
      expect(screen.queryByAltText('Strange Academy (2020) #10')).not.toBeInTheDocument();
    });
  });
  describe('and initialState has data', () => {
    const initialState = {
      comics: [
        {
          id: 94485,
          title: 'Guardians of the Galaxy (2020) #14 (Variant)',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/10/6092ed44dee79',
            extension: 'jpg'
          }
        },
        {
          id: 94604,
          title: 'Star Wars (2020) #13 (Variant)',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/30/6092ed7d03d60',
            extension: 'jpg'
          }
        },
        {
          id: 79807,
          title: 'Strange Academy (2020) #10',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/03/608990b337e41',
            extension: 'jpg'
          }
        }]
    };
    describe('When there are no ComicLists', () => {
      test('Then "Strange Academy" should be in the document', () => {
        render(<ComicList />, { initialState });
        // assert
        expect(screen.getByAltText('Strange Academy (2020) #10')).toBeInTheDocument();
      });
    });
  });
});
