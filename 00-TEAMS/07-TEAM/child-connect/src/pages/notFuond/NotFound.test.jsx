import React from 'react';
import { render, screen } from '../../utils/test.utils';
import NotFound from './NotFound';

beforeEach(() => {
  render(<NotFound />);
});

describe('Given a NotFound component', () => {
  describe('When is rendered', () => {
    test('Then h3 will be in the document', () => {
      expect(screen.getByTestId('notFound-h3')).toBeInTheDocument();
    });
    test('And the value will contain 404', () => {
      const tituloH3 = screen.getByTestId('notFound-h3');
      expect(tituloH3.textContent).toContain('404');
    });
  });
});
