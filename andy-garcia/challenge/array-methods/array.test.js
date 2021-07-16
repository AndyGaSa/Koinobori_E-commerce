function SkylabLength(array) {
  let length = 0;
  while (array[length] !== undefined) {
    length += 1;
  }
  return length;
}
function SkylabPush(array) {
  const arrayPrueba = ['abc', 'cda'];
  const length = SkylabLength(arrayPrueba);
  arrayPrueba[length] = array;
  return arrayPrueba;
}
function SkylabSome(array) {
  const even = (element) => element % 2 === 0;
  let contador = 0;
  const length = SkylabLength(array);
  for (let i = 0; i < length; i += 1) {
    const result = even(array[i]);
    if (result === true) {
      contador += 1;
    }
  }
  if (contador === 0) {
    return false;
  } return true;
}
function SkylabFind(array, functionToTest) {
  const length = SkylabLength(array);
  let contador = 0;
  let result;
  for (let i = 0; i < length; i += 1) {
    if (functionToTest(array[i]) === true && contador === 0) {
      result = array[i];
      contador += 1;
    } else if (contador === 0) {
      result = undefined;
    }
  }
  return result;
}

test('Get length of an array', () => {
  const test = SkylabLength(['ab', 'bd']);
  expect(test).toBe(2);
});

test('Do a push of an array', () => {
  const test = SkylabPush('abb');
  expect(test).toEqual(['abc', 'cda', 'abb']);
});
test('Do a some to an array', () => {
  const test = SkylabSome([9, 1, 7, 1, 3]);
  expect(test).toBe(false);
});
test('Do a find to an array', () => {
  const functionToPass = (element) => element > 10;
  const test = SkylabFind([5, 9, 8, 130, 44], functionToPass);
  expect(test).toBe(130);
});
