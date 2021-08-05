import React from 'react';

import { fireEvent, render, screen } from '../../utils/test.utils';

import SearchArtists from './index';

import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';
import loadSearchedArtists from '../../redux/actions/actionCreatorsSearchedList';

jest.mock('../../redux/actions/actionCreatorsFavList');
jest.mock('../../redux/actions/actionCreatorsSearchedList');

describe('Given a SearchArtist component', () => {
  describe('When there are artists', () => {
    beforeEach(() => {
      const initialState = {
        searchedArtists: [{ name: 'alex' }],
        favouriteArtists: [],
        suggestedArtists: []
      };
      render(<SearchArtists />, { initialState });
    });

    test('Then list item should be in the document', () => {
      expect(screen.getByTestId('list-item-alex')).toBeInTheDocument();
    });

    test('Then Add button should be in the list item', () => {
      expect(screen.getByTestId('add-button')).toBeInTheDocument();
    });
  });

  describe('And add button is clicked', () => {
    beforeEach(() => {
      const initialState = {
        searchedArtists: [{ name: 'alex' }],
        favouriteArtists: [],
        suggestedArtists: []
      };
      render(<SearchArtists />, { initialState });
    });
    test('Then addFavArtist should be called with {name: alex}', () => {
      const addButton = screen.getByTestId('add-button');
      addFavArtist.mockReturnValue({ type: '' });
      fireEvent.click(addButton);
      expect(addFavArtist).toHaveBeenCalledWith({ name: 'alex' });
    });
  });

  describe('And input value changes to alex', () => {
    beforeEach(() => {
      const initialState = {
        searchedArtists: [{ name: 'alex' }],
        favouriteArtists: [],
        suggestedArtists: []
      };
      render(<SearchArtists />, { initialState });
    });
    test('Then loadSearchedArtists should be called', () => {
      const searchInput = screen.getByTestId('search-input');
      loadSearchedArtists.mockReturnValue({ type: '' });

      fireEvent.change(searchInput, { target: { value: 'Maluma' } });

      expect(loadSearchedArtists).toHaveBeenCalled();
    });
  });
});
