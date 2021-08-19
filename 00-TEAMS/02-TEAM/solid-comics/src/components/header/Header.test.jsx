import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { StaticRouter } from 'react-router';

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

    test('Then 4 nav elements should be in the document', () => {
      act(() => {
        render(<StaticRouter><Header /></StaticRouter>, container);
      });
      expect(container.getElementsByTagName('a').length).toBe(3);
    });
  });
});
