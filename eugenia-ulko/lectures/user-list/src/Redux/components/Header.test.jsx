//  TEST DE COMPONENTE REACT

import React from 'react';
import { act } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import Header from './Header';

describe('Given the Header component', () => {
  describe('when is rendered', () => {
    let container;
    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    test('Then h2 should be in the document', () => {
      // arrange  - preparar la prueba, вопрос входных данных
      // act  - realizar acciones, вопрос функций
      act(() => {
        render(<Header />, container);
      });
      // assert  - para afirmar lo q ocurre en este escenario, вопрос oжидаемых результатов
      expect(container.textContent).toBe('User List');
    });
  });
});
