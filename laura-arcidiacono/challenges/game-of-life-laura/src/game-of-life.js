const gridSize = 20;

const myGridArray = [];
for (let i = 0; i < gridSize; i += 1) {
  const temporalArray = [];
  for (let j = 0; j < gridSize; j += 1) {
    temporalArray.push(0);
  }
  myGridArray.push(temporalArray);
}
console.table(myGridArray);
