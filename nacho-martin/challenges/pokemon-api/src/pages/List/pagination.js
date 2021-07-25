// (pagination * page) - pagination, pagination * page
let page = 1;
let pagination = 50;

function refresh() {
  location.reload();
  const newPage = new PokemonList(pokemonArray.slice((pagination * page) - pagination, pagination * page));
  newPage.setView();
}

function nextPage() {
  if (page * pagination < 150) {
    page += 1;
  }
  return refresh();
}

function previousPage() {
  if ((page * pagination) - pagination > 0) {
    page -= 1;
  }
  return refresh();
}
function changePagination(pokePerPage) {
  pagination = pokePerPage;
  return refresh();
}
