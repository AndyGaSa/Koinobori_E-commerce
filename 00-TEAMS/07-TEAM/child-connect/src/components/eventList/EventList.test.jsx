import React from 'react';
import { render, screen } from '../../utils/test.utils';
import EventList from './EventList';

beforeEach(() => {
  render(<EventList />);
});

describe('Given a EventList component', () => {
  describe('When is rendered', () => {
    test('Then h2 will be in the document', () => {
      expect(screen.getByTestId('eventList-h2')).toBeInTheDocument();
    });
    test('And the value will be Crea un evento para ofrecer en tu barrio', () => {
      const tituloH2 = screen.getByTestId('eventList-h2');
      expect(tituloH2.textContent).toBe('Lista de Eventos en tu barrio');
    });
  });
});
