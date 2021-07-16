const SkylabArray = require('./Array-methods');
// require the module from another file, 
// invoking the function require that returns an object

test('Length should be equal to 0'), () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0);
  
});
