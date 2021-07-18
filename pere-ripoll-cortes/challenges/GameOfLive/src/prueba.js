const regex = /(\d+)/g;

const name = 'fila_7_columan_34';

const num = name.match(regex);

console.log(parseInt(num[1]));
