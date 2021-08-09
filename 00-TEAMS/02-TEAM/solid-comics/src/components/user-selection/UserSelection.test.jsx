import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { StaticRouter } from 'react-router';

import UserSelection from './UserSelection';

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234'
};

// intercept the useAuth0 function and mock it
jest.mock('@auth0/auth0-react');

describe('Given a UserSelection component', () => {
  beforeEach(() => {
    //   Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });
  describe('When is rendered', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    test('Then 4 button elements should be in the document', () => {
      act(() => {
        render(<StaticRouter><UserSelection /></StaticRouter>, container);
      });
      expect(container.getElementsByTagName('button').length).toBe(4);
    });
  });
});
