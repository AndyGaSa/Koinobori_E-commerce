/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test.utils';

import Footer from './Footer';

describe('Given a footer component', () => {
  describe('When is rendered', () => {
    test('Then should render and adress with data-testid company-adress', () => {
      render(
        <Footer />
      );

      expect(screen.getByTestId('company-adress')).toBeInTheDocument();
    });
  });
});
