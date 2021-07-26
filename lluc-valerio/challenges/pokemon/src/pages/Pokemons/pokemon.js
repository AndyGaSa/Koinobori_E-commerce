/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// ************** GLOBAL VARS ***********
const pokemon = new Pokemon();
const foundElements = [];
let numElementPage = 8;
// ************** FUNCTIONS ************
async function pokemonDetail(url) {
  try {
    const pokeInfo = await getPokemonInfo(url);
    return pokeInfo.sprites.other['official-artwork'].front_default;
  } catch (error) {
    alert(`Error waiting api: ${error}`);
    return null;
  }
}

async function setView(currentPokemon, currentArray = []) {
  const domParent = document.getElementById('pokemon-list__items');
  const domInput = document.getElementById('controls__num-per-page-input');
  const domSpan = document.getElementById('controls__actual-page');
  const domPrevButton = document.getElementById('prev-button-top');
  const domNextButton = document.getElementById('next-button-top');
  const domPrevButtonBottom = document.getElementById('prev-button-bottom');
  const domNextButtonBottom = document.getElementById('next-button-bottom');

  const currentPage = getStorage('currentPage');
  const maxPages = Math.ceil(getStorage('numPokemons') / +numElementPage);

  let pokeArray = [];
  if (currentArray.length === 0) {
    pokeArray = pokemon.allPokemons;
  } else {
    pokeArray = currentArray;
  }

  domParent.innerHTML = '';
  domInput.value = numElementPage;

  domSpan.innerHTML = `${getStorage('currentPage')}/${maxPages}`;

  if (+currentPage <= 1) {
    domPrevButton.style.visibility = 'hidden';
    domPrevButtonBottom.style.visibility = 'hidden';
  } else {
    domPrevButton.style.visibility = 'visible';
    domPrevButtonBottom.style.visibility = 'visible';
  }
  if (+currentPage >= maxPages) {
    domNextButton.style.visibility = 'hidden';
    domNextButtonBottom.style.visibility = 'hidden';
  } else {
    domNextButton.style.visibility = 'visible';
    domNextButtonBottom.style.visibility = 'visible';
  }
  // eslint-disable-next-line no-param-reassign
  for (currentPokemon; currentPokemon < +numElementPage * +currentPage; currentPokemon += 1) {
    // debugger;
    const domPoke = document.createElement('div');
    const domPokePicture = document.createElement('div');
    const domPokeInfo = document.createElement('div');
    const domPicture = document.createElement('img');

    domPoke.classList.add('pokemon-item');
    domPokePicture.classList.add('pokemon-item__picture');
    domPokeInfo.classList.add('pokemon-item__info');

    // eslint-disable-next-line no-await-in-loop
    const pictureUrl = await pokemonDetail(pokeArray[currentPokemon].url);
    // const pictureUrl = await pokemonDetail(pokemon.allPokemons[currentPokemon].url);
    domPicture.src = pictureUrl;
    domPokePicture.appendChild(domPicture);

    domPicture.alt = `${pokeArray[currentPokemon].name} front picture`;
    // domPicture.alt = `${pokemon.allPokemons[currentPokemon].name} front picture`;

    domPokeInfo.innerHTML = pokeArray[currentPokemon].name;
    // domPokeInfo.innerHTML = pokemon.allPokemons[currentPokemon].name;

    domPoke.appendChild(domPokePicture);
    domPoke.appendChild(domPokeInfo);
    domParent.appendChild(domPoke);
  }
}

function actualPageCalculation() {
  const actualPage = getStorage('currentPage');
  return (+numElementPage * (+actualPage - 1));
}

function nextPage() {
  const actualPage = getStorage('currentPage');
  setStorage('currentPage', +actualPage + 1);

  setView(actualPageCalculation());
}

function previousPage() {
  const actualPage = getStorage('currentPage');
  setStorage('currentPage', +actualPage - 1);

  setView(actualPageCalculation());
}

function loadPage() {
  pokemon.loadPokemons(getStorageParse('allPokes'), getStorage('numPokemons'));
  localStorage.setItem('currentPage', 1);
  setView(0);
}

// Function threw when pokemon.html is loaded.
(function onLoad() {
  if (checkStorage('allPokes')) {
    loadPage();
  }
}());

async function reloadPokeEvent() {
  try {
    await reloadPokeApiFull();
    loadPage();
  } catch (error) {
    alert(`Error waiting api: ${error}`);
  }
}

function numPokesPerPage() {
  numElementPage = document.getElementById('controls__num-per-page-input').value;
  setView(actualPageCalculation());
}

function searchPokemon() {
  const domInput = document.getElementById('pokemon-list__search-input');

  // debugger;
  if (domInput.value.trim().length <= 0) {
    alert('You have to write a name to search something.');
    setView(actualPageCalculation());
  } else {
    pokemon.allPokemons.forEach((poke) => {
      if (poke.name.includes(domInput.value)) {
        foundElements.push(poke);
      }
    });
    if (foundElements.length <= 0) {
      alert('No data found.');
    } else {
      setView(0, foundElements);
    }
  }
}
/** ****************************************
/******************************************
/******************************************
/******************************************
function addPokemonEvent() {}
function deletePokemonEvent() {}
function searchPokemonEvent() {}
 */
