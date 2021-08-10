/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
// Import your own reducer
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import configureStore from '../Redux/store';

function render(
    component,
    initialState,
) {
    
    const store = configureStore(initialState),
  
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
          {children}
      </Provider>
    );
  }
  return rtlRender(component, { wrapper: Wrapper});
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
