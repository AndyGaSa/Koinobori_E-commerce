// import React from 'react';
// import { screen, render } from '../../utils/utils-test';
import actionTypes from '../actions/action.types';
import todosReducer from './todosReducer';
// import Heroes from '../constants/heroes.mock';
describe('Given the todosReducer function', () => {
  describe('With an Array, an actionType CREATE, and a value', () => {
    test('Should return an array plus the new item', () => {
      todosReducer([], actionTypes.CREATE_TODO);
      // eslint-disable-next-line no-unused-expressions
      expect(true).toBe(false);
    });
  });
  describe('With an Array, an actionType UPDATE, and a value', () => {
    test('Should return an array plus the new item', () => {
      todosReducer([], actionTypes.UPDATE_TODO);
      // eslint-disable-next-line no-unused-expressions
      expect(true).toBe(false);
    });
  });
  describe('With an Array, an actionType DELETE, and a value', () => {
    test('Should return an array plus the new item', () => {
      todosReducer([], actionTypes.DELETE_TODO);
      // eslint-disable-next-line no-unused-expressions
      expect(true).toBe(false);
    });
  });
});
