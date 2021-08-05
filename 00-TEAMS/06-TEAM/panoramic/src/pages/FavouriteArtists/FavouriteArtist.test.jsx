import React from 'react';

import { render, screen } from '../../utils/test.utils';

import FavouriteArtist from './index';

describe('Given a Favourite Artist component', () => {
  describe('When the component is rendered', () => {
    describe('And favArtist is not void', () => {
      test('Then should render a li with the id "list-item"', () => {
        const initialState = {
          searchedArtists: [],
          favouriteArtists: [{ name: 'manu' }],
          suggestedArtists: []
        };
        render(
          <FavouriteArtist />, { initialState }
        );
        expect(screen.getByTestId('list-item')).toBeInTheDocument();
      });
    });
  });
});
