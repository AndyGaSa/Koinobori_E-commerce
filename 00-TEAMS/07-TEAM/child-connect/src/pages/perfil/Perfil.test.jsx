import React from 'react';
import { render, screen } from '../../utils/test.utils';
import Perfil from './Perfil';

beforeEach(() => {
  render(<Perfil />);
});

describe('Given a EventList component', () => {
  describe('When is rendered', () => {
    test('Then p will be in the document', () => {
      expect(screen.getByTestId('perfil-p')).toBeInTheDocument();
    });
    test('And the value will be Barcelona, Sants', () => {
      const perfilP = screen.getByTestId('perfil-p');
      expect(perfilP.textContent).toBe('Barcelona, Sants');
    });
  });
});
