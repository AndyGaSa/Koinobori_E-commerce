let pokemonDescription;

(function pokemonDetail() {
  const { id, name, from } = transformUrlQueryToObject(location.search);
  pokemonDescription = new PokemonDetailPage(id, name, from);
  pokemonDescription.setView();
}());

function shinyPhoto() {
  pokemonDescription.printPhotoShiny();
}

function normalPhoto() {
  pokemonDescription.printPhoto();
}

function showAbility(name) {
  pokemonDescription.printAbilityDescription(name);
}

function closeAbility() {
  pokemonDescription.constructor.closeAbilityDescription();
}
