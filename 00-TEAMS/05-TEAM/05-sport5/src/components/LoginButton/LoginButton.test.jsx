import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { fireEvent, render, screen } from '../../utils/test.utils';
import LoginButton from './LoginButton';

jest.mock('@auth0/auth0-react');

describe('Given a Login component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ loginWithRedirect: jest.fn() });
      render(<LoginButton />);
    });

    test('Then Login should be in the document', () => {
      expect(screen.getByText('Login')).toBeInTheDocument();
    });

    describe('And Login button is clicked', () => {
      beforeEach(() => {
        const loginButton = screen.getByTestId('login-button-test');
        fireEvent.click(loginButton);
      });
      test('Then function loginWithRedirect is invoked', () => {
        const { loginWithRedirect } = useAuth0();
        expect(loginWithRedirect).toHaveBeenCalled();
      });
    });
  });
});
