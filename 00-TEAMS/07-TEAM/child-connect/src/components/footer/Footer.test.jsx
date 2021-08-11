import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';

describe('Given a Footer component', () => {
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
    test('Then Child Connect should be in the document', () => {
      act(() => {
        render(<Footer />, container);
      });
      expect(container.querySelector('p').textContent).toBe('Child Connect');
    });
    test('Then Child Connect¿Cómo funciona?AyudaPrivacidadTérminosDatos de la empresa© 2021 Child Connect | All rights reserved should be in the document', () => {
      act(() => {
        render(<Footer />, container);
      });
      expect(container.textContent).toBe('Child Connect¿Cómo funciona?AyudaPrivacidadTérminosDatos de la empresa© 2021 Child Connect | All rights reserved');
    });
  });
});
