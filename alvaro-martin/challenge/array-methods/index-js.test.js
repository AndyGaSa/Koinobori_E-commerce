class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;
    return this.length;
  }

  pop() {
    const value = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return value;
  }
}
const cosa = new SkylabArray();
cosa.push('luca');
cosa.push('jordi');
console.log(cosa);
const po = cosa.pop();
console.log(po);

describe('SkylabArray class', () => {
  const cosa = new SkylabArray();
  describe('Given a lenght property', () => {
    describe('when is first created', () => {
      test('should have a length equal to 0', () => {
        expect(cosa.length).toBe(0);
      });
    });
  });
  describe('Given a push property', () => {
    describe('when is invoked with string', () => {
      test('should have a length equal to 1', () => {
        cosa.push('luca');
        expect(cosa[0]).toBe('luca');
      });
    });
  });
});
