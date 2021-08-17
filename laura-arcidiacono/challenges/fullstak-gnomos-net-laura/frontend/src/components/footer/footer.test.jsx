import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Footer from './Footer';

beforeEach(() => {
  render(<Footer />);
});

describe('Given a Footer component', () => {
  describe('When is rendered', () => {
    test('Then h2 will be in the document', () => {
      expect(screen.getByTestId('footer__title')).toBeInTheDocument();
    });
    test('And the value will be Gnomos', () => {
      const titleH2 = screen.getByTestId('footer__title');
      expect(titleH2.textContent).toBe('Gnomos');
    });
  });
});
