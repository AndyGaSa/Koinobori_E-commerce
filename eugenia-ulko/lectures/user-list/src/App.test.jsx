/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given User component', () => {
  describe('When there are no Users', () => {
    test('Then....', () => {
      // act
      render(<App />);
      const createButton = screen.getByTestId('create-button');

      // assert
      expect(createButton).toBeInTheDocument();
    });
  });
});
