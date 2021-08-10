/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Details from './Details';
import { render, screen } from '../utils/test-utils';
import heroes from '../constants/heroes.mock';

// jest.mock('react-router', () => ({
//   useParams: jest.fn().mockReturnValue({ heroId: 'dc-arrow' }),
// }));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ heroId: 'dc-arrow' }),
}));

describe('Given a Details component', () => {
  test('Should render superhero name', () => {
    render(
      <Details />, {
        initialState: {
          heroes,
        },
      },
    );
    expect(screen.getByText(/GREEN ARROW/i)).toBeInTheDocument();
  });
});
