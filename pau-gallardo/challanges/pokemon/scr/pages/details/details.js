(function detailsPageModel() {
  const { pokemonId } = transformUrlQueryToObject(location.search);
  const details = new DetailsPage();

  getPokemonById(+pokemonId)
    .then((Pokemon) => {
      details.setHero(Pokemon);
      details.setView();
    });
}());
