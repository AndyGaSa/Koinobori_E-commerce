import React from 'react';
import { fireEvent, render, screen } from '../utils/test.utils';
import Todolist from './Todolist';

describe('Given a ToDo component', () => {
  describe('When there are no todos', () => {
    beforeEach(() => {
      // act
      render(<Todolist />);
    });

    test('Then create button should be in the document', () => {
      // assert
      expect(screen.getByTestId('create-button')).toBeInTheDocument();
    });

    test('Then update button should be in the document', () => {
      // assert
      expect(screen.getByText('update')).toBeInTheDocument();
    });
  });

  describe('When there are toDos', () => {
    beforeEach(() => {
      // arrange
      const initialState = { toDos: ['Tarea 1', 'Tarea 2'] };

      // act
      render(<Todolist />, initialState);
    });

    test('Then list item should be in the document', () => {
      // assert
      expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
    });

    describe('And input change with value Buy Milk', () => {
      beforeEach(() => {
        const taskInput = screen.getByTestId('taskInput');
        fireEvent.change(taskInput, { target: { value: 'Buy Milk' } });
      });
      describe('And create button is clicked', () => {
        beforeEach(() => {
          const createButton = screen.getByTestId('create-button');
          fireEvent.click(createButton);
        });
        test('Then list-item-2 should be in the document', () => {
          const li = screen.getByTestId('list-item-2');
          expect(li).toBeInTheDocument();
        });
      });
    });

    test('Then should not add falsy strings', () => {
      const taskInput = screen.getByTestId('taskInput');
      fireEvent.change(taskInput, { target: { value: '   ' } });

      const createButton = screen.getByTestId('create-button');
      fireEvent.click(createButton);

      expect(screen.queryByTestId('list-item-2')).toBeNull();
    });

    [
      { value: 'Tarea 1 actualizada', case: 'valid', expectation: 'Tarea 1 actualizada' },
      { value: '   ', case: 'invalid', expectation: 'Tarea 1' }
    ].forEach((scenario) => {
      test(`Then should update the element value with ${scenario.case} value`, () => {
        // arrange
        const taskInput = screen.getByTestId('taskInput');
        let item = screen.queryByTestId('item-0');
        const updateButton = screen.getByTestId('update-button');

        // act
        fireEvent.click(item);

        fireEvent.change(taskInput, { target: { value: scenario.value } });

        fireEvent.click(updateButton);

        item = screen.queryByTestId('item-0');

        // assert
        expect(item.textContent).toBe(scenario.expectation);
      });
    });

    describe('And delete button is clicked', () => {
      test('Then associated element should not be in the document ', () => {
        const deleteButton = screen.getByTestId('delete-button-1');
        fireEvent.click(deleteButton);

        expect(screen.queryByTestId('item-1')).toBeNull();
      });
    });
  });
});
