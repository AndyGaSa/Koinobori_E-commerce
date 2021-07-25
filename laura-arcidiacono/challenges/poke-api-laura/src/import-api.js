const pokeArray = [];
const firstPokesToShow = 5;
const maxPokesInMyArray = 350;
let currentPage = 1;
let numberOfCardsToShowPerPage = 5;

function createElementWithClass(type, className) {
  const element = document.createElement(type);
  element.className = className;
  return element;
}
function getBackToPokemonList() {
  createPokeCardForPage(numberOfCardsToShowPerPage, numberOfCardsToShowPerPage * (currentPage - 1));
  document.getElementById('section__pagination').style.visibility = 'visible';
}

function detailsPokeCard(item) {
  const sectionList = document.getElementById('section__list');
  sectionList.innerHTML = '';
  const pokeName = createElementWithClass('h3', 'list__poke-name');
  pokeName.innerHTML = `${pokeArray[item].name}`;
  sectionList.appendChild(pokeName);
  const pokeImg = createElementWithClass('img', 'list__poke-img');
  pokeImg.src = `${pokeArray[item].sprites.front_default}`;
  pokeImg.alt = `Imagen de ${pokeArray[item].name}`;
  sectionList.appendChild(pokeImg);
  const backButton = createElementWithClass('button', 'details__backButton');
  backButton.innerHTML = 'Go back';
  backButton.onclick = function () { getBackToPokemonList(); };
  sectionList.appendChild(backButton);
  document.getElementById('section__pagination').style.visibility = 'hidden';
}

function createPokeCard(item) {
  const sectionList = document.getElementById('section__list');
  const pokeCard = createElementWithClass('div', 'list__poke-card');
  sectionList.appendChild(pokeCard);
  pokeCard.onclick = function () { detailsPokeCard(item); };

  const pokeName = createElementWithClass('h3', 'list__poke-name');
  pokeName.innerHTML = `${pokeArray[item].name}`;
  pokeCard.appendChild(pokeName);

  const pokeImg = createElementWithClass('img', 'list__poke-img');
  pokeImg.src = `${pokeArray[item].sprites.front_default}`;
  pokeImg.alt = `Imagen de ${pokeArray[item].name}`;
  pokeCard.appendChild(pokeImg);

  const pokeId = createElementWithClass('h4', 'list__poke-id');
  pokeId.innerHTML = `Id: ${pokeArray[item].id}`;
  pokeCard.appendChild(pokeId);
}

function createPokeCardForPage(limit, offset) {
  document.getElementById('section__list').innerHTML = '';
  pokeArray.sort((a, b) => (a.id - b.id));
  let limitPlusOffset = limit + offset;
  if (limitPlusOffset > pokeArray.length) {
    limitPlusOffset = pokeArray.length;
  }
  for (let item = offset; item < limitPlusOffset; item += 1) {
    createPokeCard(item);
  }
}

function getValueSelected() {
  numberOfCardsToShowPerPage = document.getElementById('form__view-num').value;
  numberOfCardsToShowPerPage = Number(numberOfCardsToShowPerPage);
  createPokeCardForPage(numberOfCardsToShowPerPage, 0);
  currentPage = 1;
  document.getElementById('currentPage').innerHTML = currentPage;
}

function nextPage() {
  if (currentPage !== Math.ceil(maxPokesInMyArray / numberOfCardsToShowPerPage)) {
    createPokeCardForPage(numberOfCardsToShowPerPage, numberOfCardsToShowPerPage * currentPage);
    currentPage += 1;
    document.getElementById('currentPage').innerHTML = `Pagina: ${currentPage} / ${maxPokesInMyArray} Pokemons to visit`;
  }
}
function previousPage() {
  if (currentPage !== 1) {
    createPokeCardForPage(numberOfCardsToShowPerPage, numberOfCardsToShowPerPage * (currentPage - 1));
    currentPage -= 1;
    document.getElementById('currentPage').innerHTML = `Pagina: ${currentPage} / ${maxPokesInMyArray} Pokemons to visit`;
  }
}

function addPokeToArray(data) {
  pokeArray.push(data);
  if (pokeArray.length === maxPokesInMyArray) {
    createPokeCardForPage(firstPokesToShow, 0);
  }
}

function getPokesFromApi() {
  if (pokeArray.length === 0) {
    for (let item = 1; item <= maxPokesInMyArray; item += 1) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${item}`)
        .then((response) => response.json())
        .then((data) => addPokeToArray(data));
    }
    // TODO crear catch error
  }
}
getPokesFromApi();
