import React from 'react';
import ComicFilter from './ComicFilter';
import { render, screen } from '../../utils/test-utils';

describe('given a ComicFilter component', () => {
  describe('When there are no ComicFilters', () => {
    beforeEach(() => {
      // act

    });

    test('Then create img should be in the document', () => {
      const initialState = {
        comics: [
          {
            id: 1,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 1234,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12345,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 123456,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 1234567,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12345678,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 123456789,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 1234567891,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12345678912,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12345678913,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 1234567894,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12345678932,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12345672,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 123456792,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 123678912,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 123467912,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 34578912,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 5678912,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 2468912,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 126712,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 12356791,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          }
        ]
      };
      render(<ComicFilter />, { initialState });
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
