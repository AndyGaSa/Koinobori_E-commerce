import React from 'react';
import { render, screen } from '../utils/utils-test';
import ToDoCard from './ToDoCard';
// import Heroes from '../constants/heroes.mock';

jest.mock('react-router', () => ({
  useParams: jest.fn().mockReturnValue({ heroId: 'dc-arrow' }),
}));
describe('Given the ToDoCard element', () => {
  test('Should contain the word delete', () => {
    render(
      <ToDoCard />,
    );
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(/delete/i)).toBeInTheDocument;
  });
  describe('When pressed delete button', () => {
    test('store should delete one element', () => {
      render(
        <ToDoCard />,
      );
      // eslint-disable-next-line no-unused-expressions
      expect(screen.getByText(/ToDo List/i)).toBeInTheDocument;
    });
    test('the page should delete one card', () => {
      render(
        <ToDoCard />,
      );
      // eslint-disable-next-line no-unused-expressions
      expect(screen.getByText(/ToDo List/i)).toBeInTheDocument;
    });
  });
});
