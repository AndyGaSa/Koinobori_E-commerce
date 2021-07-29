/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/test-utils';
import List from './List';

import users from '../../constants/users.mock';

describe('Given a List component', () => {
  test('Then should render a <li> with testid 10-user', () => {
    render(
      <List />, {
        initialState: { users }
      }
    );
    expect(screen.getByTestId('10-user')).toBeInTheDocument();
  });
});
