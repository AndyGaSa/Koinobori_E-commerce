function getPokemonList(offset, quantity) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${quantity}`)
    .then((response) => response.json())
    .then((pokemons) => pokemons);
}
function getPokemonFromApi(searchInput) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`)
    .then((response) => response.json())
    .then((pokemonDetail) => pokemonDetail);
}
