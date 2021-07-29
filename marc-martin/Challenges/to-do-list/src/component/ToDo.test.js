/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../utils/test-utils';
import ToDo from './ToDo';

describe('Given a ToDo component', () => {
  describe('When receive an inputValue', () => {
    test('Then should render inputValue', () => {
      render(
        <ToDo />
      );
      expect(screen.queryByTestId()).toBeInTheDocument();
    });
  });
});
