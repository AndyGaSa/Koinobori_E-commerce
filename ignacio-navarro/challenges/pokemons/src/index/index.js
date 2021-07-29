function getInitialPokemonList() {
  const offset = 0;
  const quantity = 0;
  if (localStorage.getItem('pokemonList') !== null) {
    const pokemonList = JSON.parse(localStorage.getItem('pokemonList'));
    paintPokemonList(pokemonList.results);
  } else {
    getPokemonList(offset, quantity).then((pokemonListData) => {
      const pokemonList = pokemonListData;
      localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
      paintPokemonList(pokemonList.results);
    });
  }
}
function nextAndPreviousPokemonList(operation) {
  const pokemonList = JSON.parse(localStorage.getItem('pokemonList'));
  const nextOrPrevious = {
    next: (pokemonList.next === null),
    previous: (pokemonList.previous === null),
  };
  if (!nextOrPrevious[operation]) {
    const offset = +pokemonList[operation].split('?')[1].split('&')[0].split('=')[1];
    const quantity = +pokemonList[operation].split('?')[1].split('&')[1].split('=')[1];
    getPokemonList(offset, quantity).then((pokemonListData) => {
      const pokemonList = pokemonListData;
      localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
      paintPokemonList(pokemonList.results);
    });
  }
}

const filterPkmn = {
  activeRules: [],
  pokemonList: [],
};
function filterByType(event, button) {
  (button.classList.contains('active'))
    ? button.classList.remove('active')
    : button.classList.add('active');
  if (filterPkmn.activeRules.indexOf(event) !== -1) {
    filterPkmn.activeRules.splice(filterPkmn.activeRules.indexOf(event), 1);
  } else {
    filterPkmn.activeRules.push(event);
  }
  obtainFilteredList();
}
function obtainFilteredList() {
  if (filterPkmn.activeRules.length === 0) {
    getInitialPokemonList();
  } else {
    getPokemonFilter(filterPkmn.activeRules[0])
      .then((pokemonListData) => {
        filterPkmn.pokemonList = pokemonListData.pokemon;
      });
    filterPkmn.activeRules.forEach((type) => {
      getPokemonFilter(type)
        .then((pokemonListData) => {
          console.log(pokemonListData.pokemon);
          console.log(filterPkmn.pokemonList);
          filterPkmn.pokemonList = filterPkmn.pokemonList.filter((o1) => pokemonListData.pokemon.some((o2) => o1.pokemon.name === o2.pokemon.name));
          paintPokemonFilter(filterPkmn.pokemonList.splice(0, 10));
        });
    });
  }
}

function getFilteredPokemonList() {
}
function changeOffsetPokemonList() {
}
function cleanPokemonList() {
}
function setPokemonList() {
}

function getIDFromURL(url) {
  const urlArray = url.split('/');
  return +urlArray[urlArray.length - 2];
}
function paintPokemonList(pokemonArray) {
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

function paintPokemonFilter(pokemonArray) {
  const listParent = document.getElementById('pokemon-list');
  listParent.innerHTML = '';
  if (pokemonArray.length === 0) {
    listParent.innerHTML += '<p>There is no pokemons with this filters</p>';
  } else {
    pokemonArray.forEach((element) => {
      const pokemonID = getIDFromURL(element.pokemon.url);
      listParent.innerHTML += `
      <a href="../details/details.html?id=${pokemonID}">
          <span>${pokemonID}</span>
          <label for="">${element.pokemon.name}</label>
      </a>`;
    });
  }
}

getInitialPokemonList();
