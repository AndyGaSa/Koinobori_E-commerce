let pokemonFavourites;

(function startPokemonList() {
  pokemonFavourites = new PokemonFavourites();
  pokemonFavourites.clearView();
  pokemonFavourites.setView();
}());

function addDeleteFavourites(id) {
  const button = event.path[1];
  if (button.classList.value.includes('active')) {
    deleteFromLocalStorage(id);
    button.classList = 'pokemon-list__favourite';
  } else {
    addToLocalStorage(id);
    button.classList = 'pokemon-list__favourite pokemon-list__favourite--active';
  }
  pokemonFavourites.clearView();
  pokemonFavourites.setView();
}

function createPokemon() {
  const input = document.getElementById('pokemon__create-input').value;

  if (input) {
    createNewPokemon(input);
    pokemonFavourites.setView();
  }
  document.getElementById('pokemon__create-input').value = '';
}
