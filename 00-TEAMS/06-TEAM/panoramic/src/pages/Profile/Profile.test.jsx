import React from 'react';

import { render, screen } from '../../utils/test.utils';

import Profile from './index';

describe('Given a profile component', () => {
  describe('When the component is rendered', () => {
    test('Then should be a h1 tag with the "Profile" text', () => {
      render(
        <Profile />
      );
      expect(screen.getByText(/Profile/i)).toBeInTheDocument();
    });
  });
});
