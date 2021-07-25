const pokemonArray = [];
const fetchPokemon = async (srcToFind, typeFind = 'pokemon') => {
  const response = await fetch(`https://pokeapi.co/api/v2/${typeFind}/${srcToFind}`);
  const obj = await response.json();
  return {
    name: obj.name,
    order: obj.id,
    habilities: obj.abilities,
    img: obj.sprites.other.dream_world.front_default,
    type: obj.types[0].type.name
  };
};

const storePokemons = async () => {
  for (let pokemonId = 1; pokemonId <= 150; pokemonId += 1) {
    const pokemonObject = await fetchPokemon(pokemonId);
    localStorage.setItem(`${pokemonId}`, JSON.stringify(pokemonObject));
  }
};
storePokemons();

function arrayPokemons() {
  for (let pokemonId = 1; pokemonId <= 150; pokemonId += 1) {
    pokemonArray.push(JSON.parse(localStorage.getItem(`${pokemonId}`)));
  }
}
arrayPokemons();
console.log(pokemonArray);
