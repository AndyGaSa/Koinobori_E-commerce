import React from 'react';
import { render, screen } from '../../utils/test.utils';
import NotFound from './NotFound';

describe('Given a NotFound component', () => {
  describe('When rendered', () => {
    test('Then "Error" should be in the document', () => {
      render(
        <NotFound />
      );
      expect(screen.getByText(/Error/i)).toBeInTheDocument();
    });
  });
});
