import React from 'react';

import { render, screen } from '../../utils/test.utils';

import LoginButton from './index';

describe('Given a LoginButton component', () => {
  describe('When the component is rendered', () => {
    test('Then should be a h1 tag with the "LoginButton" text', () => {
      render(
        <LoginButton />
      );
      expect(screen.getByText(/LoginButton/i)).toBeInTheDocument();
    });
  });
});
