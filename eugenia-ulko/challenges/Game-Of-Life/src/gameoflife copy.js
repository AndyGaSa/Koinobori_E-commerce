const matrixArray = [];
const matrixGrid = [];

// создаем одну горизонтальную линию из 40 элементов:
function matrixlineCreation() {
  for (let index = 0; index < 40; index++) {
    matrixArray.push(false);
  }
  return matrixArray;
}

// создаем массив-матрицу из 15 горизонтальных массивов
function matrixGridCreation() {
  for (let index = 0; index < 15; index++) {
    matrixGrid.push(matrixArray);
  }
  console.log(matrixGrid);
}

matrixlineCreation();
matrixGridCreation();
