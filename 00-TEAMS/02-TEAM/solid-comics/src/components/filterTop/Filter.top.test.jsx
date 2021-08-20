import React from 'react';
import ComicCard from '../comic-card/ComicCard';
import { fireEvent, render, screen } from '../../utils/test-utils';
import FilterTop from './FilterTop';

describe('given a ComicCard component', () => {
  describe('When there are no ComicCards', () => {
    beforeEach(() => {
      // act
    });

    test('Then create img should be in the document', () => {
      const initialState = {
        comics: [
          {
            id: 93839,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93839,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93839,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          }
        ]
      };
      render(<ComicCard />, { initialState });
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
describe('Given a Filter Top Component', () => {
  describe('And filter has lenght', () => {
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
        }],
      filter: [
        {
          id: 89700,
          title: 'Savage Avengers (2019) #20',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/80/6077179f74467',
            extension: 'jpg'
          }
        },
        {
          id: 94027,
          title: 'Savage Avengers (2019) #20 (Variant)',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/80/607f1f651f380',
            extension: 'jpg'
          }
        },
        {
          id: 84363,
          title: 'Avengers (2018) #45',
          thumbnail: {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/b0/606f61e695a2e',
            extension: 'jpg'
          }
        }
      ]
    };
    test('Should print filterStore', () => {
      render(<FilterTop />, { initialState });
      expect(screen.getByAltText('Savage Avengers (2019) #20')).toBeInTheDocument();
    });
  });
  describe('And filter has no Length', () => {
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
        }],
      filter: [
      ]
    };
    test('Should print comics', () => {
      render(<FilterTop />, { initialState });
      expect(screen.getByAltText('Guardians of the Galaxy (2020) #14 (Variant)')).toBeInTheDocument();
    });
  });
  describe('When rendered', () => {
    test('Should have a filter button', () => {
      render(<FilterTop />);
      expect(screen.getByTestId('show-aside'));
    });
    describe('When clicked', () => {
      test('Should render aside button', () => {
        render(<FilterTop />);
        const filterShow = screen.getByTestId('show-aside');
        fireEvent.click(filterShow);
        expect(screen.getByTestId('filter-input-field'));
      });
    });
  });
});
