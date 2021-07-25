const NUMOFPOKE = 493;
let favouritePokemons;

function saveFavouritesToLocalStorage(element) {
  localStorage.setItem('favouritePokemons', JSON.stringify(element));
}

(function initializeLocalStorage() {
  favouritePokemons = JSON.parse(localStorage.getItem('favouritePokemons'));
  if (!favouritePokemons) {
    favouritePokemons = [];
    saveFavouritesToLocalStorage(favouritePokemons);
  }
}());

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

function addToLocalStorage(id) {
  getSinglePokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((pokemon) => {
      favouritePokemons.push(pokemon);
      console.log(favouritePokemons);
      saveFavouritesToLocalStorage(favouritePokemons);
    });
}

function deleteFromLocalStorage(idRemove) {
  favouritePokemons = favouritePokemons.filter(({ id }) => id !== +idRemove);
  console.log(favouritePokemons);
  saveFavouritesToLocalStorage(favouritePokemons);
}
