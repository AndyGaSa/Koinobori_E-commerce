import React from 'react';

import { render, screen } from '../../utils/test.utils';

import Header from './index';

describe('Given a Header component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <Header />
      );
    });
    test('Then should be a h1 tag with the "Panoramic" text', () => {
      expect(screen.getByText(/Panoramic/i)).toBeInTheDocument();
    });
    test('Then should be a img with the "main-logo-header" id', () => {
      expect(screen.getByTestId('main-logo-header')).toBeInTheDocument();
    });
  });
});
