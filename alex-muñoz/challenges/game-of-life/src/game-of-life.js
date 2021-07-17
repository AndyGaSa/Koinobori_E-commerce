const genOne = [[0, 0, 0], [0, 0, 0], [0, 0, 0,]];
const genTwo = [];
const flat = genOne.flat();
const reducer = (accumulator, currentValue) => accumulator + currentValue;
function mainLoop() {
  for (let rows = 0; rows < genOne.length; rows += 1) {
    for (let columns = 0; columns < genOne[rows].length; columns += 1) {
      if (genOne[rows][columns] === 0 && flat.reduce(reducer){
          return true
      }
    }
  }
  console.log(reducer);
  console.log(genOne);
}
mainLoop();
