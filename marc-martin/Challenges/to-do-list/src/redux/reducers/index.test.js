/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import todosReducer from './toDosReducer';

describe('Given a todos reducer function', () => {
  describe('And a different module imports reducer function', () => {
    test('Then should export properties to a different module', () => {
      const response = todosReducer;
      expect(response).toBeTruthy();
    });
  });
});
