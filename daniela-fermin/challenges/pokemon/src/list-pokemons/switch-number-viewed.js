const count = 1118;
let currentPage = 0;
const lastPage = count / numberOfPokemon;

function changeNumberOfPokemons() {}

function previous() {
  if (currentPage === 0) return;
  currentPage -= 1;
  clearView();
  setViewList();
}

function next() {
  if (currentPage >= 0) {
    currentPage += 1;
    clearView();
    setViewList();
  }
}
