import React from 'react';
import ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginImagen from './LoginImage';
import { screen, render } from '../utils/test.utils';
import LogoutImage from './LogoutImage';

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234'
};

// intercept the useAuth0 function and mock it
jest.mock('@auth0/auth0-react');

describe('Given a LoginPrfoile component', () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });

  it('Render successfully login profile', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginImagen />, div);
  });
  test('Logout image displays when logged in', () => {
    render(

      <LogoutImage />
    );

    expect(screen.getByTestId('logoutImagen'));
  });
});
