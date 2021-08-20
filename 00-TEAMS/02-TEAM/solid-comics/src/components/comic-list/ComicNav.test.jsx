import React from 'react';
import ComicNav from './ComicNav';
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
            id: 93739,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93639,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93539,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93439,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93339,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93239,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93139,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93819,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93829,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93849,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93859,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93869,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93879,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93889,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93899,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93838,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93837,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93836,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93835,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93834,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          },
          {
            id: 93833,
            thumbnail: {
              path: 'exapmle',
              extension: 'jpg'
            }
          }
        ]
      };
      render(<ComicNav />, { initialState });
      expect(screen.getByTestId('create-img')).toBeInTheDocument();
    });
  });
});
