import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
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
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    });

    test('Then ToDo List should be in the document', () => {
      // act
      act(() => {
        render(<Header />, container);
      });

      // assert
      expect(container.textContent).toBe('ToDo List');
    });
  });
});
