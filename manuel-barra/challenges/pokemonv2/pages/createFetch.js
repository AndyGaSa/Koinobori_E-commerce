const allPokemon = [];
function saveArray(item) {
  allPokemon.push(item);
}

(function callFetch() {
  const totalOfPokemons = 201;
  for (let i = 1; i < totalOfPokemons; i += 1) {
    fetch(` https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((res) => res.json())
      .then((res) => saveArray(res))
      .catch((err) => err);
  }
}());
