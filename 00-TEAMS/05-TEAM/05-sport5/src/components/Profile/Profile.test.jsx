import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '../../utils/test.utils';
import Profile from './Profile';

jest.mock('@auth0/auth0-react');

describe('Given a Profile component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      useAuth0.mockReturnValue({
        isAuthenticated: true,
        user: 'Marc'
      });
      render(<Profile />);
    });

    test('Then profile info should be in the document', () => {
      expect(screen.getByTestId('profile-test-name').className).toContain('profile__name');
    });
  });
});
