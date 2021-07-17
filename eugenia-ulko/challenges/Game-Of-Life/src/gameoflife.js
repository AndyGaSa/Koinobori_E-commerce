const matrixArray = [];
const matrixGrid = [];

// создаем одну горизонтальную линию из 40 элементов:
function matrixlineCreation() {
  for (let index = 0; index < 40; index++) {
    matrixArray.push(false);
  }
  return matrixArray;
}

// создаем массив-матрицу из 30 горизонтальных массивов
function matrixGridCreation() {
  for (let index = 0; index < 30; index++) {
    matrixGrid.push(matrixArray);
  }
  console.log(matrixGrid);
}

matrixlineCreation();
matrixGridCreation();

function enableCell() {
  document.getElementById('btn01').enabled = true;
}
