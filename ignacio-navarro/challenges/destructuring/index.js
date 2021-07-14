/*---- destructuring array to variables 

let agua, tierra, rest;


[agua, tierra] = ["water", "earth"]
console.log (coche)
console.log (avion)
---*/

/*---- destructuring array to variables with rest

let agua, tierra, rest;

[agua, tierra, ...rest] = ["water", "earth", "fire", "air", "electricity"];
console.log (agua)
console.log (tierra)
console.log (rest)

---*/

/*---- destructuring object to variables with rest

let agua, tierra, rest;

({agua, tierra, ...rest} = {agua: "water", tierra: "earth", fuego: "fire", aire: "air", electricidad: "electricity"});
console.log (agua)
console.log (tierra)
console.log (rest)

---*/


/*---- destructuring array to values by pairing

let elementos = ["water", "earth", "fire", "air", "electricity"];

let [agua, tierra] = elementos;

console.log (agua);
console.log (tierra);

---*/


/*---- destructuring values from array

let elements = ["water", "earth", "fire", "air", "electricity"]
const [agua, tierra, fuego, aire, electricidad] = elements;

console.log(agua)
console.log(aire)

---*/

/*---- destructuring values from array excess


let elements = ["water", "earth", "fire"]
const [agua, tierra, fuego, aire, electricidad] = elements;

console.log(agua)
console.log(aire)

---*/

/*---- asigning a default value


let elements = ["water", "earth", "fire"]
const [agua, tierra, fuego, aire = "air", electricidad] = elements;

console.log(agua)
console.log(aire)
console.log(electricidad)

---*/
