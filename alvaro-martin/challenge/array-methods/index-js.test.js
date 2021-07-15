class SkyLab {
  constructor() {
    this.length = 0;
  }

  myPush(x) {
    this[this.length] = x;
    this.length += 1;
  }

  myPop() {
    if (this.length === 0) {
      return undefined;
    }
    this.length -= 1;
    delete this[this.length];
  }
}
const cosa = new SkyLab();
cosa.myPush('Alvaro');
