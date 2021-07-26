/* let currentList = JSON.parse(localStorage.getItem('pokemonList'));
const defaultViewIndex = false(function defaultList() {
  if (defaultViewIndex) {
    getPokemonList(0, 10).then((pokemonListData) => {
      const offset = 0;
      localStorage.setItem('offset', JSON.stringify(offset));
      localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
      currentList = JSON.parse(localStorage.getItem('pokemonList'));
      printPokemonList(currentList.results);
    });
  } else {
    printPokemonList(currentList.results);
  }
}());

function printPokemonList(pokemonArray) {
  let offset = JSON.parse(localStorage.getItem('offset'));
  const listParent = document.getElementById('pokemon-list');
  listParent.innerHTML = '';
  pokemonArray.forEach((element) => {
    offset += 1;
    listParent.innerHTML += `
    <a href="../details/details.html?id=${offset}">
        <span>${offset}</span>
        <label for="">${element.name}</label>
    </a>`;
  });
  localStorage.setItem('offset', JSON.stringify(offset));
}
function nextItems() {
  const defaultViewIndex = false;
  localStorage.setItem('defaultViewIndex', JSON.stringify(defaultViewIndex));
  const offset = JSON.parse(localStorage.getItem('offset'));
  getPokemonList(offset, 10).then((pokemonListData) => {
    localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
    currentList = JSON.parse(localStorage.getItem('pokemonList'));
    printPokemonList(currentList.results);
  });
} */

/*
el usuario entrara por primera vez en la pagina
  la pagina mostrara los primeros 10 pokemons
  esto no cambiara a no ser que se vaya a otro menu
  cuando vuelva se mantendra la ultima lista
el usuario podra elegir la cantidad de elementos
  un dropdown tendra las opciones de visualizacion
el usuario podra ver siguientes elementos de la lista
  con el boton next se sacaran los siguientes elementos
  si no hay mas elementos se volvera a mostrar lo mismo
    se ense;ara un mensaje que diga "no hay mas elementos"
el usuario podra ver elementos previos de la lista
  con el boton next se sacaran los elementos previos
   si no hay mas elementos se volvera a mostrar lo mismo
    se ense;ara un mensaje que diga "no hay mas elementos"
el usuario podra filtrar por tipo
  cada filtro activo sera acumulativo
el usuario podra filtrar por generacion
  cada filtro sera acumulativo
*/

const pokeSearch = {
  typeFilters: [],
  genFilters: [],
  offset: 0,
  quantity: 10,
  pokemonsFiltered: [],
  pokemonNormalList: [],
};
(function defaultBehaviour() {
  if (localStorage.getItem('pokemonList') !== null) {
    pokeSearch.pokemonNormalList = JSON.parse(localStorage.getItem('pokemonList'));
    printPokemonList(pokeSearch.pokemonNormalList.results);
  } else {
    getPokemonList(pokeSearch.offset, pokeSearch.quantity).then((pokemonListData) => {
      pokeSearch.pokemonNormalList = pokemonListData.results;
      localStorage.setItem('pokemonList', JSON.stringify(pokeSearch.pokemonNormalList));
      printPokemonList(pokeSearch.pokemonNormalList);
    });
  }
}());
function filterByType(event, button) {
  debugger;
  (button.classList.contains('active'))
    ? button.classList.remove('active')
    : button.classList.add('active');
  const filterRule = pokeSearch.typeFilters.indexOf(event);
  if (filterRule !== -1) {
    pokeSearch.typeFilters.splice(filterRule, 1);
  } else {
    pokeSearch.typeFilters.push(event);
  }
  obtainFilteredList();
}
function obtainFilteredList() {
  if (pokeSearch.typeFilters.length === 0) {
    pokeSearch.pokemonsFiltered = [];
  } else if (pokeSearch.typeFilters.length === 1) {
    getPokemonFilter(pokeSearch.typeFilters[0])
      .then((pokemonListData) => {
        pokeSearch.pokemonsFiltered = pokemonListData;
      });
  } else {
    pokeSearch.typeFilters.forEach((filter) => {
      getPokemonFilter(filter)
        .then((pokemonListData) => {
          pokeSearch.pokemonsFiltered = pokeSearch.pokemonsFiltered.filter((
            filterOne,
          ) => pokemonListData.pokemon.some(
            (filterTwo) => filterOne.pokemon.name === filterTwo.pokemon.name,
          ));
        });
    });
  }
  makeListToPrint();
}
function makeListToPrint() {
  if (pokeSearch.typeFilters.length === 0) {
    getPokemonList(pokeSearch.offset + pokeSearch.quantity, pokeSearch.quantity)
      .then((pokemonListData) => {
        localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
      });
  } else {
    const pokemonListData = pokeSearch.pokemonsFiltered.splice(
      pokeSearch.offset, pokeSearch.quantity,
    );
    localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
  }
  const listToPrint = JSON.parse(localStorage.getItem('pokemonList'));
  printPokemonList(listToPrint);
}

function printPokemonList(pokemonArray) {
  const listParent = document.getElementById('pokemon-list');
  listParent.innerHTML = '';
  pokemonArray.forEach((element) => {
    const pokemonID = getIDFromURL(element.url);
    listParent.innerHTML += `
    <a href="../details/details.html?id=${pokemonID}">
        <span>${pokemonID}</span>
        <label for="">${element.name}</label>
    </a>`;
  });
}

function getIDFromURL(url) {
  const urlArray = url.split('/');
  return +urlArray[urlArray.length - 2];
}

function nextItems() {
  makeListToPrint();
  printPokemonList(JSON.parse(localStorage.getItem('pokemonList')).results);
  pokeSearch.offset += pokeSearch.quantity;
}

function previousItems() {
  makeListToPrint();
  printPokemonList(JSON.parse(localStorage.getItem('pokemonList')).results);
  pokeSearch.offset -= pokeSearch.quantity;
}
