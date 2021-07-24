let pokemonList;
let currentPage;
let numberOfPokemons;
const NUMOFPOKE = 150;

function printPage(numberOfPokemons, currentPage) {
  pokemonList.clearView();
  pokemonList.setView(numberOfPokemons, currentPage);
}

(function startHeroList() {
  currentPage = 0;
  numberOfPokemons = 50;
  pokemonList = new PokemonList();
  printPage(numberOfPokemons, currentPage);
}());

function changePage(option) {
  switch (option) {
    case 'first':
      currentPage = 0;
      break;
    case 'previous':
      currentPage -= 1;
      break;
    case 'next':
      currentPage += 1;
      break;
    case 'last':
      currentPage = NUMOFPOKE / numberOfPokemons;
      break;
    default:
      currentPage = 0;
      break;
  }
  printPage(numberOfPokemons, currentPage);
}
