import React from 'react';
import { render, screen } from '../../utils/testUtils';
import MainContainer from './MainContainer';

beforeEach(() => {
  render(<MainContainer />);
});

describe('Given a MainContainer component', () => {
  describe('When is rendered', () => {
    test('Then h2 will be in the document', () => {
      expect(screen.getByTestId('main__title')).toBeInTheDocument();
    });
    test('And the value will be Nuestros Gnomo Users Destacados', () => {
      const titleH2 = screen.getByTestId('main__title');
      expect(titleH2.textContent).toBe('Nuestros Gnomo Users Destacados');
    });
  });
});
