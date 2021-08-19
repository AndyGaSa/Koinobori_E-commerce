import React from 'react';

import { render, screen, fireEvent } from '../../utils/test.utils';

import FavouriteList from './index';

import { deleteFavArtists } from '../../redux/actions/actionCreatorsFavList';

jest.mock('../../redux/actions/actionCreatorsFavList');

describe('Given a Favourite List component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      const initialState = {
        searchedArtists: [],
        favouriteArtists: [{ name: 'manu' }],
        suggestedArtists: []
      };
      render(
        <FavouriteList />, { initialState }
      );
    });
    describe('And favArtist is not void', () => {
      test('Then should render a li with the id "list-item"', () => {
        expect(screen.getByTestId('list-item-manu')).toBeInTheDocument();
      });
      describe('And the artist delete button is cliked', () => {
        beforeEach(() => {
          const deleteButton = screen.getByTestId('manu-delete-button');
          deleteFavArtists.mockReturnValue({ type: '' });
          fireEvent.click(deleteButton);
        });
        test('Then the deleteFavArtists function should be called', () => {
          expect(deleteFavArtists).toHaveBeenCalled();
        });
      });
    });
  });
});
