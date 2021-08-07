import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { render, screen, fireEvent } from '../../utils/test.utils';

import LogoutButton from './index';

jest.mock('@auth0/auth0-react');

describe('Given a LogoutButton component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ logoutWithRedirect: jest.fn() });
      render(
        <LogoutButton />
      );
    });
    test('Then should be a h1 tag with the "LogoutButton" text', () => {
      expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    });
    describe('And the logout button is clicked', () => {
      beforeEach(() => {
        const logoutButton = screen.getByTestId('logout-button');
        fireEvent.click(logoutButton);
      });
      test('Then logoutWithRedirect() should be called', () => {
        const { logout } = useAuth0();
        expect(logout).toHaveBeenCalled();
      });
    });
  });
});
