/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
// Import your own reducer
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../redux/store';

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={configureStore(initialState)}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
