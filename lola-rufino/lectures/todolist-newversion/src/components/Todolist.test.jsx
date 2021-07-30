import React from 'react';
import { render, screen } from '../utils/test.utils';
import Todolist from './Todolist';

describe('Given a Todolist component', () => {
  describe('When there are no todos', () => {
    test('Then....', () => {
      // act
      render(<Todolist />);
      const createButton = screen.getByTestId('create-button');
      // assert
      expect(createButton).toBeInTheDocument();
    });
  });
});
