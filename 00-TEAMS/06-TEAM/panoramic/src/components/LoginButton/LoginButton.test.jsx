import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { render, screen, fireEvent } from '../../utils/test.utils';

import LoginButton from './index';

jest.mock('@auth0/auth0-react');

describe('Given a LoginButton component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ loginWithRedirect: jest.fn() });
      render(
        <LoginButton />
      );
    });
    test('Then should be a h1 tag with the "LoginButton" text', () => {
      expect(screen.getByTestId('login-button')).toBeInTheDocument();
    });
    describe('And the login button is clicked', () => {
      beforeEach(() => {
        const loginButton = screen.getByTestId('login-button');
        fireEvent.click(loginButton);
      });
      test('Then loginWithRedirect() should be called', () => {
        const { loginWithRedirect } = useAuth0();
        expect(loginWithRedirect).toHaveBeenCalled();
      });
    });
  });
});
