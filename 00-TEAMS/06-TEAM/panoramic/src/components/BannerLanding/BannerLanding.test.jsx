import React from 'react';
import { render, screen } from '../../utils/test.utils';
import BannerLanding from './index';

describe('Given a BannerLanding component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <BannerLanding />
      );
    });
    test('Then should be a h1 tag with the "Panoramic" text', () => {
      expect(screen.getByText(/Panoramic/i)).toBeInTheDocument();
    });
    test('Then should be a p tag and should contain the "Find" word', () => {
      expect(screen.getByText(/FIND/i)).toBeInTheDocument();
    });
    test('Then should be a img with the "main-logo" id', () => {
      expect(screen.getByTestId('main-logo')).toBeInTheDocument();
    });
  });
});
