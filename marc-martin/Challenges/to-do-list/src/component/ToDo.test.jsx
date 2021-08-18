import React from 'react';
import { render, screen } from '../utils/test-utils';
import '@testing-library/jest-dom/extend-expect';
import ToDo from './ToDo';

describe('Given a ToDo component', () => {
  describe('When there are no todos', () => {
    test('Then should render a create button', () => {
      render(
        <ToDo />
      );
      const createButton = screen.getByTestId('create-button');
      expect(createButton).toBeInTheDocument();
    });
  });
  describe('When there are todos', () => {
    test('Then should render a create button', () => {
      render(
        <ToDo />
      );
      const createButton = screen.getByTestId('create-button');
      expect(createButton).toBeInTheDocument();
    });
  });
});
