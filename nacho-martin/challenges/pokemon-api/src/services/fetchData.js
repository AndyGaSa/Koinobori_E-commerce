let pokemon;

const pokeList = async (offset, limit) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemons = await data.json();
  const pokeArray = pokemons.results;
  const pokeUrls = pokeArray.map((pokemon) => pokemon.url);
  return pokeUrls;
};

async function pokemonFetched(offset, limit) {
  pokemon = await pokeList(offset, limit);
  return pokemon;
}

const pokeObj = [];
async function printPokemon() {
  await pokemonFetched(0, 20);
  await pokemon.forEach((element) => {
    fetch(`${element}`)
      .then((response) => response.json())
      .then((data) => pokeObj.push({
        name: data.name,
        order: data.order,
        img: data.sprites.other.dream_world.front_default
      }));
  });
  return pokeObj;
}

printPokemon();
