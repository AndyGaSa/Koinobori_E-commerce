/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent } from '@testing-library/dom';

import { render, screen } from '../../utils/test-utils';

import users from '../../constants/users.mock';
import UserForm from './UserForm';

describe('Given a UserForm component', () => {
  test('Then should render an input with testid Bret-bs', () => {
    render(
      <UserForm
        user={users[0]}
        changeUser={() => {}}
        changeAddressUser={() => {}}
        changeCompanyUser={() => {}}
      />, {
        initialState: {
          users
        }
      }
    );
    expect(screen.getByTestId('Bret-bs')).toBeInTheDocument();
  });
  describe('When username input value is changed', () => {
    test('Then should render that value', () => {
      render(
        <UserForm />, {
          initialState: { users }
        }
      );
      fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'abc' } });
      expect(screen.getByTestId('username-input').value).toBe('abc');
    });
  });
});
