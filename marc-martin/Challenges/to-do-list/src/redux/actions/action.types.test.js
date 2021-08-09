/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import actionTypes from './actions.types';

describe('Given an action types object', () => {
  describe('And a different module imports action types object', () => {
    test('Then should export properties to a different module', () => {
      const response = actionTypes;
      expect(response).toBeTruthy();
    });
    describe('When properties are exported object must not be empty', () => {
      test('Then should export properties to a different module', () => {
        const response = actionTypes;
        expect(Object.keys(response).length > 0).toBe(true);
      });
    });
  });
});
