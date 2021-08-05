import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { fireEvent, render, screen } from '../../utils/test.utils';
import LogoutButton from './LogoutButton';

jest.mock('@auth0/auth0-react');

describe('Given a Logout component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ logout: jest.fn() });
      render(<LogoutButton />);
    });

    test('Then Logout should be in the document', () => {
      expect(screen.getByText('Logout')).toBeInTheDocument();
    });

    describe('And Logout button is clicked', () => {
      beforeEach(() => {
        const logoutButton = screen.getByTestId('logout-button-test');
        fireEvent.click(logoutButton);
      });
      test('Then function logout is invoked', () => {
        const { logout } = useAuth0();
        expect(logout).toHaveBeenCalled();
      });
    });
  });
});
