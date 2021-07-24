(function pokemonDetail() {
  const { id, name } = transformUrlQueryToObject(location.search);
  const pokemonDescription = new PokemonDetailPage(id, name);
  pokemonDescription.setView();
}());
