const GameOfLife = require('./game-of-life');

describe('GameOfLife class', () => {
  describe('Given a gridArrayGenerator method', () => {
    describe('When is first created without parameter', () => {
      test('Then return an array of 7 arrays', () => {
        const myGridArray = new GameOfLife();
        const testArray = myGridArray.gridArrayGenerator();
        expect(testArray.length).toBe(5 + 2);
      });
    });
  });

  describe('Given a gridArrayGenerator method', () => {
    describe('When is first created with one parameter of 10', () => {
      test('Then return an array with 10 arrays', () => {
        const myGridArray = new GameOfLife();
        const testArray = myGridArray.gridArrayGenerator(10);
        expect(testArray.length).toBe(10 + 2);
      });
    });
  });

  describe('Given a gridArrayGenerator method', () => {
    describe('When is first created with one parameter of 10', () => {
      test('Then return an array with 10 arrays and all the values should be 0', () => {
        const myGridArray = new GameOfLife();
        const testArray = myGridArray.gridArrayGenerator(10);
        const everyZero = (value) => value === 0;
        expect(testArray.flat().every(everyZero)).toBe(true);
      });
    });
  });
  describe('Given a playRound method', () => {
    describe('When is invoked with a gridArray', () => {
      describe('And a pattern of live cells', () => {
        test('Then return an array with the new pattern of live cells', () => {
          const myGridArray = new GameOfLife();
          const testArray = myGridArray.gridArrayGenerator(3);
          testArray[2][1] = 1;
          testArray[2][2] = 1;
          testArray[2][3] = 1;
          const testRound = testArray.playRound();
          expect((testRound[1][2], testRound[2][2], testRound[3][2], testRound[2][1], testRound[2][3])).toBe((1, 1, 1, 0, 0));
        });
      });
    });
  });
});
