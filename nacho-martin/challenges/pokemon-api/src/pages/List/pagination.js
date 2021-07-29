// (pagination * page) - pagination, pagination * page
let page = 1;
let pagination = 50;

function refresh() {
  const newPage = new PokemonList(pokemonArray.slice((pagination * page)
  - pagination, pagination * page));
  newPage.setView();
}
function deleteOldContent() {
  const oldContent = document.querySelector('.pokemon-main');
  oldContent.innerHTML = '';
}

function nextPage() {
  if (page * pagination < 150) {
    page += 1;
    deleteOldContent();
    refresh();
  }
}

function previousPage() {
  if ((page * pagination) - pagination > 0) {
    page -= 1;

    deleteOldContent();
    refresh();
  }
}
function changePagination(pokePerPage) {
  pagination = pokePerPage;
  page = 1;
  if (page < 1) page = 1;
  deleteOldContent();
  refresh();
}
