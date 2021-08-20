import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Footer from './Footer';

beforeEach(() => {
  render(<Footer />);
});

describe('Given a Footer component', () => {
  describe('When is rendered', () => {
    test.only('Then h3 will be in the document', () => {
      expect(screen.getByTestId('footer__title')).toBeInTheDocument();
    });
    test('And the value will be Book Shop', () => {
      const titleH3 = screen.getAllByTestId('footer__title');
      expect(titleH3.textContent).toBeInTheDocument('Book Shop');
    });
  });
});
