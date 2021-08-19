import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '../utils/test-utils';
// import renderer from 'react-test-renderer';

import Profile from './Profile';

const user = {
  email: 'johndoe@me.com',
  email_verified: true,
  sub: 'google-oauth2|12345678901234'
};
// intercept the useAuth0 function and mock it
jest.mock('@auth0/auth0-react');

describe('Given a Profile component', () => {
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
    beforeEach(() => {
      //   Mock the Auth0 hook and make it return a logged in state
      useAuth0.mockReturnValue({
        isAuthenticated: true,
        user,
        logout: jest.fn(),
        loginWithRedirect: jest.fn()
      });
    });
    test('Then a user email tag should exist', () => {
      render(<Profile />);
      expect(screen.getByTestId('user__email'));
    });
  });

  //   describe('With a specific user data', () => {
  //     beforeEach(() => {
  //       useAuth0.mockReturnValue({
  //         isAuthenticated: true,
  //         user,
  //         logout: jest.fn(),
  //         loginWithRedirect: jest.fn()
  //       });
  //     });

  //     //   Mock the Auth0 hook and make it return a logged in state

  //     // eslint-disable-next-line prefer-const
  //     // component.userData = [{
  //     //   wanted: true,
  //     //   haveIt: false,
  //     //   favs: false,
  //     //   disLike: false
  //     // }];

//     test('Then the innerHTML of the wanted section should be "que quieres: 1"', () => {
//       const component = renderer.create(<Profile />).getInstance();
//       const tree = component.test();
//       //   render(<Profile />);
//       //   const wantedValue = screen.getByTestId('user__comic-wanted').innerHTML;
//       expect(tree).toBe(10);
//     });
//   });
});
