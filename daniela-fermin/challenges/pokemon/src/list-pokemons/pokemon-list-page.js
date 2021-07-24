(function printPokemonListPage() {
  const pokemonListPage = new PokemonList();
  pokemonListPage.clearView();
  const pokemonNumber = 5;
  const currentPage = 0;
  pokemonListPage.setViewList(pokemonNumber, currentPage);
}());
