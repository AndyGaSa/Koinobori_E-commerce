/* eslint-disable no-unused-vars */
import React from 'react';
import { screen, render, fireEvent } from '../../utils/test.utils';
import Header from './Header';

// const user = {
//   email: 'pepe@me.com',
//   email_verified: true,
//   sub: 'google-oauth2|12345678901234'
// };

jest.mock('@auth0/auth0-react');
describe('Given a header component rendered', () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    const useAuth0 = jest.fn().mockReturnValue({
      error: null,
      isAuthenticated: true,
      isLoading: true,
      user: {}
    });
  });
  render(
    <Header />
  );
  test('Then ', () => {
    const driverButton = screen.getByTestId('logOutButton');
    fireEvent.click(driverButton);
    expect(screen.querySelector('logOutButton')).not.toBeInTheDocument();
  });
});
