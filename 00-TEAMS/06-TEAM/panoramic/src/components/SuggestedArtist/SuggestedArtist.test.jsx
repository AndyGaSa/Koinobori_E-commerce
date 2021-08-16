import React from 'react';

import { render, screen, fireEvent } from '../../utils/test.utils';

import SuggestedArtist from './index';

import { addFavArtist } from '../../redux/actions/actionCreatorsFavList';
import loadArtistDetails from '../../redux/actions/actionCreatorsArtistDetails';

jest.mock('../../redux/actions/actionCreatorsFavList');

describe('Given a Suggestion Artist component', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "h1"', () => {
      beforeEach(() => {
        render(
          <SuggestedArtist />
        );
      });
      test('And should contain the "Suggestion Artist"text', () => {
        expect(screen.getByText(/Suggested Artist/i)).toBeInTheDocument();
      });
    });
  });
});

describe('Given a Suggestion Artist component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      const initialState = {
        searchedArtists: [],
        favouriteArtists: [],
        suggestedArtists: [{
          name: 'alex', genres: [1, 2], followers: { total: 1 }, images: [{ url: 'hola' }]
        }],
        artistDetails: [{
          name: 'alex', genres: [1, 2], followers: { total: 1 }, images: [{ url: 'hola' }]
        }]
      };
      render(<SuggestedArtist />, { initialState });
    });
    describe('And suggestedArtists is not void', () => {
      test('Then should render li with testid "list-item', () => {
        expect(screen.getByTestId('list-item')).toBeInTheDocument();
      });
    });
    describe('And the add button is clicked', () => {
      test('Then addFavArtist should be called', () => {
        const addButton = screen.getByTestId('add-button');
        addFavArtist.mockReturnValue({ type: '' });
        fireEvent.click(addButton);
        expect(addFavArtist).toHaveBeenCalled();
      });
    });
    describe('And the artist img is clicked', () => {
      test('Then the loadArtistDetails should be called', () => {
        const artistButton = screen.getByTestId('artist-details-button');
        loadArtistDetails.mockReturnValue({ type: '' });
        fireEvent.click(artistButton);
        expect(loadArtistDetails).toHaveBeenCalled();
      });
    });
  });
});
