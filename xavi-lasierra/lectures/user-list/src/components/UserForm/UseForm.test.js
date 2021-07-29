/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';

import UseForm from './UserForm';

import users from '../../constants/users.mock';

describe('Given a UserForm component', () => {
  test('Then should render an input with testid Bret-bs', () => {
    render(
      <UseForm
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
});
