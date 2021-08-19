import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import { render, screen } from '../../utils/test.utils';

import ProfileComp from './index';

jest.mock('@auth0/auth0-react');

describe('Given a ProfileComp component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({ loginWithRedirect: jest.fn() });
      const user = {
        picture: '1',
        name: 'alex',
        email: 'example@example.com'
      };
      const isAuthenticated = true;
      render(
        <ProfileComp />, { user, isAuthenticated }
      );
    });
    test('Then should be a div tag with the "main-section" id', () => {
      expect(screen.getByTestId('main-section')).toBeInTheDocument();
    });
  });
});
