import React from 'react';

import { loadFavArtists } from './actionCreatorsFavList';

jest.mock('../../redux/actions/actionCreatorsFavList');

describe('Given a loadFavArtist function', () => {
  describe('When the function is called', () => {
    test('Then should return an object with  type property', () => {
      loadFavArtists.mockReturnValue({ type: 'hola' });
      expect(loadFavArtists()).toStrictEqual({ type: 'hola' });
    });
  });
});
