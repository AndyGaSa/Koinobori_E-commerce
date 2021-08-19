/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import UserList from './UserList';
import { render, screen } from '../utils/test-utils';

describe('Given a UserList component', () => {
  test('Should render UserList', () => {
    render(
      <UserList />
    );
    expect(screen.getByText(/Add User/i)).toBeInTheDocument();
  });
});
