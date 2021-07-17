class LifeGrid {
  constructor(size) {
    this.width = 16 * size;
    this.height = 8 * size;

    for (let i = 0; i < this.height; i += 1) {
      this[this.height] = new Array(this.width).fill(0);
    }
  }

  changeCellState(x, y) {
    if (this[y][x] === 0) {
      this[y][x] = 1;
    } else {
      this[y][x] = 0;
    }
  }

  aliveNeighbours(x, y) {
    let result = 0;
    for (let i = -1; i <= 1; i += 1) {
      if (y + i < 0 || y + i >= this.height - 1) {
        break;
      }
      for (let j = -1; j <= 1; j += 1) {
        if (x + j < 0 || x + j >= this.width - 1 || (i === 0 && j === 0)) {
          break;
        }
        if (this[y + i][x + j] === 1) {
          result += 1;
        }
      }
    }
    return result;
  }

  cellCheckNext(x, y) {
    if (this[y][x] === 0 && this.aliveNeighbours(x, y) === 3) {
      return 1;
    }
    if (this[y][x] === 1 && (this.aliveNeighbours(x, y) < 2 || this.aliveNeighbours(x, y) > 3)) {
      return 0;
    }
    return this[y][x];
  }

  nextGeneration() {
    const aux = new LifeGrid();
    for (let i = 0; i < this.height; i += 1) {
      for (let j = 0; j < this.width; j += 1) {
        aux[i][j] = this.cellCheckNext(j, i);
      }
    }
    return aux;
  }
}

module.exports = LifeGrid;
