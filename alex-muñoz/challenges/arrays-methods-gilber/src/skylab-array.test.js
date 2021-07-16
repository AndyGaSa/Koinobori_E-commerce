const SkylabArray = require('../index');// invocando la funcion
// require que devuelve la ruta del fichero que quermos importar.


/**
 * GIVEN
 * WHEN
 * THEN
 * AND
 * OR
 */

describe('SkylabArray class'()=>{
  describe('Given a length property',()=>{
    describe('When is first created',()=>{
      test('Then return 0',()=>{
        const myArray = new SkylabArray();
        expect(myArray.length).toBe(0);
      })
    })
  })
})

test('should have a length equals to 0', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});
