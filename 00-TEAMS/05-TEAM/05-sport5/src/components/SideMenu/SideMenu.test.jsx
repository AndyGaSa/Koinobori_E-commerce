import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

import { fireEvent, render, screen } from '../../utils/test.utils';
import SideMenu from './SideMenu';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: () => {}
}));

jest.mock('@auth0/auth0-react');

describe('Given a SideMenu component', () => {
  describe('When the user is authenticated', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ isAuthenticated: true });
    });
    describe('And there are no favourites teams or leagues', () => {
      beforeEach(() => {
        render(<SideMenu />);
      });

      test('Then should render Favourite Leagues', () => {
        expect(screen.getByText('Favourite Leagues')).toBeInTheDocument();
      });

      test('Then should render Favourite Teams', () => {
        expect(screen.getByText('Favourite Teams')).toBeInTheDocument();
      });

      test('Then should render a Logout button', () => {
        expect(screen.getByText('Logout')).toBeInTheDocument();
      });
    });

    describe('And there are 3 favourite leagues', () => {
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
          const deleteButton = screen.getByTestId('delete-button-league-2');
          fireEvent.click(deleteButton);
        });
        test('Then favourite-leagues-item-2 should not be in the document', () => {
          expect(screen.queryByTestId('favourite-leagues-item-2')).not.toBeInTheDocument();
        });
      });
    });

    describe('And there are 3 favourite leagues and 3 favourite teams', () => {
      beforeEach(() => {
        const initialState = {
          favourites: {
            favouriteLeagues: [
              { id: '0001', name: 'Andorra League' },
              { id: '0002', name: 'Spanish League' },
              { id: '0003', name: 'England League' }
            ],
            favouriteTeams: [
              { id: '0001', name: 'Bars' },
              { id: '0002', name: 'Madrid' },
              { id: '0003', name: 'Esp' }
            ]
          }
        };
        render(
          <SideMenu />,
          initialState
        );
      });

      test('Then an element rendering Madrid should be in the document', () => {
        expect(screen.getByText('Madrid')).toBeInTheDocument();
      });

      describe('And delete button is clicked in element 1', () => {
        beforeEach(() => {
          const deleteButton = screen.getByTestId('delete-button-team-1');
          fireEvent.click(deleteButton);
        });
        test('Then Madrid should not be in the document', () => {
          expect(screen.queryByText('Madrid')).not.toBeInTheDocument();
        });
      });
    });
  });
  describe('When the user is not authenticated', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ isAuthenticated: false });
      render(<SideMenu />);
    });

    test('Then a button Login should be rendered', () => {
      expect(screen.getByText('Login')).toBeInTheDocument();
    });
  });
});
