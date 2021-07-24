(function detailsPageModel() {
  const { name } = transformUrlQueryToObject(location.search);
  const pokemonDetailsPage = new PokemonDetails();

  getPokemonByName(name)
    .then((hero) => {
      pokemonDetailsPage.clearView();
      pokemonDetailsPage.setPokemonView();
    });
}());
