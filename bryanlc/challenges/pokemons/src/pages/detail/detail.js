(function detailModel() {
  const { pokemonId } = urlToObject(location.search);
  const details = new DetailPage();

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    .then((response) => response.json())
    .then((resultData) => {
      details.getpokemon(resultData);
      details.setview();
    })
    .catch((error) => new Error(error));
}());
