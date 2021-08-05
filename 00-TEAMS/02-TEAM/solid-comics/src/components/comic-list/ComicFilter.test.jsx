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
      render(<ComicFilter />, { initialState });
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
