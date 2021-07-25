const NUMOFPOKE = 1118;

function getPokemons(limit, offset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((pokemons) => pokemons);
}

function getSinglePokemon(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((pokemons) => pokemons);
}

function filterPokemonsApi(input) {
  return getPokemons(NUMOFPOKE, 0)
    .then(({ results }) => results.filter((pokemon) => JSON.stringify(pokemon).toLowerCase()
      .includes(input.toLowerCase())));
}
