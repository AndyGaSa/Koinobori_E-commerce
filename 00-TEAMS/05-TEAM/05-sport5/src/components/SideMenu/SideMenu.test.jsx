import React from 'react';
import {
  BrowserRouter
} from 'react-router-dom';

import { render, screen } from '../../utils/test.utils';
import SideMenu from './SideMenu';

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
        <BrowserRouter>
          <SideMenu />
        </BrowserRouter>,
        initialState
      );
    });

    test('Then favourite-leagues-item-3 should be in the document', () => {
      expect(screen.getByTestId('favourite-leagues-item-2')).toBeInTheDocument();
    });
  });
});
