(function detailsPageModel() {
  const { name } = transformUrlQueryToObject(location.search);
  const pokemonDetailsPage = new PokemonDetails(name);
  pokemonDetailsPage.setViewDetail();
}());
