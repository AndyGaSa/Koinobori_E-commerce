function functionLength(array) {
  let specificLength = 0;
  for (const item in array) {
    specificLength += 1;
  }
  return specificLength;
}

function functionPush(array, item) {
  const resultPush = array.concat([item]);
  return resultPush;
}

function functionPop(array) {
  let newArray = [];
  const theLengthOfThisArray = functionLength(array);
  for (let i = 0; i < theLengthOfThisArray - 1; i++) {
    newArray = functionPush(newArray, array[i]);
  }
  return newArray;
}

const arrayVector = [0, 1, 2, 3, 4, 5];
const oneItem = [6];

test('When functionLength is invoqued with arrayVector as parameter',
  () => {
    const result = functionLength(arrayVector);
    expect(result).toBe(6);
  });

test('When functionPush is invoques with arrayVector and oneItem',
  () => {
    const result = functionPush(arrayVector, oneItem);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
