const SkylabArray = require('./skylab-arrays');

describe('SkylabArray class', () => {
  let myArray;
  let newArray;

  beforeEach(() => {
    myArray = new SkylabArray();
  });
  
  describe('Given a length property', () => {
    describe('When is first created', () => {
      test('Then return 0', () => {
        expect(myArray.length).toBe(0);
      });
    });
  });

  describe('Given a push method', () => {
    describe('When is invoked with Skylab string', () => {
      describe('And the array is empty', () => {
        beforeEach(() => {
          myArray = new SkylabArray();
        });

        test('Then return 1', () => {
          expect(myArray.push('Skylab')).toBe(1);
        });
        test('Then myArray[0]=Skylab', () => {
          myArray.push('Skylab');
          expect(myArray.length).toBe(1);
        });
      });
    });
  });
  describe('Given a pop methos', () => {
      describe('When is invoked with an array', () => {
          describe('And the array is empty', () => 
          beforeEach(() => {
              myArray = new SkylabArray();
        });

          test('Then return error', () => {
              expect(myArray.pop()).toBe('Error');
          });
          )}
  })

  descrive('Given a map method', () => {
      descrive('When is invoked', () => {
          test('Then resturn a new array', () => {
            myArray = new SkylabArray();
            const mapCallback = (value) => `Skylab: ${value}`;
            const newArray = myArray.map(mapCallback);

            expect(myArray.length).toEqual(newArray.length);
            });

            
      })
  })
});
