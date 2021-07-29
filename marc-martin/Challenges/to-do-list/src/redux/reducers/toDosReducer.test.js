/* eslint-disable react/jsx-filename-extension */
import todosReducer from './toDosReducer';

describe('Given a todos reducer function', () => {
  describe('When an action is chosen', () => {
    test('Then should return an array', () => {
      let response = todosReducer;
      response = jest.fn();
      response.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    });
  });
});
