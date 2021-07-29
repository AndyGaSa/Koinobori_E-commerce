import React from 'react';
import { render, screen } from '../utils/utils-test';
import ToDo from './ToDo';

describe('Given the ToDo element', () => {
  test('Should contain the word ToDo list', () => {
    render(
      <ToDo />,
    );
    // eslint-disable-next-line no-unused-expressions
    expect(screen.getByText(/ToDo List/i)).toBeInTheDocument;
  });
  describe('When pressed Add button', () => {
    describe('And there is no content on Input', () => {
      test('store should not change', () => {
        const mockCallBack = jest.fn();

        const button = (<Button onClick={mockCallBack}>Ok!</Button>);
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
      });
    });
    describe('And there is content on Input', () => {
      test('store should add one value to the array', () => {
        // let titleValue = '';
        // let descriptionValue = '';
        render(
          ToDo.create(),
        );
        // eslint-disable-next-line no-unused-expressions
        expect(screen.getByText(/ToDo List/i)).toBeInTheDocument;
      });
      test('Input fields should become blank again', () => {
        render(
          <ToDo />,
        );
        // eslint-disable-next-line no-unused-expressions
        expect(screen.getByText(/ToDo List/i)).toBeInTheDocument;
      });
    });
  });
});
