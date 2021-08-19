import React from 'react';
import { render, screen } from '../utils/utils-test';
import ToDo from './ToDo';

describe('Given the ToDo element', () => {
  test('Should contain the word ToDo list', () => {
    render(
      <ToDo />,
    );
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(/ToDo List/i)).toBeInTheDocument();
  });
  describe('When pressed Add button', () => {
    describe('And there is no content on Input', () => {
      test('Create should trigger', () => {
        render(<ToDo />);
        expect(true).toBe(false);
      });
    });
    describe('And there is content on Input', () => {
      test('store should add one value to the array', () => {
        render(<ToDo />);
        expect(true).toBe(false);
      });
      test('Input fields should become blank again', () => {
        render(<ToDo />);
        expect(true).toBe(false);
      });
    });
  });
});
