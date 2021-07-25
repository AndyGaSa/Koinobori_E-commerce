let pokemonList;
let currentPage;
let pokemonsPerPage;

function setButtons(page, lastPage) {
  document.querySelectorAll('.navigation__previous').forEach((button) => {
    button.classList = 'navigation__previous';
  });
  document.querySelectorAll('.navigation__next').forEach((button) => {
    button.classList = 'navigation__next';
  });

  if (page === 0) {
    document.querySelectorAll('.navigation__previous').forEach((button) => {
      button.classList = 'navigation__previous hide';
    });
  } else if (page === lastPage) {
    document.querySelectorAll('.navigation__next').forEach((button) => {
      button.classList = 'navigation__next hide';
    });
  }
}

function setInput(page, lastPage) {
  const navigationInput = document.getElementById('navigation__input');
  navigationInput.value = currentPage + 1;
  navigationInput.max = (lastPage + 1).toString();
  document.getElementById('navigation__input__max').innerText = lastPage + 1;
}

function setNavigator(page, lastPage) {
  setInput(page, lastPage);
  setButtons(page, lastPage);
}

function printPage(numberOfPokemons, page) {
  pokemonList.clearView();
  setNavigator(page, Math.floor(NUMOFPOKE / numberOfPokemons));
  pokemonList.setView(numberOfPokemons, page);
}

(function startPokemonList() {
  pokemonList = new PokemonList();
  pokemonsPerPage = 20;
  currentPage = 0;
  printPage(pokemonsPerPage, currentPage);
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
      currentPage = Math.floor(NUMOFPOKE / pokemonsPerPage);
      break;
    default:
      currentPage = 0;
      break;
  }
  printPage(pokemonsPerPage, currentPage);
}

function changeNumberOfPokemons() {
  const numberOfPokemons = document.getElementById('navigation__pokemon-number').value;
  currentPage = Math.floor((currentPage * pokemonsPerPage) / numberOfPokemons);
  pokemonsPerPage = numberOfPokemons;
  printPage(pokemonsPerPage, currentPage);
}

function changePageByNumber() {
  const page = Math.floor(document.getElementById('navigation__input').value);
  const { max } = document.getElementById('navigation__input');

  if (page) {
    if (page < 1) {
      currentPage = 0;
    } else if (page > +max) {
      currentPage = +max - 1;
    } else {
      currentPage = page - 1;
    }
    printPage(pokemonsPerPage, currentPage);
  }
}

function filterPokemons() {
  const input = document.getElementById('search__bar').value.trim();

  if (input) {
    filterPokemonsApi(input)
      .then((pokemons) => Promise.all(pokemons.map(({ url }) => getSinglePokemon(url)))
        .then((pokemonsInfo) => {
          pokemonList.setPokemons(pokemonsInfo);
          hideButtons();
        }));
  } else {
    printPage(pokemonsPerPage, currentPage);
    showButtons();
  }
}

function showButtons() {
  document.getElementById('navigation__navigator').classList = 'navigation__navigator';
  document.getElementById('navigation__bottom').classList = 'navigation navigation--center';
}

function hideButtons() {
  document.getElementById('navigation__navigator').classList = 'navigation__buttons hide';
  document.getElementById('navigation__bottom').classList = 'navigation navigation--center hide';
}

function addDeleteFavourites(id) {
  const button = event.path[1];
  if (button.classList.value.includes('active')) {
    deleteFromLocalStorage(id);
    button.classList = 'pokemon-list__favourite';
  } else {
    addToLocalStorage(id);
    button.classList = 'pokemon-list__favourite pokemon-list__favourite--active';
  }
}

function findInFavourites(idFind) {
  return favouritePokemons.find(({ id }) => id === idFind);
}
