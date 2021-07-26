let pokemonList;
const pokemonDetails = [];
let cont = 0;
function getPokemons(limit, offset) {
  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((response) => response.json())
    .then((pokemons) => { pokemonList = pokemons; })
    .then(() => {
      pokemonList = pokemonList.results;
      pokemonList.forEach((element) => {
        fetch(element.url).then((response) => response.json())
          .then((obj) => pokemonDetails.push({
            name: obj.name,
            number: obj.id,
            img: obj.sprites.front_default,
            type: obj.types[0].type.name,
          })).then(() => {
            let pokemonLocalCheck = localStorage.getItem('pokemonDetails');
            pokemonLocalCheck = JSON.parse(pokemonLocalCheck);
            if (pokemonLocalCheck === null && limit === pokemonDetails.length) {
              localStorage.setItem('pokemonDetails', JSON.stringify(pokemonDetails));
              setLocalStorage();
            }
            if (pokemonLocalCheck !== null) {
              cont += 1;
              if (pokemonLocalCheck.length === limit && cont === 11) {
                setLocalStorage();
              }
            }
          });
      });
    });
}

getPokemons(11, 0);

function setLocalStorage() {
  const pokedexLocalCheck = localStorage.getItem('pokedex');
  if (pokedexLocalCheck === null) {
    localStorage.setItem('pokedex', JSON.stringify(pokemonList));
  }
  getLocalStorage();
}
