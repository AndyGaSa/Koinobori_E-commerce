import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Home from './index';

describe('Given a Suggestion Artist component', () => {
  describe('When the component is rendered', () => {
    describe('Then should be an "h1"', () => {
      beforeEach(() => {
        render(
          <Home />
        );
      });
      test('And should contain the "Suggestion Artist"text', () => {
        expect(screen.getByText(/Suggestion Artist/i)).toBeInTheDocument();
      });
    });
  });
});
