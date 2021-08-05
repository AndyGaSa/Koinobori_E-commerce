import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { StaticRouter } from 'react-router';

import Battle from './Battle';

describe('Given a battle component', () => {
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

    test('Then a "coming soon..." text should appear', () => {
      act(() => {
        render(<StaticRouter><Battle /></StaticRouter>, container);
      });
      expect(container.textContent).toBe('coming soon...');
    });
  });
});
