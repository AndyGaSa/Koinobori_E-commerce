import React from 'react';

import { fireEvent, render, screen } from '../../utils/test.utils';
import SideMenu from './SideMenu';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => {}
}));

describe('Given a SideMenu component', () => {
  describe('When there are no favourites teams or leagues', () => {
    beforeEach(() => {
      render(<SideMenu />);
    });

    test('Then should render Favourite Teams', () => {
      expect(screen.getByText('Favourite Teams')).toBeInTheDocument();
    });
  });

  describe('When there are 3 favourite leagues', () => {
    beforeEach(() => {
      const initialState = {
        favourites: {
          favouriteLeagues: [
            { id: '0001', name: 'Andorra League' },
            { id: '0002', name: 'Spanish League' },
            { id: '0003', name: 'England League' }
          ],
          favouriteTeams: []
        }
      };
      render(
        <SideMenu />,
        initialState
      );
    });

    test('Then favourite-leagues-item-2 should be in the document', () => {
      expect(screen.getByTestId('favourite-leagues-item-2')).toBeInTheDocument();
    });

    describe('And delete button is clicked in element 2', () => {
      beforeEach(() => {
        const deleteButton = screen.getByTestId('delete-button-2');
        fireEvent.click(deleteButton);
      });
      test('Then favourite-leagues-item-2 should not be in the document', () => {
        expect(screen.queryByTestId('favourite-leagues-item-2')).not.toBeInTheDocument();
      });
    });
  });
});
