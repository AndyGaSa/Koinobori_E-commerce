import React from 'react';

import { render, screen } from '../../utils/test.utils';

import NotFound from './index';

describe('Given a NotFound component', () => {
  describe('When the component is rendered', () => {
    beforeEach(() => {
      render(
        <NotFound />
      );
    });
    test('Then should be a h1 tag with the "Not Found" text', () => {
      expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    });
    test('Then should be a p tag and should contain the "404 error" word', () => {
      expect(screen.getByText(/404 error/i)).toBeInTheDocument();
    });
  });
});
