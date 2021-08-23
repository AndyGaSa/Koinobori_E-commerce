const { getIndex } = require('./mainController');
const User = require('..');

describe('Given mainController', () => {
  describe('When getIndex is triggered', () => {
    describe('And there is no problems', () => {
      test('Should call res.render', () => {
        // arrange
        const req = {
          todoList: {},
        };
        const res = {
          render: jest.fn(),
        };

        controller.getIndex(req, res);

        expect(res.render).toHaveBeenCalled();
        // act
        // assert
      });
    });
  });
});
