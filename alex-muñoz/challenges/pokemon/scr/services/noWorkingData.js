let pokemonUrlArray;
const allPokemonUrlFecthed = async (offset, limit) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons = await data.json();
  const pokeArray = pokemons.results;
  const pokeUrls = pokeArray.map((pokemon) => pokemon.url);
  return pokeUrls;
};
async function createArrayFromFetchedUrls(offset, limit) {
  pokemonUrlArray = await allPokemonUrlFecthed(offset, limit);
  return pokemonUrlArray;
}
const pokemonObjectsArray = [];
async function addPokemonValues(offset, limit) {
  await createArrayFromFetchedUrls(offset, limit);
  await pokemonUrlArray.forEach((element) => {
    fetch(`${element}`)
      .then((response) => response.json())
      .then((data) => pokemonObjectsArray.push({
        name: data.name,
        order: data.order,
        img: data.sprites.other.dream_world.front_default
      }));
  });
  return pokemonObjectsArray;
}
addPokemonValues(0, 100);
