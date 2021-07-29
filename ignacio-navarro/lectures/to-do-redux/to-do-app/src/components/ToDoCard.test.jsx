import React from 'react';
import { render, screen } from '../utils/utils-test';
import ToDoCard from './ToDoCard';
// import Heroes from '../constants/heroes.mock';
describe('Given the ToDoCard element', () => {
  test('Should contain the word delete', () => {
    render(
      <ToDoCard />,
    );
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(/delete/i)).toBeInTheDocument;
  });

  describe('When pressed delete button', () => {
    test('Should call delete function', () => {
      render(<ToDoCard />);
      expect(true).toBe(false);
    });
  });
});
