import React from 'react';
import ComicCard from '../comic-card/ComicCard';
import { render, screen } from '../../utils/test-utils';

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
      render(<ComicCard />, { initialState });
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
