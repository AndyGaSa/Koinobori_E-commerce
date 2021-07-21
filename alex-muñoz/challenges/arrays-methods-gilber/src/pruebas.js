map(callback) {
    let newArray;
    for (let index = 0; index < this.length; index += 1) {
      const element = callback(this[index]);
      newArray.push(element);
    }

    return newArray;
  }