/* eslint-disable no-underscore-dangle */
import React from 'react';

import AddTo from './AddTo';

import gnome from '../../mocks/currenGnome.mock';

import { render, screen } from '../../utils/testUtils';

describe('Given and AddTo component', () => {
  describe('When it is rendered', () => {
    describe('And gnome._id is equal to currentUserId', () => {
      test('Then should render "Your profile"', () => {
        render(<AddTo gnome={gnome} currentUserId={gnome._id} />);

        expect(screen.getByText('Your profile')).toBeInTheDocument();
      });
    });
  });
});
