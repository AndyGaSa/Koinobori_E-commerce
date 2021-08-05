import React from 'react';
import { render, screen, fireEvent } from '../../utils/test.utils';
import FavouriteList from './index';
import { deleteFavArtists } from '../../redux/actions/actionCreatorsFavList';

jest.mock('../../redux/actions/actionCreatorsFavList');

describe('Given an Favourite List component', () => {
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
        expect(screen.getByTestId('list-item')).toBeInTheDocument();
      });
      describe('And delete button is cliked', () => {
        test('Then the deleteFavArtists function should be called', () => {
          const deleteButton = screen.getByTestId('delete-button');
          deleteFavArtists.mockReturnValue({ type: '' });
          fireEvent.click(deleteButton);
          expect(deleteFavArtists).toHaveBeenCalled();
        });
      });
    });
  });
});
