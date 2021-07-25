function getPokemons(howManyPokemons, whatPage) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${howManyPokemons}&offset=${whatPage}`)
    .then((response) => response.json())
    .then((pokemons) => pokemons)
    .then(({ results }) => Promise.all(results.map(({ url }) => fetch(`${url}`)
      .then((response2) => response2.json())
      .then((allPokemonStuff) => allPokemonStuff))))
    .then((pokemons2) => {
      const pokemonsList = pokemons2.map(({
        id, name, sprites, types, stats,
      }) => {
        const pokemonObj = {
          id,
          name,
          sprites: sprites.front_default,
          types: types[0].type.name,
          stats,
        };
        return pokemonObj;
      });
      return pokemonsList;
    });
}

function getPokemonById(pokemonId) {
  const pokemons = JSON.parse(localStorage.getItem('pokemons'));
  const pokemon = pokemons.find((currentPokemon) => currentPokemon.id === pokemonId);

  return pokemon
    ? Promise.resolve(pokemon)
    : Promise.reject(new Error(`There is no hero with id: ${pokemonId}`));
}

module.exports = {
  getPokemons,
  getPokemonById,
};
