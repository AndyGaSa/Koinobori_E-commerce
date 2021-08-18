/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ToDo from './ToDo';
import { render, screen } from '../utils/utils.test';

describe('Given a ToDoList component', () => {
  test('Should render an add button', () => {
    render(
      <ToDo />
    );
    expect(screen.getByText(/To_Do_List/i)).toBeInTheDocument();
  });
});
