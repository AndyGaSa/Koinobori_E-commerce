import React from 'react';

import { render, screen } from '../../utils/test.utils';

import LogoutButton from './index';

describe('Given a LoginButton component', () => {
  describe('When the component is rendered', () => {
    test('Then should be a h1 tag with the "LoginButton" text', () => {
      render(
        <LogoutButton />
      );
      expect(screen.getByTestId('logout-button')).toBeInTheDocument();
    });
  });
});
