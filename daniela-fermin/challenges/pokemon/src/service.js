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

function getDetailPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((pokemon) => pokemon);
}
