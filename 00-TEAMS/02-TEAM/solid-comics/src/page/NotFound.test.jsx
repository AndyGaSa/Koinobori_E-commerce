import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { StaticRouter } from 'react-router';

import NotFound from './NotFound';

describe('Given a NotFound component', () => {
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

    test('Then a "Page not found" text should appear', () => {
      act(() => {
        render(<StaticRouter><NotFound /></StaticRouter>, container);
      });
      expect(container.textContent).toBe('Page not found');
    });
  });
});
