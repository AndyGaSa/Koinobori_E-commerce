import React from 'react';
import { render, screen } from '../../utils/test.utils';
import EventDetails from './EventDetails';

beforeEach(() => {
  render(<EventDetails />);
});

describe('Given a EventDetails component', () => {
  describe('When is rendered', () => {
    test('Then h3 will be in the document', () => {
      expect(screen.getByTestId('userName-h3')).toBeInTheDocument();
    });
    test('And the value will be Nombre Usuario', () => {
      const tituloH3 = screen.getByTestId('userName-h3');
      expect(tituloH3.textContent).toBe('Nombre Usuario');
    });
  });
});
