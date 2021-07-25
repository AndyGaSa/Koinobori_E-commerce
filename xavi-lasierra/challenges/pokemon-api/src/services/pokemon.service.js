const NUMOFPOKE = 151;
const ALLPOKE = 900;
let favouritePokemons;

function saveFavouritesToLocalStorage(element) {
  favouritePokemons.sort((a, b) => a.id - b.id);
  localStorage.setItem('favouritePokemons', JSON.stringify(element));
}

(function initializeLocalStorage() {
  favouritePokemons = JSON.parse(localStorage.getItem('favouritePokemons'));
  if (!favouritePokemons) {
    favouritePokemons = [];
    saveFavouritesToLocalStorage(favouritePokemons);
    localStorage.setItem('nextId', NUMOFPOKE + 1);
  }
}());

function getPokemons(limit, offset) {
  let number = limit;
  if (limit + offset >= NUMOFPOKE - 1) {
    number = NUMOFPOKE - offset;
  }

  return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${offset}`)
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
      saveFavouritesToLocalStorage(favouritePokemons);
    });
}

function deleteFromLocalStorage(idRemove) {
  favouritePokemons = favouritePokemons.filter(({ id }) => id !== +idRemove);
  saveFavouritesToLocalStorage(favouritePokemons);
}

function createNewPokemon(name) {
  const randomNumber = Math.floor(Math.random() * ALLPOKE);
  const nextId = +localStorage.getItem('nextId');
  favouritePokemons.push({
    created: true,
    id: nextId,
    name: name.toLowerCase(),
    types: [],
    sprites: [`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomNumber}.png`, `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${randomNumber}.png`]
  });
  saveFavouritesToLocalStorage(favouritePokemons);
  localStorage.setItem('nextId', nextId + 1);
}

function updatePokemon(idChange, newProperties) {
  favouritePokemons = favouritePokemons
    .map((pokemon) => (pokemon.id === +idChange ? { ...pokemon, ...newProperties }
      : pokemon));
  saveFavouritesToLocalStorage(favouritePokemons);
}
