class LifeGrid {
  constructor(size) {
    const width = 16 * size;
    const height = 8 * size;

    for (let i = 0; i < height; i += 1) {
      this[height] = new Array(width).fill(0);
    }
  }
}

module.exports = LifeGrid;
