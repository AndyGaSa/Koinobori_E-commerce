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
};

function getIDFromURL(url) {
  const urlArray = url.split('/');
  return +urlArray[urlArray.length - 2];
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

(function defaultBehaviour() {
  if (localStorage.getItem('pokemonList') !== null) {
    printPokemonList(JSON.parse(localStorage.getItem('pokemonList')).results);
  } else {
    getPokemonList(pokeSearch.offset, pokeSearch.quantity).then((pokemonListData) => {
      localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
      printPokemonList(JSON.parse(localStorage.getItem('pokemonList')).results);
    });
  }
}());

function nextItems() {
  getPokemonList(pokeSearch.offset + pokeSearch.quantity, pokeSearch.quantity)
    .then((pokemonListData) => {
      localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
      printPokemonList(JSON.parse(localStorage.getItem('pokemonList')).results);
    });
  pokeSearch.offset += pokeSearch.quantity;
}
function previousItems() {
  getPokemonList(pokeSearch.offset - pokeSearch.quantity, pokeSearch.quantity)
    .then((pokemonListData) => {
      localStorage.setItem('pokemonList', JSON.stringify(pokemonListData));
      printPokemonList(JSON.parse(localStorage.getItem('pokemonList')).results);
    });
  pokeSearch.offset -= pokeSearch.quantity;
}

function filterByType(event) {
  const indexOfEvent = pokeSearch.typeFilters.indexOf(event);
  if (indexOfEvent !== -1) {
    pokeSearch.typeFilters.splice(indexOfEvent, 1);
  } else {
    pokeSearch.typeFilters.push(event);
  }
  obtainFilteredList();
}
function filterByGen(event) {
  pokeSearch.genFilters.push(event);
}
function obtainFilteredList() {
  let totalList = [];
  const filters = pokeSearch.typeFilters;
  if (filters.length === 0) {
    localStorage.setItem('filteredPokemons', JSON.stringify(totalList));
  } else if (filters.length === 1) {
    const currentFilterList = getPokemonFilter(filters[0])
      .then((pokemonListData) => {
        localStorage.setItem('filteredPokemons', JSON.stringify(pokemonListData.pokemon));
      });
  } else {
    filters.forEach((filter) => {
      const currentFilterList = getPokemonFilter(filter)
        .then((pokemonListData) => {
          totalList = totalList.filter((filterOne) => pokemonListData.pokemon.some(
            (filterTwo) => filterOne.pokemon.name === filterTwo.pokemon.name,
          ));
          localStorage.setItem('filteredPokemons', JSON.stringify(totalList));
        });
    });
  }
}

/*
  function obtainFilteredList() {
    const filters = pokeSearch.typeFilters;
    filters.forEach((filter) => {
      const currentFilterList = getPokemonFilter(filter)
        .then((pokemonListData) => {
          // debugger;
          let totalList = JSON.parse(localStorage.getItem('filteredPokemons'));
          if (pokeSearch.pokemonsFiltered.length === 0) {
            totalList = pokemonListData.pokemon;
          } else {
            totalList = totalList.filter((filterOne) => pokemonListData.pokemon.some(
              (filterTwo) => filterOne.pokemon.name === filterTwo.pokemon.name,
            ));
          }
          localStorage.setItem('filteredPokemons', JSON.stringify(totalList));
        });
    });
  }
  */
