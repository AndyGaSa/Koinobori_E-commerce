import React from 'react';
import ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import { screen, render } from '../../../utils/test.utils';
import LogoutButton from './LogoutButton';

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
    ReactDOM.render(<LoginButton />, div);
  });
  test('Logout image displays when logged in', () => {
    render(
      <LogoutButton />
    );
    expect(screen.getByTestId('logout')).ToBeInTheDocument();
  });
});
