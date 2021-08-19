/* eslint-disable no-console */
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Header from './Header';

describe('Given a header component', () => {
  describe('When is rendered', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      // Desmonta el componente.
      unmountComponentAtNode(container);
      // Destruye su elemento.
      container.remove();
      // Apunta a null.
      container = null;
    });

    test('Then h1 should be in the document', () => {
      // Arrange all necessary preconditions and inputs.
      // Act on the object or method under test.
      act(() => { render(<Header />, container); });
      // Assert that the expected results have occurred.
      expect(container.textContent).toBe('To-do List');
    });
  });
});
