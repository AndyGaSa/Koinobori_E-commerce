/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent } from '@testing-library/dom';
import * as reactRedux from 'react-redux';

import { render, screen } from '../../utils/test-utils';

import Detail from './Detail';

import actionTypes from '../../redux/actions/action.types';
import users from '../../constants/users.mock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ userId: '10' })
}));

describe('Given a Details component', () => {
  test('Then should render username Moriah.Stanton', () => {
    render(
      <Detail />, {
        initialState: { users }
      }
    );
    expect(screen.getByText(/Moriah.Stanton/i)).toBeInTheDocument();
  });
  describe('When update user button is clicked', () => {
    test('Then dispatch should be called with parameters {type: UPDATE_USER, userData: users[9]', () => {
      const dispatch = jest.fn();
      const useDispatch = jest.spyOn(reactRedux, 'useDispatch');
      useDispatch.mockReturnValue(dispatch);
      render(
        <Detail />, {
          initialState: { users }
        }
      );
      fireEvent.click(screen.getByTestId('update-button'));
      expect(dispatch).toHaveBeenCalledWith({ type: actionTypes.UPDATE_USER, userData: users[9] });
    });
  });
});
