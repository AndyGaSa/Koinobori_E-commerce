/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '../../utils/test-utils';
import List from './List';

import users from '../../constants/users.mock';
import actionTypes from '../../redux/actions/action.types';

describe('Given a List component', () => {
  test('Then should render a <li> with testid 10-user', () => {
    render(
      <List />, {
        initialState: { users }
      }
    );
    expect(screen.getByTestId('10-user')).toBeInTheDocument();
  });
  describe('When newUsername input value is changed', () => {
    test('Then should call setNewUsername function', () => {
      render(
        <List />, {
          initialState: { users }
        }
      );
      fireEvent.change(screen.getByTestId('create-input'), { target: { value: 'a' } });
      expect(screen.getByTestId('create-input').value).toBe('a');
    });
  });
  describe('When create user button is clicked with a userName in the input', () => {
    test('Then the input should be empty', () => {
      render(
        <List />, {
          initialState: { users }
        }
      );

      fireEvent.change(screen.getByTestId('create-input'), { target: { value: 'Pepe' } });
      fireEvent.click(screen.getByTestId('create-button'));
      expect(screen.getByTestId('create-input').value).toBe('');
    });
  });
});
