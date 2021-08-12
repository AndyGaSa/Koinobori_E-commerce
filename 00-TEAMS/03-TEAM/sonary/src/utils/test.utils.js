/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import configureStore from '../redux/store';

function render(
  component,
  initialState
) {
  const store = configureStore(initialState);

  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(component, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
