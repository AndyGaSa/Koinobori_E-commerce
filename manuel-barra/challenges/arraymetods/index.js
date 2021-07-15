// eslint-disable-next-line import/no-extraneous-dependencies
/* const { expect, test } = require('@jest/globals'); */
const counter = 0;
const arrayName = '';
let itemValue;
const largeLength = 0;

// Implementación de metodos con clases

class SkylabArray {
  constructor(array, items, large, position) {
    this.array = array;
    this.items = items;
    this.large = large;
    this.position = position;
  }

  newArrayMetod() {
    const centralArray = ['a', 'b', 'c', 'e'];
    this.array = centralArray;
    console.log(this.array);
  }

  lengthMetod() {
    for (const cont in this.array) {
      this.large = parseInt(cont);
    }
    this.large += 1;
    console.log(`Este es el lenght del array ${this.large}`);
  }

  pushMetod(itemPush) {
    this.array += `,${itemPush}`;
    console.log([this.array]);
  }

  someMetod() {

  }

  findMetod() {

  }

  filterMetod() {

  }

  mapMetod() {

  }
}

const prueba = new SkylabArray();

function arrayAction(valueParameter) {
  prueba.newArrayMetod();
  prueba.lengthMetod();
  prueba.pushMetod(valueParameter);
}

arrayAction('centinela');

/* SkylabArray.lengthMetod() */

/* const prueba = new SkylabArray(arrayName${cont}, itemValue, largeLength, position) */
