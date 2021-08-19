import usersReducer from './usersReducer';

import actionTypes from '../actions/action.types';
import users from '../../constants/users.mock';

describe('Given an usersReducer function', () => {
  describe('When is invoked with the first parameter users', () => {
    describe('And action type Create with newUsername Pepe', () => {
      let newUsers;
      beforeEach(() => {
        newUsers = usersReducer(users, {
          type: actionTypes.CREATE_USER,
          newUsername: 'Pepe'
        });
      });
      test('Then newUsers[10].id should be 11', () => {
        expect(newUsers[10].id).toBe(11);
      });
      test('Then newUsers[10].username should be Pepe', () => {
        expect(newUsers[10].username).toBe('Pepe');
      });
    });
    describe('And action type Delete', () => {
      let newUsers;
      beforeEach(() => {
        newUsers = usersReducer(users, {
          type: actionTypes.DELETE_USER,
          userId: 8
        });
      });
      test('Then newUsers.length should be 9', () => {
        expect(newUsers.length).toBe(9);
      });
      test('Then newUsers should not contain Maxime_Nienow username', () => {
        expect(newUsers.some(({ username }) => username === 'Maxime-Nienow')).toBe(false);
      });
    });
    describe('And action type Delete', () => {
      let newUsers;
      beforeEach(() => {
        newUsers = usersReducer(users, {
          type: actionTypes.UPDATE_USER,
          userData: { id: 2, username: 'Fran' }
        });
      });
      test('Then newUsers.length should be equal to users length', () => {
        expect(newUsers.length).toBe(users.length);
      });
      test('Then newUsers[1].username should be Fran', () => {
        expect(newUsers[1].username).toBe('Fran');
      });
    });
  });
});
