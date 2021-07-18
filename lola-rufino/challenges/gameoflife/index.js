const genOne = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

const genOneClone = genOne.map((outer) => outer.map((inner) => inner));

const comprobate = (value) => {
  if (value === 0) {
    neighboursAround(value);
  } if (value === 1) {
    neighboursAround(value);
  }
};

const neighboursAround = () => {
  const neighbourFlat = neighbourArr.flat();
  if (neighbourFlat.reduce(reducer) === 3) {
    genOneClone[rows][columns] = 1;
  }

  for (let rows = 1; rows < genOne.length - 1; rows += 1) {
    for (let columns = 1; columns < genOne[rows].length - 1; columns += 1) {
      comprobate(genOne[rows][columns]);
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const neighbourArr = [
        [genOneClone[rows - 1][columns - 1]],
        [genOneClone[rows - 1][columns]],
        [genOneClone[rows - 1][columns + 1]],
        [genOneClone[rows][columns - 1]],
        [genOneClone[rows][columns + 1]],
        [genOneClone[rows + 1][columns - 1]],
        [genOneClone[rows + 1][columns]],
        [genOneClone[rows + 1][columns + 1]]
      ];
    }
  }
};
