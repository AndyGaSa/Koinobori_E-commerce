const SkylabArray = require('./index');// invocando la funcion
// require que devuelve la ruta del fichero que quermos importar.

test('should have a length equals to 0', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
});
