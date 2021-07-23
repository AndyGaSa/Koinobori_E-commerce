let pokemonList;

(function startHeroList() {
  const currentPage = 0;
  const numberOfPokemons = 50;
  pokemonList = new PokemonList();
  changePage(numberOfPokemons, currentPage);
}());

function changePage(numberOfPokemons, currentPage) {
  pokemonList.setView(numberOfPokemons, currentPage);
}
