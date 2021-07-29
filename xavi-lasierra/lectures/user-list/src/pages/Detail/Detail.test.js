/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import { render, screen } from '../../utils/test-utils';

import Detail from './Detail';

import users from '../../constants/users.mock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ userId: '10' })
}));

describe('Given a Details component', () => {
  test('Then should render username Moriah.Stanton', () => {
    render(
      <Detail />, {
        initialState: { users }
      }
    );
    expect(screen.getByText(/Moriah.Stanton/i)).toBeInTheDocument();
  });
});
