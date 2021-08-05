import React from 'react';
import { render, screen } from '../../../utils/test.utils';
import tracksMock from '../../../constants/songs.mock';
import Details from './Details';
import lyrics from '../../../constants/lyrics.mock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParamas: jest.fn().mockReturnValue({ track_id: 218732426 })
}));

describe('Given a detail component ', () => {
  const initialState = { sonary: tracksMock, song: lyrics };
  render(
    <Details />,
    initialState
  );

  describe('When the track_id is 218732426 ', () => {
    test("Then lyrics_body should 'contain Don't need no champagne poppin' entertainment'");
    expect(screen.getByText("contain Don't need no champagne poppin")).toBeInTheDocument();
  });
});
