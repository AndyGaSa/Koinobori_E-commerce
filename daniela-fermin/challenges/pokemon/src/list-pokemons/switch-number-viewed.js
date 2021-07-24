const count = 1118;
currentPage = 0;
numberOfPokemons = 5;
const lastPage = Math.floor(count / numberOfPokemons);

function printRefreshedPage() {
  pokemonListPage = new PokemonList();
  pokemonListPage.clearView();
  pokemonListPage.setViewList(numberOfPokemons, currentPage);
}

function changeNumberOfPokemonsToFive() {
  numberOfPokemons = 5;
  printRefreshedPage();
}
function changeNumberOfPokemonsToTen() {
  numberOfPokemons = 10;
  printRefreshedPage();
}
function changeNumberOfPokemonsToFifty() {
  numberOfPokemons = 50;
  printRefreshedPage();
}

function previous() {
  if (currentPage === 0) return;
  currentPage -= 1;
  printRefreshedPage();
}

function next() {
  if (currentPage === lastPage) return;
  currentPage += 1;
  printRefreshedPage();
}
