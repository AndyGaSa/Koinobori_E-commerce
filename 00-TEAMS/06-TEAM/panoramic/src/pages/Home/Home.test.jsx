import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Home from './index';

describe('Given a Home component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      const initialState = {
        searchedArtists: [],
        favouriteArtists: [{ name: 'manu' }],
        suggestedArtists: [{
          name: 'pau', genres: [1, 2], followers: { total: 1 }, images: [{ url: 'hola' }]
        }]
      };
      render(
        <Home />, { initialState }
      );
    });
  });
});
