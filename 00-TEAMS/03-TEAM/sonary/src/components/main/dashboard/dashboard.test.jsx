import React from 'react';
import { fireEvent, render, screen } from '../../../utils/test.utils';
import Dashboard from './Dashboard';
import tracksMock from '../../../constants/songs.mock';

describe('Given a dashboard component ', () => {
  const initialState = { sonary: tracksMock, favorites: [] };

  beforeEach(() => {
    render(
      <Dashboard />,
      initialState
    );
  });
  test('Then an Bad habits should be in the document', () => {
    expect(screen.getByText('Bad Habits')).toBeInTheDocument();
  });

  describe('And input change with value Fancy Like', () => {
    beforeEach(() => {
      const searchInput = screen.getByTestId('search-input');
      fireEvent.change(searchInput, { target: { value: 'Fancy Like' } });
    });
    test('Then Fancy Like should be in the document', () => {
      expect(screen.getByText('Fancy Like')).toBeInTheDocument();
    });
  });
  /*
  describe('And favorite button is clicked', () => {
    const favoriteButton = screen.getByTestId('button-219292114');
    fireEvent.click(favoriteButton);

    test("then button's class name changes to list__button--fav ", () => {
      expect(favoriteButton.className).toBe('list__button--fav');
    });
  }); */
});
