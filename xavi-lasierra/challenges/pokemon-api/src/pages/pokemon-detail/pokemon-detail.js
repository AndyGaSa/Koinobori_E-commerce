(function pokemonDetail() {
  const { name } = transformUrlQueryToObject(location.search);
  const pokemonDescription = new PokemonDetailPage(name);
  pokemonDescription.setView();
}());
