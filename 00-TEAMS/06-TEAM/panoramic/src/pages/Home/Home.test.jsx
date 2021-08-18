import React from 'react';

import { render, screen } from '../../utils/test.utils';

import Home from './index';

describe('Given a Home component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <Home />
      );
    });
    test('Then should be a img with the "main-logo" id', () => {
      expect(screen.getByTestId('main-logo')).toBeInTheDocument();
    });
    test('And should contain the "Suggestion Artist"text', () => {
      expect(screen.getByText(/Suggested Artist/i)).toBeInTheDocument();
    });
    test('And should contain a input with the "search-input" id', () => {
      expect(screen.getByTestId('search-input')).toBeInTheDocument();
    });
  });
});
