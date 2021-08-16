import React from 'react';

import { render, screen } from '../../utils/test.utils';

import Login from './index';

describe('Given a Login component', () => {
  describe('When the component is rendered', () => {
    test('Then should be a h1 tag with the "Login" text', () => {
      render(
        <Login />
      );
      expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });
  });
});
