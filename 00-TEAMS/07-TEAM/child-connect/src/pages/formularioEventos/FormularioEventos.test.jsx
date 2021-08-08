import React from 'react';
import { render, screen } from '../../utils/test.utils';
import FormularioEventos from './FormularioEventos';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useState: () => ({
    title: 'Tesoros',
    location: '',
    fecha: 'lunes',
    hora: '17',
    activity: 'dancing',
    description: '',
    max_children: '5'
  })
}));

beforeEach(() => {
  render(<FormularioEventos />);
});

describe('Given a FormularioEventos component', () => {
  describe('When is rendered', () => {
    test('Then h2 will be in the document', () => {
      expect(screen.getByTestId('title-h2')).toBeInTheDocument();
    });
    test('And the value will be ...', () => {
      const tituloH2 = screen.getByTestId('title-h2');
      expect(tituloH2.textContent).toBe('Crea un evento para ofrecer en tu barrio');
    });
  });
});

describe('Given a FormularioEventos component', () => {
  test('Then the añadirEventoButton button should be in the document', () => {
    expect(screen.getByTestId('añadirEventoButton')).toBeInTheDocument();
  });
});

describe('Given a FormularioEvents component', () => {
  test('Should render the Event Title', () => {
    expect(screen.getByTestId('event-title')).toBeInTheDocument();
  });
});
