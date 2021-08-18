const newPokemonList = new PokemonList();
let pokemon = JSON.parse(localStorage.getItem('pokemon'));
pokemon = pokemon.sort((a, b) => a.number - b.number);

if (pokemon.length) {
  newPokemonList.setPokemon();
  newPokemonList.setView();
}
