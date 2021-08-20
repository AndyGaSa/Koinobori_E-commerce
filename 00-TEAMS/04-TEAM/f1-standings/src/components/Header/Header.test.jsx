import React from 'react';
import ReactDOM from 'react-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { screen, render, fireEvent } from '../Utils/test.utils';
import Header from './Header';

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234'
};
// intercept the useAuth0 function and mock it
jest.mock('@auth0/auth0-react');
describe('Given a LoginProfile component', () => {
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
    ReactDOM.render(<Header />, div);
  });
  test('Logout image displays when logged in', () => {
    render(
      <Header />
    );
    expect(screen.getByTestId('user-log'));
  });
});

jest.mock('@auth0/auth0-react');
describe('Given a header component rendered', () => {
  render(
    <Header />
  );
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });
  test('Then ', () => {
    const driverButton = screen.getByTestId('header-button');
    fireEvent.click(driverButton);

    expect(screen.querySelector('user-log')).not.toBe(true);
  });
});
