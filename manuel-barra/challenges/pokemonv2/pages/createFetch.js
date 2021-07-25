const allPokemon = [];
(function callFetch() {
  const totalOfPokemons = 201;
  for (let i = 1; i < totalOfPokemons; i += 1) {
    fetch(` https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => res.json())
      .then((res) => allPokemon.push(res))
      .catch((err) => err);
  }
}());
