// let pokeList;

// async function getPokemon() {
//   pokeList = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
//     .then((response) => response.json())
//     .then((data) => data.results);
//   return pokeList;
// }
// let pokePrueba;
// async function gimmeMyFuckongPokemon() {
//   return pokePrueba = await getPokemon();
// }

// console.log(pokePrueba);
let pokemon;

const pokeList = async (offset, limit) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons = await data.json();
  return pokemons.results;
};

async function pokemonFetched(offset, limit) {
  pokemon = await pokeList(offset, limit);
  return pokemon;
}
pokemonFetched(0, 20);

// Todo: mapear pokemon que realice un fetch de la url y devuelva un array con objetos que tengan directamente las propiedades a pintar
